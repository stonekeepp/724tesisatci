import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { describe, it } from "node:test";
import { draftBlogPosts as suKacagiDrafts } from "../data/mock/blogDrafts.su-kacagi.ts";
import { draftBlogPostsTikaniklik } from "../data/mock/blogDrafts.tikaniklik.ts";
import { draftBlogPostsIsitma } from "../data/mock/blogDrafts.isitma.ts";
import { blogTechnicalReviewApprovals } from "../data/mock/blogTechnicalReviewApprovals.ts";
import {
  expertProfiles,
  getCredentialVerifiedExperts,
  getVerifiedExperts,
} from "../data/mock/experts.ts";
import { pilotPublicationCandidateSlugs } from "../data/mock/pilotPublicationCandidates.ts";
import {
  evaluateBlogPublicationReadiness,
  isPublishedContent,
  toPublicBlogPost,
} from "../lib/utils/publication.ts";
import {
  evaluateReviewerEligibility,
  isTechnicalReviewApproved,
  validateTechnicalReviewApproval,
} from "../lib/utils/technicalReview.ts";

const serviceSlugs = [
  ...fs
    .readFileSync(path.join(process.cwd(), "data/mock/services.ts"), "utf8")
    .matchAll(/\bslug:\s*"([^"]+)"/g),
].map((m) => m[1]);

const posts = [
  ...suKacagiDrafts,
  ...draftBlogPostsTikaniklik,
  ...draftBlogPostsIsitma,
];

const pilots = posts.filter((p) =>
  pilotPublicationCandidateSlugs.includes(p.slug)
);
const mucahit = expertProfiles.find((e) => e.id === "mucahit-korkmaz");
const catalog = {
  approvals: blogTechnicalReviewApprovals,
  experts: expertProfiles,
  nowMs: new Date("2026-08-26T18:00:00+03:00").getTime(),
};

describe("PR-5B reviewer profile", () => {
  it("stores Mucahit Korkmaz with separated verification dimensions", () => {
    assert.equal(expertProfiles.length, 1);
    assert.ok(mucahit);
    assert.equal(mucahit.verification.identity, "verified");
    assert.equal(mucahit.verification.writtenApproval, "verified");
    assert.equal(mucahit.verification.experienceClaim, "needs-verification");
    assert.equal(mucahit.verification.credentials, "needs-verification");
    assert.equal((mucahit.credentials ?? []).length, 0);
    assert.equal(getVerifiedExperts().length, 1);
    assert.equal(getCredentialVerifiedExperts().length, 0);
  });
});

describe("PR-5B reviewer eligibility", () => {
  it("allows identity+written approval while warning on credentials", () => {
    for (const post of pilots) {
      const result = evaluateReviewerEligibility(mucahit, post);
      assert.equal(result.eligible, true, result.blockers.join("; "));
      assert.ok(
        result.warnings.some((w) =>
          /credentials have not been independently verified/i.test(w)
        )
      );
    }
  });
});

describe("PR-5B approval records", () => {
  it("has eleven valid topical approvals", () => {
    assert.equal(blogTechnicalReviewApprovals.length, 11);
    const slugs = blogTechnicalReviewApprovals.map((a) => a.slug);
    assert.equal(new Set(slugs).size, 11);
    for (const slug of [
      ...pilotPublicationCandidateSlugs,
      "robotla-tikaniklik-acma-ile-pimas-yikama-farki",
      "birden-fazla-gider-ayni-anda-neden-yavaslar",
      "alt-kata-su-sizmasinin-kaynagi-nasil-bulunur",
      "duvar-nemi-su-kacagi-mi-yogusma-mi",
      "kombi-basinci-neden-surekli-duser",
      "kombi-arizasi-ile-tesisat-arizasi-nasil-ayirt-edilir",
      "musluk-neden-damlar",
      "rezervuar-neden-su-akiyor",
    ]) {
      assert.ok(slugs.includes(slug), slug);
    }
    for (const approval of blogTechnicalReviewApprovals) {
      assert.equal(approval.reviewerExpertId, "mucahit-korkmaz");
      assert.equal(approval.decision, "approved");
      assert.ok(approval.notes.trim());
      const post = posts.find((p) => p.slug === approval.slug);
      assert.ok(post);
      const validation = validateTechnicalReviewApproval(post, approval, catalog);
      assert.equal(validation.valid, true, validation.blockers.join("; "));
      assert.equal(isTechnicalReviewApproved(post, catalog), true);
    }
  });
});

describe("PR-5B technical review items", () => {
  it("verifies all topical guides as published", () => {
    const published = posts.filter((p) => p.status === "published");
    assert.equal(published.length, 11);
    for (const post of published) {
      assert.equal(post.needsTechnicalReview, false);
      assert.ok((post.technicalReview?.items ?? []).length > 0);
      assert.ok(
        (post.technicalReview?.items ?? []).every((i) => i.status === "verified")
      );
    }
    const drafts = posts.filter((p) => p.status === "draft");
    assert.equal(drafts.length, 0);
  });
});

describe("PR-5B publication split", () => {
  it("publishes eleven approved topical guides including three pilots", () => {
    const published = posts.filter((p) => p.status === "published");
    assert.equal(published.length, 11);
    const publishedSlugs = new Set(published.map((p) => p.slug));
    for (const slug of pilotPublicationCandidateSlugs) {
      assert.ok(publishedSlugs.has(slug), slug);
    }
    assert.equal(pilots.filter((p) => p.status === "draft").length, 0);

    for (const post of published) {
      assert.equal(isPublishedContent(post), true);
      const readyPublished = evaluateBlogPublicationReadiness(post, {
        allPosts: posts,
        serviceSlugs,
        ...catalog,
      });
      assert.equal(
        readyPublished.ready,
        true,
        `${post.slug}: ${readyPublished.blockers.join("; ")}`
      );
      assert.ok(
        readyPublished.warnings.some((w) =>
          /credentials have not been independently verified/i.test(w)
        )
      );
    }
  });
});

describe("PR-5B public field safety", () => {
  it("strips credentials and verification from public DTO", () => {
    const post = posts.find(
      (p) => p.slug === "musluklar-kapaliyken-su-sayaci-neden-doner"
    );
    assert.ok(post);
    const publicPost = toPublicBlogPost(post);
    for (const key of [
      "technicalReview",
      "needsTechnicalReview",
      "reviewerId",
      "verification",
      "credentials",
      "internalNotes",
      "evidenceReferences",
    ]) {
      assert.equal(key in publicPost, false, key);
    }
    assert.equal(publicPost.slug, post.slug);
    assert.ok(String(publicPost.content || "").length > 0);
  });
});
