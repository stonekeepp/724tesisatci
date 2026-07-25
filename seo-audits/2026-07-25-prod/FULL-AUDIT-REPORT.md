# Full SEO Audit Report — 724tesisatci.com (LIVE)

**Date:** 2026-07-25  
**Method:** cursor-seo full audit — live production fetch (`_live_audit.py`) + specialist synthesis  
**URL:** https://724tesisatci.com  
**Business:** Local Service / SAB plumbing — Kağıthane, İstanbul  
**Compared to:** [`../2026-07-24-post-health/FULL-AUDIT-REPORT.md`](../2026-07-24-post-health/FULL-AUDIT-REPORT.md) (health **83**)

**Limitations:** No GSC/CrUX/GA4; DataForSEO MCP error; PSI mobile **429**. Perf = prior lab + HTML signals. Backlinks Tier 0.

**Deploy note:** Branch `cursor/kagithane-keyword-ranking-lift` is **not live**. Live meta description still pre-lift (“Kağıthane merkezli tesisatçı…”). FAQ depth + GBP sameAs + sitemap `2026-07-25` **are** live.

---

## Executive Summary

### SEO Health Score: **84 / 100** (+1 vs post-health 83)

| Category | Weight | Prior (07-24 post) | Now | Weighted |
|----------|-------:|-------------------:|----:|---------:|
| Technical SEO | 22% | 94 | **94** | 20.7 |
| Content Quality | 23% | 78 | **81** | 18.6 |
| On-Page / SXO | 20% | 84 | **84** | 16.8 |
| Schema | 10% | 90 | **89** | 8.9 |
| Performance (lab) | 10% | 77 | **77** | 7.7 |
| AI Search (GEO) | 10% | 76 | **77** | 7.7 |
| Images (est.) | 5% | 75 | **75** | 3.8 |
| **Total** | **100%** | **83** | **84** | **~84** |

**Local pack readiness (separate):** **58 / 100** — still review/citation-gated.

### Live verification

| Check | Result |
|-------|--------|
| Homepage 200 + HTTPS + HSTS | PASS |
| Title `Kağıthane Tesisatçı \| …` | PASS |
| GBP `sameAs` Maps short link | PASS (duplicated in array) |
| Primary home FAQ ~126–150 words | PASS (was ~70–92) |
| Saha notu hub + su/tıkanıklık/kombi | PASS |
| Sitemap 60 URLs / lastmod mostly 2026-07-25 | PASS |
| IndexNow key file | PASS |
| Ranking-lift meta / extra hub notes / new PAA FAQs | **NOT LIVE** |
| AggregateRating theater | Absent (good) |
| Soft claims (no %100 / Türkiye’nin…) | PASS |
| PSI lab CWV | Rate-limited (429) |

### Top 5 critical / high issues

1. **GBP reviews + photos** — Map Pack / local pack still the growth ceiling  
2. **Ranking-lift not deployed** — money-URL concentration + hub Experience still on branch  
3. **sameAs GBP URL duplicated** — clean schema array  
4. **CSP still Report-Only** — enforce after observation  
5. **Citations NAP** — off-site consistency unknown  

### Top 5 quick wins

1. Merge/deploy `cursor/kagithane-keyword-ranking-lift` → Cloudflare purge → `npm run ping:indexnow`  
2. Ask for Google reviews after every completed Kağıthane job  
3. Deduplicate Organization `sameAs`  
4. Fix `llms.txt` hub label → money intent on `/`  
5. Retry PSI / add CrUX when API available  

---

## Specialist scores

| # | Area | Score | Report |
|---|------|------:|--------|
| 01 | Technical | **94** | [01-technical.md](01-technical.md) |
| 02 | Content | **81** | [02-content.md](02-content.md) |
| 03 | Schema | **89** | [03-schema.md](03-schema.md) |
| 04 | Local pack | **58** | [04-local.md](04-local.md) |
| 05 | GEO | **77** | [05-geo.md](05-geo.md) |
| 06 | Sitemap | **86** | [06-sitemap.md](06-sitemap.md) |
| 07 | Performance | **77** | [07-performance.md](07-performance.md) |
| 08 | SXO | **84** | [08-sxo.md](08-sxo.md) |
| 09 | Backlinks | n/a | [09-backlinks.md](09-backlinks.md) |

Artifacts: `signals.json`, page HTML dumps, `robots.txt`, `sitemap.xml`, `llms.txt`, `_live_audit.py`

---

## Synthesis (PERCEIVE → ACT)

**Perceive:** Live site is healthy technically; content FAQ depth from prior commit is visible; ranking-lift PR not on prod; Map Pack still off-site.

**Analyze:** +1 health from FAQ length. Local pack unchanged. Next on-site delta = deploy ranking-lift + schema sameAs fix. Next real jump = reviews.

**Validate:** Falsify by GSC impressions for `kağıthane tesisatçı` (home vs hub) 2–4 weeks post-deploy; GBP review count weekly.

**Act:** See [ACTION-PLAN.md](ACTION-PLAN.md).

---

## Compared deltas

| Item | 07-24 post-health | 07-25 live |
|------|-------------------|------------|
| Health | 83 | **84** |
| Home primary FAQ words | ~70–92 | **~126–150** |
| Ranking-lift | n/a | coded, **not deployed** |
| sameAs dupe | noted | still present |
| Sitemap lastmod | 2026-07-24 | **2026-07-25** majority |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community  
🆓 Free  → https://www.skool.com/ai-marketing-hub  
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
