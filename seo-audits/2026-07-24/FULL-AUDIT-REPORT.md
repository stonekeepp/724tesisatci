# Full SEO Audit Report — 724tesisatci.com

**Date:** 2026-07-24  
**Method:** cursor-seo full audit (live production)  
**URL:** https://724tesisatci.com  
**Business:** Hybrid SAB plumbing — Kağıthane / İstanbul  
**Compared to:** [`../2026-07-23-post-fix/FULL-AUDIT-REPORT.md`](../2026-07-23-post-fix/FULL-AUDIT-REPORT.md) (health **78**)  
**Recent commits verified:** `adb48db`, `e2aeb7b`

**Limitations:** No GSC/CrUX/GA4, Moz/Bing, DataForSEO. Perf = lab/HTML. Backlinks Tier 0.

---

## Executive Summary

### SEO Health Score: **80 / 100** (+2 vs prior 78)

| Category | Weight | Prior (07-23) | Now | Weighted |
|----------|-------:|--------------:|----:|---------:|
| Technical SEO | 22% | 90 | **93** | 20.5 |
| Content Quality | 23% | 70 | **72** | 16.6 |
| On-Page / SXO | 20% | 82 | **83** | 16.6 |
| Schema | 10% | 82 | **83** | 8.3 |
| Performance (lab) | 10% | 74 | **75** | 7.5 |
| AI Search (GEO) | 10% | 65 | **72** | 7.2 |
| Images (est.) | 5% | 75 | **75** | 3.8 |
| **Total** | **100%** | **78** | **80** | **80** |

**Local pack readiness (separate):** **52 / 100** (unchanged) — GBP/reviews still the bottleneck.

### Fix verification (live 2026-07-24)

| Fix | Result |
|-----|--------|
| IndexNow key URL + body | **PASS** |
| CSP Report-Only header | **PASS** |
| Landing FAQ “6 ay” (+ schema) | **PASS** |
| `llms.txt` markdown links + H1 | **PASS** |
| Cookie `role="region"` (client code) | **PASS** (not in SSR HTML — expected) |
| Prior: geo, Service.url, redirects, logo lazy, ItemList | **PASS** |
| GBP `sameAs` | **FAIL** |

### Top remaining issues

1. **No Google Business Profile / `sameAs` / reviews**  
2. **JS weight / INP** on homepage  
3. **CSP enforce** (still report-only)  
4. **Location freeze** — don’t expand thin districts  
5. **Backlink / citation** data still unknown  

### Top quick wins now

1. GBP URL → `siteSettings.googleBusinessProfileUrl` / `sameAs`  
2. Ping IndexNow sitemap once via `POST /api/indexnow` `{ "sitemap": true }`  
3. 2–3 Kağıthane job notes  
4. Align remaining 7 sitemap lastmods  
5. Optional: CSP enforce after watching reports  

---

## Specialist scores

| # | Area | Prior | Now | Report |
|---|------|------:|----:|--------|
| 01 | Technical | 90 | **93** | [01-technical.md](01-technical.md) |
| 02 | Content | 70 | **72** | [02-content.md](02-content.md) |
| 03 | Schema | 82 | **83** | [03-schema.md](03-schema.md) |
| 04 | Local | 52 | **52** | [04-local.md](04-local.md) |
| 05 | GEO | 65 | **72** | [05-geo.md](05-geo.md) |
| 06 | Sitemap | 80 | **80** | [06-sitemap.md](06-sitemap.md) |
| 07 | Performance | 74 | **75** | [07-performance.md](07-performance.md) |
| 08 | SXO | 82 | **83** | [08-sxo.md](08-sxo.md) |
| 09 | Backlinks | n/a | n/a | [09-backlinks.md](09-backlinks.md) |

---

## Synthesis

On-site technical/GEO floor is solid after IndexNow, CSP-RO, llms markdown, and landing warranty. Incremental +2 to health. Ranking ceiling for local pack remains **off-site** (GBP). See [ACTION-PLAN.md](ACTION-PLAN.md).
