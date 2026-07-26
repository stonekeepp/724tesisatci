# PR-3 Final Report — District architecture & service relations

**Date:** 2026-07-26  
**Scope:** Region/nearby model, district FAQ layering, Turkish locative, service guide/landing relations, audits/tests  
**Out of scope:** Draft publish, `/kagithane-tesisatci`, design changes, fake local cases

## PR-3 özeti

İlçe verisine `regionGroup`, `nearbyDistrictSlugs`, `isPriority`, `indexStatus` eklendi. İlçe detayında 39 ilçelik liste yerine yakın + aynı bölge (max 8) gösteriliyor. SSS katmanlandı; Kağıthane öncelikli. Türkçe bulunma hâli `Beyoğlu'nda` / `Zeytinburnu'nda` için genişletildi. Hizmetlere `relatedGuideSlugs` / `relatedLocalLandingSlugs` bağlandı; public UI yalnızca published rehberleri gösterir. Draft güvenliği regresyonu yeşil.

## İlçe veri modeli

Kaynak: [`data/mock/istanbulDistricts.ts`](../../data/mock/istanbulDistricts.ts) → [`locationContent.ts`](../../data/mock/locationContent.ts)

Eklenen alanlar:

* Region group
* Nearby districts
* Index status (internal audit only — robots/noindex değişmez)
* Priority (`kagithane`)
* Location üzerinde `relatedLocalLandingSlugs` (Kağıthane)

## Bölgesel dağılım

| Bölge | İlçe sayısı |
|---|---:|
| Avrupa Yakası Merkez | 8 |
| Avrupa Yakası Kuzey | 6 |
| Avrupa Yakası Batı | 11 |
| Anadolu Yakası Merkez | 4 |
| Anadolu Yakası Kuzey | 3 |
| Anadolu Yakası Doğu | 6 |
| Adalar | 1 |
| **Toplam** | **39** |

## Yakın ilçe ilişkileri

* Toplam ilişki ucu: ~190
* Ortalama nearby: ~4.9
* Karşılıksız ilişkiler: ~20 (audit warning; rastgele doldurulmadı)
* Manuel kontrol: adalar↔anakara bağlantıları, silivri/çatalca uçları, besiktas↔uskudar köprü ilişkisi

## Kağıthane düzenlemeleri

* `isPriority: true`, `indexStatus: index`
* Yakın: sisli, besiktas, eyupsultan, sariyer, beyoglu
* Local landing slug’ları Location’a bağlandı
* Hizmet → `kagithane-*` landing eşlemeleri
* Korunan URL’ler: `/`, `/hizmet-bolgeleri/kagithane`, mevcut `/kagithane-*`
* `/kagithane-tesisatci` oluşturulmadı (build doğrulandı)

## İlçe tekrar audit’i

* Non-HQ ilçeler `indexStatus: review` + `duplicateIntroCandidate` / sınırlı district FAQ uyarısı
* Kağıthane: özgün 5 SSS
* Non-HQ: 1 district-safe + 1 region + 2 generic (aynı 8 soruluk şablon kaldırıldı)
* `indexStatus: review` **noindex üretmez**

## Hizmet SSS düzenlemeleri

| Hizmet | FAQ (specific+shared) | Teknik inceleme | Duplicate set |
|---|---:|---|---|
| su-kacagi-tespit-ve-onarim | 6+2 | birkaç madde true | yok |
| tikaniklik-acma | 5+2 | birkaç madde true | yok |
| pimas-yikama | mevcut+2 | — | yok |
| kamerali-tesisat-goruntuleme-ve-onarim | mevcut+2 | — | yok |
| kombi-servisi-ve-tesisati | mevcut+2 | — | yok |
| petek-temizleme | mevcut+2 | — | yok |
| kalorifer-tesisati | mevcut+2 | — | yok |

`getServiceFaq` artık tüm common FAQ yığınını eklemiyor (fiyat + işçilik garantisi).

## Hizmet ve içerik ilişkileri

* Service → published + draft guide **data** relations
* Public: `getPublishedGuidesForService` / ServiceDetailTemplate — **draft görünmez**
* Service → Kağıthane local landing
* Local landing aside → published guides + service + `/hizmet-bolgeleri/kagithane`

## Türkçe dil düzeltmeleri

* `getTurkishLocative` + `getTurkishLocativeSuffixOnly`
* `Beyoğlu'nda`, `Zeytinburnu'nda` (N-buffer listesi)
* İlçe FAQ/meta description locative helper kullanıyor
* Hatalı `İlçe'de` elle birleştirmeler district FAQ’da kaldırıldı

## Schema ve metadata

* İlçe sayfaları: AreaService + Breadcrumb + FAQ (şube LocalBusiness yok)
* `indexStatus` robots’a bağlı değil
* Meta title/description ilçe adına göre varyasyonlu; review ilçelerde şablon riski audit’te

## Test sonuçları

| Komut | Sonuç |
|---|---|
| `npm test` | başarılı (64/64) |
| `npm run lint` | başarılı |
| `npm run typecheck` | başarılı |
| `npm run seo:audit` | başarılı |
| `npm run build` | başarılı |

## Draft güvenliği regresyon sonucu

* Sitemap draft hits: 0
* Static HTML leak: 0
* `/kagithane-tesisatci` route: yok
* Static params / API / related / service guides / schema: draft dışı (PR-2 davranışı korunuyor)

## Kapsam dışı bırakılanlar

* Draft içerik genişletme / publish
* İlçe noindex kararları
* Gerçek saha verileri / uzman / vaka
* Tasarım değişiklikleri

## PR-4 için öneriler

* 9 draft teknik inceleme + derinlik
* Asimetrik nearby manuel dengeleme
* Search Console ile review ilçe değerlendirmesi
* Gerçek saha vaka sistemi

## Değiştirilen dosyalar

* `types/index.ts` — RegionGroup, Location/Service/FAQ alanları
* `data/mock/istanbulDistricts.ts` — region/nearby/priority
* `data/mock/locationContent.ts` — FAQ katmanları, locative meta
* `data/mock/services.ts` — guide/landing relations
* `data/mock/serviceFaqs.ts` — öncelikli SSS + shared tail
* `lib/utils/turkishSuffix.ts`, `locationRelations.ts`, `internalLinks.ts`
* `app/hizmet-bolgeleri/[district]/page.tsx` — curated otherDistricts
* `components/pages/ServiceDetailTemplate.tsx`, `LocalServiceLandingTemplate.tsx`
* `scripts/seo-audit-report.mjs`, `tests/*`, `package.json`
* `seo-audits/pr-3/FINAL-REPORT.md`
