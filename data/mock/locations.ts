import type { Location } from "@/types";

export const locations: Location[] = [
  {
    id: "istanbul",
    title: "İstanbul",
    slug: "istanbul",
    city: "İstanbul",
    description:
      "724 Tesisatçı olarak İstanbul'un Avrupa ve Anadolu Yakası'nda 7/24 mobil ekiplerimizle hizmet veriyoruz. Merkez operasyonumuz Kağıthane'de olup, tüm ilçelere hızlı erişim sağlıyoruz.",
    shortDescription:
      "İstanbul genelinde 7/24 tesisat hizmeti. Su kaçağı, tıkanıklık, petek temizleme ve tüm tesisat ihtiyaçlarınız için yanınızdayız.",
    neighborhoods: [],
    relatedServices: [
      "su-kacagi-tespit-ve-onarim",
      "tikaniklik-acma",
      "petek-temizleme",
      "kombi-servisi-ve-tesisati",
    ],
    faq: [
      {
        question: "İstanbul'un hangi ilçelerine hizmet veriyorsunuz?",
        answer:
          "Merkez ofisimiz İstanbul'da olup, şu an için İstanbul'un tüm ilçelerine mobil ekiplerimizle hizmet sağlamaktayız.",
        category: "genel",
      },
    ],
    seoTitle: "İstanbul Tesisatçı Hizmeti | 7/24 724 Tesisatçı",
    seoDescription:
      "İstanbul genelinde 7/24 tesisatçı hizmeti. Su kaçağı, tıkanıklık, petek temizleme, kombi servisi. Tüm ilçelere hızlı müdahale.",
    canonicalPath: "/hizmet-bolgeleri/istanbul",
    stats: [
      { label: "Hizmet Verilen İlçe", value: "39+" },
      { label: "Tamamlanan İş", value: "15.000+" },
      { label: "Ortalama Varış", value: "45 Dk" },
    ],
  },
  {
    id: "kagithane",
    title: "Kağıthane",
    slug: "kagithane",
    city: "İstanbul",
    district: "Kağıthane",
    description:
      "Kağıthane merkezli operasyonumuz ile ilçenin tüm mahallelerine 30 dakika içinde ulaşıyoruz. Çağlayan, Gültepe, Seyrantepe ve diğer tüm mahallelere 7/24 hizmet.",
    shortDescription:
      "Kağıthane'de 7/24 tesisat hizmeti. Merkez operasyon, hızlı müdahale, cihazla tespit.",
    neighborhoods: ["caglayan", "gultepe", "seyrantepe", "merkez", "celiktepe"],
    relatedServices: [
      "su-kacagi-tespit-ve-onarim",
      "tikaniklik-acma",
      "petek-temizleme",
      "su-tesisati",
    ],
    faq: [
      {
        question: "Kağıthane'de ne kadar sürede gelirsiniz?",
        answer:
          "Merkez operasyonumuz Kağıthane'de olduğu için ilçe genelinde ortalama 30 dakika içinde adresinizde oluyoruz.",
        category: "genel",
      },
    ],
    seoTitle: "Kağıthane Tesisatçı | 7/24 Cihazlı Tesisat Hizmeti",
    seoDescription:
      "Kağıthane tesisatçı hizmeti. Su kaçağı tespiti, tıkanıklık açma, petek temizleme. 30 dakikada kapınızda, garantili işçilik.",
    canonicalPath: "/hizmet-bolgeleri/kagithane",
    stats: [
      { label: "Kağıthane'de Tamamlanan İş", value: "2.450+" },
      { label: "Ortalama Varış", value: "30 Dk" },
    ],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
