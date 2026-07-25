# 07 — Performance lab (2026-07-24 post-health)

**URL:** https://724tesisatci.com  
**Combined score: 77 / 100** (prior 75)  
**Method:** HTML/source heuristics + Next.js headers. PSI/CrUX not available (rate-limit / no field API).

## Environment signals

| Signal | Evidence |
|--------|----------|
| Next.js SSR / prerender | `x-nextjs-prerender: 1,1`, `x-nextjs-cache: HIT` |
| Edge cache | Cloudflare `cf-cache-status: HIT` |
| HTML delivery | Fast TTFB path via CF; Age header present |

## Fix verification (post-health)

| Item | Result |
|------|--------|
| `HeaderNav` `next/dynamic` (`ssr: true`) | **PASS** — streamed slot `B:0` / chunk `3391.*.js` |
| `FooterNavSections` `next/dynamic` (`ssr: true`) | **PASS** — streamed slot `B:1` / chunk `7421.*.js` |
| `HeaderMobileMenu` dynamic | **PASS** — deferred mobile chrome |
| Logo `priority={false}` / `loading="lazy"` | **PASS** — no logo vs LCP race |
| Home LCP hero early discoverability | **PASS** — `<link rel="preload" as="image" … home-hero.webp … fetchPriority="high">` |
| Landing LCP hero `priority` | **PASS** — e.g. su-kaçağı hero preloaded + `priority:true` in RSC |
| Polyfills | **PASS** — `polyfills-*.js` with `noModule=""` (legacy-only) |
| Cookie banner `role="region"` | **Code PASS** — `AnalyticsClient` `<aside role="region" aria-labelledby=…>`; hydrates client-side (absent from raw SSR until consent pending) |

## Heuristic CWV notes

| Metric | Heuristic read |
|--------|----------------|
| LCP | Favorable: hero preload + high fetch priority; logo deprioritized |
| CLS | Favorable: fixed header heights; hero `fill` with sized container |
| INP / TBT | Residual risk: multiple app chunks + Material Symbols + GA consent path + CF beacon |
| FCP | Good on HIT cache; font preload for body + subset icons |

## Residual / backlog

1. Deeper JS reduction beyond nav split (home still multi-chunk).
2. Field CrUX / PSI when quota available — lab score is estimate only.
3. Cookie banner is bottom-fixed on mobile (`bottom-24`) — verify it does not compete with sticky call bar for INP/tap targets (a11y OK via `role="region"`).

## Score rationale

+2 vs prior 75 from confirmed HeaderNav/FooterNavSections code-splitting on live HTML while retaining LCP hero preload and logo-lazy wins. Cap remains mid-70s until field CWV and further main-thread work.
