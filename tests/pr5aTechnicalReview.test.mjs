import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { describe, it } from "node:test";
import { draftBlogPosts as suKacagiDrafts } from "../data/mock/blogDrafts.su-kacagi.ts";
import { draftBlogPostsTikaniklik } from "../data/mock/blogDrafts.tikaniklik.ts";
import { draftBlogPostsIsitma } from "../data/mock/blogDrafts.isitma.ts";
import { blogTechnicalReviewApprovals } from "../data/mock/blogTechnicalReviewApprovals.ts";
import { expertProfiles } from "../data/mock/experts.ts";
import {
  isPilotPublicationCandidate,
  pilotPublicationCandidateSlugs,
} from "../data/mock/pilotPublicationCandidates.ts";
import {
  evaluateBlogPublicationReadiness,
  toPublicBlogPost,
} from "../lib/utils/publication.ts";
import {
  getTechnicalReviewApproval,
  isTechnicalReviewApproved,
  validateTechnicalReviewApproval,
} from "../lib/utils/technicalReview.ts";

const emptyReviewCatalog = {
  approvals: blogTechnicalReviewApprovals,
  experts: expertProfiles,
};

const serviceSlugs = [
  ...fs
    .readFileSync(path.join(process.cwd(), "data/mock/services.ts"), "utf8")
    .matchAll(/\bslug:\s*"([^"]+)"/g),
].map((m) => m[1]);

const draftBlogPosts = [
  ...suKacagiDrafts,
  ...draftBlogPostsTikaniklik,
  ...draftBlogPostsIsitma,
];

const pilots = draftBlogPosts.filter((p) =>
  isPilotPublicationCandidate(p.slug)
);

function makeExpert(overrides = {}) {
  return {
    id: "expert-test-verified",
    name: "Test Verified Expert",
    role: "su tesisatı uzmanı",
    specialties: ["su kaçağı tespiti", "su tesisatı"],
    verification: {
      identity: /** @type {const} */ ("verified"),
      writtenApproval: /** @type {const} */ ("verified"),
      experienceClaim: /** @type {const} */ ("needs-verification"),
      credentials: /** @type {const} */ ("needs-verification"),
    },
    credentials: [],
    ...overrides,
  };
}

function makeApproval(post, overrides = {}) {
  return {
    slug: post.slug,
    reviewerExpertId: "expert-test-verified",
    reviewedAt: "2026-07-20T10:00:00+03:00",
    decision: /** @type {const} */ ("approved"),
    approvedItemTopics: (post.technicalReview?.items ?? []).map((i) => i.topic),
    notes: "Gerçek saha incelemesi notu (sentetik test).",
    evidenceReferences: [],
    ...overrides,
  };
}

describe("PR-5A pilot candidates", () => {
  it("has exactly three unique pilot draft slugs across clusters", () => {
    assert.equal(pilotPublicationCandidateSlugs.length, 3);
    assert.equal(new Set(pilotPublicationCandidateSlugs).size, 3);
    assert.equal(pilots.length, 3);
    for (const slug of pilotPublicationCandidateSlugs) {
      const post = draftBlogPosts.find((p) => p.slug === slug);
      assert.ok(post, slug);
      assert.equal(post.needsTechnicalReview, false);
    }
    const clusters = new Set(pilots.map((p) => p.cluster));
    assert.deepEqual([...clusters].sort(), ["isitma", "su-kacagi", "tikaniklik"]);
  });
});

describe("PR-5A approval absence", () => {
  it("documents empty-catalog baseline helpers still work with live data present", () => {
    // Live catalog may contain approvals after PR-5B; empty options remain blocked.
    for (const post of pilots) {
      assert.equal(
        getTechnicalReviewApproval(post.slug, { approvals: [], experts: [] }),
        undefined
      );
      assert.equal(
        isTechnicalReviewApproved(post, { approvals: [], experts: [] }),
        false
      );
      const readiness = evaluateBlogPublicationReadiness(post, {
        allPosts: draftBlogPosts,
        serviceSlugs,
        approvals: [],
        experts: [],
      });
      assert.equal(readiness.ready, false);
    }
  });
});

describe("PR-5A invalid reviewer", () => {
  it("rejects missing, unverified, empty, and specialty-mismatched reviewers", () => {
    const post = pilots[0];
    const base = makeApproval(post);

    const missing = validateTechnicalReviewApproval(post, base, {
      experts: [],
      nowMs: new Date("2026-07-22T12:00:00+03:00").getTime(),
    });
    assert.equal(missing.valid, false);
    assert.ok(missing.blockers.some((b) => /Verified reviewer is missing/i.test(b)));

    const unverified = validateTechnicalReviewApproval(post, base, {
      experts: [
        makeExpert({
          verification: {
            identity: /** @type {const} */ ("needs-verification"),
            writtenApproval: /** @type {const} */ ("needs-verification"),
            experienceClaim: /** @type {const} */ ("needs-verification"),
            credentials: /** @type {const} */ ("needs-verification"),
          },
        }),
      ],
      nowMs: new Date("2026-07-22T12:00:00+03:00").getTime(),
    });
    assert.equal(unverified.valid, false);
    assert.ok(
      unverified.blockers.some((b) =>
        /identity is not verified|written approval is not verified/i.test(b)
      )
    );

    const emptyId = validateTechnicalReviewApproval(
      post,
      { ...base, reviewerExpertId: "" },
      {
        experts: [makeExpert()],
        nowMs: new Date("2026-07-22T12:00:00+03:00").getTime(),
      }
    );
    assert.equal(emptyId.valid, false);
    assert.ok(emptyId.blockers.some((b) => /Reviewer expert ID is missing/i.test(b)));

    const mismatch = validateTechnicalReviewApproval(post, base, {
      experts: [
        makeExpert({
          role: "pazarlama",
          specialties: ["sosyal medya"],
        }),
      ],
      nowMs: new Date("2026-07-22T12:00:00+03:00").getTime(),
    });
    assert.equal(mismatch.valid, false);
    assert.ok(
      mismatch.blockers.some((b) => /specialty does not match/i.test(b))
    );
  });
});

describe("PR-5A approval topic validation", () => {
  it("requires full topic coverage and rejects unknown topics", () => {
    const post = pilots[0];
    const topics = (post.technicalReview?.items ?? []).map((i) => i.topic);
    const expert = makeExpert();
    const nowMs = new Date("2026-07-22T12:00:00+03:00").getTime();

    const missingTopic = validateTechnicalReviewApproval(
      post,
      makeApproval(post, { approvedItemTopics: topics.slice(0, 1) }),
      { experts: [expert], nowMs }
    );
    assert.equal(missingTopic.valid, false);
    assert.ok(
      missingTopic.blockers.some((b) => /topic not approved/i.test(b))
    );

    const unknown = validateTechnicalReviewApproval(
      post,
      makeApproval(post, {
        approvedItemTopics: [...topics, "Bilinmeyen konu"],
      }),
      { experts: [expert], nowMs }
    );
    assert.equal(unknown.valid, false);
    assert.ok(unknown.blockers.some((b) => /Unknown approved topic/i.test(b)));

    const duplicate = validateTechnicalReviewApproval(
      post,
      makeApproval(post, {
        approvedItemTopics: [...topics, topics[0]],
      }),
      { experts: [expert], nowMs }
    );
    assert.equal(duplicate.valid, true);
    assert.ok(
      duplicate.warnings.some((w) => /Duplicate approved topic/i.test(w))
    );

    const full = validateTechnicalReviewApproval(
      post,
      makeApproval(post),
      { experts: [expert], nowMs }
    );
    assert.equal(full.valid, true, full.blockers.join("; "));
  });
});

describe("PR-5A review date validation", () => {
  it("rejects invalid and future dates", () => {
    const post = pilots[0];
    const expert = makeExpert();
    const nowMs = new Date("2026-07-22T12:00:00+03:00").getTime();

    const invalid = validateTechnicalReviewApproval(
      post,
      makeApproval(post, { reviewedAt: "not-a-date" }),
      { experts: [expert], nowMs }
    );
    assert.equal(invalid.valid, false);
    assert.ok(invalid.blockers.some((b) => /Review date is invalid/i.test(b)));

    const future = validateTechnicalReviewApproval(
      post,
      makeApproval(post, { reviewedAt: "2026-08-01T10:00:00+03:00" }),
      { experts: [expert], nowMs }
    );
    assert.equal(future.valid, false);
    assert.ok(future.blockers.some((b) => /future/i.test(b)));

    const ok = validateTechnicalReviewApproval(
      post,
      makeApproval(post, { reviewedAt: "2026-07-22T12:00:00+03:00" }),
      { experts: [expert], nowMs }
    );
    assert.equal(ok.valid, true, ok.blockers.join("; "));
  });
});

describe("PR-5A publication readiness for pilots", () => {
  it("keeps empty-catalog pilots blocked on approval/reviewer", () => {
    for (const post of pilots) {
      const result = evaluateBlogPublicationReadiness(post, {
        allPosts: draftBlogPosts,
        serviceSlugs,
        approvals: [],
        experts: [],
      });
      assert.equal(result.ready, false);
      assert.ok(
        result.blockers.some((b) => /Technical review approval is missing/i.test(b))
      );
      assert.ok(
        result.blockers.some((b) => /Verified reviewer is missing/i.test(b))
      );
    }
  });

  it("can become ready only with published + verified approval path without mutating", () => {
    const source = pilots.find((p) => p.cluster === "su-kacagi");
    assert.ok(source);
    const expert = makeExpert();
    const approval = makeApproval(
      { ...source, slug: "synthetic-pilot-ready" },
      { slug: "synthetic-pilot-ready" }
    );
    const synthetic = {
      ...source,
      slug: "synthetic-pilot-ready",
      status: /** @type {const} */ ("published"),
      needsTechnicalReview: false,
      technicalReview: {
        items: (source.technicalReview?.items ?? []).map((item) => ({
          ...item,
          status: /** @type {const} */ ("verified"),
        })),
      },
      relatedArticleSlugs: [],
    };
    const before = synthetic.status;
    const result = evaluateBlogPublicationReadiness(synthetic, {
      allPosts: [...draftBlogPosts, synthetic],
      serviceSlugs,
      experts: [expert],
      approvals: [approval],
      nowMs: new Date("2026-07-22T12:00:00+03:00").getTime(),
    });
    assert.equal(result.ready, true, result.blockers.join("; "));
    assert.ok(
      result.warnings.some((w) =>
        /credentials have not been independently verified/i.test(w)
      )
    );
    assert.equal(synthetic.status, before);
  });
});

describe("PR-5A public API field protection", () => {
  it("strips internal review and approval fields", () => {
    const post = {
      ...pilots[0],
      technicalReviewApproval: makeApproval(pilots[0]),
      reviewerExpertId: "secret-id",
      publicationBlockers: ["x"],
      verificationStatus: "verified",
      verification: {
        identity: "verified",
        writtenApproval: "verified",
        experienceClaim: "needs-verification",
        credentials: "needs-verification",
      },
      credentials: [{ name: "secret-cred", verificationStatus: "verified" }],
      internalNotes: "secret",
      evidenceReferences: ["ref"],
    };
    const publicPost = toPublicBlogPost(/** @type {any} */ (post));
    for (const key of [
      "needsTechnicalReview",
      "technicalReview",
      "technicalReviewApproval",
      "reviewerExpertId",
      "publicationBlockers",
      "verificationStatus",
      "verification",
      "credentials",
      "internalNotes",
      "evidenceReferences",
      "authorId",
      "reviewerId",
    ]) {
      assert.equal(key in publicPost, false, key);
    }
    assert.equal(publicPost.slug, post.slug);
    assert.ok(publicPost.content);
  });
});
