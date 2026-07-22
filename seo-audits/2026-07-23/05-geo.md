# GEO / AI Search Readiness — 724tesisatci.com

**URL:** https://724tesisatci.com/  
**Date:** 2026-07-23  
**Scope:** Homepage + Kağıthane local landings (SAB / local home services)  
**Frame:** Google Search Central treats “GEO/AEO” as SEO fundamentals applied to AI surfaces — not a separate ranking system. `llms.txt` is reported for optionality; it is **not** a confirmed citation lever (Mueller / Illyes 2025; SE Ranking / OtterlyAI).

---

## GEO Readiness Score: **58 / 100**

| Dimension | Weight | Score | Weighted |
|-----------|--------|------:|---------:|
| Citability | 25% | 55 | 13.8 |
| Structural readability | 20% | 85 | 17.0 |
| Multi-modal content | 15% | 45 | 6.8 |
| Authority & brand signals | 20% | 25 | 5.0 |
| Technical accessibility | 20% | 78 | 15.6 |
| **Total** | **100%** | | **58** |

### Platform breakdown (estimated)

| Platform | Score | Rationale |
|----------|------:|-----------|
| Google AI Overviews | **62** | SSR + strong local structure; AIO still leans on organic ranking pages |
| ChatGPT (web) | **45** | Weak Wikipedia/Reddit/brand-mention footprint; Bing index / citations thin |
| Perplexity | **48** | Same brand-mention gap; FAQ/Q headings help if indexed |
| Bing Copilot | **50** | SSR helps; Bing Places / IndexNow not evidenced |

---

## 1. AI crawler access (`robots.txt`)

Live file allows major AI search bots explicitly:

| Crawler | Status |
|---------|--------|
| `*` | Allow `/` |
| GPTBot | Allow |
| ChatGPT-User | Allow |
| Google-Extended | Allow |
| anthropic-ai | Allow |
| ClaudeBot | Allow |
| PerplexityBot | Allow |
| Applebot-Extended | Allow |
| **OAI-SearchBot** | **Not named** — inherits `*` Allow (OK; optional explicit Allow) |
| CCBot / Bytespider | Not named — currently allowed via `*` |

**Recommendation:** Keep search bots allowed. Optionally add explicit `OAI-SearchBot` Allow. Decide intentionally whether to block training-only bots (`CCBot`, `Bytespider`) — does not improve citations by itself.

Sitemap declared: `https://724tesisatci.com/sitemap.xml` (60 URLs in captured sitemap).

---

## 2. `llms.txt` status

| Check | Result |
|-------|--------|
| Present at `/llms.txt` | **Yes** |
| Well-formed markdown | Yes (title, NAP, primary area, main pages) |
| Citation-ranking weight | **None** per primary-source evidence (do not treat as SEO win) |
| Completeness | Partial — lists hubs but **omits** Kağıthane landings (`/kagithane-*`), service URLs, SSS, blog |

NAP in `llms.txt` matches site footer/contact (good consistency for agents).

**Optional improve (optionality only):** add key landings + one-line facts (hours, phone, primary district).

**RSL 1.0:** Not detected.

---

## 3. Server-side rendering

- Next.js App Router with JSON-LD in initial HTML (`application/ld+json` present in saved + live homepage).
- Main copy, FAQs, service lists, and local landing sections are crawlable without JS.
- FAQ accordion is dynamic-imported with `{ ssr: true }` — content still in HTML/schema.

**Verdict:** Strong for AI crawlers that do not execute JavaScript.

---

## 4. Passage-level citability

**Target:** self-contained ~134–167 word answer blocks with a direct answer in the first 40–60 words.

### Homepage
- Hero defines Kağıthane-first 7/24 tesisat clearly — good opening, but short.
- FAQ answers are **quotable but thin** (often 1–2 sentences, well under 134 words). Example: emergency ETA answer lacks numbers/process detail.
- Process steps (1–5) are listable but marketing-toned.

### Kağıthane landings (e.g. `/kagithane-su-kacagi-tespiti`)
- Stronger citability: symptom lists, method paragraphs, neighborhood scenarios (Çeliktepe / Gültepe), pricing factors.
- Still mostly **short paragraphs**; few passages hit the 134–167 word “citation chunk” band.
- Question-style H2s + FAQ = good extractability for AIO / Perplexity.

### Gaps
- Few sourced statistics (no third-party studies, no original survey data).
- No “X is …” definition blocks for core terms (su kaçağı tespiti, pimaş, etc.) at optimal length.
- No author Person entity / credentials on transactional pages (expected for local services; hurts authority dimension).

---

## 5. Structural readability (85/100)

**Strong**
- Clean H1 → H2 hierarchy
- Question-based headings on landings and FAQs
- Lists for symptoms / services
- Numbered process on homepage
- BreadcrumbList schema on deeper pages

**Weak**
- Few comparison tables (e.g. method A vs B for tıkanıklık)
- Secondary district pages structurally repetitive

---

## 6. Multi-modal content (45/100)

| Element | Status |
|---------|--------|
| Relevant images / hero | Present |
| Video | Not found |
| Infographics / charts | Not found |
| Interactive tools | Not found |
| Image-supporting schema | Logo/image on Organization/Plumber only |

Multi-modal lift (~156% selection in literature) is largely unused.

---

## 7. Authority & brand signals (25/100)

| Signal | Status |
|--------|--------|
| Wikipedia / Wikidata entity | Not found |
| Reddit / YouTube / LinkedIn brand mentions | Not found in spot search |
| Author byline + Person schema | Absent on home/landings (blog uses Organization author) |
| Primary-source citations in copy | Rare |
| On-site E-E-A-T proxies | Written teklif, cihazlı tespit, 7/24 — process trust, not third-party proof |
| `sameAs` social / GBP | Empty in settings / schema |

Brand-mention correlation with AI citations (Ahrefs) is the largest GEO gap for this site.

---

## 8. Schema for AI discoverability

**Present:** Organization, Plumber, WebSite, FAQPage; Service + Breadcrumb + FAQ on landings.

**Add / fix for machines**
1. Normalize `telephone` across Organization vs Plumber.
2. Add `geo` + `sameAs` (GBP, Facebook, Instagram when live).
3. Prefer `areaServed` as `AdministrativeArea` / `City` objects (landings already do this better than homepage string).
4. Keep FAQPage; expand answers to citable length (content, not schema spam).
5. Skip fake `aggregateRating` until real reviews exist.

---

## 9. Content reformatting suggestions

| Page | Change |
|------|--------|
| Homepage FAQ “Acil süre” | Expand to 140+ words: triage (vana), priority rules, Kağıthane vs other districts, what affects ETA — still honest (no false minutes). |
| `/kagithane-su-kacagi-tespiti` | Add one “Kağıthane’de su kaçağı tespiti nedir?” definition block (134–167 words) before methods. |
| Tıkanıklık landing | Add a short comparison table: spiral vs robot vs kamera — when each applies. |
| Secondary districts | Unique local facts (building stock, traffic corridors) or consolidate to avoid thin doorway pages. |
| Blog / SSS | Dated updates + expert byline where claims are educational. |

---

## Top 5 highest-impact changes

1. **Build off-site brand mentions** (Facebook/Instagram Business, Bing Places, local directories, eventual “best of” / community lists) — largest AI visibility lever vs more on-page copy.
2. **Expand 3–5 FAQ/landing passages** into self-contained 134–167 word answer blocks with concrete process facts.
3. **Complete entity graph:** GBP URL + geo + consistent phone in `Plumber` / Organization `sameAs`.
4. **Add one educational video or diagram** per top Kağıthane service (su kaçağı / tıkanıklık) for multi-modal selection.
5. **Keep AI crawlers allowed**; optionally document `OAI-SearchBot`; treat `llms.txt` as maintenance-only (link key landings).

---

## Limitations

- No live ChatGPT/Perplexity scrape (DataForSEO AI tools unavailable this run).
- Brand mention / backlink APIs incomplete (Moz/Bing keys missing; Common Crawl cache empty).
- AI Overview presence for Turkish local queries not measured in SERP tooling here.

Local pack / GBP review health: see `04-local.md`.
