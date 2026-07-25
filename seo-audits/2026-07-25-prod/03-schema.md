# 03 — Schema (live)

**Score:** **89 / 100** (−1 vs 90 for sameAs dupe)

## Homepage JSON-LD types

`Organization`, `Plumber`, `WebSite`, `FAQPage`

## Signals

| Check | Result |
|-------|--------|
| GBP in `sameAs` | PASS (`maps.app.goo.gl/KsSSPtbQLBUNFqqT8`) |
| sameAs uniqueness | **FAIL** — URL duplicated twice |
| AggregateRating | absent (good) |
| Landings | Service + BreadcrumbList + FAQPage |
| ContactPage / AboutPage | present |

## Recommendations

1. Deduplicate Organization `sameAs` array (Medium).
2. Do not add AggregateRating until GBP reviews justify it.
3. FAQPage on commercial = Info for Google rich results; keep for AI citation.
