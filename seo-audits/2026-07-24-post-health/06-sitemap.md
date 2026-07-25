# 06 — Sitemap (2026-07-24 post-health)

**URL:** https://724tesisatci.com/sitemap.xml  
**Score: 84 / 100** (prior 80)

## Pass / Fail

| Check | Severity | Result |
|-------|----------|--------|
| Valid XML urlset 0.9 | Critical | **PASS** |
| URL count ≤ 50k | Critical | **PASS** — **60** URLs |
| Non-200 / redirect URLs in sitemap | High | **PASS** (sampled money + hub URLs 200; vanity redirects stay out of sitemap) |
| Noindexed URLs listed | High | **PASS** — non-HQ districts remain out of indexable set |
| lastmod accuracy post-deploy | Medium | **PASS** — **59× `2026-07-24`**, **1× `2026-07-22`** |
| Duplicate `<loc>` | Medium | **PASS** (dedupe in `sitemapService`) |
| `priority` / `changefreq` | Info | **Present** — ignored by Google; harmless noise |
| Location quality gate | Gate | **PASS** — 1 district + 19 mahalle (20) ≪ 30 warning / 50 hard-stop |

## lastmod distribution

| Date | Count | Notes |
|------|------:|-------|
| `2026-07-24` | 59 | `CONTENT_LAST_UPDATED` + blog `updatedAt` aligned to deploy day |
| `2026-07-22` | 1 | `/blog/periyodik-tesisat-bakimi` only |

Prior audit (same day pre-health): 52× `2026-07-23`, 7× older dates — **lastmod hygiene materially improved**.

## Coverage mix (60)

| Bucket | Approx | Examples |
|--------|-------:|----------|
| Static / legal | 10 | `/`, `/hizmetler`, `/sss`, policies, mahalle hub |
| Service detail | 12 | `/hizmetler/su-kacagi-tespit-ve-onarim` … |
| Money landings | 10 | `/kagithane-su-kacagi-tespiti` … |
| District | 1 | `/hizmet-bolgeleri/kagithane` |
| Neighborhood | 19 | `/hizmet-bolgeleri/kagithane/*` |
| Blog | 8 | informational + local rehber posts |

## Orphan / cannibalization risk (sitemap lens)

| Pair | Risk | Mitigation |
|------|------|------------|
| `/kagithane-su-kacagi-tespiti` vs `/blog/kagithane-su-kacagi-tespiti` | Medium (slug overlap) | Blog SEO title is *belirtileri / rehber*; landing is transactional; blog → landing `relatedLinks` |
| `/kagithane-tikaniklik-acma` vs `/blog/kagithane-tikaniklik-acma` | Medium | Same pattern — keep blog informational |
| Hub ↔ mahalle ↔ landing | Low | Footer + breadcrumb + aside links reduce orphans |

No crawl orphans of money pages expected: landings appear in footer “Kağıthane Hizmetleri”, homepage local strip, and hub.

## Quality gates

- **30+ location pages:** not triggered (20).
- **50+ location pages:** hard-stop N/A.
- **Freeze:** do not add new district/mahalle URLs without uniqueness QA.

## Residual

1. Bump remaining blog lastmod (`periyodik-tesisat-bakimi`) to real publish/update.
2. Optional: drop `priority`/`changefreq` for cleaner XML (cosmetic).
3. Monitor GSC for blog↔landing query cannibalization on Kağıthane money terms.
