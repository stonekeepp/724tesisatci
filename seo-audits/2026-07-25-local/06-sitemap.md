# 06 — Sitemap (2026-07-25 local)

**URL fetched:** http://localhost:3000/sitemap.xml  
**HTTP:** 200 · `Content-Type: application/xml`  
**Score: 84 / 100** (prior prod post-health: 84)  
**Environment:** local Next.js — `<loc>` hosts reflect `getSiteUrl()` / `NEXT_PUBLIC_SITE_URL`

## Pass / Fail

| Check | Severity | Result |
|-------|----------|--------|
| Valid XML urlset 0.9 | Critical | **PASS** |
| URL count ≤ 50k | Critical | **PASS** — **60** URLs |
| HTTPS production hosts | High | **N/A (local)** — **60/60** `<loc>` use `http://localhost:3000` (0× `724tesisatci.com`) |
| Non-200 / redirect URLs | High | **PASS (local)** — sampled money/hub pages 200 in this audit set |
| Noindexed URLs listed | High | **PASS** — non-HQ districts stay out of indexable set |
| lastmod accuracy | Medium | **PASS** — **59× `2026-07-24`**, **1× `2026-07-22`** |
| Duplicate `<loc>` | Medium | **PASS** |
| `priority` / `changefreq` | Info | **Present** (60 each) — ignored by Google; cosmetic noise |
| robots.txt Sitemap | Medium | **PASS (local)** — `Sitemap: http://localhost:3000/sitemap.xml` |
| Location quality gate | Gate | **PASS** — 1 district + 19 mahalle (20) ≪ 30 warning / 50 hard-stop |

## Host note (critical for deploy)

| Host in `<loc>` | Count |
|-----------------|------:|
| `localhost` (`http://localhost:3000/...`) | **60** |
| `724tesisatci.com` | **0** |

Expected for this audit: `NEXT_PUBLIC_SITE_URL` unset → `getSiteUrl()` falls back to `http://localhost:3000`. **Production deploy must set `NEXT_PUBLIC_SITE_URL=https://724tesisatci.com`** so sitemap + robots emit public HTTPS hosts. Shipping localhost locs to Google would be a Critical failure.

## lastmod distribution

| Date | Count | Notes |
|------|------:|-------|
| `2026-07-24` | 59 | Content + most blog `updatedAt` |
| `2026-07-22` | 1 | `/blog/periyodik-tesisat-bakimi` only |

Same hygiene as prod post-health (2026-07-24).

## Coverage mix (60)

| Bucket | Approx | Examples |
|--------|-------:|----------|
| Static / legal | 10 | `/`, `/hizmetler`, `/sss`, policies, mahalle hub |
| Service detail | 12 | `/hizmetler/su-kacagi-tespit-ve-onarim` … |
| Money landings | 10 | `/kagithane-su-kacagi-tespiti` … |
| District | 1 | `/hizmet-bolgeleri/kagithane` |
| Neighborhood | 19 | `/hizmet-bolgeleri/kagithane/*` |
| Blog | 8 | informational + local rehber posts |

## Quality gates

- **30+ location pages:** not triggered (20).
- **50+ location pages:** hard-stop N/A.
- **Freeze:** do not add new district/mahalle URLs without uniqueness QA.

## Residual

1. Confirm prod env emits `https://724tesisatci.com/...` in sitemap + robots (not localhost).
2. Bump remaining blog lastmod (`periyodik-tesisat-bakimi`) when content actually updates.
3. Optional: drop `priority`/`changefreq` (cosmetic).
