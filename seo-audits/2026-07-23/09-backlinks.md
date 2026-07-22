# 09 — Backlink Profile (Tier 0 / Free Sources)

**Site:** https://724tesisatci.com  
**Business type:** Local plumbing / home services (Kağıthane-primary, İstanbul)  
**Audit date:** 2026-07-23  
**Tier:** 0 — Common Crawl + homepage parse only  
**Validator:** `validate_backlink_report.py` → **PASS** (1 info note)

---

## Verdict: **INSUFFICIENT DATA** (no numeric health score)

Free sources confirm the domain is **present in Common Crawl** but **below the ranking threshold**, with **no usable referring-domain sample**. Moz, Bing Webmaster, and DataForSEO were not available, so DA/PA, spam score, anchor distribution, link velocity, and toxic-link ratio cannot be scored.

Do **not** interpret this as “zero authority” — it means the free graph does not yet expose ranking/edge metrics for this domain.

---

## Data sources & limitations

| Source | Status | Confidence | Freshness |
|--------|--------|------------|-----------|
| Common Crawl Web Graph (`cc-main-2026-jan-feb-mar`) | Available | 0.50 (domain-level) | Quarterly |
| Homepage HTML parse (`homepage-live.html` / raw fetch) | Available | 0.95 (observed) | Live fetch 2026-07-22 |
| Backlink verification crawler | Skipped | — | No known inbound URL list provided |
| Moz Link Explorer | Unavailable | — | Not configured |
| Bing Webmaster Tools | Unavailable | — | Not configured |
| DataForSEO Backlinks | Unavailable | — | MCP not available |

**Scoring factors with data:** 1 / 7 (CC presence / below-threshold only)  
**Skipped:** domain quality distribution, anchor naturalness, toxic ratio, link velocity, follow/nofollow mix, geographic relevance  

→ Per methodology: report **INSUFFICIENT DATA**, not a 0–100 health score.

---

## Common Crawl metrics

**Source:** Common Crawl Web Graph (confidence: 0.50)  
**Release:** `cc-main-2026-jan-feb-mar`  
**Fetched:** 2026-07-22T22:14:09Z

| Metric | Value | Rating | Notes |
|--------|-------|--------|-------|
| In CC crawl | Yes | Pass | Domain appears in vertices |
| In CC rankings | No | Warn | Below ranking threshold (small/new for PR rankings) |
| PageRank | n/a | — | Not in rankings file |
| PageRank rank | n/a | — | — |
| Harmonic centrality | n/a | — | — |
| Top referring domains (sample) | 0 | Fail* | No edge sample returned |
| Referring domains sample size | 0 | Fail* | *Fail for *visibility in free graph*, not proven zero backlinks |

**CC note (verbatim):** Domain found in CC crawl but below ranking threshold (too small/new for PageRank rankings).

---

## Homepage outbound / platform signals

**Source:** Parsed HTML (confidence: 0.95)  
**Platform:** Next.js (signals: `/_next/`, `x-powered-by: Next.js`); CDN: Cloudflare  

| Signal | Value |
|--------|-------|
| Internal `<a>` links (approx.) | 91 |
| External outbound unique URLs | 1 |
| Outbound hosts | `wa.me` |
| Nofollow outbound | 0 |
| Reciprocal patterns | Not testable (no verified inbound set) |

**Observed outbound:**

| Host | URL | Rel | Role |
|------|-----|-----|------|
| wa.me | `https://wa.me/905323468769?...` | `noopener noreferrer` | WhatsApp CTA (conversion, not SEO equity) |

No directory, citation, social profile, or partner outbound links were observed on the homepage HTML.

---

## What we could **not** measure

- Referring domain count / quality (Moz / DataForSEO)
- Anchor text mix vs local-service benchmarks (branded 45–60% target)
- Spam / toxic link ratio
- New vs lost link velocity
- Follow vs nofollow inbound mix
- Country / language relevance of referrers
- Live verification of claimed citations (no seed link list)

---

## Recommendations (priority)

### High

1. **Enable a higher-tier source** so the next audit can score the profile: free Moz API key (~2,500 rows/month) and/or Bing Webmaster + site ownership, or DataForSEO MCP. Without this, backlink health remains opaque.
2. **Build local citation / NAP links** for Kağıthane + İstanbul home-services directories, chamber listings, and neighborhood guides — matches local-service intent better than generic guest posts.
3. **Earn editorial links** from useful assets: process explainers (su kaçağı tespiti methods), before/after case studies, mahalle-level guides with unique evidence — content that other local sites can cite.

### Medium

4. **GBP + maps ecosystem** (covered in local SEO): consistent NAP and profile URLs often seed the first referring domains for new local sites.
5. **Selective partnerships:** insurance partners, property managers, hardware suppliers — one editorial link each beats mass directory spam.
6. **Avoid** exact-match anchor campaigns, PBNs, and foreign-language blog networks (toxic patterns for local services).

### Low

7. Re-run Common Crawl after the next quarterly release; once the domain crosses the ranking threshold, free PR / referrer samples become more useful.
8. If you maintain a list of known citations, run `/seo backlinks verify` to confirm live outbound `<a href>` presence.

---

## Upgrade path

| Goal | Action |
|------|--------|
| DA / PA / spam score | Configure Moz (`moz_api_key`) |
| Inbound link inventory (owned site) | Bing Webmaster API |
| Full profile + velocity + toxic | DataForSEO Backlinks MCP |
| Confirm known links | `verify_backlinks.py` with a seed URL file |

---

## Artifacts

| File | Purpose |
|------|---------|
| `backlinks-auth.json` | Tier / credential check |
| `backlinks-cc.json` | Common Crawl raw metrics |
| `backlinks-homepage.json` | Raw homepage fetch metadata |
| `backlinks-outbound.json` | Parsed outbound links |
| `backlinks-report-data.json` | Validator input |
