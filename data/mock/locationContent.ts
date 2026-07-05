import type { FAQItem, Location, Neighborhood } from "@/types";
import {
  istanbulDistricts,
  kagithaneNeighborhoodNames,
  type IstanbulDistrictMeta,
} from "./istanbulDistricts";

export const ALL_SERVICE_SLUGS = [
  "su-tesisati",
  "kombi-servisi-ve-tesisati",
  "kalorifer-tesisati",
  "su-kacagi-tespit-ve-onarim",
  "tikaniklik-acma",
  "petek-temizleme",
  "kamerali-tesisat-goruntuleme-ve-onarim",
  "pimas-tesisati",
  "dogalgaz-tesisati",
  "pimas-yikama",
] as const;

export function getLocationHeroPath(slug: string): string {
  return `/images/locations/${slug}.svg`;
}

export function getNeighborhoodHeroPath(slug: string): string {
  return `/images/neighborhoods/${slug}.svg`;
}

function buildDistrictFaq(title: string, slug: string): FAQItem[] {
  const isHQ = slug === "kagithane";
  const arrival = isHQ
    ? "Merkez operasyonumuz Kağıthane'de olduğu için ilçe genelinde ortalama 20–30 dakika içinde adresinize ulaşıyoruz."
    : `Kağıthane merkezli mobil ekiplerimizle ${title} ilçesine ortalama 30–45 dakika içinde servis yönlendirmesi yapıyoruz. Acil su kaçağı ve geri taşma durumlarında öncelikli müdahale uygulanır.`;

  return [
    {
      question: `${title} ilçesine ne kadar sürede gelirsiniz?`,
      answer: arrival,
      category: slug,
    },
    {
      question: `${title} tesisatçı hizmeti 7/24 açık mı?`,
      answer: `Evet. ${title} ilçesinde su kaçağı tespiti, tıkanıklık açma, kombi arızası ve acil tesisat müdahaleleri için 7/24 servis hattımız aktiftir.`,
      category: slug,
    },
    {
      question: `${title}'de hangi tesisat hizmetlerini veriyorsunuz?`,
      answer: `${title} ilçesinde su tesisatı, su kaçağı tespiti, tıkanıklık açma, petek temizleme, kombi servisi, kalorifer tesisatı, pimaş yıkama, pimaş tesisatı, doğalgaz tesisatı ve kameralı tesisat görüntüleme hizmetleri sunuyoruz.`,
      category: slug,
    },
    {
      question: `${title} tesisatçı fiyatları nasıl belirlenir?`,
      answer: `Keşif ve cihazla tespit sonrası ${title} ilçesi için net, yazılı fiyat teklifi sunulur. Malzeme ve işçilik kalemleri ayrı ayrı belirtilir; onay olmadan işleme başlanmaz.`,
      category: "fiyatlandirma",
    },
    {
      question: `${title}'de kırmadan su kaçağı tespiti yapılıyor mu?`,
      answer: `Evet. Termal kamera, akustik dinleme ve nem ölçer cihazlarımızla ${title} ilçesinde kırmadan noktasal su kaçağı tespiti ve onarım hizmeti veriyoruz.`,
      category: slug,
    },
    {
      question: `${title}'de yapılan işlemlere garanti veriliyor mu?`,
      answer: `Tüm ${title} tesisat işlemlerimizde işçilik garantisi sunuyoruz. Kullanılan malzemeler servis formunda belirtilir; işlem sonrası test ile kalite doğrulanır.`,
      category: slug,
    },
    {
      question: `${title} ilçesinde acil tıkanıklık açma hizmeti var mı?`,
      answer: `Evet. Tuvalet, lavabo, mutfak gideri ve ana pimaş hattı tıkanıklıklarında ${title} ilçesine robotik cihazlarla kırmadan acil müdahale sağlıyoruz.`,
      category: slug,
    },
    {
      question: `${title} petek temizleme ve kombi servisi yapıyor musunuz?`,
      answer: `Evet. ${title} ilçesinde makineli petek temizliği, kombi arıza tespiti, periyodik bakım ve kalorifer tesisatı onarım hizmetleri sunuyoruz.`,
      category: slug,
    },
  ];
}

function buildNeighborhoodFaq(
  mahalle: string,
  districtTitle: string
): FAQItem[] {
  return [
    {
      question: `${mahalle} mahallesine ne kadar sürede gelirsiniz?`,
      answer: `Merkez operasyonumuz Kağıthane'de olduğu için ${mahalle} mahallesine ortalama 15–30 dakika içinde ulaşıyoruz. Acil durumlarda öncelikli yönlendirme yapılır.`,
      category: "kagithane",
    },
    {
      question: `${mahalle} tesisatçı hizmeti 7/24 açık mı?`,
      answer: `Evet. ${mahalle} mahallesinde su kaçağı, tıkanıklık, kombi arızası ve acil tesisat müdahaleleri için 7/24 servis hattımız aktiftir.`,
      category: "kagithane",
    },
    {
      question: `${mahalle}'de hangi tesisat hizmetlerini veriyorsunuz?`,
      answer: `${mahalle} mahallesinde su tesisatı, su kaçağı tespiti, tıkanıklık açma, petek temizleme, kombi servisi, kalorifer tesisatı, pimaş yıkama, pimaş tesisatı, doğalgaz tesisatı ve kameralı tesisat görüntüleme hizmetleri sunuyoruz.`,
      category: "kagithane",
    },
    {
      question: `${mahalle} tesisatçı fiyatları nasıl belirlenir?`,
      answer: `Keşif sonrası ${mahalle} mahallesi için net, yazılı fiyat teklifi sunulur. Malzeme ve işçilik kalemleri ayrı ayrı belirtilir; onay olmadan işleme başlanmaz.`,
      category: "fiyatlandirma",
    },
    {
      question: `${mahalle}'de kırmadan su kaçağı tespiti yapılıyor mu?`,
      answer: `Evet. Termal kamera ve akustik dinleme cihazlarımızla ${mahalle} mahallesinde kırmadan noktasal su kaçağı tespiti ve onarım hizmeti veriyoruz.`,
      category: "kagithane",
    },
    {
      question: `${mahalle}'de acil tıkanıklık açma hizmeti var mı?`,
      answer: `Evet. ${mahalle} mahallesinde tuvalet, lavabo ve pimaş tıkanıklıklarına robotik cihazlarla kırmadan acil müdahale sağlıyoruz.`,
      category: "kagithane",
    },
    {
      question: `${mahalle} petek temizleme ve kombi servisi yapıyor musunuz?`,
      answer: `Evet. ${mahalle} mahallesinde makineli petek temizliği, kombi arıza tespiti ve kalorifer tesisatı onarım hizmetleri sunuyoruz.`,
      category: "kagithane",
    },
    {
      question: `${districtTitle} ${mahalle} bölgesinde garanti veriliyor mu?`,
      answer: `Tüm ${mahalle} tesisat işlemlerimizde işçilik garantisi sunuyoruz. Resmi servis formu düzenlenir ve işlem sonrası test yapılır.`,
      category: "kagithane",
    },
  ];
}

const neighborhoodDescriptions: Record<string, string> = {
  caglayan:
    "Adliye çevresi ve yoğun konut alanlarında su kaçağı, tıkanıklık ve tesisat arızalarına 7/24 hızlı müdahale.",
  celiktepe:
    "Yoğun konut bölgesinde petek temizleme, kombi servisi ve su kaçağı tespiti hizmetleri.",
  "emniyet-evleri":
    "Prestijli konut alanında gizli su kaçağı tespiti, tesisat yenileme ve acil müdahale.",
  gulbag:
    "Merkezi konumda su tesisatı onarımı, tıkanıklık açma ve kombi servisi hizmetleri.",
  gursel:
    "Konut ve ticaret alanlarında cihazlı tespit ve garantili tesisat onarımı.",
  gultepe:
    "Eski yapı stoğunda kırmadan cihazla su kaçağı tespiti ve tesisat yenileme.",
  hamidiye:
    "Yoğun yerleşimde acil tıkanıklık açma, su kaçağı tespiti ve tesisat bakımı.",
  harmantepe:
    "Konut bölgesinde petek temizleme, kombi servisi ve su tesisatı onarımı.",
  hurriyet:
    "Mahalle genelinde 7/24 tesisat hizmeti, hızlı müdahale ve yazılı teklif.",
  merkez:
    "Operasyon merkezimize en yakın mahalle; en hızlı müdahale süresi ile 7/24 servis.",
  nurtepe:
    "Konut alanlarında su kaçağı, tıkanıklık ve kalorifer tesisatı çözümleri.",
  ortabayir:
    "Yeni ve eski binalarda kameralı tesisat kontrolü ve onarım hizmetleri.",
  sanayi:
    "Sanayi ve konut karışık alanda endüstriyel ve evsel tesisat çözümleri.",
  seyrantepe:
    "Sanayi sitesi ve konut projelerinde pimaş, tıkanıklık ve tesisat hizmetleri.",
  sirintepe:
    "Mahalle genelinde su kaçağı tespiti, tıkanıklık açma ve kombi servisi.",
  talatpasa:
    "Merkezi konumda acil tesisat müdahalesi, cihazlı tespit ve garantili işçilik.",
  telsizler:
    "Konut bölgesinde petek temizleme, su tesisatı onarımı ve acil servis.",
  "yahya-kemal":
    "Yoğun konut alanında kırmadan su kaçağı tespiti ve tesisat yenileme.",
  yesilce:
    "Yeşil alanlı konut bölgesinde profesyonel tesisat hizmeti ve 7/24 destek.",
};

function buildDistrictLocation(d: IstanbulDistrictMeta): Location {
  const isHQ = d.slug === "kagithane";
  const arrivalStat = isHQ ? "20–30 Dk" : "30–45 Dk";

  return {
    id: d.slug,
    title: d.title,
    slug: d.slug,
    city: "İstanbul",
    district: d.title,
    side: d.side,
    isHeadquarters: isHQ,
    description: isHQ
      ? `${d.title} merkezli operasyonumuz ile ilçenin 19 mahallesine ortalama 20–30 dakika içinde ulaşıyoruz. Su kaçağı tespiti, tıkanıklık açma, petek temizleme, kombi servisi ve tüm tesisat ihtiyaçlarınızda cihazlı tespit, yazılı teklif ve garantili işçilik sunuyoruz.`
      : `724 Tesisatçı olarak ${d.title} ilçesinde 7/24 profesyonel tesisat hizmeti veriyoruz. Kağıthane merkezli mobil ekiplerimizle su kaçağı tespiti, tıkanıklık açma, petek temizleme, kombi servisi ve tüm tesisat ihtiyaçlarınızda ortalama 30–45 dakika içinde adresinize ulaşıyoruz. Termal kamera ve robotik cihazlarla kırmadan, noktasal müdahale.`,
    shortDescription: isHQ
      ? `${d.title} merkez operasyon — 19 mahalle, 7/24 acil servis, 20–30 dk varış.`
      : `${d.title} ilçesinde 7/24 tesisat hizmeti. Cihazlı tespit, yazılı teklif, garantili işçilik.`,
    neighborhoods: isHQ
      ? kagithaneNeighborhoodNames.map((n) => n.slug)
      : [],
    relatedServices: [...ALL_SERVICE_SLUGS],
    faq: buildDistrictFaq(d.title, d.slug),
    seoTitle: isHQ
      ? `${d.title} Tesisatçı | Merkez Operasyon — 724 Tesisatçı`
      : `${d.title} Tesisatçı | 7/24 Cihazlı Tesisat — 724 Tesisatçı`,
    seoDescription: isHQ
      ? `${d.title} merkez operasyon tesisatçı hizmeti. 19 mahalle, su kaçağı tespiti, tıkanıklık açma, petek temizleme. 20–30 dk varış, garantili işçilik.`
      : `${d.title} tesisatçı hizmeti. Su kaçağı, tıkanıklık, petek temizleme, kombi servisi. 7/24 acil müdahale, cihazlı tespit, garantili işçilik.`,
    canonicalPath: `/hizmet-bolgeleri/${d.slug}`,
    heroImage: getLocationHeroPath(d.slug),
    stats: isHQ
      ? [
          { label: "Tamamlanan İş", value: "2.450+" },
          { label: "Ortalama Varış", value: arrivalStat },
          { label: "Mahalle", value: "19" },
        ]
      : [
          { label: "Ortalama Varış", value: arrivalStat },
          { label: "Hizmet", value: "7/24" },
          { label: "Garanti", value: "İşçilik" },
        ],
  };
}

function buildNeighborhood(n: { slug: string; title: string }): Neighborhood {
  const desc =
    neighborhoodDescriptions[n.slug] ??
    `${n.title} mahallesinde 7/24 profesyonel tesisat hizmeti.`;

  return {
    id: n.slug,
    title: n.title,
    slug: n.slug,
    districtSlug: "kagithane",
    shortDescription: desc,
    description: `${n.title} mahallesi, Kağıthane ilçesinde 724 Tesisatçı merkez operasyonuna yakın konumda yer alır. ${desc} Su kaçağı tespiti, tıkanıklık açma, petek temizleme, kombi servisi ve tüm tesisat ihtiyaçlarınızda cihazlı tespit, yazılı teklif ve garantili işçilik sunuyoruz.`,
    relatedServices: [...ALL_SERVICE_SLUGS],
    faq: buildNeighborhoodFaq(n.title, "Kağıthane"),
    seoTitle: `${n.title} Tesisatçı | Kağıthane 724 Tesisatçı`,
    seoDescription: `${n.title} mahallesi tesisatçı hizmeti. Su kaçağı, tıkanıklık açma, petek temizleme, kombi servisi. 7/24 acil servis, 15–30 dk varış.`,
    canonicalPath: `/hizmet-bolgeleri/kagithane/${n.slug}`,
    heroImage: getNeighborhoodHeroPath(n.slug),
  };
}

export const istanbulCityLocation: Location = {
  id: "istanbul",
  title: "İstanbul",
  slug: "istanbul",
  city: "İstanbul",
  description:
    "724 Tesisatçı olarak İstanbul'un 39 ilçesinde 7/24 profesyonel tesisat hizmeti sunuyoruz. Merkez operasyonumuz Kağıthane'de olup, Avrupa ve Anadolu Yakası'na hızlı mobil ekip yönlendirmesi yapıyoruz. Su kaçağı tespiti, tıkanıklık açma, petek temizleme, kombi servisi ve tüm tesisat ihtiyaçlarınızda cihazlı tespit, yazılı teklif ve garantili işçilik.",
  shortDescription:
    "İstanbul'un 39 ilçesinde 7/24 tesisat hizmeti. Kağıthane merkez operasyon, hızlı müdahale.",
  neighborhoods: [],
  relatedServices: [...ALL_SERVICE_SLUGS],
  faq: [
    {
      question: "İstanbul'un hangi ilçelerine hizmet veriyorsunuz?",
      answer:
        "İstanbul'un 39 ilçesinin tamamına 7/24 mobil ekip yönlendirmesi yapıyoruz. Merkez operasyonumuz Kağıthane'de olup, Avrupa ve Anadolu Yakası'na hızlı erişim sağlıyoruz.",
      category: "istanbul",
    },
    {
      question: "İstanbul genelinde ne kadar sürede gelirsiniz?",
      answer:
        "Kağıthane merkez operasyonumuza yakın ilçelerde 20–30 dakika, diğer ilçelerde ortalama 30–45 dakika içinde adresinize ulaşıyoruz. Acil durumlarda öncelikli yönlendirme uygulanır.",
      category: "istanbul",
    },
    {
      question: "İstanbul'da hangi tesisat hizmetlerini veriyorsunuz?",
      answer:
        "Su tesisatı, su kaçağı tespiti, tıkanıklık açma, petek temizleme, kombi servisi, kalorifer tesisatı, pimaş yıkama, pimaş tesisatı, doğalgaz tesisatı ve kameralı tesisat görüntüleme hizmetleri sunuyoruz.",
      category: "istanbul",
    },
    {
      question: "İstanbul tesisatçı fiyatları nasıl belirlenir?",
      answer:
        "Keşif ve cihazla tespit sonrası net, yazılı fiyat teklifi sunulur. Gizli maliyet uygulamıyoruz; malzeme ve işçilik kalemleri ayrı ayrı belirtilir.",
      category: "fiyatlandirma",
    },
    {
      question: "İstanbul'da kırmadan su kaçağı tespiti yapılıyor mu?",
      answer:
        "Evet. Termal kamera, akustik dinleme ve nem ölçer cihazlarımızla İstanbul genelinde kırmadan noktasal su kaçağı tespiti ve onarım hizmeti veriyoruz.",
      category: "istanbul",
    },
    {
      question: "İstanbul'da acil tıkanıklık açma hizmeti var mı?",
      answer:
        "Evet. Tuvalet, lavabo, mutfak gideri ve ana pimaş hattı tıkanıklıklarında robotik cihazlarla kırmadan acil müdahale sağlıyoruz.",
      category: "istanbul",
    },
    {
      question: "İstanbul'da yapılan işlemlere garanti veriliyor mu?",
      answer:
        "Tüm İstanbul tesisat işlemlerimizde işçilik garantisi sunuyoruz. Resmi servis formu düzenlenir ve işlem sonrası test yapılır.",
      category: "istanbul",
    },
    {
      question: "Merkez operasyonunuz nerede?",
      answer:
        "Merkez operasyonumuz Kağıthane ilçesindedir. Kağıthane'nin 19 mahallesine en hızlı müdahale süresini sunarken, tüm İstanbul ilçelerine mobil ekip yönlendirmesi yapıyoruz.",
      category: "istanbul",
    },
  ],
  seoTitle: "İstanbul Tesisatçı Hizmeti | 39 İlçe 7/24 — 724 Tesisatçı",
  seoDescription:
    "İstanbul'un 39 ilçesinde 7/24 tesisatçı hizmeti. Su kaçağı, tıkanıklık, petek temizleme, kombi servisi. Kağıthane merkez operasyon, cihazlı tespit, garantili işçilik.",
  canonicalPath: "/hizmet-bolgeleri/istanbul",
  heroImage: getLocationHeroPath("istanbul"),
  stats: [
    { label: "Hizmet Verilen İlçe", value: "39" },
    { label: "Tamamlanan İş", value: "15.000+" },
    { label: "Ortalama Varış", value: "30–45 Dk" },
  ],
};

export const districtLocations: Location[] =
  istanbulDistricts.map(buildDistrictLocation);

export const allNeighborhoods: Neighborhood[] =
  kagithaneNeighborhoodNames.map(buildNeighborhood);
