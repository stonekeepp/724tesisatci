# SXO Analysis — Homepage (724tesisatci.com)

**Date:** 2026-07-23  
**URL:** https://724tesisatci.com/  
**Primary query cluster:** `Kağıthane tesisatçı` / `Kağıthane su tesisatçısı` / emergency local plumbing  
**Method:** SERP backwards (live organic samples) + on-page parse + persona scoring  
**Artifacts:** `homepage.html`, `app/page.tsx`, WebSearch SERP sample

---

## Score: **81 / 100**

Homepage page type **matches** what Google rewards for broad “Kağıthane tesisatçı” intent (local multi-service landing with phone/WhatsApp CTAs). Gaps: SERP competitors often put the phone number in the title/H1 chrome more aggressively; specific money queries still belong on `/kagithane-*` landings, not the homepage.

| Dimension | Score |
|-----------|------:|
| Page-type fit (broad local) | 90 |
| Intent coverage / user stories | 84 |
| CTA / conversion path | 88 |
| Differentiation vs SERP clones | 72 |
| Cannibalization clarity | 68 |
| **Overall SXO** | **81** |

---

## 1. Page-type fit

### Target page classification
**Local multi-service landing / home-services hub** (not a blog, not a pure single-service page).

Signals:
- Title: `Kağıthane Tesisatçı | 7/24 Su Tesisatı, Tıkanıklık`
- H1: `Kağıthane Merkezli 7/24 Tesisatçı`
- Problem tiles → service landings; service grid; FAQ; tel/WhatsApp CTAs
- Schema: `Plumber` + `Organization` + `WebSite` + `FAQPage`

### SERP consensus (query: Kağıthane tesisatçı / closely related)
Dominant organic type: **local service / district landing pages** with 7/24 claims, phone-forward titles, and lists of plumbing sub-services.

| Example competitor pattern | Page type |
|----------------------------|-----------|
| Özyurt / Aytaç / Evinizin Tesisatçısı style URLs | Local service landing (district + plumber) |
| Toprak “Kağıthane su kaçağı tespiti” | Single-service local landing |
| 724tesisatci.com `/` | Multi-service local hub (**aligned**) |

**Mismatch severity:** **ALIGNED** for brand + district plumber queries.  
**Not aligned** if homepage tries to rank for narrow intents like `Kağıthane su kaçağı tespiti` — those SERPs favor dedicated service landings (site already has `/kagithane-su-kacagi-tespiti`).

---

## 2. User stories (local plumbing intent)

| ID | As a… | I want to… | So that… | Homepage support |
|----|-------|------------|----------|------------------|
| US1 | Homeowner with active leak | Call or WhatsApp a Kağıthane crew now | Stop water damage tonight | Strong — tel/WA CTAs + 7/24 messaging |
| US2 | Resident with clogged drain / pimaş | Find “tıkanıklık açma” without calling wrong trade | Get robot/camera clear-out | Strong — problem tiles → `/kagithane-tikaniklik-acma`, `/kagithane-pimas-acma` |
| US3 | Tenant seeing boiler pressure drop | Understand if it’s kombi vs leak | Book the right tech | Medium — tile to kombi landing; deeper how-to lives on blog |
| US4 | Apartment manager | Reach a reliable written-quote vendor | Document work for building | Medium — “yazılı teklif” trust copy; contact form path |
| US5 | Searcher comparing firms | See proof (area, method, hours) before dialing | Avoid scam/doorway sites | Medium — local schema + process steps; GBP/reviews weaker (see `04-local.md`) |

**Primary jobs-to-be-done on `/`:** orient (Kağıthane HQ) → pick problem → call/WA or open matching landing.

---

## 3. Persona scoring (brief)

| Persona | Need | Homepage fit | Score |
|---------|------|--------------|------:|
| **Acil ev sahibi** (panic, mobile) | One-tap call, 7/24, “gelir misiniz?” | Sticky CTAs, phone/WA, urgency copy | **88** |
| **Planlı bakım arayan** | Petek/kombi/bakım clarity | Services + blog links; less “acil” skew | **74** |
| **Site / işyeri yöneticisi** | Trust, invoice, coverage map | Process + yazılı teklif; thin social proof | **70** |
| **Bilgi toplayan (how-to)** | DIY then call | Better on `/blog/*`; homepage correctly defers | **65** (by design) |

---

## 4. Search-experience gaps vs SERP winners

1. **Phone-in-SERP pattern** — many rivals lead with raw mobile numbers in title/H1; 724 leads with brand/geo. Conversion on-page is strong; SERP CTR may lag without GBP + review stars.
2. **Proof density** — competitors stack “garanti / şube / cihaz” claims; homepage has badges/process but weaker third-party trust (reviews/GBP — local audit).
3. **Intent routing** — problem selector is excellent SXO; ensure each tile lands on the **primary** money URL (not blog duplicates).
4. **Cannibalization** — `/` vs `/hizmet-bolgeleri/kagithane` vs `/kagithane-*` must keep distinct jobs: hub vs district vs service×geo.

---

## 5. Recommendations

1. Keep homepage as **Kağıthane multi-service gateway**; do not turn it into a thin “İstanbul 39 ilçe” doorway.
2. For each panic query, one indexable winner: prefer `/kagithane-{hizmet}`; make blog informational-only with clear outbound CTA.
3. Strengthen above-fold answer to US1: visible NAP + response expectation (already partially present via trust pills).
4. Pair SXO wins with Local SEO (`04-local.md`) — reviews/GBP move pack CTR more than another homepage section.

---

## Top issues

1. **Keyword role clarity** — homepage wins broad “tesisatçı”; specific service×geo queries need exclusive landing ownership.
2. **SERP CTR trust gap** — page-type OK, but review/GBP signals lag competitors’ phone-forward listings.
3. **Blog/landing overlap** softens SXO for money queries (same as sitemap finding).
