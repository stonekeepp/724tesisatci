# 01 — Technical SEO (live)

**URL:** https://724tesisatci.com  
**Date:** 2026-07-25  
**Score:** **94 / 100**

## Crawl / index

| Check | Result |
|-------|--------|
| HTTPS | PASS |
| HSTS preload | PASS |
| robots.txt | 200, Sitemap declared, no Disallow:/ |
| AI bots | not blocked (not_mentioned) |
| sitemap.xml | 200, **60** URLs, no localhost |
| lastmod | 52× `2026-07-25`, 7× `2026-07-24`, 1× `2026-07-25T10:00` |
| IndexNow key file | PASS (match) |
| Canonical home | `https://724tesisatci.com` (no trailing slash) |
| Şişli district | `noindex, follow` (thin OK) |
| CSP | Report-Only only (not enforce) |
| Security headers | HSTS, XCTO, XFO, Referrer-Policy, Permissions-Policy |

## Redirects (sample)

| Path | Status |
|------|--------|
| www → apex | 301 (CF) |
| `/hizmet-bolgeleri/mecidiyekoy` | **404** |
| `/besiktas` | **404** |

## Notes

- Cloudflare `cf-cache-status: HIT` on homepage; post-deploy purge still required for new releases.
- Ranking-lift branch (`cursor/kagithane-keyword-ranking-lift`) **not live** yet (meta desc still pre-lift).
