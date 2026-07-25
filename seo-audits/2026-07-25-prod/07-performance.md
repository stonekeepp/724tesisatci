# 07 — Performance (live)

**Score:** **77 / 100** (lab estimate; PSI **429** rate-limited)

## HTML signals

| Signal | Home |
|--------|------|
| HTML bytes | ~from fetch (Next prerender HIT) |
| External scripts | present (GTM/analytics likely) |
| Priority/LCP hint | fetchpriority patterns used historically |
| CF cache | HIT |

## Limitations

- PageSpeed Insights returned HTTP 429 this run.
- No CrUX / GSC field data (Google API not configured).
- Prior lab estimate retained; deferred HeaderNav/FooterNav still assumed live from `8845f41`.

## Recommendations

1. Retry PSI with API key / backoff.
2. Keep third-party scripts minimal.
3. Field CWV when CrUX available.
