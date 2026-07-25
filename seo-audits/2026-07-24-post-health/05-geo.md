# 05 — GEO / AI Search (2026-07-24 post-health)

**URL:** https://724tesisatci.com/  
**Date:** 2026-07-24 (post-health recheck)  
**Scope:** Generative Engine Optimization — AI Overviews, ChatGPT/Perplexity crawler access, citability  

> Google’s stance: optimizing for generative AI search is still SEO. Treat `llms.txt` as a helpful inventory signal, **not** a proven ranking lever.

---

## GEO score: **76 / 100** (prior 72)

| Dimension | Weight | Score | Weighted |
|-----------|--------|------:|---------:|
| Citability (passage / FAQ) | 25% | 78 | 19.5 |
| Structural readability | 20% | 95 | 19.0 |
| Multi-modal content | 15% | 55 | 8.3 |
| Authority & brand mentions | 20% | 45 | 9.0 |
| Technical AI accessibility | 20% | 100 | 20.0 |
| **Total** | **100%** | | **~76** |

**Delta vs prior 72:** +4 — longer primary FAQs (home/landings/hub peaks ~70–92 words), **Saha notu** Experience lines, confirmed `/llms.txt` H1 + blockquote + markdown links. Still short of 134–167 word citation ideal; external brand mentions remain weak.

---

## Verification checklist

| Item | Result |
|------|--------|
| `/llms.txt` H1 (`# 724 Tesisatçı`) | **PASS** |
| Blockquote summary | **PASS** |
| Markdown `[title](url)` links (ana + Kağıthane services) | **PASS** |
| Brand + NAP + geo in llms body | **PASS** |
| AI crawlers allowed in `robots.txt` | **PASS** — GPTBot, ChatGPT-User, Google-Extended, anthropic-ai, ClaudeBot, PerplexityBot, Applebot-Extended |
| SSR / prerender (Next.js) | **PASS** — FAQ + schema in raw HTML |
| Homepage FAQ answers ≥134 words | **FAIL** — max **92** words (0 in 134–167 band) |
| Landing primary FAQ long answers | **PARTIAL** — su kaçağı / tıkanıklık / kombi first answers ~88–92 words |
| Kağıthane hub FAQ long answers | **PARTIAL** — peaks **78** words |
| Job-note / Experience language | **PASS** — “Saha notu” on hub + top landings |
| External brand mentions (Reddit, YouTube, Wikipedia, press) | **Not evidenced** |
| Optional `llms-full.txt` | **Absent** (optional) |

### FAQ word counts (schema `acceptedAnswer.text`)

| Page | FAQ count | Max words | ≥100 | In 134–167 |
|------|----------:|----------:|-----:|-----------:|
| Homepage | 10 | 92 | 0 | 0 |
| `/hizmet-bolgeleri/kagithane` | 8 | 78 | 0 | 0 |
| Su kaçağı landing | 4 | 92 | 0 | 0 |
| Tıkanıklık landing | 4 | 90 | 0 | 0 |
| Kombi landing | 4 | 88 | 0 | 0 |

---

## Platform notes

| Surface | Readiness |
|---------|-----------|
| **Google AI Overviews** | Strong on-page structure + FAQ/schema; citation length still short; needs organic rank + unique facts |
| **ChatGPT / GPTBot** | Allowed; SSR content crawlable; brand entity weak off-site |
| **Perplexity** | Allowed; local plumber queries favor GBP + citations (see [04-local.md](04-local.md)) |
| **Claude** | ClaudeBot + anthropic-ai allowed |

**robots gap (Low):** `OAI-SearchBot` not explicitly listed (inherits `User-Agent: * Allow: /` — fine, optional explicit Allow for clarity).

---

## Gaps & residual work

1. Expand **3–5 money FAQs** to ~140–160 words each (self-contained: who/where/how + Kağıthane specifics + what not to claim).
2. Build **third-party brand mentions** (local directories, YouTube shorts, Reddit TR threads, partner sites) — Ahrefs: brand mentions ≫ backlinks for AI visibility.
3. Optional `llms-full.txt` with longer service summaries (inventory only; low ranking weight).
4. Keep FAQPage for AI extractability even where Google rich results are limited on commercial pages.

---

## Score rationale

Technical accessibility is effectively capped (SSR + AI Allow + compliant llms.txt). Citability improved vs thin FAQs but has not hit the 134–167 word band → score **76**, not 80+. Authority/brand mentions remain the next large unlock alongside Local Pack reviews ([04-local.md](04-local.md)).

---

## Limitations

- No live AI Overview / ChatGPT citation SERP scrapes this run.
- Brand-mention inventory not crawled across the open web.
- `llms.txt` compliance scored as format/access hygiene, not as a Google-endorsed ranking factor.
