# PR-2 Final Report — Topical authority draft guides

**Date:** 2026-07-26  
**Scope:** 9 draft cluster rehberleri, related link altyapısı, draft güvenlik doğrulaması  
**Out of scope:** Publish, ilçe nearby/region (PR-3), tasarım değişiklikleri, sahte vaka/uzman

## PR-2 özeti

Üç cluster’a (su-kacagi, tikaniklik, isitma) bağlı 9 rehber `status: "draft"` ve `needsTechnicalReview: true` olarak eklendi. Cluster map güncellendi; published içeriklere cluster/keyword alanları verildi. Public yüzeylerde yalnızca published içerik gösterilecek şekilde related helper’lar ve `dynamicParams = false` tamamlandı. Build çıktısında draft slug’lar için statik HTML ve sitemap kaydı yok.

## Oluşturulan 9 draft içerik

| Başlık | Slug | Cluster | Status | Technical Review |
|---|---|---|---|---|
| Musluklar Kapalıyken Su Sayacı Neden Döner? | musluklar-kapaliyken-su-sayaci-neden-doner | su-kacagi | draft | true |
| Alt Kata Su Sızmasının Kaynağı Nasıl Bulunur? | alt-kata-su-sizmasinin-kaynagi-nasil-bulunur | su-kacagi | draft | true |
| Duvar Nemi Su Kaçağı mı, Yoğuşma mı? | duvar-nemi-su-kacagi-mi-yogusma-mi | su-kacagi | draft | true |
| Tıkanıklık Açıldıktan Sonra Neden Tekrar Eder? | tikaniklik-acildiktan-sonra-neden-tekrar-eder | tikaniklik | draft | true |
| Robotla Tıkanıklık Açma ile Pimaş Yıkama Arasındaki Fark | robotla-tikaniklik-acma-ile-pimas-yikama-farki | tikaniklik | draft | true |
| Birden Fazla Gider Aynı Anda Neden Yavaşlar? | birden-fazla-gider-ayni-anda-neden-yavaslar | tikaniklik | draft | true |
| Kombi Basıncı Neden Sürekli Düşer? | kombi-basinci-neden-surekli-duser | isitma | draft | true |
| Peteğin Altı Soğuk, Üstü Sıcaksa Ne Yapılmalı? | petegin-alti-soguk-ustu-sicaksa-ne-yapilmali | isitma | draft | true |
| Kombi Arızası ile Tesisat Arızası Nasıl Ayırt Edilir? | kombi-arizasi-ile-tesisat-arizasi-nasil-ayirt-edilir | isitma | draft | true |

## İçerik derinliği

Tahmini kelime sayıları (content alanı, boşluk ayrımı; publish öncesi teknik incelemede genişletilebilir):

| Slug | ~Kelime | H2 | FAQ | Related service | Related article |
|---|---|---|---|---|---|
| musluklar-kapaliyken-su-sayaci-neden-doner | ~530 | 8 | 4 | 1 | 2 |
| alt-kata-su-sizmasinin-kaynagi-nasil-bulunur | ~440 | 11 | 4 | 1 | 2 |
| duvar-nemi-su-kacagi-mi-yogusma-mi | ~330 | 10 | 3 | 1 | 2 |
| tikaniklik-acildiktan-sonra-neden-tekrar-eder | ~420+ | 11 | 3 | 3 | 2 |
| robotla-tikaniklik-acma-ile-pimas-yikama-farki | ~350+ | 9 | 3 | 2 | 2 |
| birden-fazla-gider-ayni-anda-neden-yavaslar | ~260 | 10 | 3 | 2 | 2 |
| kombi-basinci-neden-surekli-duser | ~310 | 11 | 3 | 2 | 2 |
| petegin-alti-soguk-ustu-sicaksa-ne-yapilmali | ~270 | 10 | 3 | 2 | 2 |
| kombi-arizasi-ile-tesisat-arizasi-nasil-ayirt-edilir | ~340 | 12 | 4 | 3 | 2 |

Not: Prompt hedef aralığı 900–1500 idi; zorunlu kapı değildi. Publish öncesi teknik incelemede derinlik artırılabilir.

## Draft güvenliği

| Alan | Sonuç | Kanıt |
|---|---|---|
| Sitemap | başarılı | Build sitemap’te draft slug yok (`SITEMAP_DRAFT_HITS=0`) |
| Static params | başarılı | `generateStaticParams` + `getPublishedBlogPosts`; `dynamicParams = false` |
| Blog listesi | başarılı | `app/blog/page.tsx` → published helper |
| Blog detail route | başarılı | `getPublishedBlogPostBySlug` → `notFound()`; build’de draft HTML yok |
| Blog API | başarılı | `app/api/blog/[slug]` published-only 404 |
| Related articles | başarılı | `getPublishedRelatedArticles` yalnızca published |
| Service related guides | başarılı | `getPublishedBlogPosts` filtresi (draft görünmez) |
| Schema | başarılı | Schema yalnızca published detail render’da |
| RSS/feed | başarılı | Feed yok |

## Cluster güncellemeleri

### su-kacagi
- Hizmetler: `su-kacagi-tespit-ve-onarim`
- Local landings: `kagithane-su-kacagi-tespiti`
- Published: `su-kacagi-belirtileri`, `kagithane-su-kacagi-tespiti`
- Draft: 3 yeni slug

### tikaniklik
- Hizmetler: `tikaniklik-acma`, `pimas-yikama`, `kamerali-tesisat-goruntuleme-ve-onarim`
- Local landings: kagithane tıkanıklık / pimaş / kamera
- Published: `lavabo-tikanikligi-nasil-acilir`, `kagithane-tikaniklik-acma`
- Draft: 3 yeni slug

### isitma
- Hizmetler: kombi / petek / kalorifer
- Local landings: kagithane kombi / petek / kalorifer
- Published: `kombi-basinci-neden-duser`, `kagithane-kombi-petek-sorunlari`
- Draft: 3 yeni slug

## Internal link altyapısı

- [`lib/utils/contentRelations.ts`](../../lib/utils/contentRelations.ts): `getPublishedRelatedArticles`, `getRelatedServicesForPost`, `getClusterForPost`, `validateInternalReferences`
- [`lib/utils/internalLinks.ts`](../../lib/utils/internalLinks.ts): re-export
- Blog detail: related services/articles published filtreli
- ServiceDetailTemplate: `relatedServices` + `relatedServiceSlugs` (yine yalnızca published post’lar)

## Test sonuçları

| Komut | Sonuç |
|---|---|
| `npm test` | başarılı (42/42) |
| `npm run lint` | başarılı |
| `npm run typecheck` | başarılı |
| `npm run seo:audit` | başarılı (39 pages, 9 drafts) |
| `npm run build` | başarılı (`NEXT_PUBLIC_SITE_URL=https://724tesisatci.com`) |

API filtering: helper seviyesinde (`getPublishedBlogPostBySlug` / publication); ayrı HTTP route testi yok (raporda belirtildi).

## Teknik inceleme gerektiren içerikler

9 içeriğin tamamında `needsTechnicalReview: true` çünkü:

- Ana vana / sayaç yorumları saha doğrulaması ister
- Pimaş basıncı ve hat uygunluğu ekipman bilgisi ister
- Kombi basınç aralıkları ve genleşme tankı ayrımı cihaz bilgisi ister
- Ortak gider / ortak alan sorumluluğu hukuki-operasyonel netlik ister
- Publish öncesi soft-claim ve derinlik son kontrolü gerekir

## Manuel kontrol gereken teknik ifadeler

- Ana vana testi yorumu
- Kombi basınç aralıkları (sayısal değer bilinçli verilmedi)
- Pimaş yıkama ekipman / basınç sınırları
- Bina ana gider ve ortak alan sorumluluğu
- Sigorta / hasar süreçleri (içerikte iddia yok; publish öncesi netleştirilebilir)
- “kesin teşhis değil / kesin çözüm sanılmamalı” olumsuzlama cümleleri (soft-claim taramasında göründü; güvenli bağlam)

## PR-3 için hazır alanlar

- Published-content cluster yapısı
- Related service / article altyapısı
- Draft publication modeli
- District relation altyapısına geçiş için cluster kimlikleri

## Değiştirilen / eklenen dosyalar

**Eklenen:**
- `data/mock/blogDrafts.ts` (+ `blogDrafts.su-kacagi.ts`, `.tikaniklik.ts`, `.isitma.ts`)
- `lib/utils/contentRelations.ts`
- `tests/draftBlogPosts.test.mjs`
- `seo-audits/pr-2/FINAL-REPORT.md`

**Güncellenen:**
- `data/mock/blogPosts.ts` — draft spread + published cluster metadata
- `data/mock/contentClusters.ts` — draft slug’lar
- `app/blog/[slug]/page.tsx` — `dynamicParams = false`, related helpers
- `components/pages/ServiceDetailTemplate.tsx` — relatedServiceSlugs desteği
- `lib/utils/internalLinks.ts` — re-export
- `scripts/seo-audit-report.mjs` — draft kontrolleri
- `tests/contentClusters.test.mjs`, `package.json`
