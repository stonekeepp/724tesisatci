# 01 — Technical SEO (2026-07-24)

**Target:** https://724tesisatci.com  
**Artifacts:** homepage, robots, sitemap, headers, IndexNow key, redirect smoke

## Score: **93 / 100** (prior post-fix 90)

| Category | Status | Notes |
|----------|--------|-------|
| Crawlability | Pass | robots Allow; AI bots allowed; sitemap linked |
| Indexability | Pass | Money pages indexable; district allowlist intact |
| Security | Pass+ | HSTS + **CSP Report-Only** live |
| IndexNow | Pass | Key file 200, body matches key |
| Redirects | Pass | Vanity → `/hizmet-bolgeleri/kagithane` (308) |

### Fix verification
| Item | Result |
|------|--------|
| IndexNow `/{key}.txt` | **PASS** |
| CSP Report-Only header | **PASS** |
| Vanity → Kağıthane | **PASS** |
| Sitemap 60 URLs | **PASS** (52× lastmod 2026-07-23) |

### Residual
- CSP still Report-Only (enforce later)  
- 7 sitemap entries still `2026-07-09`  
- Homepage HTML large (~177KB), many scripts → INP watch  
