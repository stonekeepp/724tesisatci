# 02 — Content Quality & E-E-A-T

**Site:** https://724tesisatci.com  
**Business type:** Local plumbing / home services (Kağıthane-primary, İstanbul coverage)  
**Audit date:** 2026-07-23  
**Sources:** `homepage.html` + live fetches of homepage, 3 service pages, 2 local landings, Kağıthane + Beşiktaş district pages, blog post, hakkımızda, iletişim; cross-checked with `data/mock/*`

---

## Content Quality Score: **62 / 100**

Solid local-service foundation (process, FAQs, Kağıthane specificity, soft ETA language) undercut by unsubstantiated trust claims, thin non-hub district pages, thin blogs, and templated duplication across services/districts.

---

## Who / How / Why (Google helpful-content heuristic)

| Question | Verdict | Evidence |
|----------|---------|----------|
| **Who** created it? | Weak | Brand-level only. Blog schema author = Organization; `reviewedBy` = “724 Tesisatçı saha ekibi”. No named technician, license/gaz firması no., or author bio on-page. |
| **How** was it created? | Partial | Methods (termal / akustik / nem / robot) and mahalle-level scenarios show operational knowledge. No case studies, job photos with dates, or first-party measurements. |
| **Why** does it exist? | Mixed | Kağıthane landings + symptom/process FAQs help users. Large district URL set with name-swap FAQs leans SEO coverage over unique help. |

---

## Pages sampled

| Page | Type | Est. main-content words | Coverage vs floor |
|------|------|-------------------------|-------------------|
| `/` | Homepage | ~1,200–1,500 | Meets (≥500) |
| `/hizmetler/su-tesisati` | Service | ~1,300–1,600 | Meets (≥800) |
| `/hizmetler/su-kacagi-tespit-ve-onarim` | Service | ~1,400–1,700 | Meets |
| `/hizmetler/tikaniklik-acma` | Service | ~1,300–1,600 | Meets |
| `/kagithane-su-kacagi-tespiti` | Local landing | ~450–550 | Borderline for location depth |
| `/kagithane-tikaniklik-acma` | Local landing | ~450–550 | Borderline |
| `/hizmet-bolgeleri/kagithane` | District hub | ~1,800+ (incl. 19 mahalle) | Strong |
| `/hizmet-bolgeleri/besiktas` | District (secondary) | Unique body ~150–250 + template FAQs | Thin / doorway-adjacent |
| `/blog/su-kacagi-belirtileri` | Blog | ~400–500 body | Below blog floor (1,500) |
| `/hakkimizda` | About | ~350–450 | Thin for trust page |
| `/iletisim` | Contact | Form + NAP | Adequate for NAP |

*Word counts are topical-coverage floors, not ranking targets.*

---

## E-E-A-T Breakdown

| Factor | Score | Key signals |
|--------|-------|-------------|
| **Experience** | **13 / 25** | **+** Mahalle-specific scenarios (Çeliktepe/Gültepe kaçak; Seyrantepe/Sanayi yağ tıkanıklığı). Process steps and “ne zaman çağır” guidance. **−** No named jobs, before/after, site yönetimi references, or original photos tied to real visits. |
| **Expertise** | **15 / 25** | **+** Equipment and method accuracy (PPRC/bakır, termal/akustik/nem, robot/spiral/kamera). Service-specific FAQs mostly useful. **−** “Sertifikalı personel” / doğalgaz “lisanslı ekip” without visible credentials; no technician bios. |
| **Authoritativeness** | **9 / 25** | **+** Clear brand + Kağıthane hub architecture. **−** `googleBusinessProfileUrl` / `sameAs` / geo unset in settings; no on-page reviews, press, or third-party citations; aggregateRating absent in homepage HTML checks. |
| **Trustworthiness** | **14 / 25** | **+** Full NAP (Emniyet Evleri, Semerkant Sk. 14/A); phone/WhatsApp; privacy + cookie pages; soft ETA (“trafik ve ekip uygunluğuna göre”); yazılı teklif / onay olmadan iş yok. **−** Hard/unsupported claims (below); warranty FAQ avoids concrete işçilik garantisi; stats not sourced. |

**E-E-A-T subtotal (unweighted average of above): ~51 / 100** — content structure lifts overall quality score above raw E-E-A-T.

---

## Claim language audit

### Soft / trustworthy (keep)

- “Trafik ve ekip uygunluğuna göre hızlı yönlendirme”
- “Tek başına kesin kanıt değildir…” (fatura → kaçak)
- “Çoğu lavabo… kırmadan açılır”
- “Genellikle 1–2 saat / 30–60 dakika”
- Keşif ücretinin düşülmesi / yazılı teklif dilı

### Hard / risk (fix or qualify)

| Claim | Where | Risk |
|-------|-------|------|
| **“%100 Noktasal Tespit”** | Su kaçağı service hero overlay | Absolute accuracy claim; device detection is probabilistic |
| **“15+ Yıllık Tecrübe” / “10.000+ Mutlu Müşteri”** | Hakkımızda | Unsourced social proof |
| **“Sertifikalı Personel”** | Hakkımızda CTA | Credential asserted, not shown |
| **“sızdırmazlık garantisi” / “güvenliğinizi garanti altına alıyoruz”** | Service copy (e.g. pimaş / doğalgaz) | Legal/consumer expectation vs “üretici garantisi” FAQ hedge |
| **“%30'a kadar” verimlilik** | Petek temizleme long copy | Statistic without method/source |
| FAQ title “garanti veriliyor mu?” → answer only about yazılı form / malzeme | All services (`commonServiceFaq`) | Expectation mismatch |

---

## Thin / duplicate content risks

1. **Secondary district pages (high):** Beşiktaş (and likely most of 39 ilçeler) = short profile blurb + identical FAQ skeleton with `{ilçe}` swap + shared service cards. Doorway / scaled thin-content risk if crawled as a cluster.
2. **Service template repetition (medium):** Shared intro pattern (“sorunları genellikle küçük belirtilerle başlar…”), identical 4× `commonServiceFaq` on every service page.
3. **Local landings (low–medium):** Kağıthane landings are **differentiated** (neighborhood scenarios, unique FAQs) — good anti-doorway pattern. Still short; could add 1–2 job examples each.
4. **Blog (medium):** ~400–500 words vs 1,500 floor; helpful but not depth authority. Org-only authorship.
5. **Kağıthane hub (low):** Strong unique mahalle copy — model for other districts if kept; do not clone that depth across all 39 without real content.

**AI-pattern markers (Sept 2025 QRG):** Repetitive section scaffolding across services; generic “profesyonel / premium / kalıcı” adjectives; limited first-hand proof. Mitigated by local specificity on Kağıthane landings and soft ETA language.

---

## Readability

- **Language:** Clear Turkish, B1–B2, scannable H2/H3 + lists — appropriate for emergency local intent.
- **Sentence length:** Mostly short–medium; marketing blocks occasionally dense.
- **Structure:** Strong (symptoms → methods → process → FAQ → related).
- **Flesch-style note:** Not used as a ranking target; accessibility is already good for the audience.

---

## AI citation readiness: **55 / 100**

| Signal | Status |
|--------|--------|
| Answer-first FAQs | Strong (quotable Q→A) |
| Heading hierarchy | Strong |
| Process / definition snippets | Good (“Su kaçağı nedir…”, adım adım servis) |
| First-party data / numbers with method | Weak (15+, 10.000+, %30, %100) |
| Named experts / citations | Weak |
| Entity clarity (NAP, brand) | Good on contact; GBP/sameAs missing |
| Freshness | Blog dates present (published + “Güncellendi”); sitemap `lastmod` clustered 2026-07-09 |

AI systems can cite **how-to / symptom / soft process** answers; less likely to cite **superlative brand claims**.

---

## Top issues (priority)

1. **Unsubstantiated hard claims** (`%100`, 15+, 10.000+, sertifikalı, absolute garanti wording).
2. **Thin templated non-Kağıthane district cluster** (name-swap FAQs) — programmatic thin-content risk.
3. **Missing public trust proofs** — no on-page reviews, GBP link, technician credentials, or case studies.
4. **Blog posts under-depth** (~400–500 words) with Organization-only authorship.
5. **Warranty FAQ mismatch** — question implies işçilik garantisi; answer does not state duration/scope.

---

## Quick wins

1. Soften `%100 Noktasal Tespit` → e.g. “Cihazlı noktasal tespit — gereksiz kırım yok” (copy only; layout unchanged if classNames preserved).
2. Replace or footnote **15+ / 10.000+** with verifiable figures or remove until documented.
3. Rewrite `commonServiceFaq` “garanti” answer with concrete işçilik süresi + malzeme üretici ayrımı.
4. Add 2–3 **short first-hand blocks** on top Kağıthane landings (mahalle + sorun + yöntem + sonuç; no fake reviews).
5. Expand 2–3 core blogs to ~1,000–1,500 words with checklists + when-not-to-DIY; show reviewer name on-page (not only schema).
6. For secondary districts: either deepen 5–8 near-Kağıthane ilçeler or noindex/consolidate thin ones — avoid 39× near-identical FAQs.
7. Wire **GBP / sameAs / geo** when available; surface 1 NAP block consistently in footer if not already on all templates.

---

## Recommendations (medium term)

- Publish **Experience** assets: anonymized job notes, thermal stills with consent, site-yönetimi references.
- Doğalgaz pages: show **lisans / yetki** evidence or soften “lisanslı” language.
- Keep Kağıthane local-landing pattern as the uniqueness standard; do not dilute with pure keyword clones.
- Track AI citation readiness separately: quotable soft facts > absolute marketing claims.

---

## Score summary (for parent audit)

| Metric | Score |
|--------|-------|
| **Content quality** | **62 / 100** |
| Experience | 13 / 25 |
| Expertise | 15 / 25 |
| Authoritativeness | 9 / 25 |
| Trustworthiness | 14 / 25 |
| **AI citation readiness** | **55 / 100** |
