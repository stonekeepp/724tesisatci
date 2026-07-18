import type { SEOData } from "@/types";

export const defaultSeo: SEOData = {
  title: "Kağıthane Tesisatçı | 7/24 Su Tesisatı, Tıkanıklık",
  description:
    "Kağıthane merkezli tesisatçı. Su kaçağı, tıkanıklık, pimaş, musluk ve rezervuar için 7/24 servis; telefon ve WhatsApp ile hızlı ulaşım.",
  canonicalPath: "/",
};

export const staticPageSeo: Record<string, SEOData> = {
  hizmetler: {
    title: "İstanbul Tesisat Hizmetleri | Su Kaçağı, Tıkanıklık, Kombi — 724 Tesisatçı",
    description:
      "İstanbul genelinde 12 uzmanlık alanında premium tesisat hizmeti: su kaçağı tespiti, tıkanıklık açma, petek temizleme, kombi servisi, gömme rezervuar tamiri, batarya musluk montaj, pimaş yıkama ve doğalgaz tesisatı. Cihazlı tespit, yazılı teklif, 7/24 acil servis.",
    canonicalPath: "/hizmetler",
  },
  "hizmet-bolgeleri": {
    title: "İstanbul İlçe Listesi | 39 İlçede 7/24 Tesisat — 724 Tesisatçı",
    description:
      "İstanbul'un 39 ilçesinde 7/24 tesisat hizmeti. Kağıthane merkezli yönlendirme, 19 mahalle, Avrupa ve Anadolu Yakası'na mobil ekip desteği.",
    canonicalPath: "/hizmet-bolgeleri",
  },
  blog: {
    title: "Tesisat Blog | Kağıthane Su Kaçağı, Tıkanıklık, Kombi",
    description:
      "Kağıthane merkezli tesisat rehberleri: su kaçağı, tıkanıklık, kombi basıncı, petek temizleme ve periyodik bakım için pratik bilgiler.",
    canonicalPath: "/blog",
  },
  sss: {
    title: "SSS | İstanbul Tesisat — Su Kaçağı, Tıkanıklık, Kombi | 724 Tesisatçı",
    description:
      "724 Tesisatçı sık sorulan sorular: su kaçağı tespiti, tıkanıklık açma, petek temizleme, kombi servisi, fiyatlandırma, acil müdahale ve İstanbul geneli 7/24 servis hakkında kapsamlı yanıtlar.",
    canonicalPath: "/sss",
  },
  hakkimizda: {
    title: "Hakkımızda | 724 Tesisatçı — İstanbul Tesisat Uzmanları",
    description:
      "724 Tesisatçı: Kağıthane merkezli, İstanbul genelinde 7/24 profesyonel tesisat hizmeti. Termal kamera ile kırmadan tespit, yazılı teklif ve 15+ yıl tecrübe.",
    canonicalPath: "/hakkimizda",
  },
  iletisim: {
    title: "İletişim | 724 Tesisatçı Servis Talebi",
    description:
      "724 Tesisatçı ile iletişime geçin. Servis talebi oluşturun veya hemen arayın. 7/24 acil tesisat desteği.",
    canonicalPath: "/iletisim",
  },
  "gizlilik-politikasi": {
    title: "Gizlilik Politikası | 724 Tesisatçı",
    description:
      "724 Tesisatçı gizlilik politikası ve KVKK aydınlatma metni. Kişisel verilerinizin korunması hakkında bilgi.",
    canonicalPath: "/gizlilik-politikasi",
  },
  "cerez-politikasi": {
    title: "Çerez Politikası | 724 Tesisatçı",
    description:
      "724 Tesisatçı web sitesi çerez kullanım politikası ve tercihleriniz hakkında bilgilendirme.",
    canonicalPath: "/cerez-politikasi",
  },
};
