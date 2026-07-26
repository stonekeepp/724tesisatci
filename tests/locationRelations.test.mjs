import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  istanbulDistricts,
  getDistrictMetaBySlug,
  REGION_GROUP_LABELS,
} from "../data/mock/istanbulDistricts.ts";
import {
  getTurkishLocative,
  getTurkishLocativeSuffixOnly,
} from "../lib/utils/turkishSuffix.ts";
import { getServiceFaq } from "../data/mock/serviceFaqs.ts";
import { draftBlogPosts as su } from "../data/mock/blogDrafts.su-kacagi.ts";
import { draftBlogPostsTikaniklik as ti } from "../data/mock/blogDrafts.tikaniklik.ts";
import { draftBlogPostsIsitma as is } from "../data/mock/blogDrafts.isitma.ts";
import { PR2_DRAFT_SLUGS } from "./_pr2DraftSlugs.mjs";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const MAX_NEARBY = 6;
const MAX_TOTAL = 8;

function nearbySlugs(slug, limit = MAX_NEARBY) {
  const meta = getDistrictMetaBySlug(slug);
  if (!meta) return [];
  const seen = new Set();
  const out = [];
  for (const n of meta.nearbyDistrictSlugs) {
    if (n === slug || seen.has(n)) continue;
    seen.add(n);
    out.push(n);
    if (out.length >= limit) break;
  }
  return out;
}

function displaySlugs(slug) {
  const meta = getDistrictMetaBySlug(slug);
  if (!meta) return [];
  const nearby = nearbySlugs(slug, MAX_NEARBY);
  const seen = new Set([slug, ...nearby]);
  const extras = [];
  for (const d of istanbulDistricts) {
    if (d.regionGroup !== meta.regionGroup || seen.has(d.slug)) continue;
    seen.add(d.slug);
    extras.push(d.slug);
    if (extras.length >= 4) break;
  }
  return [...nearby, ...extras].slice(0, MAX_TOTAL);
}

function extractServiceGuideSlugs(serviceSlug) {
  const src = fs.readFileSync(path.join(root, "data/mock/services.ts"), "utf8");
  // Prefer the object field `slug:` over getServiceFaq("...") occurrences
  const re = new RegExp(
    `slug:\\s*"${serviceSlug}"[\\s\\S]*?relatedGuideSlugs:\\s*\\[([\\s\\S]*?)\\]`,
    "m"
  );
  const m = src.match(re);
  if (!m) return [];
  return [...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]);
}

describe("district data integrity", () => {
  it("has 39 unique district slugs with region and nearby", () => {
    const slugs = istanbulDistricts.map((d) => d.slug);
    assert.equal(slugs.length, 39);
    assert.equal(new Set(slugs).size, 39);
    for (const d of istanbulDistricts) {
      assert.ok(d.regionGroup in REGION_GROUP_LABELS, d.slug);
      assert.ok(d.indexStatus === "index" || d.indexStatus === "review");
      assert.ok(d.nearbyDistrictSlugs.length >= 3, d.slug);
      assert.equal(d.nearbyDistrictSlugs.includes(d.slug), false);
      assert.equal(
        new Set(d.nearbyDistrictSlugs).size,
        d.nearbyDistrictSlugs.length
      );
      for (const n of d.nearbyDistrictSlugs) {
        assert.ok(getDistrictMetaBySlug(n), `${d.slug} -> ${n}`);
      }
    }
  });

  it("marks Kağıthane as priority index", () => {
    const k = getDistrictMetaBySlug("kagithane");
    assert.equal(k?.isPriority, true);
    assert.equal(k?.indexStatus, "index");
  });
});

describe("regional grouping", () => {
  it("places each district in exactly one group", () => {
    assert.equal(new Set(istanbulDistricts.map((d) => d.slug)).size, 39);
  });
});

describe("nearby helper", () => {
  it("returns curated nearby for Kağıthane within limits", () => {
    const nearby = nearbySlugs("kagithane");
    assert.ok(nearby.length >= 3 && nearby.length <= MAX_NEARBY);
    assert.ok(nearby.includes("sisli"));
    assert.equal(nearby.includes("kagithane"), false);
    const display = displaySlugs("kagithane");
    assert.ok(display.length <= MAX_TOTAL);
    assert.equal(display.includes("kagithane"), false);
  });

  it("returns empty for unknown slug", () => {
    assert.deepEqual(nearbySlugs("does-not-exist"), []);
  });
});

describe("turkish locative extended", () => {
  const expected = {
    Adalar: "Adalar'da",
    Beşiktaş: "Beşiktaş'ta",
    Şişli: "Şişli'de",
    Kağıthane: "Kağıthane'de",
    Kadıköy: "Kadıköy'de",
    Beyoğlu: "Beyoğlu'nda",
    Zeytinburnu: "Zeytinburnu'nda",
    Sancaktepe: "Sancaktepe'de",
    Çekmeköy: "Çekmeköy'de",
    Üsküdar: "Üsküdar'da",
    Ataşehir: "Ataşehir'de",
  };
  for (const [name, loc] of Object.entries(expected)) {
    it(`${name} -> ${loc}`, () => {
      assert.equal(getTurkishLocative(name), loc);
    });
  }
  it("normalizes mistaken suffix input", () => {
    assert.equal(getTurkishLocative("Beyoğlu'de"), "Beyoğlu'nda");
    assert.equal(getTurkishLocativeSuffixOnly("Zeytinburnu"), "nda");
  });
});

describe("service guide relations", () => {
  const drafts = new Set([...su, ...ti, ...is].map((p) => p.slug));

  it("stores draft+published guides on su-kacagi but drafts stay draft", () => {
    const guides = extractServiceGuideSlugs("su-kacagi-tespit-ve-onarim");
    assert.ok(guides.includes("su-kacagi-belirtileri"));
    assert.ok(guides.some((g) => drafts.has(g)));
    for (const slug of PR2_DRAFT_SLUGS) {
      if (guides.includes(slug)) {
        assert.ok(drafts.has(slug));
      }
    }
  });
});

describe("service FAQ quality", () => {
  const priority = [
    "su-kacagi-tespit-ve-onarim",
    "tikaniklik-acma",
    "pimas-yikama",
    "kamerali-tesisat-goruntuleme-ve-onarim",
    "kombi-servisi-ve-tesisati",
    "petek-temizleme",
    "kalorifer-tesisati",
  ];

  it("priority services have 4+ unique FAQ questions", () => {
    for (const slug of priority) {
      const faq = getServiceFaq(slug);
      assert.ok(faq.length >= 4, slug);
      const qs = faq.map((f) => f.question);
      assert.equal(new Set(qs).size, qs.length, slug);
    }
  });

  it("does not reuse identical FAQ question sets", () => {
    const fingerprints = priority.map((slug) =>
      getServiceFaq(slug)
        .map((f) => f.question)
        .join("|")
    );
    assert.equal(new Set(fingerprints).size, fingerprints.length);
  });
});
