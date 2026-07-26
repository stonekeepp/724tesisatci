# PR-4 Final Raporu

## PR-4 özeti

Dokuz draft topical rehber içerik derinliği, SSS, metadata ve iç bağlantı açısından yayın kalitesine yaklaştırıldı. `technicalReview` veri modeli ve `evaluateBlogPublicationReadiness` kalite kapısı eklendi. Public blog API iç alanları strip ediyor. Hiçbir içerik `published` yapılmadı; `needsTechnicalReview` true kaldı; hayalî reviewer/tarih eklenmedi.

## İçerik genişletme sonuçları

| Slug | Önceki | Yeni | H2 | FAQ | Rel. service | Rel. article |
|---|---:|---:|---:|---:|---:|---:|
| musluklar-kapaliyken-su-sayaci-neden-doner | 528 | 934 | 9 | 6 | 1 | 2 |
| alt-kata-su-sizmasinin-kaynagi-nasil-bulunur | 444 | 939 | 15 | 6 | 1 | 2 |
| duvar-nemi-su-kacagi-mi-yogusma-mi | 332 | 921 | 13 | 6 | 1 | 2 |
| tikaniklik-acildiktan-sonra-neden-tekrar-eder | 464 | 922 | 14 | 5 | ≥1 | 2 |
| robotla-tikaniklik-acma-ile-pimas-yikama-farki | 342 | 913 | 13 | 5 | ≥1 | 2 |
| birden-fazla-gider-ayni-anda-neden-yavaslar | 258 | 865 | 14 | 5 | ≥1 | 2 |
| kombi-basinci-neden-surekli-duser | 314 | 902 | 14 | 5 | ≥1 | 2 |
| petegin-alti-soguk-ustu-sicaksa-ne-yapilmali | 271 | 882 | 13 | 5 | ≥1 | 2 |
| kombi-arizasi-ile-tesisat-arizasi-nasil-ayirt-edilir | 340 | 890 | 15 | 6 | ≥1 | 2 |

## Teknik doğruluk düzenlemeleri

- Kaldırılan / kaçınılan kesin iddialar: “kesin kaçak”, “boru patlamıştır”, “test kesin gösterir”, “pimaş kesin çözer”, “sürekli su basmak çözer”
- Yumuşatılan: teşhis dili ihtimal/yönlendirici çerçeveye çekildi; hata kodları uydurulmadı
- Eklenen güvenlik uyarıları: vana zorlamama, kimyasal karıştırmama, kombi kapağı açmama, DIY spiral/robot/boru sökme önermeme
- Manuel incelemeye bırakılan: 29 pending `technicalReview` maddesi + `TECHNICAL-REVIEW-CHECKLIST.md`

## Teknik inceleme durumu

- Toplam pending madde: **29**
- Verified madde: **0**
- Revision-required madde: **0**
- Reviewer atanmış içerik sayısı: **0**

## Publication readiness

| Slug | Ready | Blocker sayısı | Temel blocker |
|---|---|---:|---|
| musluklar-kapaliyken-su-sayaci-neden-doner | false | ≥3 | draft + technical review |
| alt-kata-su-sizmasinin-kaynagi-nasil-bulunur | false | ≥3 | draft + technical review |
| duvar-nemi-su-kacagi-mi-yogusma-mi | false | ≥3 | draft + technical review |
| tikaniklik-acildiktan-sonra-neden-tekrar-eder | false | ≥3 | draft + technical review |
| robotla-tikaniklik-acma-ile-pimas-yikama-farki | false | ≥3 | draft + technical review |
| birden-fazla-gider-ayni-anda-neden-yavaslar | false | ≥3 | draft + technical review |
| kombi-basinci-neden-surekli-duser | false | ≥3 | draft + technical review |
| petegin-alti-soguk-ustu-sicaksa-ne-yapilmali | false | ≥3 | draft + technical review |
| kombi-arizasi-ile-tesisat-arizasi-nasil-ayirt-edilir | false | ≥3 | draft + technical review |

`PUBLICATION_READY_DRAFT_COUNT=0`

## İçerik benzersizliği

- Duplicate title: 0
- Duplicate description: 0
- Duplicate excerpt: 0
- Duplicate intro adayları: 0 (birebir)
- Duplicate conclusion adayları: 0 (birebir)
- Duplicate FAQ adayları: 0 (soru metni)

## Draft güvenliği

- Sitemap: draft hits 0
- Static params: draft hariç
- Blog listesi: draft hariç
- Detail route: erişilemez (`dynamicParams = false` + published filter)
- API: draft 404; public DTO’da `needsTechnicalReview` / `technicalReview` yok
- Related content: draft UI’da görünmez
- Service guides: draft kartı yok
- Schema: draft FAQ schema yok
- Static HTML: `LEAKED_HTML_COUNT=0` (927 dosya tarandı)

## Test sonuçları

- Test: **72/72** başarılı
- Lint: başarılı
- Typecheck: başarılı
- SEO audit: başarılı (`DRAFT_POST_COUNT=9`, `PUBLICATION_READY_DRAFT_COUNT=0`, `PENDING_TECHNICAL_REVIEW_COUNT=29`)
- Build: başarılı (`NEXT_PUBLIC_SITE_URL=https://724tesisatci.com`)

## Manuel teknik inceleme gereken başlıklar

- Su kaçağı: ana vana/sayaç yorumu; temiz su–gider–izolasyon; yoğuşma/ısı köprüsü; ortak kolon
- Tıkanıklık: robot–pimaş farkı; basınç dili; ana gider ayrımı; kimyasal güvenlik; geri tepme
- Isıtma: basınç aralığı dili; genleşme tankı/emniyet ventili; petek temizliği–dengeleme; kombi–tesisat ön ayrımı; kullanıcı müdahale sınırları

Ayrıntı: `seo-audits/pr-4/TECHNICAL-REVIEW-CHECKLIST.md`

## Yayın öncesinde işletme sahibinden istenmesi gerekenler

- Teknik incelemeyi yapacak gerçek kişinin adı
- Uzmanlık alanı
- Deneyim veya belge bilgisi
- Hangi içerikleri onayladığı
- Onay tarihi
- Gerekli içerik düzeltmeleri

## PR-5 önerisi

PR-5’te otomatik toplu yayın yapılmamalı.

1. Önce üç içerik seçilir
2. Gerçek teknik inceleme yapılır
3. Teknik review maddeleri güncellenir
4. Gerekli düzeltmeler yapılır
5. `needsTechnicalReview: false` yapılır
6. İçerikler tek tek `published` yapılır
7. Sitemap, schema ve iç bağlantılar kontrol edilir
8. Search Console URL Inspection ile gönderilir

## Değiştirilen dosyalar

- `types/index.ts` — `TechnicalReview*` + `PublicationReadinessResult`
- `lib/utils/publication.ts` — `evaluateBlogPublicationReadiness`, `toPublicBlogPost`, `isPubliclyVisiblePost`
- `app/api/blog/route.ts` / `app/api/blog/[slug]/route.ts` — public DTO strip
- `data/mock/blogDrafts.su-kacagi.ts` — 3 içerik genişletme + technicalReview
- `data/mock/blogDrafts.tikaniklik.ts` — 3 içerik genişletme + technicalReview
- `data/mock/blogDrafts.isitma.ts` — 3 içerik genişletme + technicalReview
- `scripts/seo-audit-report.mjs` — draftQuality + publication readiness metrikleri; status parse düzeltmesi
- `tests/pr4PublicationReadiness.test.mjs` — yeni PR-4 testleri
- `package.json` — test scriptine yeni dosya
- `seo-audits/pr-4/*` — checklist, expansion report, final report
