# 05 — GEO / AI Search (2026-07-25 local)

**URL audited:** http://localhost:3000/  
**Production entity (reference):** https://724tesisatci.com/  
**Date:** 2026-07-25 (localhost recheck)  
**Scope:** Generative Engine Optimization — AI Overviews, ChatGPT/Perplexity crawler access, citability  

> Google’s stance: optimizing for generative AI search is still SEO. Treat `llms.txt` as a helpful inventory signal, **not** a proven ranking lever.

---

## GEO score: **76 / 100** (parity with prod post-health 76)

| Dimension | Weight | Score | Weighted |
|-----------|--------|------:|---------:|
| Citability (passage / FAQ) | 25% | 78 | 19.5 |
| Structural readability | 20% | 95 | 19.0 |
| Multi-modal content | 15% | 55 | 8.3 |
| Authority & brand mentions | 20% | 45 | 9.0 |
| Technical AI accessibility | 20% | 100 | 20.0 |
| **Total** | **100%** | | **~76** |

**Delta vs prior production post-health (76):** **0** — localhost confirms same FAQ length band, llms.txt format, AI crawler Allows, SSR FAQ/schema, and Saha notu Experience lines. No new citability unlocks since post-health.

---

## Verification checklist (localhost)

| Item | Result |
|------|--------|
| `/llms.txt` H1 (`# 724 Tesisatçı`) | **PASS** |
| Blockquote summary | **PASS** |
| Markdown `[title](url)` links (ana + Kağıthane services) | **PASS** — body links use **production** `https://724tesisatci.com/...` |
| Brand + NAP + geo in llms body | **PASS** |
| AI crawlers allowed in `robots.txt` | **PASS** — GPTBot, ChatGPT-User, Google-Extended, anthropic-ai, ClaudeBot, PerplexityBot, Applebot-Extended |
| SSR / prerender (Next.js) | **PASS** — FAQ + schema in captured HTML |
| Homepage FAQ answers ≥134 words | **FAIL** — max **92** words (0 in 134–167 band) |
| Landing primary FAQ long answers | **PARTIAL** — su kaçağı / tıkanıklık / kombi first answers ~88–92 words |
| Kağıthane hub FAQ long answers | **PARTIAL** — peaks **78** words |
| Job-note / Experience language | **PASS** — “Saha notu” on hub + top landings |
| External brand mentions (Reddit, YouTube, Wikipedia, press) | **Not evidenced** from localhost |
| Optional `llms-full.txt` | **Absent** (optional) |
| Sitemap host in robots | **localhost caveat** — `Sitemap: http://localhost:3000/sitemap.xml` under local env |

### FAQ word counts (schema `acceptedAnswer.text`, from signals.json)

| Page | FAQ count | Max words | ≥100 | In 134–167 |
|------|----------:|----------:|-----:|-----------:|
| Homepage | 10 | 92 | 0 | 0 |
| `/hizmet-bolgeleri/kagithane` | 8 | 78 | 0 | 0 |
| Su kaçağı landing | 4 | 92 | 0 | 0 |
| Tıkanıklık landing | 4 | 90 | 0 | 0 |
| Kombi landing | 4 | 88 | 0 | 0 |
| Blog su kaçağı belirtileri | 3 | 87 | 0 | 0 |

---

## Platform notes

| Surface | Readiness |
|---------|-----------|
| **Google AI Overviews** | Strong on-page structure + FAQ/schema; citation length still short; needs organic rank + unique facts |
| **ChatGPT / GPTBot** | Allowed; SSR content crawlable; brand entity weak off-site |
| **Perplexity** | Allowed; local plumber queries favor GBP + citations (see [04-local.md](04-local.md)) |
| **Claude** | ClaudeBot + anthropic-ai allowed |

**robots gap (Low):** `OAI-SearchBot` not explicitly listed (inherits `User-Agent: * Allow: /` — fine; optional explicit Allow for clarity).

---

## Gaps & residual work

1. Expand **3–5 money FAQs** to ~140–160 words each (self-contained: who/where/how + Kağıthane specifics + what not to claim).
2. Build **third-party brand mentions** (local directories, YouTube shorts, Reddit TR threads, partner sites) — brand mentions ≫ backlinks for AI visibility.
3. Optional `llms-full.txt` with longer service summaries (inventory only; low ranking weight).
4. Keep FAQPage for AI extractability even where Google rich results are limited on commercial pages.
5. On deploy, ensure robots Sitemap line points at production host (localhost capture is env-only).

---

## Score rationale

Technical accessibility remains capped (SSR + AI Allow + compliant llms.txt). Citability still peaks below the 134–167 word citation band → **76**, not 80+. Authority/brand mentions and Local Pack reviews remain the large off-site unlocks ([04-local.md](04-local.md)).

---

## Limitations

- No live AI Overview / ChatGPT citation SERP scrapes this run.
- Brand-mention inventory not crawled across the open web.
- `llms.txt` scored as format/access hygiene, not as a Google-endorsed ranking factor.
- Localhost robots/sitemap host ≠ production; on-page GEO content signals are what this score reflects.

**Companions:** Local pack → [04-local.md](04-local.md) · SXO → [08-sxo.md](08-sxo.md)
