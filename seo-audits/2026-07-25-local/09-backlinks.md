# 09 — Backlinks (2026-07-25 local)

**Audit target:** http://localhost:3000  
**Domain scored (prod):** 724tesisatci.com  
**Verdict: INSUFFICIENT DATA** · **Score: n/a**

Localhost has **no public backlink profile**. On-site code changes do not alter referring domains. Numeric DA/PA / spam / velocity scores are **not fabricated**.

## What was checked

| Source | Result |
|--------|--------|
| Localhost backlinks | **N/A** — not a crawlable public origin for link equity |
| Moz / Bing Webmaster / DataForSEO | **Unavailable** this run (no credentials / MCP) |
| Common Crawl CDX (`CC-MAIN-2025-18`) | Domain **present** in crawl index: `http://724tesisatci.com/` (revisit/304) + robots probe historically 404 in that snapshot |
| Common Crawl Web Graph (referrers / PageRank) | **Not re-fetched live** this run; prior audit (`2026-07-24-post-health/backlinks-cc.json`, release `cc-main-2026-jan-feb-mar`) reported: in crawl **yes**, in rankings **no**, referring-domain sample **0** |

## Profile summary (prod domain only)

| Metric | Value |
|--------|-------|
| Referring domains (measured) | n/a |
| CC ranking / PageRank | Below threshold / n/a (prior) |
| Anchor mix / toxic / velocity | Not measurable |

→ Per methodology: **INSUFFICIENT DATA**, not a 0–100 health score. Do **not** read this as proven zero backlinks.

## Residual

1. Enable Moz and/or Bing Webmaster and/or DataForSEO for a scorable profile.
2. Build TR local citations + GBP-driven NAP links after GBP is live.
3. Re-check CC webgraph after next quarterly release once the domain crosses ranking threshold.
