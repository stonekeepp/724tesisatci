import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";
import { contentClusters } from "../data/mock/contentClusters.ts";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

function extractSlugs(relPath) {
  const src = fs.readFileSync(path.join(root, relPath), "utf8");
  return new Set(
    [...src.matchAll(/\bslug:\s*"([^"]+)"/g)].map((m) => m[1])
  );
}

describe("content cluster integrity", () => {
  const serviceSlugs = extractSlugs("data/mock/services.ts");
  const landingSlugs = extractSlugs("data/mock/localServiceLandingPages.ts");
  const articleSlugs = new Set([
    ...extractSlugs("data/mock/blogPosts.ts"),
    ...extractSlugs("data/mock/blogDrafts.su-kacagi.ts"),
    ...extractSlugs("data/mock/blogDrafts.tikaniklik.ts"),
    ...extractSlugs("data/mock/blogDrafts.isitma.ts"),
  ]);

  for (const cluster of contentClusters) {
    it(`${cluster.id} service slugs exist`, () => {
      for (const slug of cluster.primaryServiceSlugs) {
        assert.ok(serviceSlugs.has(slug), `missing service: ${slug}`);
      }
    });
    it(`${cluster.id} local landing slugs exist`, () => {
      for (const slug of cluster.localLandingSlugs) {
        assert.ok(landingSlugs.has(slug), `missing landing: ${slug}`);
      }
    });
    it(`${cluster.id} article slugs exist`, () => {
      for (const slug of cluster.articleSlugs) {
        assert.ok(articleSlugs.has(slug), `missing article: ${slug}`);
      }
    });
  }

  it("does not place the same article in multiple clusters", () => {
    const seen = new Set();
    for (const cluster of contentClusters) {
      for (const slug of cluster.articleSlugs) {
        assert.equal(seen.has(slug), false, `duplicate: ${slug}`);
        seen.add(slug);
      }
    }
  });
});