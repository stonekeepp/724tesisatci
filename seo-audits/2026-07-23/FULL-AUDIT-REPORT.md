# Full SEO Audit Report — 724tesisatci.com

**Date:** 2026-07-23  
**Method:** cursor-seo full audit (specialist agents + live HTML/robots/sitemap)  
**Business type:** Local service — Hybrid SAB plumbing (Kağıthane / İstanbul)  
**Stack:** Next.js SSR + Cloudflare  

**Limitations:** No Google API (PSI/CrUX/GSC/GA4), no Moz/Bing, DataForSEO MCP unavailable. Performance scores are lab/HTML estimates. Backlinks = Tier 0 (Common Crawl only).

---

## Executive Summary

### SEO Health Score: **73 / 100**

| Category | Weight | Score | Weighted |
|----------|-------:|------:|---------:|
| Technical SEO | 22% | 86 | 18.9 |
| Content Quality | 23% | 62 | 14.3 |
| On-Page / SXO | 20% | 81 | 16.2 |
| Schema | 10% | 69 | 6.9 |
| Performance (lab) | 10% | 71 | 7.1 |
| AI Search (GEO) | 10% | 58 | 5.8 |
| Images (est.) | 5% | 72 | 3.6 |
| **Total** | **100%** | | **73** |

**Strategic local pack readiness (separate):** Local SEO **46/100** — site tech is strong; off-site GBP/reviews/citations are the bottleneck.

### Top 5 critical / high issues

1. **Local pack gap** — No GBP `sameAs`/reviews/`geo`; weak citations (Local 46)
2. **Hard unsupported claims** — `%100`, `15+`, `10.000+`, “sertifikalı” without proof (Content)
3. **Legacy redirects → noindex districts** — Mecidiyeköy/Beşiktaş vanity URLs land on `noindex` pages (Technical)
4. **Schema `Service.url` on area pages** points to homepage, not canonical (Schema)
5. **Blog ↔ `/kagithane-*` cannibalization** + location-page gate at ~30 URLs (Sitemap/SXO)

### Top 5 quick wins

1. Soften `%100` / source or remove stats; clarify işçilik vs malzeme garantisi
2. Retarget legacy 308 vanity redirects to indexable Kağıthane URLs
3. Fix district/neighborhood `Service.url` + add `geo` + GBP `sameAs` when URL known
4. Add ItemList JSON-LD on `/hizmetler`; refresh sitemap `lastmod`
5. Stop expanding districts; deepen Kağıthane landings + 2–3 blogs instead

---

## Specialist scores

| # | Area | Score | Report |
|---|------|------:|--------|
| 01 | Technical | 86 | [01-technical.md](01-technical.md) |
| 02 | Content / E-E-A-T | 62 | [02-content.md](02-content.md) |
| 03 | Schema | 69 | [03-schema.md](03-schema.md) |
| 04 | Local | 46 | [04-local.md](04-local.md) |
| 05 | GEO / AI | 58 | [05-geo.md](05-geo.md) |
| 06 | Sitemap | 78 | [06-sitemap.md](06-sitemap.md) |
| 07 | Performance (lab) | 71 | [07-performance.md](07-performance.md) |
| 08 | SXO | 81 | [08-sxo.md](08-sxo.md) |
| 09 | Backlinks | n/a (Tier 0) | [09-backlinks.md](09-backlinks.md) |

---

## PERCEIVE → ANALYZE → VALIDATE → ACT (synthesis)

**Perceive:** SSR Kağıthane hub with allowlisted indexing, strong FAQ/schema coverage, AI crawlers allowed, `llms.txt` present. Off-site: CC presence but no link metrics; NAP phone mismatch vs some map listings; no GBP API verification.

**Analyze:** Technical/SXO are assets. Ranking ceiling for local pack is off-site trust (GBP, reviews, citations) plus claim hygiene and schema entity consistency. Programmatic district pages dilute quality without ranking upside while `noindex`.

**Validate:** Highest expected ROI = GBP + claim cleanup + redirect/schema fixes (falsifiable via Map Pack / Rich Results / GSC). Expanding more location URLs fails uniqueness gate — do not.

**Act:** See [ACTION-PLAN.md](ACTION-PLAN.md).

---

## Category highlights

### Technical (86) — solid
Crawlability/SSR/HTTPS/HSTS strong. Kağıthane allowlist intentional. Gaps: CSP, IndexNow, stale lastmod, `/hizmetler` without JSON-LD, vanity redirects into noindex.

### Content (62) — needs trust
Soft claims work on newer landings; homepage/trust blocks still use hard numbers. Thin non-Kağıthane districts; blogs short; weak case-study/E-E-A-T proofs.

### Schema (69) — almost there
Plumber + FAQ + Breadcrumb good. Fix area `Service.url`, unify Organization/Plumber `@id`, add `geo`/`sameAs`, normalize phone.

### Local (46) — main growth lever
On-page Kağıthane structure is strong; GBP/reviews/citations are not. Phone format inconsistency across schema blocks.

### GEO (58)
Crawler access excellent; citability and brand mentions weak. FAQ answers often too short for AI citation chunks.

### Sitemap (78) / SXO (81)
60 URLs sane; freeze location growth. Homepage intent fit good; SERP CTR may lag phone-forward competitors.

### Performance lab (71)
Homepage 74 / Kağıthane 68. Hero LCP strong on home; local hero still `loading="lazy"`; logo+hero dual preload; ~700KB JS → INP risk; cookie banner covers mobile CTAs post-hydration. Screenshots: `screenshots/`.

### Backlinks
Insufficient data — configure Moz/Bing/DataForSEO for a real profile.

---

## Agents / artifacts

Specialist outputs live in this folder. Screenshots (if any): `screenshots/`.
