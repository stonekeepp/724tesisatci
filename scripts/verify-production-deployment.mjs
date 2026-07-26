#!/usr/bin/env node
/**
 * Live production verification for 724tesisatci.com.
 * Fails closed on network errors — never reports fake success.
 */
const SITE = process.env.PRODUCTION_SITE_URL || "https://724tesisatci.com";

const PUBLISHED_SLUG = "musluklar-kapaliyken-su-sayaci-neden-doner";
const DRAFT_SLUGS = [
  "tikaniklik-acildiktan-sonra-neden-tekrar-eder",
  "petegin-alti-soguk-ustu-sicaksa-ne-yapilmali",
  "alt-kata-su-sizmasinin-kaynagi-nasil-bulunur",
  "duvar-nemi-su-kacagi-mi-yogusma-mi",
  "robotla-tikaniklik-acma-ile-pimas-yikama-farki",
  "birden-fazla-gider-ayni-anda-neden-yavaslar",
  "kombi-basinci-neden-surekli-duser",
  "kombi-arizasi-ile-tesisat-arizasi-nasil-ayirt-edilir",
];

const INTERNAL_FIELDS = [
  "technicalReview",
  "needsTechnicalReview",
  "technicalReviewApproval",
  "internalNotes",
  "credentials",
  "verification",
  "evidenceReferences",
  "reviewerExpertId",
  "publicationBlockers",
];

const RISKY_CLAIMS = [
  "%100",
  "yüzde yüz",
  "kesin olarak",
  "kesin kaçak",
  "30 Dk Varış",
  "30 dakikada adresinize",
  "15+ Yıllık Tecrübe",
  "10.000+ Mutlu Müşteri",
  "Sertifikalı Personel",
  "MYK belgeli",
  "lisanslı ekip",
];

const CLAIM_URLS = [
  "/",
  "/hakkimizda",
  "/hizmetler/su-kacagi-tespit-ve-onarim",
  "/hizmetler/tikaniklik-acma",
  "/hizmetler/petek-temizleme",
];

async function fetchText(url) {
  const res = await fetch(url, {
    redirect: "follow",
    headers: { "user-agent": "724tesisatci-production-verify/1.0" },
  });
  const text = await res.text();
  return { status: res.status, text, url: res.url };
}

function countHits(haystack, needles) {
  let count = 0;
  for (const n of needles) {
    if (haystack.includes(n)) count += 1;
  }
  return count;
}

async function main() {
  /** @type {string[]} */
  const errors = [];
  /** @type {Record<string, unknown>} */
  const metrics = {};

  try {
    const publishedRoute = await fetchText(
      `${SITE}/blog/${PUBLISHED_SLUG}`
    );
    metrics.PUBLISHED_ROUTE_STATUS = publishedRoute.status;
    if (publishedRoute.status !== 200) {
      errors.push(`published_route_status:${publishedRoute.status}`);
    }

    const publishedApi = await fetchText(
      `${SITE}/api/blog/${PUBLISHED_SLUG}`
    );
    metrics.PUBLISHED_API_STATUS = publishedApi.status;
    if (publishedApi.status !== 200) {
      errors.push(`published_api_status:${publishedApi.status}`);
    }

    let publicInternal = 0;
    let publicCredential = 0;
    let approvalNoteHits = 0;
    if (publishedApi.status === 200) {
      try {
        const json = JSON.parse(publishedApi.text);
        const data = json.data ?? json;
        const flat = JSON.stringify(data);
        for (const field of INTERNAL_FIELDS) {
          if (Object.prototype.hasOwnProperty.call(data, field)) {
            publicInternal += 1;
            errors.push(`public_internal_field:${field}`);
          }
        }
        if (/"credentials"\s*:/.test(flat)) publicCredential += 1;
        if (/Mesleki belge|approvedItemTopics|evidenceReferences/.test(flat)) {
          approvalNoteHits += 1;
        }
        if (!data.content && !data.excerpt) {
          errors.push("published_api_missing_content_fields");
        }
      } catch {
        errors.push("published_api_invalid_json");
      }
    }
    metrics.PUBLIC_INTERNAL_FIELD_HITS = publicInternal;
    metrics.PUBLIC_CREDENTIAL_FIELD_HITS = publicCredential;
    metrics.APPROVAL_NOTE_HITS = approvalNoteHits;

    if (publishedRoute.status === 200) {
      const html = publishedRoute.text;
      if (!/Musluklar Kapalıyken Su Sayacı/i.test(html)) {
        errors.push("published_title_missing");
      }
      if (!/BlogPosting|"@type":"BlogPosting"/.test(html)) {
        errors.push("published_blogposting_schema_missing");
      }
      if (!/Mücahit Korkmaz|Mucahit Korkmaz/.test(html)) {
        errors.push("published_reviewedBy_missing");
      }
      if (/MYK belgeli|Sertifikalı Personel|ustalık belgesi numarası/i.test(html)) {
        errors.push("published_forbidden_credential_claim");
      }
      const h1 = [...html.matchAll(/<h1\b[^>]*>/gi)];
      if (h1.length !== 1) {
        errors.push(`published_h1_count:${h1.length}`);
      }
      if (!/rel="canonical"[^>]*musluklar-kapaliyken-su-sayaci-neden-doner/i.test(html)) {
        // softer check
        if (!html.includes(`/blog/${PUBLISHED_SLUG}`)) {
          errors.push("published_canonical_missing");
        }
      }
    }

    const blogList = await fetchText(`${SITE}/blog`);
    const listHits = (blogList.text.match(new RegExp(PUBLISHED_SLUG, "g")) || [])
      .length;
    metrics.PUBLISHED_BLOG_LIST_HITS = listHits;
    if (blogList.status !== 200) errors.push(`blog_list_status:${blogList.status}`);
    if (listHits < 1) errors.push("published_missing_from_blog_list");

    let draftBlogListHits = 0;
    for (const slug of DRAFT_SLUGS) {
      if (blogList.text.includes(`/blog/${slug}`)) draftBlogListHits += 1;
    }
    metrics.DRAFT_BLOG_LIST_HITS = draftBlogListHits;
    if (draftBlogListHits > 0) errors.push(`draft_blog_list_hits:${draftBlogListHits}`);

    const sitemap = await fetchText(`${SITE}/sitemap.xml`);
    metrics.PUBLISHED_SITEMAP_HITS = (
      sitemap.text.match(new RegExp(PUBLISHED_SLUG, "g")) || []
    ).length;
    if (sitemap.status !== 200) errors.push(`sitemap_status:${sitemap.status}`);
    if (metrics.PUBLISHED_SITEMAP_HITS < 1) {
      errors.push("published_missing_from_sitemap");
    }

    let draftSitemapHits = 0;
    for (const slug of DRAFT_SLUGS) {
      if (sitemap.text.includes(slug)) draftSitemapHits += 1;
    }
    metrics.DRAFT_SITEMAP_HITS = draftSitemapHits;
    if (draftSitemapHits > 0) errors.push(`draft_sitemap_hits:${draftSitemapHits}`);

    let draftRoute200 = 0;
    let draftApi200 = 0;
    for (const slug of DRAFT_SLUGS) {
      const route = await fetchText(`${SITE}/blog/${slug}`);
      if (route.status === 200) draftRoute200 += 1;
      const api = await fetchText(`${SITE}/api/blog/${slug}`);
      if (api.status === 200) draftApi200 += 1;
    }
    metrics.DRAFT_ROUTE_200_COUNT = draftRoute200;
    metrics.DRAFT_API_200_COUNT = draftApi200;
    if (draftRoute200 > 0) errors.push(`draft_route_200:${draftRoute200}`);
    if (draftApi200 > 0) errors.push(`draft_api_200:${draftApi200}`);

    let riskyHits = 0;
    /** @type {string[]} */
    const riskyUrls = [];
    for (const path of CLAIM_URLS) {
      const page = await fetchText(`${SITE}${path}`);
      if (page.status !== 200) {
        errors.push(`claim_page_status:${path}:${page.status}`);
        continue;
      }
      const hits = countHits(page.text, RISKY_CLAIMS);
      if (hits > 0) {
        riskyHits += hits;
        riskyUrls.push(path);
      }
    }
    metrics.RISKY_CLAIM_HITS = riskyHits;
    metrics.RISKY_CLAIM_URLS = riskyUrls;
  } catch (err) {
    console.error("NETWORK_OR_RUNTIME_ERROR");
    console.error(err);
    process.exit(2);
  }

  for (const [k, v] of Object.entries(metrics)) {
    console.log(`${k}=${Array.isArray(v) ? JSON.stringify(v) : v}`);
  }

  if (errors.length) {
    console.error(`ERROR_COUNT=${errors.length}`);
    for (const e of errors) console.error(`ERROR ${e}`);
    process.exit(1);
  }

  console.log("production:verify OK");
}

main();
