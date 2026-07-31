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
  it("keeps unpublished PR topical guides as draft", () => {
    assert.equal(draftBlogPosts.length, 9);
    const published = draftBlogPosts.filter((p) => p.status === "published");
    const drafts = draftBlogPosts.filter((p) => p.status === "draft");
    assert.equal(published.length, 6);
    assert.equal(drafts.length, 3);
    for (const post of drafts) {
      assert.equal(isPublishedContent(post), false);
      assert.ok(PR2_DRAFT_SLUGS.includes(post.slug));
    }
    for (const post of published) {
      assert.equal(isPublishedContent(post), true);
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
      // Draft posts may surface the published pilot; never other drafts.
      assert.ok(related.every((r) => r.status === "published"));
    }
  });
});

describe("cluster integrity for PR-2 drafts", () => {
  it("places 9 topical guide slugs in the correct clusters", () => {
    const byCluster = {
      "su-kacagi": [
        "musluklar-kapaliyken-su-sayaci-neden-doner",
        "alt-kata-su-sizmasinin-kaynagi-nasil-bulunur",
        "duvar-nemi-su-kacagi-mi-yogusma-mi",
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
        assert.ok(
          post.status === "draft" || post.status === "published",
          post.slug
        );
        if (
          [
            "musluklar-kapaliyken-su-sayaci-neden-doner",
            "tikaniklik-acildiktan-sonra-neden-tekrar-eder",
            "petegin-alti-soguk-ustu-sicaksa-ne-yapilmali",
            "robotla-tikaniklik-acma-ile-pimas-yikama-farki",
            "birden-fazla-gider-ayni-anda-neden-yavaslar",
            "alt-kata-su-sizmasinin-kaynagi-nasil-bulunur",
          ].includes(post.slug)
        ) {
          assert.equal(post.needsTechnicalReview, false);
          assert.equal(post.status, "published");
        } else {
          assert.equal(post.status, "draft");
          assert.equal(post.needsTechnicalReview, true);
        }
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

  it("marks non-pilot drafts for technical review", () => {
    const publishedSlugs = new Set([
      "musluklar-kapaliyken-su-sayaci-neden-doner",
      "tikaniklik-acildiktan-sonra-neden-tekrar-eder",
      "petegin-alti-soguk-ustu-sicaksa-ne-yapilmali",
      "robotla-tikaniklik-acma-ile-pimas-yikama-farki",
      "birden-fazla-gider-ayni-anda-neden-yavaslar",
      "alt-kata-su-sizmasinin-kaynagi-nasil-bulunur",
    ]);
    for (const post of draftBlogPosts) {
      if (publishedSlugs.has(post.slug)) {
        assert.equal(post.needsTechnicalReview, false);
        continue;
      }
      assert.equal(post.status, "draft");
      assert.equal(post.needsTechnicalReview, true);
      assert.ok((post.faq?.length ?? 0) >= 3);
    }
  });
});
