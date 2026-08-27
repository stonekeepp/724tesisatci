import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { describe, it } from "node:test";
import { draftBlogPosts as suKacagiDrafts } from "../data/mock/blogDrafts.su-kacagi.ts";
import { draftBlogPostsTikaniklik } from "../data/mock/blogDrafts.tikaniklik.ts";
import { draftBlogPostsIsitma } from "../data/mock/blogDrafts.isitma.ts";

/** Legacy posts in blogPosts.ts (before draft spread); avoids @/ imports. */
function loadLegacyBlogDates() {
  const file = fs.readFileSync(
    path.join(process.cwd(), "data/mock/blogPosts.ts"),
    "utf8"
  );
  const main = file.split("...draftBlogPosts")[0];
  const posts = [];
  const dateRe =
    /publishedAt:\s*"([^"]+)"\s*,\s*\n\s*updatedAt:\s*"([^"]+)"/g;
  let match;
  while ((match = dateRe.exec(main)) !== null) {
    const before = main.slice(0, match.index);
    const slugMatches = [...before.matchAll(/slug:\s*"([^"]+)"/g)];
    const slug = slugMatches.at(-1)?.[1];
    if (!slug) continue;
    posts.push({
      slug,
      publishedAt: match[1],
      updatedAt: match[2],
    });
  }
  return posts;
}

function calendarDay(iso) {
  assert.match(iso, /^\d{4}-\d{2}-\d{2}T/, `invalid ISO date: ${iso}`);
  return iso.slice(0, 10);
}

function findDayCollisions(posts, field) {
  const byDay = new Map();
  for (const post of posts) {
    const day = calendarDay(post[field]);
    const list = byDay.get(day) ?? [];
    list.push(post.slug);
    byDay.set(day, list);
  }
  return [...byDay.entries()]
    .filter(([, slugs]) => slugs.length > 1)
    .map(([day, slugs]) => `${day}: ${slugs.join(", ")}`);
}

describe("blog unique calendar dates", () => {
  const allPosts = [
    ...loadLegacyBlogDates(),
    ...suKacagiDrafts,
    ...draftBlogPostsTikaniklik,
    ...draftBlogPostsIsitma,
  ];

  it("loads all blog posts with dates", () => {
    assert.ok(
      allPosts.length >= 19,
      `expected at least 19 posts, got ${allPosts.length}`
    );
  });

  it("each blog has unique publishedAt calendar day (UI date)", () => {
    const collisions = findDayCollisions(allPosts, "publishedAt");
    assert.deepEqual(
      collisions,
      [],
      `Duplicate publishedAt days:\n${collisions.join("\n")}`
    );
  });

  it("each blog has unique updatedAt calendar day (UI date)", () => {
    const collisions = findDayCollisions(allPosts, "updatedAt");
    assert.deepEqual(
      collisions,
      [],
      `Duplicate updatedAt days:\n${collisions.join("\n")}`
    );
  });

  it("updatedAt is on or after publishedAt for every post", () => {
    for (const post of allPosts) {
      assert.ok(
        new Date(post.updatedAt).getTime() >=
          new Date(post.publishedAt).getTime(),
        `${post.slug}: updatedAt before publishedAt`
      );
    }
  });
});
