#!/usr/bin/env node
/**
 * SEO audit skeleton — reads mock sources (regex + alias-free imports).
 * No fake ranking scores. Uncomputed metrics stay null.
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function extractSlugs(src) {
  return [...src.matchAll(/\bslug:\s*"([^"]+)"/g)].map((m) => m[1]);
}

function extractSeoPairs(src) {
  /** @type {Array<{slug:string,title:string|null,description:string|null,canonical:string|null}>} */
  const items = [];
  const re =
    /slug:\s*"([^"]+)"[\s\S]*?seoTitle:\s*"([^"]*)"[\s\S]*?seoDescription:\s*"([^"]*)"[\s\S]*?canonicalPath:\s*"([^"]*)"/g;
  let m;
  while ((m = re.exec(src))) {
    items.push({
      slug: m[1],
      title: m[2] || null,
      description: m[3] || null,
      canonical: m[4] || null,
    });
  }
  return items;
}

function extractBlogPosts(src) {
  /** @type {Array<Record<string, unknown>>} */
  const items = [];
  const chunks = src.split(/{\s*\n\s*id:\s*"/).slice(1);
  for (const chunk of chunks) {
    const slug = chunk.match(/slug:\s*"([^"]+)"/)?.[1] ?? null;
    const status =
      chunk.match(/\bstatus:\s*"(draft|published|archived)"/)?.[1] ?? null;
    const title = chunk.match(/seoTitle:\s*"([^"]*)"/)?.[1] ?? null;
    const description = chunk.match(/seoDescription:\s*"([^"]*)"/)?.[1] ?? null;
    const canonical = chunk.match(/canonicalPath:\s*"([^"]*)"/)?.[1] ?? null;
    const cluster = chunk.match(/cluster:\s*"([^"]+)"/)?.[1] ?? null;
    const searchIntent = chunk.match(/searchIntent:\s*"([^"]+)"/)?.[1] ?? null;
    const primaryKeyword =
      chunk.match(/primaryKeyword:\s*"([^"]*)"/)?.[1] ?? null;
    const needsTechnicalReview = /needsTechnicalReview:\s*true/.test(chunk);
    const faqCount = [...chunk.matchAll(/question:\s*"/g)].length;
    const relatedServices = [
      ...chunk.matchAll(/relatedServices:\s*\[([\s\S]*?)\]/g),
    ];
    const relatedServiceBlock = relatedServices[0]?.[1] ?? "";
    const relatedServiceSlugs = [
      ...relatedServiceBlock.matchAll(/"([^"]+)"/g),
    ].map((x) => x[1]);
    const relatedArticleBlock =
      chunk.match(/relatedArticleSlugs:\s*\[([\s\S]*?)\]/)?.[1] ?? "";
    const relatedArticleSlugs = [
      ...relatedArticleBlock.matchAll(/"([^"]+)"/g),
    ].map((x) => x[1]);
    if (slug) {
      items.push({
        slug,
        status,
        title,
        description,
        canonical,
        cluster,
        searchIntent,
        primaryKeyword,
        needsTechnicalReview,
        faqCount,
        relatedServiceSlugs,
        relatedArticleSlugs,
      });
    }
  }
  return items;
}

function extractLocalLandings(src) {
  /** @type {Array<Record<string, string|null|boolean>>} */
  const items = [];
  const chunks = src.split(/{\s*\n\s*slug:\s*"/).slice(1);
  for (const chunk of chunks) {
    const slugMatch = chunk.match(/^([^"]+)"/);
    const slug = slugMatch?.[1] ?? null;
    const title = chunk.match(/title:\s*"([^"]*)"/)?.[1] ?? null;
    const description = chunk.match(/description:\s*"([^"]*)"/)?.[1] ?? null;
    const canonical = chunk.match(/canonicalPath:\s*"([^"]*)"/)?.[1] ?? null;
    const serviceSlug = chunk.match(/serviceSlug:\s*"([^"]+)"/)?.[1] ?? null;
    const indexable = /indexable:\s*false/.test(chunk) ? false : true;
    if (slug) {
      items.push({
        slug,
        title,
        description,
        canonical,
        serviceSlug,
        indexable,
      });
    }
  }
  return items;
}

function warn(list, msg) {
  list.push(msg);
}

async function main() {
  const servicesSrc = read("data/mock/services.ts");
  const blogSrc = [
    read("data/mock/blogPosts.ts"),
    read("data/mock/blogDrafts.su-kacagi.ts"),
    read("data/mock/blogDrafts.tikaniklik.ts"),
    read("data/mock/blogDrafts.isitma.ts"),
  ].join("\n");
  const localSrc = read("data/mock/localServiceLandingPages.ts");

  const serviceItems = extractSeoPairs(servicesSrc);
  const blogItems = extractBlogPosts(blogSrc);
  const localItems = extractLocalLandings(localSrc);

  const { contentClusters } = await import(
    pathToFileURL(path.join(root, "data/mock/contentClusters.ts")).href
  );
  const { siteSettings } = await import(
    pathToFileURL(path.join(root, "data/mock/siteSettings.ts")).href
  );
  const { normalizeSameAs } = await import(
    pathToFileURL(path.join(root, "lib/utils/sameAs.ts")).href
  );
  const {
    isPublishedContent,
    evaluateBlogPublicationReadiness,
    toPublicBlogPost,
  } = await import(
    pathToFileURL(path.join(root, "lib/utils/publication.ts")).href
  );
  const { istanbulDistricts } = await import(
    pathToFileURL(path.join(root, "data/mock/istanbulDistricts.ts")).href
  );
  const { draftBlogPosts: suDrafts } = await import(
    pathToFileURL(path.join(root, "data/mock/blogDrafts.su-kacagi.ts")).href
  );
  const { draftBlogPostsTikaniklik } = await import(
    pathToFileURL(path.join(root, "data/mock/blogDrafts.tikaniklik.ts")).href
  );
  const { draftBlogPostsIsitma } = await import(
    pathToFileURL(path.join(root, "data/mock/blogDrafts.isitma.ts")).href
  );
  const { getTurkishLocative } = await import(
    pathToFileURL(path.join(root, "lib/utils/turkishSuffix.ts")).href
  );
  const { pilotPublicationCandidateSlugs, isPilotPublicationCandidate } =
    await import(
      pathToFileURL(
        path.join(root, "data/mock/pilotPublicationCandidates.ts")
      ).href
    );
  const { blogTechnicalReviewApprovals } = await import(
    pathToFileURL(
      path.join(root, "data/mock/blogTechnicalReviewApprovals.ts")
    ).href
  );
  const { expertProfiles, getVerifiedExperts } = await import(
    pathToFileURL(path.join(root, "data/mock/experts.ts")).href
  );
  const {
    getTechnicalReviewApproval,
    isTechnicalReviewApproved,
    validateTechnicalReviewApproval,
  } = await import(
    pathToFileURL(path.join(root, "lib/utils/technicalReview.ts")).href
  );

  const serviceSlugs = new Set(serviceItems.map((s) => s.slug));
  const articleSlugs = new Set(blogItems.map((p) => p.slug));
  const landingSlugs = new Set(localItems.map((p) => p.slug));
  const clusterIds = new Set(contentClusters.map((c) => c.id));
  const isPublished = (p) => !p.status || p.status === "published";

  const publishedArticles = blogItems.filter((p) => isPublished(p));
  const publishedSlugSet = new Set(publishedArticles.map((p) => p.slug));
  const draftItems = blogItems.filter((p) => p.status === "draft");
  const draftSlugSet = new Set(draftItems.map((p) => p.slug));

  /** @type {Array<Record<string, unknown>>} */
  const pages = [];
  /** @type {string[]} */
  const globalWarnings = [];

  if (draftItems.length !== 8) {
    globalWarnings.push(`unexpected_draft_count:${draftItems.length}`);
  }

  // Simulated published helper: drafts must fail isPublishedContent
  for (const draft of draftItems) {
    if (isPublishedContent({ status: draft.status })) {
      globalWarnings.push(`draft_passes_isPublishedContent:${draft.slug}`);
    }
    if (publishedSlugSet.has(draft.slug)) {
      globalWarnings.push(`draft_in_published_list:${draft.slug}`);
    }
  }

  for (const p of publishedArticles) {
    for (const related of p.relatedArticleSlugs ?? []) {
      if (draftSlugSet.has(related)) {
        globalWarnings.push(
          `published_links_to_draft:${p.slug}->${related}`
        );
      }
    }
  }

  // Location / district relation audit (indexStatus is internal only)
  let maxLocationLinks = 0;
  let asymmetricCount = 0;
  const districtSlugSet = new Set(istanbulDistricts.map((d) => d.slug));
  for (const d of istanbulDistricts) {
    const warnings = [];
    if (!d.regionGroup) warn(warnings, "missing_region_group");
    if (!d.nearbyDistrictSlugs?.length) warn(warnings, "missing_nearby_list");
    const nearby = d.nearbyDistrictSlugs ?? [];
    maxLocationLinks = Math.max(maxLocationLinks, Math.min(8, nearby.length + 4));
    const seen = new Set();
    for (const n of nearby) {
      if (n === d.slug) warn(warnings, "self_in_nearby");
      if (seen.has(n)) warn(warnings, `duplicate_nearby:${n}`);
      seen.add(n);
      if (!districtSlugSet.has(n)) warn(warnings, `invalid_nearby:${n}`);
      else {
        const other = istanbulDistricts.find((x) => x.slug === n);
        if (other && !other.nearbyDistrictSlugs.includes(d.slug)) {
          asymmetricCount += 1;
          warn(warnings, `asymmetric_nearby:${n}`);
        }
      }
    }
    if (d.slug === "kagithane" && d.indexStatus !== "index") {
      warn(warnings, "kagithane_should_be_index_status");
    }
    if (d.indexStatus === "review") {
      warn(warnings, "district_specific_faq_limited");
    }
    const locative = getTurkishLocative(d.title);
    if (!locative.includes("'")) warn(warnings, "locative_apostrophe_missing");

    pages.push({
      url: `/hizmet-bolgeleri/${d.slug}`,
      pageType: "location",
      regionGroup: d.regionGroup,
      indexStatus: d.indexStatus,
      nearbyDistrictCount: nearby.length,
      duplicateIntroCandidate: d.indexStatus === "review",
      duplicateFaqCount: d.slug === "kagithane" ? 0 : 2,
      status: "published",
      cluster: null,
      title: `${d.title} Tesisatçı Hizmetleri | 724 Tesisatçı`,
      description: null,
      wordCount: null,
      internalLinksIn: null,
      internalLinksOut: Math.min(8, nearby.length + 4),
      verificationWarnings:
        d.indexStatus === "review"
          ? ["Local arrival claim requires verification"]
          : [],
      warnings,
    });
  }
  if (asymmetricCount > 0) {
    globalWarnings.push(`asymmetric_nearby_relations:${asymmetricCount}`);
  }
  globalWarnings.push(`MAX_LOCATION_LINKS_ON_PAGE:${maxLocationLinks}`);

  for (const s of serviceItems) {
    const warnings = [];
    if (!s.title) warn(warnings, "missing_title");
    if (!s.description) warn(warnings, "missing_description");
    pages.push({
      url: s.canonical,
      pageType: "service",
      status: "published",
      cluster: null,
      indexStatus: "index",
      title: s.title,
      description: s.description,
      wordCount: null,
      internalLinksIn: null,
      internalLinksOut: null,
      warnings,
    });
  }

  for (const p of blogItems) {
    const warnings = [];
    if (!p.title) warn(warnings, "missing_title");
    if (!p.description) warn(warnings, "missing_description");
    if (p.cluster && !clusterIds.has(p.cluster)) {
      warn(warnings, `unknown_cluster:${p.cluster}`);
    }
    const published = isPublished(p);
    if (published && !p.cluster) {
      warn(warnings, "published_without_cluster");
    }
    if (!published) {
      warn(warnings, "draft_excluded_from_index");
      if (p.needsTechnicalReview) {
        warn(warnings, "Technical review required before publication");
      }
      if (!p.cluster) warn(warnings, "draft_missing_cluster");
      if (!p.searchIntent) warn(warnings, "draft_missing_searchIntent");
      if (!p.primaryKeyword) warn(warnings, "draft_missing_primaryKeyword");
      if (!p.faqCount || p.faqCount < 3) warn(warnings, "draft_missing_faq");
      if (!p.relatedServiceSlugs?.length) {
        warn(warnings, "draft_missing_related_service");
      }
      for (const slug of p.relatedServiceSlugs ?? []) {
        if (!serviceSlugs.has(slug)) {
          warn(warnings, `missing_service_slug:${slug}`);
        }
      }
      for (const slug of p.relatedArticleSlugs ?? []) {
        if (!articleSlugs.has(slug)) {
          warn(warnings, `missing_article_slug:${slug}`);
        }
      }
      if (publishedSlugSet.has(p.slug)) {
        warn(warnings, "draft_leaked_into_published_helper");
      }
    }
    pages.push({
      url: p.canonical,
      pageType: "article",
      status: published ? "published" : p.status ?? "draft",
      cluster: p.cluster ?? null,
      indexStatus: published ? "index" : "noindex",
      title: p.title,
      description: p.description,
      wordCount: null,
      internalLinksIn: null,
      internalLinksOut: null,
      warnings,
    });
  }

  for (const l of localItems) {
    const warnings = [];
    if (!l.title) warn(warnings, "missing_title");
    if (!l.description) warn(warnings, "missing_description");
    if (l.serviceSlug && !serviceSlugs.has(l.serviceSlug)) {
      warn(warnings, `missing_service_slug:${l.serviceSlug}`);
    }
    pages.push({
      url: l.canonical,
      pageType: "local-landing",
      status: "published",
      cluster: null,
      indexStatus: l.indexable === false ? "noindex" : "index",
      title: l.title,
      description: l.description,
      wordCount: null,
      internalLinksIn: null,
      internalLinksOut: null,
      warnings,
    });
  }

  const articleClusterOwner = new Map();
  for (const c of contentClusters) {
    for (const slug of c.primaryServiceSlugs) {
      if (!serviceSlugs.has(slug)) {
        pages.push({
          url: `cluster://${c.id}`,
          pageType: "cluster-ref",
          status: "published",
          cluster: c.id,
          indexStatus: "n/a",
          title: c.name,
          description: null,
          wordCount: null,
          internalLinksIn: null,
          internalLinksOut: null,
          warnings: [`missing_service_slug:${slug}`],
        });
      }
    }
    for (const slug of c.localLandingSlugs) {
      if (!landingSlugs.has(slug)) {
        pages.push({
          url: `cluster://${c.id}`,
          pageType: "cluster-ref",
          status: "published",
          cluster: c.id,
          indexStatus: "n/a",
          title: c.name,
          description: null,
          wordCount: null,
          internalLinksIn: null,
          internalLinksOut: null,
          warnings: [`missing_landing_slug:${slug}`],
        });
      }
    }
    for (const slug of c.articleSlugs) {
      if (!articleSlugs.has(slug)) {
        pages.push({
          url: `cluster://${c.id}`,
          pageType: "cluster-ref",
          status: "published",
          cluster: c.id,
          indexStatus: "n/a",
          title: c.name,
          description: null,
          wordCount: null,
          internalLinksIn: null,
          internalLinksOut: null,
          warnings: [`missing_article_slug:${slug}`],
        });
      }
      const prev = articleClusterOwner.get(slug);
      if (prev && prev !== c.id) {
        globalWarnings.push(`article_in_multiple_clusters:${slug}`);
      } else {
        articleClusterOwner.set(slug, c.id);
      }
    }
  }

  // Draft safety vs published list / static params source
  for (const draft of draftItems) {
    if (publishedSlugSet.has(draft.slug)) {
      globalWarnings.push(`draft_in_parsed_published_list:${draft.slug}`);
    }
  }

  const urlCounts = new Map();
  const titleCounts = new Map();
  const descCounts = new Map();
  for (const page of pages) {
    if (page.pageType === "cluster-ref") continue;
    urlCounts.set(page.url, (urlCounts.get(page.url) || 0) + 1);
    if (page.title) titleCounts.set(page.title, (titleCounts.get(page.title) || 0) + 1);
    if (page.description) {
      descCounts.set(page.description, (descCounts.get(page.description) || 0) + 1);
    }
  }
  for (const [u, n] of urlCounts) {
    if (n > 1) globalWarnings.push(`duplicate_url:${u}`);
  }
  for (const [t, n] of titleCounts) {
    if (n > 1) globalWarnings.push(`duplicate_title:${t}`);
  }
  for (const [d, n] of descCounts) {
    if (n > 1) globalWarnings.push(`duplicate_description:${String(d).slice(0, 80)}`);
  }

  const raw = [
    siteSettings.googleBusinessProfileUrl,
    ...(siteSettings.sameAs ?? []),
    siteSettings.googleBusinessProfileUrl,
  ];
  const rawFilled = raw.filter(Boolean);
  if (rawFilled.length !== new Set(rawFilled).size) {
    globalWarnings.push("sameAs_raw_contains_duplicates_before_normalize");
  }
  normalizeSameAs(raw);

  if (siteSettings.verification) {
    for (const [key, status] of Object.entries(siteSettings.verification)) {
      if (status === "needs-verification") {
        globalWarnings.push(`verification_needed:${key}`);
      }
    }
  }

  void extractSlugs;

  const liveDrafts = [
    ...suDrafts,
    ...draftBlogPostsTikaniklik,
    ...draftBlogPostsIsitma,
  ];
  const serviceSlugList = [...serviceSlugs];

  /** @type {string[]} */
  const riskyPatterns = [
    "kesin kaçak",
    "kesin tıkanıklık",
    "kesin kombi arızası",
    "kesinlikle çözülür",
    "%100",
    "yüzde yüz",
    "asla zarar vermez",
    "kapağı açın",
    "parçayı sökün",
    "elektriği bağlayın",
    "kimyasalları karıştırın",
    "yüksek basınç uygulayın",
    "vanayı zorlayın",
    "tekrar tekrar resetleyin",
  ];
  /** @type {string[]} */
  const safeWarningPatterns = [
    "kesinlikle karıştırılmamalı",
    "karıştırılmamalıdır",
    "kapağı açmadan",
    "zorlamayın",
    "karıştırmayın",
  ];

  const draftQuality = liveDrafts.map((post) => {
    const content = String(post.content ?? "");
    const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
    const headingCount = (content.match(/^##\s+/gm) ?? []).length;
    const faqCount = post.faq?.length ?? 0;
    const relatedServiceCount = new Set([
      ...(post.relatedServices ?? []),
      ...(post.relatedServiceSlugs ?? []),
    ]).size;
    const relatedArticleCount = new Set(post.relatedArticleSlugs ?? []).size;
    const technicalReviewItemCount = post.technicalReview?.items?.length ?? 0;
    const pendingTechnicalReviewItems = (
      post.technicalReview?.items ?? []
    ).filter((i) => i.status === "pending").length;
    const approval = getTechnicalReviewApproval(post.slug, {
      approvals: blogTechnicalReviewApprovals,
      experts: expertProfiles,
    });
    const approvalRecordExists = Boolean(approval);
    const technicalApprovalValid = approval
      ? validateTechnicalReviewApproval(post, approval, {
          approvals: blogTechnicalReviewApprovals,
          experts: expertProfiles,
        }).valid
      : false;
    const verifiedReviewerExists = approval
      ? Boolean(
          expertProfiles.find(
            (e) =>
              e.id === approval.reviewerExpertId &&
              e.verification?.identity === "verified" &&
              e.verification?.writtenApproval === "verified"
          )
        )
      : false;
    const readiness = evaluateBlogPublicationReadiness(post, {
      allPosts: liveDrafts,
      serviceSlugs: serviceSlugList,
      approvals: blogTechnicalReviewApprovals,
      experts: expertProfiles,
    });
    /** @type {string[]} */
    const warnings = [...readiness.warnings];
    if (wordCount < 900) warnings.push("content_short_of_preferred_target");
    if (headingCount < 5) warnings.push("heading_count_low");
    if (faqCount < 4) warnings.push("faq_count_low");
    const intro = content.split(/\n##\s+/)[1]?.slice(0, 400) ?? "";
    if (intro.split(/\s+/).length > 220) {
      warnings.push("intro_candidate_too_long");
    }

    const lower = content.toLowerCase();
    /** @type {string[]} */
    const riskyHits = [];
    /** @type {string[]} */
    const safeHits = [];
    for (const p of riskyPatterns) {
      if (lower.includes(p)) riskyHits.push(p);
    }
    for (const p of safeWarningPatterns) {
      if (lower.includes(p)) safeHits.push(p);
    }
    if (riskyHits.length) {
      warnings.push(`risky_claim_candidate:${riskyHits.join("|")}`);
    }
    if (safeHits.length) {
      warnings.push(`preserved_safety_warning:${safeHits.join("|")}`);
    }

    const publicDto = toPublicBlogPost(post);
    const leakKeys = [
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
    ];
    for (const key of leakKeys) {
      if (key in publicDto) {
        warnings.push("public_api_internal_review_field_leak_candidate");
        globalWarnings.push(`public_dto_leak:${post.slug}:${key}`);
      }
    }
    if (readiness.ready && post.status !== "published") {
      globalWarnings.push(`publication_helper_ready_on_draft:${post.slug}`);
    }

    return {
      slug: post.slug,
      pilotPublicationCandidate: isPilotPublicationCandidate(post.slug),
      status: post.status ?? null,
      cluster: post.cluster ?? null,
      wordCount,
      headingCount,
      faqCount,
      relatedServiceCount,
      relatedArticleCount,
      needsTechnicalReview: post.needsTechnicalReview === true,
      technicalReviewItemCount,
      pendingTechnicalReviewItemCount: pendingTechnicalReviewItems,
      pendingTechnicalReviewItems,
      approvalRecordExists,
      verifiedReviewerExists,
      technicalApprovalValid,
      publicationReady: readiness.ready,
      publicationBlockers: readiness.blockers,
      warnings,
    };
  });

  const titles = liveDrafts.map((p) => p.seoTitle);
  const descs = liveDrafts.map((p) => p.seoDescription);
  const excerpts = liveDrafts.map((p) => p.excerpt);
  if (new Set(titles).size !== titles.length) {
    globalWarnings.push("DUPLICATE_DRAFT_TITLES");
  }
  if (new Set(descs).size !== descs.length) {
    globalWarnings.push("DUPLICATE_DRAFT_DESCRIPTIONS");
  }
  if (new Set(excerpts).size !== excerpts.length) {
    globalWarnings.push("DUPLICATE_DRAFT_EXCERPTS");
  }

  const pendingTechnicalReviewCount = draftQuality.reduce(
    (sum, d) => sum + d.pendingTechnicalReviewItems,
    0
  );
  const publicationReadyDraftCount = draftQuality.filter(
    (d) => d.publicationReady
  ).length;
  const pilotQuality = draftQuality.filter((d) => d.pilotPublicationCandidate);
  const pendingPilotReviewItemCount = pilotQuality.reduce(
    (sum, d) => sum + d.pendingTechnicalReviewItemCount,
    0
  );
  const pendingNonPilotReviewItemCount = draftQuality
    .filter((d) => !d.pilotPublicationCandidate)
    .reduce((sum, d) => sum + d.pendingTechnicalReviewItemCount, 0);
  const validApprovalCount = liveDrafts.filter((post) =>
    isTechnicalReviewApproved(post, {
      approvals: blogTechnicalReviewApprovals,
      experts: expertProfiles,
    })
  ).length;
  const verifiedExperts = getVerifiedExperts();
  const identityVerified = expertProfiles.filter(
    (e) => e.verification?.identity === "verified"
  ).length;
  const writtenApprovalVerified = expertProfiles.filter(
    (e) => e.verification?.writtenApproval === "verified"
  ).length;
  const credentialVerified = expertProfiles.filter(
    (e) => e.verification?.credentials === "verified"
  ).length;
  const technicallyApprovedPilots = pilotQuality.filter(
    (d) => d.technicalApprovalValid && d.needsTechnicalReview === false
  ).length;
  const publishedPilots = pilotQuality.filter((d) => d.status === "published")
    .length;
  let publicInternalReviewFieldHits = 0;
  let publicCredentialFieldHits = 0;
  for (const d of draftQuality) {
    if (
      d.warnings.some((w) =>
        String(w).includes("public_api_internal_review_field_leak_candidate")
      )
    ) {
      publicInternalReviewFieldHits += 1;
    }
  }
  for (const expert of expertProfiles) {
    const publicShape = toPublicBlogPost(/** @type {any} */ ({ ...expert }));
    if ("credentials" in publicShape || "verification" in publicShape) {
      publicCredentialFieldHits += 1;
    }
  }

  const report = {
    generatedAt: new Date().toISOString(),
    pageCount: pages.length,
    draftCount: draftItems.filter((p) => p.status === "draft").length,
    publishedArticleCount: publishedArticles.length,
    DRAFT_POST_COUNT: liveDrafts.filter((p) => p.status === "draft").length,
    PUBLICATION_READY_DRAFT_COUNT: publicationReadyDraftCount,
    PENDING_TECHNICAL_REVIEW_COUNT: pendingTechnicalReviewCount,
    EXPERT_PROFILE_COUNT: expertProfiles.length,
    IDENTITY_VERIFIED_EXPERT_COUNT: identityVerified,
    WRITTEN_APPROVAL_VERIFIED_EXPERT_COUNT: writtenApprovalVerified,
    CREDENTIAL_VERIFIED_EXPERT_COUNT: credentialVerified,
    PILOT_CANDIDATE_COUNT: pilotPublicationCandidateSlugs.length,
    PILOT_DRAFT_COUNT: pilotQuality.filter((d) => d.status === "draft").length,
    APPROVAL_RECORD_COUNT: blogTechnicalReviewApprovals.length,
    VALID_APPROVAL_COUNT: validApprovalCount,
    VERIFIED_REVIEWER_COUNT: verifiedExperts.length,
    TECHNICALLY_APPROVED_PILOT_COUNT: technicallyApprovedPilots,
    PUBLISHED_PILOT_COUNT: publishedPilots,
    PUBLICATION_APPROVED_POST_COUNT: validApprovalCount,
    PUBLICATION_READY_POST_COUNT: draftQuality.filter((d) => d.publicationReady)
      .length,
    PUBLICATION_READY_PILOT_COUNT: pilotQuality.filter((d) => d.publicationReady)
      .length,
    PENDING_PILOT_REVIEW_ITEM_COUNT: pendingPilotReviewItemCount,
    PENDING_NON_PILOT_REVIEW_ITEM_COUNT: pendingNonPilotReviewItemCount,
    PUBLIC_INTERNAL_REVIEW_FIELD_HITS: publicInternalReviewFieldHits,
    PUBLIC_CREDENTIAL_FIELD_HITS: publicCredentialFieldHits,
    DUPLICATE_DRAFT_TITLES: titles.length - new Set(titles).size,
    DUPLICATE_DRAFT_DESCRIPTIONS: descs.length - new Set(descs).size,
    DUPLICATE_DRAFT_EXCERPTS: excerpts.length - new Set(excerpts).size,
    draftQuality,
    globalWarnings,
    pages,
  };

  const outDir = path.join(root, "seo-audits", "generated");
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, "seo-audit-report.json");
  fs.writeFileSync(outFile, JSON.stringify(report, null, 2), "utf8");
  console.log(
    `Wrote ${outFile} (${pages.length} pages, ${report.draftCount} drafts, ${globalWarnings.length} global warnings)`
  );
  console.log(
    `EXPERT_PROFILE_COUNT=${expertProfiles.length} APPROVAL_RECORD_COUNT=${blogTechnicalReviewApprovals.length} VALID_APPROVAL_COUNT=${validApprovalCount} TECHNICALLY_APPROVED_PILOT_COUNT=${technicallyApprovedPilots} PUBLISHED_PILOT_COUNT=${publishedPilots} PUBLICATION_READY_POST_COUNT=${report.PUBLICATION_READY_POST_COUNT} PENDING_PILOT_REVIEW_ITEM_COUNT=${pendingPilotReviewItemCount} CREDENTIAL_VERIFIED_EXPERT_COUNT=${credentialVerified}`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
