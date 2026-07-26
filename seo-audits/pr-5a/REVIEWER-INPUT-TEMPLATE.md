# Teknik İçerik İnceleme Formu

Bu form gerçek tesisat veya ilgili teknik alanda deneyimli kişi tarafından doldurulmalıdır.

AI, geliştirici veya içerik editörü teknik reviewer olarak kabul edilmez.

Cursor veya otomatik testlerin geçmesi mesleki teknik onay sayılmaz.

---

## Reviewer bilgileri

| Alan | Değer |
|---|---|
| Ad soyad | |
| Görev / uzmanlık | |
| Deneyim yılı | |
| Belge veya yetkinlik bilgisi | |
| İletişim veya doğrulama kaynağı | |
| İnceleme tarihi | |

Karar seçenekleri (her satır için):

- Onaylandı
- Düzeltme gerekli
- Uygun değil

Gerekirse önerilen yeni cümleyi “Düzeltme notu” sütununa açıkça yazın.

---

## Musluklar Kapalıyken Su Sayacı Neden Döner?

Slug:

```text
musluklar-kapaliyken-su-sayaci-neden-doner
```

Cluster: `su-kacagi`

| Teknik konu | Karar | Düzeltme notu |
|---|---|---|
| Sayaç hareketinin olası nedenleri doğru mu? | | |
| Klozet rezervuarı açıklaması doğru mu? | | |
| Ana vana testi güvenli ve doğru anlatılmış mı? | | |
| Ana vana testi kesin teşhis gibi sunuluyor mu? | | |
| Ortak hat ve sayaç arızası ihtimali doğru çerçevelenmiş mi? | | |
| Kullanıcıya riskli müdahale öneriliyor mu? | | |

Genel karar (içerik):

```text
Onaylandı / Düzeltme gerekli / Uygun değil
```

Reviewer notu:

```text

```

---

## Tıkanıklık Açıldıktan Sonra Neden Tekrar Eder?

Slug:

```text
tikaniklik-acildiktan-sonra-neden-tekrar-eder
```

Cluster: `tikaniklik`

| Teknik konu | Karar | Düzeltme notu |
|---|---|---|
| Tekrarlayan tıkanıklık nedenleri doğru mu? | | |
| Mekanik açma ve hat temizliği ayrımı doğru mu? | | |
| Boru eğimi ve deformasyon dili doğru mu? | | |
| Kamera gereksinimi kesin zorunluluk gibi sunuluyor mu? | | |
| Kimyasal ürün güvenliği yeterli mi? | | |
| Taşma veya geri tepme uyarıları yeterli mi? | | |

Genel karar (içerik):

```text
Onaylandı / Düzeltme gerekli / Uygun değil
```

Reviewer notu:

```text

```

---

## Peteğin Altı Soğuk, Üstü Sıcaksa Ne Yapılmalı?

Slug:

```text
petegin-alti-soguk-ustu-sicaksa-ne-yapilmali
```

Cluster: `isitma`

| Teknik konu | Karar | Düzeltme notu |
|---|---|---|
| Tortu ve dolaşım açıklamaları doğru mu? | | |
| Dengeleme ve petek temizliği ayrımı doğru mu? | | |
| Vana ve pompa ihtimalleri doğru çerçevelenmiş mi? | | |
| Her durumda petek temizliği öneriliyor mu? | | |
| Kullanıcıya riskli sökme veya boşaltma işlemi öneriliyor mu? | | |
| Kombi ve tesisat ayrımı doğru mu? | | |

Genel karar (içerik):

```text
Onaylandı / Düzeltme gerekli / Uygun değil
```

Reviewer notu:

```text

```

---

## Kod kaydı için not

Onaylandıktan sonra `data/mock/blogTechnicalReviewApprovals.ts` dosyasına gerçek kayıt eklenir.
`approvedItemTopics` alanına içerikteki **tam** `technicalReview.items[].topic` metinleri yazılmalıdır.

Şablon JSON: `seo-audits/pr-5a/APPROVAL-RECORD-TEMPLATE.json`
