# 08 — SXO / Search Experience (2026-07-25 local)

**URL audited:** http://localhost:3000  
**Production entity (reference):** https://724tesisatci.com  
**Date:** 2026-07-25 (localhost recheck)  
**Score: 84 / 100** (parity with prod post-health 84)

> SXO asks whether the page type matches what Google rewards for the money query. Live Map Pack CTR/trust still cannot be measured from localhost; organic SERP page-type consensus checked via public web search for money queries.

---

## Page-type match (money queries)

| Query intent | Expected type (SERP consensus) | Winning on-site URL | Fit |
|--------------|--------------------------------|---------------------|-----|
| Kağıthane su kaçağı tespiti | Local service landing (phone-forward, cihazlı/kırmadan) | `/kagithane-su-kacagi-tespiti` | **Strong** — title/H1 transactional; Service+FAQ; Ara + WhatsApp |
| Kağıthane tıkanıklık | Local service landing | `/kagithane-tikaniklik-acma` | **Strong** |
| Kağıthane tesisatçı | Local business / home + local pack | `/` | **Strong** — Kağıthane-first H1 + phone/WhatsApp; pack trust off-site |
| Su kaçağı belirtileri | Informational guide | `/blog/su-kacagi-belirtileri` | **Strong** — guide title; soft CTA |

**SERP backwards note (Kağıthane su kaçağı tespiti):** Top organic results are overwhelmingly **local service landings** (competitor district pages: Zeki, BHY, Sayarlar, Toprak, etc.) — not blogs, not category hubs. 724’s `/kagithane-su-kacagi-tespiti` matches the dominant page type. Local pack / map units typically sit above organic for these queries; on-page SXO cannot substitute for GBP reviews ([04-local.md](04-local.md)).

Homepage and Kağıthane landings match commercial “call a plumber now” patterns (phone-forward CTA, process, FAQ, local proof, Saha notu).

---

## Blog vs money — cannibalization gate

| Money landing | Blog counterpart | Title intent split | Verdict |
|---------------|------------------|--------------------|---------|
| `/kagithane-su-kacagi-tespiti` — *Kağıthane Su Kaçağı Tespiti \| Kırmadan Cihazlı* | `/blog/su-kacagi-belirtileri` (+ Kağıthane blog variants on prod) | Transactional vs how-to / belirtiler | **PASS** — keep split; watch slug-similar blog URLs in GSC |
| `/kagithane-tikaniklik-acma` | Blog gider tıkanıklığı rehber framing | Same split | **PASS** |
| `/kagithane-kombi-servisi` | Kombi/petek rehber framing | Different framing | **PASS** |

Verified on localhost: money landing titles stay transactional; blog sample H1 is *Su Kaçağı Belirtileri Nelerdir?…*. Do **not** retitle blogs to compete with landing H1s.

---

## CTA clarity (localhost)

| Surface | CTA | Clarity |
|---------|-----|---------|
| Header / sticky patterns | WhatsApp + Ara (tel) | **Clear** |
| Landing hero | Ara + WhatsApp | **Clear** |
| Landing footer band | Phone + WhatsApp | **Clear** |
| `/iletisim` | Servis formu + phone + Yol Tarifi | **Clear** |
| Blog | Soft CTA toward commercial intent | Appropriate for info intent |

---

## Trust signals (localhost)

| Signal | Status |
|--------|--------|
| 6 ay işçilik garantisi (copy + FAQ) | Present on landings |
| Yazılı teklif / servis formu | Present |
| First-hand job notes (Saha notu) | Present on hub + su kaçağı / tıkanıklık / kombi |
| NAP Kağıthane address | Present in footer + `/iletisim` |
| GBP / reviews in SERP | **Still weak / unmeasurable on localhost** — rivals win pack trust |

---

## Persona / intent fit (summary)

| Persona | Need | Page job | Score feel |
|---------|------|----------|------------|
| Acil Kağıthane sakini | Call now, same-day | Home + money landings | High |
| Alt kata su / tavan nemi | Kırmadan tespit explanation | Su kaçağı landing + FAQ | High |
| Researcher (belirtiler) | Diagnose before calling | Blog | High |
| Neighborhood browser | Which mahalle / service | Kağıthane hub | High |

No critical page-type mismatch detected for primary money intents.

---

## Residual

1. GBP + reviews remain the SERP CTR / Map Pack ceiling (on-page SXO already strong).
2. Keep blog titles informational; never mirror landing money titles.
3. Watch GSC (production) for blog URLs ranking on commercial “Kağıthane su kaçağı” — if so, strengthen internal links / nudge titles toward “belirtiler”.
4. Competitors in organic pack often overclaim (“%100”); keep soft-claim discipline (already PASS in content audit).

---

## Score rationale

**84** held at production post-health parity: page-type alignment confirmed against live SERP consensus for money queries, transactional vs informational title split intact on localhost, CTAs unambiguous, job-note trust on money landings. Cap until GBP/reviews lift SERP trust parity — not measurable from localhost.

---

## Limitations

- Localhost cannot show Map Pack units, ad density, or AI Overview source chips for the query.
- Persona scores are qualitative (no user testing).
- Competitor depth/CTR not instrumented; page-type consensus only.

**Companions:** Local pack → [04-local.md](04-local.md) · GEO → [05-geo.md](05-geo.md)
