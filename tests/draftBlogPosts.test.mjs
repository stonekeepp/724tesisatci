import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { draftBlogPosts as suKacagiDrafts } from "../data/mock/blogDrafts.su-kacagi.ts";
import { draftBlogPostsTikaniklik } from "../data/mock/blogDrafts.tikaniklik.ts";
import { draftBlogPostsIsitma } from "../data/mock/blogDrafts.isitma.ts";
import { contentClusters } from "../data/mock/contentClusters.ts";
import { isPublishedContent } from "../lib/utils/publication.ts";

const draftBlogPosts = [
  ...suKacagiDrafts,
  ...draftBlogPostsTikaniklik,
  ...draftBlogPostsIsitma,
];

const PR2_DRAFT_SLUGS = [
  "musluklar-kapaliyken-su-sayaci-neden-doner",
  "alt-kata-su-sizmasinin-kaynagi-nasil-bulunur",
  "duvar-nemi-su-kacagi-mi-yogusma-mi",
  "tikaniklik-acildiktan-sonra-neden-tekrar-eder",
  "robotla-tikaniklik-acma-ile-pimas-yikama-farki",
  "birden-fazla-gider-ayni-anda-neden-yavaslar",
  "kombi-basinci-neden-surekli-duser",
  "petegin-alti-soguk-ustu-sicaksa-ne-yapilmali",
  "kombi-arizasi-ile-tesisat-arizasi-nasil-ayirt-edilir",
  "musluk-neden-damlar",
  "rezervuar-neden-su-akiyor",
];

/** Mirrors public related-article filtering without importing @/ path aliases. */
function filterPublishedRelated(post, allPosts) {
  const slugs = post.relatedArticleSlugs ?? [];
  const seen = new Set();
  const result = [];
  for (const slug of slugs) {
    if (seen.has(slug) || slug === post.slug) continue;
    seen.add(slug);
    const related = allPosts.find((p) => p.slug === slug);
    if (related && isPublishedContent(related)) result.push(related);
  }
  return result;
}

describe("draft route filtering", () => {
  it("publishes all weekly topical guides", () => {
    assert.equal(draftBlogPosts.length, 11);
    const published = draftBlogPosts.filter((p) => p.status === "published");
    const drafts = draftBlogPosts.filter((p) => p.status === "draft");
    assert.equal(published.length, 11);
    assert.equal(drafts.length, 0);
    for (const post of published) {
      assert.equal(isPublishedContent(post), true);
      assert.ok(PR2_DRAFT_SLUGS.includes(post.slug));
      assert.equal(post.needsTechnicalReview, false);
    }
  });

  it("excludes archived content", () => {
    assert.equal(isPublishedContent({ status: "archived" }), false);
  });

  it("treats missing status as published", () => {
    assert.equal(isPublishedContent({}), true);
    assert.equal(isPublishedContent({ status: "published" }), true);
  });
});

describe("related article filtering", () => {
  const publishedSample = {
    slug: "published-a",
    status: /** @type {const} */ ("published"),
    relatedArticleSlugs: [
      "draft-b",
      "published-c",
      "published-c",
      "missing-slug",
      "published-a",
    ],
  };
  const catalog = [
    publishedSample,
    { slug: "draft-b", status: /** @type {const} */ ("draft") },
    { slug: "published-c", status: /** @type {const} */ ("published") },
  ];

  it("hides draft related articles from public results", () => {
    const related = filterPublishedRelated(publishedSample, catalog);
    assert.equal(
      related.some((p) => p.slug === "draft-b"),
      false
    );
  });

  it("shows published related articles only", () => {
    const related = filterPublishedRelated(publishedSample, catalog);
    assert.deepEqual(
      related.map((p) => p.slug),
      ["published-c"]
    );
  });

  it("skips unknown related article slugs", () => {
    const related = filterPublishedRelated(publishedSample, catalog);
    assert.equal(
      related.some((p) => p.slug === "missing-slug"),
      false
    );
  });

  it("dedupes related article slugs", () => {
    const related = filterPublishedRelated(publishedSample, catalog);
    assert.equal(related.length, 1);
  });

  it("hides draft related targets from public results", () => {
    for (const post of draftBlogPosts) {
      const related = filterPublishedRelated(post, draftBlogPosts);
      assert.ok(related.every((r) => isPublishedContent(r)));
      assert.ok(related.every((r) => r.slug !== post.slug));
      assert.ok(related.every((r) => r.status === "published"));
    }
  });
});

describe("cluster integrity for PR-2 drafts", () => {
  it("places topical guide slugs in the correct clusters", () => {
    const byCluster = {
      "su-kacagi": [
        "musluklar-kapaliyken-su-sayaci-neden-doner",
        "alt-kata-su-sizmasinin-kaynagi-nasil-bulunur",
        "duvar-nemi-su-kacagi-mi-yogusma-mi",
        "musluk-neden-damlar",
        "rezervuar-neden-su-akiyor",
      ],
      tikaniklik: [
        "tikaniklik-acildiktan-sonra-neden-tekrar-eder",
        "robotla-tikaniklik-acma-ile-pimas-yikama-farki",
        "birden-fazla-gider-ayni-anda-neden-yavaslar",
      ],
      isitma: [
        "kombi-basinci-neden-surekli-duser",
        "petegin-alti-soguk-ustu-sicaksa-ne-yapilmali",
        "kombi-arizasi-ile-tesisat-arizasi-nasil-ayirt-edilir",
      ],
    };

    for (const [clusterId, slugs] of Object.entries(byCluster)) {
      const cluster = contentClusters.find((c) => c.id === clusterId);
      assert.ok(cluster);
      for (const slug of slugs) {
        assert.ok(
          cluster.articleSlugs.includes(slug),
          `${slug} missing from ${clusterId}`
        );
        const post = draftBlogPosts.find((p) => p.slug === slug);
        assert.ok(post, `missing blog post ${slug}`);
        assert.equal(post.cluster, clusterId);
        assert.equal(post.status, "published");
        assert.equal(post.needsTechnicalReview, false);
      }
    }
  });

  it("keeps each article in at most one cluster", () => {
    const seen = new Map();
    for (const cluster of contentClusters) {
      for (const slug of cluster.articleSlugs) {
        assert.equal(
          seen.has(slug),
          false,
          `duplicate cluster membership: ${slug}`
        );
        seen.set(slug, cluster.id);
      }
    }
  });

  it("has related services on every draft", () => {
    for (const post of draftBlogPosts) {
      const slugs = [
        ...(post.relatedServices ?? []),
        ...(post.relatedServiceSlugs ?? []),
      ];
      assert.ok(slugs.length > 0, post.slug);
    }
  });
});

describe("metadata uniqueness for PR-2 drafts", () => {
  it("has unique titles, descriptions and slugs", () => {
    const titles = draftBlogPosts.map((p) => p.seoTitle);
    const descs = draftBlogPosts.map((p) => p.seoDescription);
    const slugs = draftBlogPosts.map((p) => p.slug);
    assert.equal(new Set(titles).size, titles.length);
    assert.equal(new Set(descs).size, descs.length);
    assert.equal(new Set(slugs).size, slugs.length);
  });

  it("requires FAQ and published status on every topical guide", () => {
    for (const post of draftBlogPosts) {
      assert.equal(post.status, "published");
      assert.equal(post.needsTechnicalReview, false);
      assert.ok((post.faq?.length ?? 0) >= 3, post.slug);
    }
  });
});
