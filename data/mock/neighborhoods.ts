import type { Neighborhood } from "@/types";

export const neighborhoods: Neighborhood[] = [
  {
    id: "caglayan",
    title: "Çağlayan",
    slug: "caglayan",
    districtSlug: "kagithane",
    shortDescription: "Adliye çevresi ve konut alanlarında sık görülen su kaçağı ve tıkanıklık sorunlarına acil müdahale.",
    description:
      "Çağlayan mahallesi, Kağıthane'nin en yoğun konut ve ticaret alanlarından biridir. Adliye çevresi ve yüksek katlı binalarda su kaçağı, tıkanıklık ve tesisat arızalarına 7/24 hızlı müdahale sağlıyoruz.",
    relatedServices: ["su-kacagi-tespit-ve-onarim", "tikaniklik-acma", "su-tesisati"],
    faq: [
      {
        question: "Çağlayan'a ne kadar sürede gelirsiniz?",
        answer: "Merkez operasyonumuz Kağıthane'de olduğu için Çağlayan mahallesine ortalama 20-30 dakikada ulaşıyoruz.",
        category: "genel",
      },
    ],
    seoTitle: "Çağlayan Tesisatçı | Kağıthane 724 Tesisatçı",
    seoDescription: "Çağlayan mahallesi tesisatçı hizmeti. Su kaçağı, tıkanıklık açma, 7/24 acil servis. Hızlı müdahale, garantili işçilik.",
    canonicalPath: "/hizmet-bolgeleri/kagithane/caglayan",
  },
  {
    id: "gultepe",
    title: "Gültepe",
    slug: "gultepe",
    districtSlug: "kagithane",
    shortDescription: "Eski yapıların yoğun olduğu bölgede kırmadan cihazla tespit ve yenileme çalışmaları.",
    description:
      "Gültepe mahallesi eski yapı stoğu nedeniyle sık tesisat arızası yaşanan bir bölgedir. Kırmadan cihazla su kaçağı tespiti ve tesisat yenileme hizmetlerimizle kalıcı çözümler sunuyoruz.",
    relatedServices: ["su-kacagi-tespit-ve-onarim", "su-tesisati", "kamerali-tesisat-goruntuleme-ve-onarim"],
    faq: [
      {
        question: "Gültepe'de eski bina tesisatı yenilenebilir mi?",
        answer: "Evet. Kameralı kontrol ile mevcut hat durumunu değerlendirip minimum müdahale ile yenileme yapıyoruz.",
        category: "genel",
      },
    ],
    seoTitle: "Gültepe Tesisatçı | Kağıthane 724 Tesisatçı",
    seoDescription: "Gültepe mahallesi tesisatçı hizmeti. Eski bina tesisat onarımı, su kaçağı tespiti, kırmadan çözüm.",
    canonicalPath: "/hizmet-bolgeleri/kagithane/gultepe",
  },
  {
    id: "seyrantepe",
    title: "Seyrantepe",
    slug: "seyrantepe",
    districtSlug: "kagithane",
    shortDescription: "Sanayi sitesi ve yeni konut projeleri için endüstriyel ve evsel tesisat çözümleri.",
    description:
      "Seyrantepe mahallesi sanayi sitesi ve yeni konut projelerinin bir arada olduğu dinamik bir bölgedir. Hem endüstriyel hem evsel tesisat ihtiyaçlarına profesyonel çözümler sunuyoruz.",
    relatedServices: ["pimas-tesisati", "pimas-yikama", "tikaniklik-acma"],
    faq: [
      {
        question: "Seyrantepe sanayi sitesine hizmet veriyor musunuz?",
        answer: "Evet. Endüstriyel pimaş, tıkanıklık açma ve tesisat bakım hizmetlerimiz sanayi sitesine de uygulanmaktadır.",
        category: "genel",
      },
    ],
    seoTitle: "Seyrantepe Tesisatçı | Kağıthane 724 Tesisatçı",
    seoDescription: "Seyrantepe mahallesi tesisatçı hizmeti. Sanayi ve konut tesisat çözümleri, 7/24 acil servis.",
    canonicalPath: "/hizmet-bolgeleri/kagithane/seyrantepe",
  },
  {
    id: "merkez",
    title: "Merkez",
    slug: "merkez",
    districtSlug: "kagithane",
    shortDescription: "Kağıthane merkez mahallede en hızlı müdahale süresi ile 7/24 tesisat hizmeti.",
    description:
      "Merkez mahalle, operasyon merkezimize en yakın bölge olup en hızlı müdahale süresini sunuyoruz. Su kaçağı, tıkanıklık ve tüm tesisat arızalarında 15-20 dakikada adresinizdeyiz.",
    relatedServices: ["su-kacagi-tespit-ve-onarim", "tikaniklik-acma", "kombi-servisi-ve-tesisati"],
    faq: [
      {
        question: "Merkez mahallede ne kadar sürede gelirsiniz?",
        answer: "Operasyon merkezimize en yakın mahalle olduğu için ortalama 15-20 dakikada adresinizde oluyoruz.",
        category: "genel",
      },
    ],
    seoTitle: "Merkez Mahallesi Tesisatçı | Kağıthane 724 Tesisatçı",
    seoDescription: "Kağıthane Merkez mahalle tesisatçı hizmeti. 15 dakikada kapınızda, 7/24 acil tesisat servisi.",
    canonicalPath: "/hizmet-bolgeleri/kagithane/merkez",
  },
  {
    id: "celiktepe",
    title: "Çeliktepe",
    slug: "celiktepe",
    districtSlug: "kagithane",
    shortDescription: "Yoğun konut alanında petek temizleme, kombi servisi ve su kaçağı tespiti.",
    description:
      "Çeliktepe mahallesi yoğun konut alanı olup kış aylarında kombi ve petek arızaları, yaz aylarında su kaçağı tespiti talepleri yoğunlaşmaktadır. 7/24 hizmet veriyoruz.",
    relatedServices: ["petek-temizleme", "kombi-servisi-ve-tesisati", "su-kacagi-tespit-ve-onarim"],
    faq: [
      {
        question: "Çeliktepe'de petek temizliği yapıyor musunuz?",
        answer: "Evet. Makineli petek temizliği hizmetimiz Çeliktepe dahil Kağıthane'nin tüm mahallelerinde mevcuttur.",
        category: "petek",
      },
    ],
    seoTitle: "Çeliktepe Tesisatçı | Kağıthane 724 Tesisatçı",
    seoDescription: "Çeliktepe mahallesi tesisatçı hizmeti. Petek temizleme, kombi servisi, su kaçağı tespiti. 7/24 servis.",
    canonicalPath: "/hizmet-bolgeleri/kagithane/celiktepe",
  },
];

export function getNeighborhoodBySlug(slug: string): Neighborhood | undefined {
  return neighborhoods.find((n) => n.slug === slug);
}

export function getNeighborhoodsByDistrict(districtSlug: string): Neighborhood[] {
  return neighborhoods.filter((n) => n.districtSlug === districtSlug);
}
