import type {
  BlogPost,
  PublicationReadinessResult,
  PublicationStatus,
} from "@/types";
import {
  getTechnicalReviewApproval,
  isTechnicalReviewApproved,
  validateTechnicalReviewApproval,
  type TechnicalReviewLookupOptions,
} from "./technicalReview.ts";

/**
 * Legacy content without `status` is treated as published.
 * New content must set `draft` | `published` | `archived` explicitly.
 * Never treat a missing status as draft.
 */
export function isPublishedContent(content: {
  status?: PublicationStatus;
}): boolean {
  return !content.status || content.status === "published";
}

/** Public visibility gate — separate from editorial readiness. */
export function isPubliclyVisiblePost(post: {
  status?: PublicationStatus;
}): boolean {
  return isPublishedContent(post);
}

export type PublicationReadinessOptions = TechnicalReviewLookupOptions & {
  /** Full catalog for related-article / duplicate-slug checks. */
  allPosts?: BlogPost[];
  /** Known service slugs for related-service validation. */
  serviceSlugs?: Iterable<string>;
};

/**
 * Editorial publication readiness for topical guides.
 * Does NOT mutate status. Missing technical approval keeps ready=false.
 * Pass `approvals` and `experts` from mock catalogs when evaluating live data.
 */
export function evaluateBlogPublicationReadiness(
  post: BlogPost,
  options: PublicationReadinessOptions = {}
): PublicationReadinessResult {
  const blockers: string[] = [];
  const warnings: string[] = [];
  const allPosts = options.allPosts ?? [];
  const serviceSet = options.serviceSlugs
    ? new Set(options.serviceSlugs)
    : null;
  const reviewOptions: TechnicalReviewLookupOptions = {
    approvals: options.approvals ?? [],
    experts: options.experts ?? [],
    nowMs: options.nowMs,
  };

  if (post.status !== "published") {
    blockers.push("Content status is draft");
  }

  if (post.needsTechnicalReview === true) {
    blockers.push("Technical review is still required");
  }

  const items = post.technicalReview?.items ?? [];
  if (post.needsTechnicalReview && items.length === 0) {
    blockers.push("Technical review checklist is missing");
  }
  for (const item of items) {
    if (item.status === "pending") {
      blockers.push(`Technical review pending: ${item.topic}`);
    }
    if (item.status === "revision-required") {
      blockers.push(`Technical review revision required: ${item.topic}`);
    }
  }

  const approval = getTechnicalReviewApproval(post.slug, reviewOptions);
  if (!approval) {
    blockers.push("Technical review approval is missing");
    blockers.push("Verified reviewer is missing");
  } else {
    const validation = validateTechnicalReviewApproval(
      post,
      approval,
      reviewOptions
    );
    warnings.push(...validation.warnings);
    if (!validation.valid) {
      if (
        !validation.blockers.some((b) =>
          /approval is missing|Verified reviewer/i.test(b)
        )
      ) {
        blockers.push("Technical review approval is invalid");
      }
      for (const blocker of validation.blockers) {
        if (!blockers.includes(blocker)) blockers.push(blocker);
      }
    } else if (!isTechnicalReviewApproved(post, reviewOptions)) {
      blockers.push("Technical review approval is invalid");
    } else {
      // Eligible approval may still carry credential/experience warnings.
      const reviewerWarnings = validation.warnings.filter((w) =>
        /credentials|experience claim/i.test(w)
      );
      for (const warning of reviewerWarnings) {
        if (!warnings.includes(warning)) warnings.push(warning);
      }
      if (
        !warnings.some((w) =>
          /credentials have not been independently verified/i.test(w)
        )
      ) {
        // Ensure credential gap is visible in readiness audit when reviewer is eligible
        const expert = reviewOptions.experts?.find(
          (e) => e.id === approval.reviewerExpertId
        );
        if (expert?.verification?.credentials !== "verified") {
          warnings.push(
            "Reviewer professional credentials have not been independently verified."
          );
        }
      }
    }
  }

  if (!post.seoTitle?.trim()) blockers.push("SEO title is missing");
  if (!post.seoDescription?.trim()) blockers.push("Meta description is missing");
  if (!post.excerpt?.trim()) blockers.push("Excerpt is missing");
  if (!post.cluster) blockers.push("Cluster is missing");
  if (!post.searchIntent) blockers.push("Search intent is missing");
  if (!post.primaryKeyword?.trim()) blockers.push("Primary keyword is missing");
  if (!post.content?.trim()) blockers.push("Content body is missing");

  const relatedServiceSlugs = [
    ...(post.relatedServices ?? []),
    ...(post.relatedServiceSlugs ?? []),
  ];
  if (relatedServiceSlugs.length === 0) {
    blockers.push("Related service is missing");
  }

  const faqCount = post.faq?.length ?? 0;
  if (faqCount < 3) {
    blockers.push("FAQ count is below minimum");
  } else if (faqCount < 4) {
    warnings.push("FAQ count below recommended 4–6");
  }

  const wordCount = post.content.trim().split(/\s+/).filter(Boolean).length;
  if (wordCount < 700) {
    blockers.push("Content word count below minimum (700)");
  } else if (wordCount < 900) {
    warnings.push("Content word count below preferred 900–1400 target");
  }

  if (serviceSet) {
    for (const slug of relatedServiceSlugs) {
      if (!serviceSet.has(slug)) {
        blockers.push(`Invalid related service slug: ${slug}`);
      }
    }
  }

  if (allPosts.length > 0) {
    const articleSet = new Set(allPosts.map((p) => p.slug));
    const seenArticles = new Set<string>();
    for (const slug of post.relatedArticleSlugs ?? []) {
      if (slug === post.slug) {
        blockers.push("Self-referencing related article");
      }
      if (seenArticles.has(slug)) {
        blockers.push(`Duplicate related article slug: ${slug}`);
      }
      seenArticles.add(slug);
      if (!articleSet.has(slug)) {
        blockers.push(`Invalid related article slug: ${slug}`);
      }
    }
    const slugDupes = allPosts.filter((p) => p.slug === post.slug);
    if (slugDupes.length > 1) {
      blockers.push("Duplicate slug in catalog");
    }
  }

  return {
    ready: blockers.length === 0,
    blockers,
    warnings,
  };
}

const PUBLIC_BLOG_STRIP_KEYS = [
  "needsTechnicalReview",
  "technicalReview",
  "technicalReviewApproval",
  "reviewerExpertId",
  "publicationBlockers",
  "verificationStatus",
  "verification",
  "credentials",
  "certificates",
  "internalNotes",
  "evidenceReferences",
  "authorId",
  "reviewerId",
] as const;

/**
 * Strip internal review / approval fields before public API responses.
 */
export function toPublicBlogPost(
  post: BlogPost
): Record<string, unknown> {
  const publicPost: Record<string, unknown> = { ...post };
  for (const key of PUBLIC_BLOG_STRIP_KEYS) {
    delete publicPost[key];
  }
  return publicPost;
}
