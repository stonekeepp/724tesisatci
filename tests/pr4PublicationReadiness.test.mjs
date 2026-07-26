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
  evaluateBlogPublicationReadiness,
  isPublishedContent,
  isPubliclyVisiblePost,
  toPublicBlogPost,
} from "../lib/utils/publication.ts";

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

const PR4_DRAFT_SLUGS = [
  "musluklar-kapaliyken-su-sayaci-neden-doner",
  "alt-kata-su-sizmasinin-kaynagi-nasil-bulunur",
  "duvar-nemi-su-kacagi-mi-yogusma-mi",
  "tikaniklik-acildiktan-sonra-neden-tekrar-eder",
  "robotla-tikaniklik-acma-ile-pimas-yikama-farki",
  "birden-fazla-gider-ayni-anda-neden-yavaslar",
  "kombi-basinci-neden-surekli-duser",
  "petegin-alti-soguk-ustu-sicaksa-ne-yapilmali",
  "kombi-arizasi-ile-tesisat-arizasi-nasil-ayirt-edilir",
];

function wordCount(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function headingCount(text) {
  return (text.match(/^##\s+/gm) ?? []).length;
}

describe("PR-4 draft data integrity", () => {
  it("has nine unique draft slugs", () => {
    assert.equal(draftBlogPosts.length, 9);
    const slugs = draftBlogPosts.map((p) => p.slug);
    assert.equal(new Set(slugs).size, 9);
    for (const slug of PR4_DRAFT_SLUGS) {
      assert.ok(slugs.includes(slug), slug);
    }
  });

  it("keeps draft status and technical review flags", () => {
    for (const post of draftBlogPosts) {
      assert.ok(post.cluster);
      assert.ok(post.searchIntent);
      assert.ok(post.primaryKeyword?.trim());
      const servicesForPost = [
        ...(post.relatedServices ?? []),
        ...(post.relatedServiceSlugs ?? []),
      ];
      assert.ok(servicesForPost.length > 0, post.slug);
      assert.ok(post.technicalReview?.items?.length >= 2, post.slug);
      if (
        [
          "musluklar-kapaliyken-su-sayaci-neden-doner",
          "tikaniklik-acildiktan-sonra-neden-tekrar-eder",
          "petegin-alti-soguk-ustu-sicaksa-ne-yapilmali",
        ].includes(post.slug)
      ) {
        assert.equal(post.needsTechnicalReview, false);
        for (const item of post.technicalReview.items) {
          assert.equal(item.status, "verified", `${post.slug}:${item.topic}`);
        }
        continue;
      }
      assert.equal(post.status, "draft");
      assert.equal(post.needsTechnicalReview, true);
      for (const item of post.technicalReview.items) {
        assert.equal(item.status, "pending", `${post.slug}:${item.topic}`);
      }
    }
  });
});

describe("PR-4 content depth", () => {
  it("meets minimum body, heading and FAQ depth", () => {
    for (const post of draftBlogPosts) {
      assert.ok(post.content?.trim(), post.slug);
      assert.ok(wordCount(post.content) >= 700, `${post.slug} words`);
      assert.ok(headingCount(post.content) >= 5, `${post.slug} headings`);
      assert.ok((post.faq?.length ?? 0) >= 4, `${post.slug} faq`);
      assert.ok(post.excerpt?.trim(), post.slug);
      assert.ok(post.seoTitle?.trim(), post.slug);
      assert.ok(post.seoDescription?.trim(), post.slug);
    }
  });
});

describe("PR-4 publication readiness", () => {
  it("blocks all nine drafts", () => {
    for (const post of draftBlogPosts) {
      const result = evaluateBlogPublicationReadiness(post, {
        allPosts: draftBlogPosts,
        serviceSlugs,
        approvals: blogTechnicalReviewApprovals,
        experts: expertProfiles,
      });
      if (post.slug === "musluklar-kapaliyken-su-sayaci-neden-doner") {
        assert.equal(result.ready, true, result.blockers.join("; "));
        continue;
      }
      assert.equal(result.ready, false, post.slug);
      if (post.status !== "published") {
        assert.ok(
          result.blockers.some((b) => /draft/i.test(b)),
          `${post.slug} missing draft blocker`
        );
      }
    }
  });

  it("returns ready for a synthetic fully approved post without mutating status", () => {
    const topics = (draftBlogPosts[0].technicalReview?.items ?? []).map(
      (i) => i.topic
    );
    const expert = {
      id: "expert-synthetic-ready",
      name: "Synthetic Verified Expert",
      role: "su tesisatı uzmanı",
      specialties: ["su kaçağı tespiti", "su tesisatı"],
      verification: {
        identity: /** @type {const} */ ("verified"),
        writtenApproval: /** @type {const} */ ("verified"),
        experienceClaim: /** @type {const} */ ("needs-verification"),
        credentials: /** @type {const} */ ("needs-verification"),
      },
      credentials: [],
    };
    const approval = {
      slug: "synthetic-ready-post",
      reviewerExpertId: expert.id,
      reviewedAt: "2026-07-20T10:00:00+03:00",
      decision: /** @type {const} */ ("approved"),
      approvedItemTopics: topics,
      notes: "Synthetic approval for readiness unit test only.",
    };
    const synthetic = {
      ...draftBlogPosts[0],
      id: "synthetic-ready",
      slug: "synthetic-ready-post",
      status: /** @type {const} */ ("published"),
      needsTechnicalReview: false,
      technicalReview: {
        items: (draftBlogPosts[0].technicalReview?.items ?? []).map((item) => ({
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
    assert.equal(synthetic.status, before);
    assert.equal(isPublishedContent(synthetic), true);
    assert.equal(isPubliclyVisiblePost(synthetic), true);
  });
});

describe("PR-4 public API field stripping", () => {
  it("removes internal review fields from public DTO", () => {
    const post = draftBlogPosts[0];
    const publicPost = toPublicBlogPost(post);
    assert.equal("needsTechnicalReview" in publicPost, false);
    assert.equal("technicalReview" in publicPost, false);
    assert.equal("authorId" in publicPost, false);
    assert.equal("reviewerId" in publicPost, false);
    assert.equal(publicPost.slug, post.slug);
    assert.equal(publicPost.content, post.content);
  });
});

describe("PR-4 internal links", () => {
  it("validates related service and article slugs", () => {
    const serviceSet = new Set(serviceSlugs);
    const articleSet = new Set(draftBlogPosts.map((p) => p.slug));
    for (const post of draftBlogPosts) {
      for (const slug of [
        ...(post.relatedServices ?? []),
        ...(post.relatedServiceSlugs ?? []),
      ]) {
        assert.ok(serviceSet.has(slug), `${post.slug}->svc:${slug}`);
      }
      const seen = new Set();
      for (const slug of post.relatedArticleSlugs ?? []) {
        assert.notEqual(slug, post.slug, `self ${post.slug}`);
        assert.equal(seen.has(slug), false, `dup ${post.slug}:${slug}`);
        seen.add(slug);
        assert.ok(articleSet.has(slug), `${post.slug}->article:${slug}`);
      }
    }
  });
});

describe("PR-4 duplicate content candidates", () => {
  it("keeps unique titles, descriptions, excerpts and FAQ questions", () => {
    const titles = draftBlogPosts.map((p) => p.seoTitle);
    const descs = draftBlogPosts.map((p) => p.seoDescription);
    const excerpts = draftBlogPosts.map((p) => p.excerpt);
    const intros = draftBlogPosts.map((p) => {
      const parts = p.content.split(/\n##\s+/);
      const firstBody = (parts[1] ?? parts[0] ?? "").trim().slice(0, 280);
      return firstBody;
    });
    const conclusions = draftBlogPosts.map((p) => {
      const match = p.content.match(/##\s+[^\n]*[Ss]onuç[^\n]*\n([\s\S]*?)(?=\n##\s+|$)/);
      return (match?.[1] ?? "").trim().slice(0, 280);
    });
    const faqs = draftBlogPosts.flatMap((p) => p.faq.map((f) => f.question));
    assert.equal(new Set(titles).size, titles.length);
    assert.equal(new Set(descs).size, descs.length);
    assert.equal(new Set(excerpts).size, excerpts.length);
    assert.equal(new Set(intros).size, intros.length);
    assert.ok(
      conclusions.every((c) => c.length > 0),
      "each draft should have a conclusion section"
    );
    assert.equal(new Set(conclusions).size, conclusions.length);
    assert.equal(new Set(faqs).size, faqs.length);
  });
});
