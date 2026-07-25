# ACTION PLAN — localhost audit (2026-07-25)

**Local health:** 82/100 · **Prod reference:** 83/100 · **Local pack (on-site):** 58/100  

Local audit validates code; production score remains the ranking-relevant number.

---

## Critical (deploy)

| # | Action |
|---|--------|
| C1 | Production builds: set `NEXT_PUBLIC_SITE_URL=https://724tesisatci.com` (canonical + sitemap hosts) |
| C2 | Never deploy a build whose `/sitemap.xml` locs are `localhost` |

---

## High (product SEO — same as prod)

| # | Action |
|---|--------|
| H1 | Google reviews on GBP |
| H2 | Primary FAQs → ~140+ words |
| H3 | Job-note photos |
| H4 | Freeze thin district URL expansion |

---

## Medium

| # | Action |
|---|--------|
| M1 | Deduplicate Organization `sameAs` |
| M2 | Align remaining sitemap lastmod `2026-07-22` |
| M3 | CSP enforce after Report-Only window |
| M4 | Prod IndexNow sitemap ping after deploy |

---

## Done / verified on localhost

GBP sameAs, saha notları, soft claims, 6 ay FAQ, IndexNow key file, llms.txt, security headers from next.config, content parity with `8845f41` / post-health.
