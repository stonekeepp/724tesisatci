import type {
  BlogPost,
  ContentCluster,
  ExpertProfile,
  TechnicalReviewApproval,
  TechnicalReviewValidationResult,
} from "@/types";

/** Soft specialty keywords per content cluster (normalized substring match). */
export const CLUSTER_SPECIALTY_KEYWORDS: Record<ContentCluster, string[]> = {
  "su-kacagi": [
    "su tesisatı",
    "su tesisati",
    "sıhhi tesisat",
    "sihhi tesisat",
    "su kaçağı",
    "su kacagi",
    "kaçak tespit",
    "kacak tespit",
    "tesisat",
  ],
  tikaniklik: [
    "tıkanıklık",
    "tikaniklik",
    "gider",
    "pimaş",
    "pimas",
    "tıkanıklık açma",
    "tikaniklik acma",
    "gider ve tıkanıklık",
    "tesisat",
  ],
  isitma: [
    "kalorifer",
    "radyatör",
    "radyator",
    "petek",
    "kombi",
    "ısıtma",
    "isitma",
    "kombi bağlantı",
    "tesisat",
  ],
};

export type TechnicalReviewLookupOptions = {
  approvals?: TechnicalReviewApproval[];
  experts?: ExpertProfile[];
  /** Override "now" for deterministic date tests (ms since epoch). */
  nowMs?: number;
};

export type ReviewerEligibilityResult = {
  eligible: boolean;
  blockers: string[];
  warnings: string[];
};

function normalizeText(value: string): string {
  return value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export function getTechnicalReviewApproval(
  slug: string,
  options: TechnicalReviewLookupOptions = {}
): TechnicalReviewApproval | undefined {
  const approvals = options.approvals ?? [];
  return approvals.find((a) => a.slug === slug);
}

export function isExpertReviewIdentityEligible(expert: ExpertProfile): boolean {
  return (
    expert.verification?.identity === "verified" &&
    expert.verification?.writtenApproval === "verified"
  );
}

export function getVerifiedReviewerForApproval(
  approval: TechnicalReviewApproval,
  options: TechnicalReviewLookupOptions = {}
): ExpertProfile | undefined {
  const experts = options.experts ?? [];
  if (!approval.reviewerExpertId?.trim()) return undefined;
  return experts.find(
    (profile) =>
      profile.id === approval.reviewerExpertId &&
      isExpertReviewIdentityEligible(profile)
  );
}

export function parseReviewDate(value: string): Date | null {
  if (!value?.trim()) return null;
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return null;
  return parsed;
}

export function reviewerSpecialtyMatchesCluster(
  reviewer: ExpertProfile,
  cluster: ContentCluster | undefined
): boolean {
  if (!cluster) return false;
  const keywords = CLUSTER_SPECIALTY_KEYWORDS[cluster] ?? [];
  const specialties = (reviewer.specialties ?? []).map(normalizeText);
  const role = normalizeText(reviewer.role ?? "");
  const haystack = [...specialties, role];
  return keywords.some((keyword) => {
    const needle = normalizeText(keyword);
    return haystack.some((entry) => entry.includes(needle));
  });
}

/**
 * Eligibility for technical content review.
 * Credentials / experienceClaim gaps produce warnings, not blockers.
 */
export function evaluateReviewerEligibility(
  expert: ExpertProfile | undefined,
  post: BlogPost
): ReviewerEligibilityResult {
  const blockers: string[] = [];
  const warnings: string[] = [];

  if (!expert) {
    blockers.push("Verified reviewer is missing");
    return { eligible: false, blockers, warnings };
  }

  if (!expert.id?.trim()) {
    blockers.push("Reviewer expert ID is missing");
  }

  if (expert.verification?.identity !== "verified") {
    blockers.push("Reviewer identity is not verified");
  }
  if (expert.verification?.writtenApproval !== "verified") {
    blockers.push("Reviewer written approval is not verified");
  }

  if (post.cluster && !reviewerSpecialtyMatchesCluster(expert, post.cluster)) {
    blockers.push("Reviewer specialty does not match content cluster");
  }

  if (expert.verification?.experienceClaim !== "verified") {
    warnings.push(
      "Reviewer experience claim has not been independently verified."
    );
  }
  if (expert.verification?.credentials !== "verified") {
    warnings.push(
      "Reviewer professional credentials have not been independently verified."
    );
  }
  if (!(expert.credentials?.length || expert.certificates?.length)) {
    warnings.push("Reviewer credentials list is empty.");
  }

  return {
    eligible: blockers.length === 0,
    blockers,
    warnings,
  };
}

/**
 * Validates a technical approval record against a post and verified experts.
 * Does not mutate post status or review item statuses.
 */
export function validateTechnicalReviewApproval(
  post: BlogPost,
  approval: TechnicalReviewApproval,
  options: TechnicalReviewLookupOptions = {}
): TechnicalReviewValidationResult {
  const blockers: string[] = [];
  const warnings: string[] = [];
  const nowMs = options.nowMs ?? Date.now();
  const experts = options.experts ?? [];

  if (approval.slug !== post.slug) {
    blockers.push("Approval slug does not match content slug");
  }

  if (!approval.reviewerExpertId?.trim()) {
    blockers.push("Reviewer expert ID is missing");
  }

  const reviewer = experts.find((p) => p.id === approval.reviewerExpertId);
  const eligibility = evaluateReviewerEligibility(reviewer, post);
  warnings.push(...eligibility.warnings);
  for (const blocker of eligibility.blockers) {
    if (!blockers.includes(blocker)) blockers.push(blocker);
  }

  if (approval.decision !== "approved") {
    blockers.push(`Technical review decision is ${approval.decision}`);
  }

  const reviewedAt = parseReviewDate(approval.reviewedAt);
  if (!reviewedAt) {
    blockers.push("Review date is invalid");
  } else if (reviewedAt.getTime() > nowMs + 60_000) {
    blockers.push("Review date is in the future");
  }

  if (!approval.notes?.trim()) {
    blockers.push("Approval notes are missing");
  }

  const items = post.technicalReview?.items ?? [];
  if (items.length === 0) {
    blockers.push("Technical review checklist is missing");
  }

  const topicSet = new Set(items.map((item) => item.topic));
  const approvedTopics = approval.approvedItemTopics ?? [];
  const seenTopics = new Set<string>();

  for (const topic of approvedTopics) {
    if (seenTopics.has(topic)) {
      warnings.push(`Duplicate approved topic: ${topic}`);
      continue;
    }
    seenTopics.add(topic);
    if (!topicSet.has(topic)) {
      blockers.push(`Unknown approved topic: ${topic}`);
    }
  }

  for (const item of items) {
    if (!seenTopics.has(item.topic)) {
      blockers.push(`Technical review topic not approved: ${item.topic}`);
    }
  }

  return {
    valid: blockers.length === 0,
    blockers,
    warnings,
  };
}

export function isTechnicalReviewApproved(
  post: BlogPost,
  options: TechnicalReviewLookupOptions = {}
): boolean {
  const approval = getTechnicalReviewApproval(post.slug, options);
  if (!approval) return false;
  return validateTechnicalReviewApproval(post, approval, options).valid;
}
