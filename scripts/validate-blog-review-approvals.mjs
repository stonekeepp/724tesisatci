#!/usr/bin/env node
/**
 * Validates blog technical-review approval records.
 * Empty approval list is a valid PR-5A state (warnings only).
 * Malformed / fake-structure approvals fail the script.
 */
import { pathToFileURL } from "node:url";
import path from "node:path";

const root = process.cwd();

async function load(rel) {
  return import(pathToFileURL(path.join(root, rel)).href);
}

async function main() {
  const { blogTechnicalReviewApprovals } = await load(
    "data/mock/blogTechnicalReviewApprovals.ts"
  );
  const { expertProfiles } = await load("data/mock/experts.ts");
  const { pilotPublicationCandidateSlugs } = await load(
    "data/mock/pilotPublicationCandidates.ts"
  );
  const { draftBlogPosts: su } = await load(
    "data/mock/blogDrafts.su-kacagi.ts"
  );
  const { draftBlogPostsTikaniklik: ti } = await load(
    "data/mock/blogDrafts.tikaniklik.ts"
  );
  const { draftBlogPostsIsitma: is } = await load(
    "data/mock/blogDrafts.isitma.ts"
  );
  const {
    validateTechnicalReviewApproval,
    isTechnicalReviewApproved,
  } = await load("lib/utils/technicalReview.ts");

  const posts = [...su, ...ti, ...is];
  const postBySlug = new Map(posts.map((p) => [p.slug, p]));
  const pilotSet = new Set(pilotPublicationCandidateSlugs);

  /** @type {string[]} */
  const errors = [];
  /** @type {string[]} */
  const warnings = [];

  const approvals = blogTechnicalReviewApprovals ?? [];
  if (!Array.isArray(approvals)) {
    errors.push("blogTechnicalReviewApprovals is not an array");
  }

  const slugCounts = new Map();
  for (const approval of approvals) {
    if (!approval || typeof approval !== "object") {
      errors.push("approval_entry_not_object");
      continue;
    }
    const required = [
      "slug",
      "reviewerExpertId",
      "reviewedAt",
      "decision",
      "approvedItemTopics",
      "notes",
    ];
    for (const key of required) {
      if (!(key in approval)) {
        errors.push(`approval_missing_field:${key}`);
      }
    }

    slugCounts.set(approval.slug, (slugCounts.get(approval.slug) || 0) + 1);

    if (!postBySlug.has(approval.slug)) {
      errors.push(`approval_unknown_slug:${approval.slug}`);
    }
    // Non-pilot approvals are allowed for weekly topical publishes beyond the
    // original three PR-5B pilots; unknown slugs are still rejected above.
    const post = postBySlug.get(approval.slug);
    if (post) {
      const result = validateTechnicalReviewApproval(post, approval, {
        experts: expertProfiles,
        approvals,
      });
      if (!result.valid) {
        for (const b of result.blockers) {
          errors.push(`${approval.slug}:${b}`);
        }
      }
    }
  }

  for (const [slug, count] of slugCounts) {
    if (count > 1) errors.push(`duplicate_approval_slug:${slug}`);
  }

  if (approvals.length === 0) {
    warnings.push("no_approval_records_yet");
    for (const slug of pilotPublicationCandidateSlugs) {
      warnings.push(`missing_pilot_approval:${slug}`);
    }
  }

  const validApprovals = approvals.filter((approval) => {
    const post = postBySlug.get(approval.slug);
    if (!post) return false;
    return validateTechnicalReviewApproval(post, approval, {
      experts: expertProfiles,
      approvals,
    }).valid;
  });

  const publicationApproved = posts.filter((post) =>
    isTechnicalReviewApproved(post, {
      experts: expertProfiles,
      approvals,
    })
  );

  console.log(`APPROVAL_RECORD_COUNT=${approvals.length}`);
  console.log(`VALID_APPROVAL_COUNT=${validApprovals.length}`);
  console.log(
    `PUBLICATION_APPROVED_POST_COUNT=${publicationApproved.length}`
  );
  console.log(`WARNING_COUNT=${warnings.length}`);
  for (const w of warnings) console.log(`WARN ${w}`);

  if (errors.length > 0) {
    console.error(`ERROR_COUNT=${errors.length}`);
    for (const e of errors) console.error(`ERROR ${e}`);
    process.exit(1);
  }

  console.log("review:validate OK");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
