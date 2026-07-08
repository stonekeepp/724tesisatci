import type { FAQItem, Location, Neighborhood } from "@/types";
import {
  istanbulDistricts,
  kagithaneNeighborhoodNames,
  type IstanbulDistrictMeta,
} from "./istanbulDistricts";
import {
  getDistrictArrivalStat,
  getIstanbulArrivalStat,
  getNeighborhoodArrivalStat,
  isDistrictIndexable,
} from "./districtArrivalTimes";
import { getDistrictProfile } from "./districtProfiles";

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
  "gomme-rezervuar-tamiri",
  "batarya-musluk-montaj",
] as const;

function buildDistrictFaq(title: string, slug: string): FAQItem[] {
  const arrivalStat = getDistrictArrivalStat(slug);
  const isHQ = slug === "kagithane";
  const arrival = isHQ
    ? `Merkez operasyonumuz Kağıthane Çeliktepe'de olduğu için ilçe genelinde ortalama ${arrivalStat} içinde adresinize ulaşıyoruz.`
    : `Kağıthane Çeliktepe merkezli mobil ekiplerimizle ${title} ilçesine ortalama ${arrivalStat} içinde servis yönlendirmesi yapıyoruz. Acil su kaçağı ve geri taşma durumlarında öncelikli müdahale uygulanır.`;

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
  districtTitle: string,
  neighborhoodSlug: string
): FAQItem[] {
  const arrivalStat = getNeighborhoodArrivalStat(neighborhoodSlug);

  return [
    {
      question: `${mahalle} mahallesine ne kadar sürede gelirsiniz?`,
      answer: `Merkez operasyonumuz Kağıthane Çeliktepe'de olduğu için ${mahalle} mahallesine ortalama ${arrivalStat} içinde ulaşıyoruz. Acil durumlarda öncelikli yönlendirme yapılır.`,
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
    "Adliye çevresi ve yoğun konut alanlarında su kaçağı, tıkanıklık ve tesisat arızalarına 7/24 hızlı müdahale sağlıyoruz. Yoğun trafik saatlerinde alternatif rota planlaması ile varış süresini kısaltıyoruz.",
  celiktepe:
    "Merkez operasyon noktamızın bulunduğu mahallede en kısa varış sürelerini sunuyoruz. Petek temizleme, kombi servisi ve su kaçağı tespitinde öncelikli ekip yönlendirmesi uygulanır.",
  "emniyet-evleri":
    "Prestijli konut alanında gizli su kaçağı tespiti, gömme rezervuar onarımı ve tesisat yenileme hizmetleri veriyoruz. Site ve apartman girişlerine hızlı erişim sağlıyoruz.",
  gulbag:
    "Merkezi konumda su tesisatı onarımı, tıkanıklık açma ve kombi servisi hizmetleri sunuyoruz. Yoğun konut bloklarında acil çağrılara öncelik tanıyoruz.",
  gursel:
    "Konut ve ticaret alanlarında cihazlı tespit ve garantili tesisat onarımı yapıyoruz. Ticari işletme ve evsel müdahalelerde yazılı teklif sunuyoruz.",
  gultepe:
    "Eski yapı stoğunda kırmadan cihazla su kaçağı tespiti ve tesisat yenileme uzmanlığı sunuyoruz. Eski boru hatlarında kameralı kontrol ile kesin teşhis yapıyoruz.",
  hamidiye:
    "Yoğun yerleşimde acil tıkanıklık açma, su kaçağı tespiti ve tesisat bakımı hizmetleri veriyoruz. Dar sokak erişiminde mobil ekip planlaması uyguluyoruz.",
  harmantepe:
    "Konut bölgesinde petek temizleme, kombi servisi ve su tesisatı onarımı sunuyoruz. Kış sezonu öncesi petek bakımı için randevu imkânı sağlıyoruz.",
  hurriyet:
    "Mahalle genelinde 7/24 tesisat hizmeti, hızlı müdahale ve yazılı teklif standartlarımız geçerlidir. Acil su kaçağı çağrılarında öncelikli sıra uygulanır.",
  merkez:
    "Operasyon merkezimize en yakın mahallelerden biri olarak en hızlı müdahale süresini sunuyoruz. 7/24 acil servis hattımız doğrudan bu bölgeye öncelik verir.",
  nurtepe:
    "Konut alanlarında su kaçağı, tıkanıklık ve kalorifer tesisatı çözümleri sunuyoruz. Yeni dönüşüm projelerinde tesisat yenileme hizmeti de veriyoruz.",
  ortabayir:
    "Yeni ve eski binalarda kameralı tesisat kontrolü ve onarım hizmetleri yapıyoruz. Site yönetimleri için planlı bakım programı önerebiliyoruz.",
  sanayi:
    "Sanayi ve konut karışık alanda endüstriyel ve evsel tesisat çözümleri sunuyoruz. Atölye ve iş yeri gider hatlarında profesyonel müdahale sağlıyoruz.",
  seyrantepe:
    "Sanayi sitesi ve konut projelerinde pimaş, tıkanıklık ve tesisat hizmetleri veriyoruz. Yoğun yağlı atık hatlarında pimaş yıkama hizmeti de sunuyoruz.",
  sirintepe:
    "Mahalle genelinde su kaçağı tespiti, tıkanıklık açma ve kombi servisi hizmetleri sunuyoruz. Termal kamera ile gizli kaçak tespitinde deneyimli ekibimiz görev alır.",
  talatpasa:
    "Merkezi konumda acil tesisat müdahalesi, cihazlı tespit ve garantili işçilik sunuyoruz. Çeliktepe merkezine yakınlık sayesinde kısa varış süreleri sağlıyoruz.",
  telsizler:
    "Konut bölgesinde petek temizleme, su tesisatı onarımı ve acil servis hizmetleri veriyoruz. Kombi basınç düşüşü ve petek sorunlarında hızlı müdahale ediyoruz.",
  "yahya-kemal":
    "Yoğun konut alanında kırmadan su kaçağı tespiti ve tesisat yenileme hizmetleri sunuyoruz. Eski bina stokunda boru hat yenileme projelerinde destek veriyoruz.",
  yesilce:
    "Yeşil alanlı konut bölgesinde profesyonel tesisat hizmeti ve 7/24 destek sağlıyoruz. Villa ve apartman tipi yapılarda özelleştirilmiş çözümler sunuyoruz.",
};

function buildDistrictLocation(d: IstanbulDistrictMeta): Location {
  const isHQ = d.slug === "kagithane";
  const arrivalStat = getDistrictArrivalStat(d.slug);
  const indexable = isDistrictIndexable(d.slug);

  const fallbackDescription = isHQ
    ? `${d.title} merkezli operasyonumuz ile ilçenin 19 mahallesine ortalama ${arrivalStat} içinde ulaşıyoruz. Su kaçağı tespiti, tıkanıklık açma, petek temizleme, kombi servisi ve tüm tesisat ihtiyaçlarınızda cihazlı tespit, yazılı teklif ve garantili işçilik sunuyoruz.`
    : `724 Tesisatçı olarak ${d.title} ilçesinde 7/24 profesyonel tesisat hizmeti veriyoruz. Kağıthane Çeliktepe merkezli mobil ekiplerimizle su kaçağı tespiti, tıkanıklık açma, petek temizleme, kombi servisi ve tüm tesisat ihtiyaçlarınızda ortalama ${arrivalStat} içinde adresinize ulaşıyoruz. Termal kamera ve robotik cihazlarla kırmadan, noktasal müdahale.`;

  const fallbackShort = isHQ
    ? `${d.title} merkez operasyon — 19 mahalle, 7/24 acil servis, ${arrivalStat} varış.`
    : `${d.title} ilçesinde 7/24 tesisat hizmeti. Ortalama ${arrivalStat} varış, garantili işçilik.`;

  const profile = getDistrictProfile(
    d.slug,
    d.title,
    fallbackDescription,
    fallbackShort
  );

  return {
    id: d.slug,
    title: d.title,
    slug: d.slug,
    city: "İstanbul",
    district: d.title,
    side: d.side,
    isHeadquarters: isHQ,
    indexable,
    description: profile.description,
    shortDescription: profile.shortDescription,
    neighborhoods: isHQ
      ? kagithaneNeighborhoodNames.map((n) => n.slug)
      : [],
    relatedServices: [...ALL_SERVICE_SLUGS],
    faq: buildDistrictFaq(d.title, d.slug),
    seoTitle: isHQ
      ? `${d.title} Tesisatçı | Merkez Operasyon — 724 Tesisatçı`
      : `${d.title} Tesisatçı | 7/24 Cihazlı Tesisat — 724 Tesisatçı`,
    seoDescription: isHQ
      ? `${d.title} merkez operasyon tesisatçı hizmeti. 19 mahalle, su kaçağı tespiti, tıkanıklık açma, petek temizleme. ${arrivalStat} varış, garantili işçilik.`
      : `${d.title} tesisatçı hizmeti. Su kaçağı, tıkanıklık, petek temizleme, kombi servisi. Ortalama ${arrivalStat} varış, 7/24 acil müdahale, garantili işçilik.`,
    canonicalPath: `/hizmet-bolgeleri/${d.slug}`,
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
  const arrivalStat = getNeighborhoodArrivalStat(n.slug);

  return {
    id: n.slug,
    title: n.title,
    slug: n.slug,
    districtSlug: "kagithane",
    indexable: true,
    shortDescription: desc,
    description: `${n.title} mahallesi, Kağıthane ilçesinde 724 Tesisatçı Çeliktepe merkez operasyonuna yakın konumda yer alır. ${desc} Su kaçağı tespiti, tıkanıklık açma, petek temizleme, kombi servisi ve tüm tesisat ihtiyaçlarınızda cihazlı tespit, yazılı teklif ve garantili işçilik sunuyoruz.`,
    relatedServices: [...ALL_SERVICE_SLUGS],
    faq: buildNeighborhoodFaq(n.title, "Kağıthane", n.slug),
    seoTitle: `${n.title} Tesisatçı | Kağıthane 724 Tesisatçı`,
    seoDescription: `${n.title} mahallesi tesisatçı hizmeti. Su kaçağı, tıkanıklık açma, petek temizleme, kombi servisi. 7/24 acil servis, ${arrivalStat} varış.`,
    canonicalPath: `/hizmet-bolgeleri/kagithane/${n.slug}`,
  };
}

const istanbulArrivalStat = getIstanbulArrivalStat();

export const istanbulCityLocation: Location = {
  id: "istanbul",
  title: "İstanbul",
  slug: "istanbul",
  city: "İstanbul",
  indexable: true,
  description:
    "724 Tesisatçı olarak İstanbul'un 39 ilçesinde 7/24 profesyonel tesisat hizmeti sunuyoruz. Merkez operasyonumuz Kağıthane Çeliktepe'de olup, Avrupa ve Anadolu Yakası'na hızlı mobil ekip yönlendirmesi yapıyoruz. Su kaçağı tespiti, tıkanıklık açma, petek temizleme, kombi servisi ve tüm tesisat ihtiyaçlarınızda cihazlı tespit, yazılı teklif ve garantili işçilik.",
  shortDescription:
    `İstanbul'un 39 ilçesinde 7/24 tesisat hizmeti. Kağıthane Çeliktepe merkez, ${istanbulArrivalStat} varış aralığı.`,
  neighborhoods: [],
  relatedServices: [...ALL_SERVICE_SLUGS],
  faq: [
    {
      question: "İstanbul'un hangi ilçelerine hizmet veriyorsunuz?",
      answer:
        "İstanbul'un 39 ilçesinin tamamına 7/24 mobil ekip yönlendirmesi yapıyoruz. Merkez operasyonumuz Kağıthane Çeliktepe'de olup, Avrupa ve Anadolu Yakası'na hızlı erişim sağlıyoruz.",
      category: "istanbul",
    },
    {
      question: "İstanbul genelinde ne kadar sürede gelirsiniz?",
      answer: `Kağıthane Çeliktepe merkez operasyonumuza yakın ilçelerde 10–15 dakika, orta mesafe ilçelerde 15–35 dakika, uzak ilçelerde ${istanbulArrivalStat} aralığında adresinize ulaşıyoruz. Acil durumlarda öncelikli yönlendirme uygulanır.`,
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
        "Merkez operasyonumuz Kağıthane Çeliktepe mahallesindedir. Kağıthane'nin 19 mahallesine en hızlı müdahale süresini sunarken, tüm İstanbul ilçelerine mobil ekip yönlendirmesi yapıyoruz.",
      category: "istanbul",
    },
  ],
  seoTitle: "İstanbul Geneli Tesisatçı | Avrupa & Anadolu 7/24 — 724 Tesisatçı",
  seoDescription: `İstanbul'un 39 ilçesinde 7/24 tesisatçı hizmeti. Su kaçağı, tıkanıklık, petek temizleme, kombi servisi. Kağıthane Çeliktepe merkez, ${istanbulArrivalStat} varış, garantili işçilik.`,
  canonicalPath: "/hizmet-bolgeleri/istanbul",
  stats: [
    { label: "Hizmet Verilen İlçe", value: "39" },
    { label: "Tamamlanan İş", value: "15.000+" },
    { label: "Ortalama Varış", value: istanbulArrivalStat },
  ],
};

export const districtLocations: Location[] =
  istanbulDistricts.map(buildDistrictLocation);

export const allNeighborhoods: Neighborhood[] =
  kagithaneNeighborhoodNames.map(buildNeighborhood);
