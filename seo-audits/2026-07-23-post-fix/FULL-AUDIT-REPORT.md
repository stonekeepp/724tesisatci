# Full SEO Audit Report — 724tesisatci.com (post-fix)

**Date:** 2026-07-23  
**Method:** cursor-seo full audit against live production  
**URL:** https://724tesisatci.com  
**Business type:** Local service — Hybrid SAB plumbing (Kağıthane / İstanbul)  
**Compared to:** [`../2026-07-23/FULL-AUDIT-REPORT.md`](../2026-07-23/FULL-AUDIT-REPORT.md) (pre-fix health **73**)  
**Deployed fix commit:** `bc9d845`

**Limitations:** No Google API (PSI/CrUX/GSC/GA4), no Moz/Bing, DataForSEO unavailable. Performance = lab/HTML. Backlinks = Tier 0 only.

---

## Executive Summary

### SEO Health Score: **78 / 100** (+5 vs prior 73)

| Category | Weight | Prior | Now | Weighted |
|----------|-------:|------:|----:|---------:|
| Technical SEO | 22% | 86 | **90** | 19.8 |
| Content Quality | 23% | 62 | **70** | 16.1 |
| On-Page / SXO | 20% | 81 | **82** | 16.4 |
| Schema | 10% | 69 | **82** | 8.2 |
| Performance (lab) | 10% | 71 | **74** | 7.4 |
| AI Search (GEO) | 10% | 58 | **65** | 6.5 |
| Images (est.) | 5% | 72 | **75** | 3.8 |
| **Total** | **100%** | **73** | **78** | **78** |

**Local pack readiness (separate):** **52 / 100** (prior 46) — geo/schema up; GBP/reviews still the bottleneck.

### Fix verification (live)

| ID | Fix | Live result |
|----|-----|-------------|
| C2 | Soften `%100` / `10.000+`; keep 15+/sertifikalı | **PASS** |
| C3 | Vanity redirects → Kağıthane | **PASS** (308 → `/hizmet-bolgeleri/kagithane`) |
| H1 | Area `Service.url` = page canonical | **PASS** (incl. Çeliktepe) |
| H2 | Org `@id` + phone + geo | **PASS**; GBP `sameAs` **FAIL** (no URL) |
| H3 | 6 ay işçilik garanti | **PASS** home/district; **PARTIAL** local landing FAQ |
| H4 | `/hizmetler` ItemList + Breadcrumb | **PASS** |
| M1 | Sitemap lastmod refresh | **PASS** (52× 2026-07-23) |
| M6 | Logo not LCP-competing | **PASS** (`loading="lazy"`) |
| M7 | Location hero priority | **PASS** (shipped) |
| M9 | Cookie banner compact | **PASS** (shipped) |
| M11 | `llms.txt` landings + coords | **PASS** |

### Top 5 remaining issues

1. **No GBP `sameAs` / reviews** — Map Pack ceiling  
2. **Local landing FAQs missing “6 ay” warranty** (hub has it)  
3. **No IndexNow / no CSP**  
4. **JS weight / INP risk** on homepage  
5. **Location-page gate** — freeze new districts; deepen Kağıthane content  

### Top 5 quick wins now

1. Add Google Business Profile URL → `sameAs`  
2. Propagate 6 ay warranty into local landing FAQ data  
3. IndexNow key + ping on publish  
4. 2–3 first-hand Kağıthane job notes  
5. CSP report-only  

---

## Specialist scores

| # | Area | Prior | Now | Report |
|---|------|------:|----:|--------|
| 01 | Technical | 86 | **90** | [01-technical.md](01-technical.md) |
| 02 | Content | 62 | **70** | [02-content.md](02-content.md) |
| 03 | Schema | 69 | **82** | [03-schema.md](03-schema.md) |
| 04 | Local | 46 | **52** | [04-local.md](04-local.md) |
| 05 | GEO | 58 | **65** | [05-geo.md](05-geo.md) |
| 06 | Sitemap | 78 | **80** | [06-sitemap.md](06-sitemap.md) |
| 07 | Performance | 71 | **74** | [07-performance.md](07-performance.md) |
| 08 | SXO | 81 | **82** | [08-sxo.md](08-sxo.md) |
| 09 | Backlinks | n/a | n/a | [09-backlinks.md](09-backlinks.md) |

---

## Synthesis (PERCEIVE → ACT)

**Perceive:** Live deploy reflects `bc9d845`. Schema geo/entity graph, redirects, claims, `/hizmetler` JSON-LD, llms.txt, LCP logo fix confirmed.

**Analyze:** On-site technical/schema floor is now strong. Ranking ceiling for local pack remains **off-site trust** (GBP, reviews, citations).

**Validate:** Highest ROI next = GBP URL + landing FAQ warranty parity + IndexNow — falsifiable via Map Pack / Rich Results / Bing.

**Act:** See [ACTION-PLAN.md](ACTION-PLAN.md).

---

## Artifacts

Fetched HTML/headers/sitemap/llms + `signals.json` in this folder.
