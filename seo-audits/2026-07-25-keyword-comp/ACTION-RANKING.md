# ACTION — Kağıthane tesisat / tesisatçı sıralama

**Date:** 2026-07-25  
**Seeds:** `kağıthane tesisat` · `kağıthane tesisatçı`  
**Primary money URL:** `/` (ana sayfa)  
**Hub (router):** `/hizmet-bolgeleri/kagithane`  
**Rakip referans:** [02-competitor-ozyurt.md](02-competitor-ozyurt.md)

## Bu pass’te yapılanlar (on-site)

| Faz | Değişiklik |
|-----|------------|
| 1 | `defaultSeo` description (tesisatçı + tesisat cluster); home hero + spoke linkler; value props Kağıthane/saha dili; 2 yeni PAA FAQ (fiyat, acil 7/24) |
| 2 | Hub description’a 2 ek dated saha notu (Gültepe, Seyrantepe); Emniyet Evleri / Gültepe / Seyrantepe mahalle bina stoku notları; hub→home “Kağıthane tesisatçı” contextual link güçlendirme |
| 3 | Su kaçağı + tıkanıklık spoke intro’da home/hub yönlendirme dili; sitemap `CONTENT_LAST_UPDATED` 2026-07-25 (ranking-lift pass) |

**Yapılmadı (bilinçli):** `/kagithane-tesisatci` yeni slug, AggregateRating, sert iddia, layout/section değişikliği.

---

## Faz 4 — Off-site ops checklist (yüksek ROI)

Kod dışı; organik #1 olmadan Map Pack CTR için kritik.

### GBP (Google Business Profile)

- [ ] Kağıthane iş sonrası gerçek müşteri yorumu iste (haftalık hedef koy)
- [ ] İş fotoğrafı yükle (kaçak/tıkanıklık/saha — yüz/kişisel veri yok)
- [ ] GBP Q&A: fiyat nasıl, 7/24, hangi mahalleler (soft claim)
- [ ] NAP = sitedeki telefon / adres ile birebir
- [ ] `maps.app.goo.gl` sameAs zaten sitede; profil “açık / doğrulanmış” kalsın

### Citation / NAP

- [ ] Yandex / Bing Places / sektör dizinleri — aynı telefon ve işletme adı
- [ ] Eski ilanlarda farklı numara varsa düzelt veya kaldır
- [ ] Şube ağı iddiası yok; tek tutarlı varlık

### Yorum dili (spam yok)

- [ ] Müşteriden doğal “Kağıthane / mahalle” geçmesi yeterli; script/şablon yorum yok

---

## Faz 5 — Yayın ve izleme

### Deploy

1. Prod `NEXT_PUBLIC_SITE_URL=https://724tesisatci.com`
2. Cloudflare cache purge (HTML + sitemap)
3. `npm run ping:indexnow` (sitemap URL’leri)

### 2–4 hafta GSC

| Metrik | Beklenen |
|--------|----------|
| Seed impression (home) | ↑ |
| Hub’ın head seed’de yarışması | ↓ / sabit (router kalmalı) |
| Spoke mid-tail (su kaçağı, tıkanıklık) | CTR / impression ↑ |
| Map Pack tıklama (GBP) | yorum hızı ile ↑ |

### Başarı ölçütü

- Head seed’lerde organic görünürlük artışı (home URL)
- Hub title’ın “tesisatçı money” ile cannibalize etmemesi
- Map Pack tıklama artışı (yorum/foto sonrası)

### Rakip drift (aylık)

- Özyurt money title / H1 / AggregateRating widget kontrol
- Kaynak: [02-competitor-ozyurt.md](02-competitor-ozyurt.md)

### Opsiyonel ölçüm

- DataForSEO MCP auth → TR SERP live + volume (auth yoksa WebSearch baseline)

---

## İç link özeti

```text
/  ← primary (kağıthane tesisatçı / tesisat)
↑ contextual
/hizmet-bolgeleri/kagithane  ← hub
↑ sidebar
/kagithane-su-kacagi-tespiti | /kagithane-tikaniklik-acma | …
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community  
🆓 Free  → https://www.skool.com/ai-marketing-hub  
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
