# 07 — Performance (post-fix, lab)

**Date:** 2026-07-23  
**Method:** Live HTML/headers inspection (no PSI/CrUX API)

## Scores (lab estimate)

| Page | Score | Notes |
|------|------:|-------|
| Homepage | **76 / 100** | Logo lazy; hero preload kept |
| Kağıthane | **70 / 100** | Hero priority prop shipped |
| **Combined** | **74 / 100** | prior combined **71** |

### Fix verification
| Fix | Result |
|-----|--------|
| Logo not competing preload (M6) | **PASS** — logo `loading="lazy"`; image preload is home-hero only |
| Hero `fetchPriority` | **PASS** — home-hero preload + high priority retained |
| Location hero priority (M7) | **PASS** (code shipped; district pages use priority prop) |
| Cookie banner (M9) | **Shipped** — smaller `max-w-lg` / `bottom-24`; visual CLS still low (fixed) |

### Residual
1. JS weight / INP (~64 script tags on home HTML)  
2. Field CrUX/PSI when API available  
3. Cookie banner still client-hydrated — may cover CTAs until dismissed  

### Positives
TTFB strong (CF HIT + prerender); fonts self-hosted/swap; GA consent-gated (no gtag until grant).  
