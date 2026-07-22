import type { FAQItem, Location, Neighborhood } from "@/types";
import {
  istanbulDistricts,
  kagithaneNeighborhoodNames,
  type IstanbulDistrictMeta,
} from "./istanbulDistricts";
import { isDistrictIndexable } from "./districtArrivalTimes";
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
  const isHQ = slug === "kagithane";
  const arrival = isHQ
    ? `Kağıthane merkezli hizmet ağımızla ilçe genelinde trafik ve ekip uygunluğuna göre hızlı yönlendirme yapılır. Acil su kaçağı ve geri taşma durumlarında öncelikli müdahale uygulanır.`
    : `Kağıthane merkezli mobil ekiplerimizle ${title} ilçesine trafik ve ekip uygunluğuna göre servis yönlendirmesi yapıyoruz. Acil su kaçağı ve geri taşma durumlarında öncelikli müdahale uygulanır.`;

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
      question: `${title}'de yapılan işlemler nasıl teslim edilir?`,
      answer: `Tüm ${title} tesisat işlemlerimizde yazılı servis formu düzenlenir. İşçilik için 6 ay garanti verilir; kullanılan malzemeler üretici garantisine tabidir ve formda belirtilir. İşlem sonrası test ile kalite doğrulanır.`,
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
  _neighborhoodSlug: string
): FAQItem[] {
  return [
    {
      question: `${mahalle} mahallesine ne kadar sürede gelirsiniz?`,
      answer: `Kağıthane merkezli hizmet ağımızla ${mahalle} mahallesine trafik ve ekip uygunluğuna göre hızlı yönlendirme yapılır. Acil durumlarda öncelikli sıra uygulanır.`,
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
      question: `${districtTitle} ${mahalle} bölgesinde işlemler nasıl teslim edilir?`,
      answer: `Tüm ${mahalle} tesisat işlemlerimizde yazılı servis formu düzenlenir. İşçilik için 6 ay garanti verilir; malzemeler üretici garantisine tabidir. İşlem sonrası test yapılır.`,
      category: "kagithane",
    },
  ];
}

const neighborhoodDescriptions: Record<string, string> = {
  caglayan:
    "Adliye çevresi ve yoğun konut alanlarında su kaçağı, tıkanıklık ve tesisat arızalarına 7/24 destek sağlıyoruz. Yoğun trafik saatlerinde alternatif rota planlaması uygulanır.",
  celiktepe:
    "Çeliktepe mahallesinde petek temizleme, kombi servisi ve su kaçağı tespiti için 7/24 ekip yönlendirmesi yapılır.",
  "emniyet-evleri":
    "Prestijli konut alanında gizli su kaçağı tespiti, gömme rezervuar onarımı ve tesisat yenileme hizmetleri veriyoruz. Site ve apartman girişlerine erişim planlanır.",
  gulbag:
    "Konut yoğunluğunda su tesisatı onarımı, tıkanıklık açma ve kombi servisi hizmetleri sunuyoruz. Acil çağrılara öncelik tanıyoruz.",
  gursel:
    "Konut ve ticaret alanlarında cihazlı tespit ve şeffaf tesisat onarımı yapıyoruz. Ticari işletme ve evsel müdahalelerde yazılı teklif sunuyoruz.",
  gultepe:
    "Eski yapı stoğunda kırmadan cihazla su kaçağı tespiti ve tesisat yenileme uzmanlığı sunuyoruz. Eski boru hatlarında kameralı kontrol ile cihazlı tespit yapıyoruz.",
  hamidiye:
    "Yoğun yerleşimde acil tıkanıklık açma, su kaçağı tespiti ve tesisat bakımı hizmetleri veriyoruz. Dar sokak erişiminde mobil ekip planlaması uyguluyoruz.",
  harmantepe:
    "Konut bölgesinde petek temizleme, kombi servisi ve su tesisatı onarımı sunuyoruz. Kış sezonu öncesi petek bakımı için randevu imkânı sağlıyoruz.",
  hurriyet:
    "Mahalle genelinde 7/24 tesisat hizmeti, hızlı müdahale ve yazılı teklif standartlarımız geçerlidir. Acil su kaçağı çağrılarında öncelikli sıra uygulanır.",
  merkez:
    "Kağıthane Merkez mahallesinde 7/24 acil tesisat desteği sunuyoruz. Trafik ve ekip uygunluğuna göre yönlendirme yapılır.",
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
    "Talatpaşa mahallesinde acil tesisat müdahalesi, cihazlı tespit ve yazılı teklif sunuyoruz.",
  telsizler:
    "Konut bölgesinde petek temizleme, su tesisatı onarımı ve acil servis hizmetleri veriyoruz. Kombi basınç düşüşü ve petek sorunlarında hızlı müdahale ediyoruz.",
  "yahya-kemal":
    "Yoğun konut alanında kırmadan su kaçağı tespiti ve tesisat yenileme hizmetleri sunuyoruz. Eski bina stokunda boru hat yenileme projelerinde destek veriyoruz.",
  yesilce:
    "Yeşil alanlı konut bölgesinde profesyonel tesisat hizmeti ve 7/24 destek sağlıyoruz. Villa ve apartman tipi yapılarda özelleştirilmiş çözümler sunuyoruz.",
};

function buildDistrictLocation(d: IstanbulDistrictMeta): Location {
  const isHQ = d.slug === "kagithane";
  const indexable = isDistrictIndexable(d.slug);

  const fallbackDescription = isHQ
    ? `Kağıthane tesisat hizmet bölgelerinde ekiplerimiz 19 mahalleye yönlendirilir. Apartman, site ve iş yerlerinde bina tipine göre su kaçağı, tıkanıklık, pimaş, petek ve kombi tesisatı için mahalle mahalle servis planı yapılır. İlgili hizmet sayfalarına buradan geçebilirsiniz.`
    : `724 Tesisatçı olarak ${d.title} ilçesinde 7/24 profesyonel tesisat hizmeti veriyoruz. Kağıthane merkezli mobil ekiplerimizle su kaçağı tespiti, tıkanıklık açma, petek temizleme, kombi servisi ve tüm tesisat ihtiyaçlarınızda trafik ve ekip uygunluğuna göre adresinize yönlendirme yapıyoruz. Termal kamera ve robotik cihazlarla kırmadan, noktasal müdahale.`;

  const fallbackShort = isHQ
    ? `Kağıthane tesisat hizmet bölgeleri — 19 mahalle, bina tipi ve servis yönlendirme hub’ı.`
    : `${d.title} ilçesinde 7/24 tesisat hizmeti. Cihazlı tespit, yazılı teklif.`;

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
      ? "Kağıthane Tesisat Hizmet Bölgeleri | Mahalle Mahalle Servis"
      : `${d.title} Tesisatçı | 7/24 Cihazlı Tesisat — 724 Tesisatçı`,
    seoDescription: isHQ
      ? "Kağıthane tesisat hizmet bölgeleri: 19 mahalle, apartman ve site servisi. Su kaçağı, tıkanıklık, pimaş, petek ve kombi için mahalle mahalle yönlendirme."
      : `${d.title} tesisatçı hizmeti. Su kaçağı, tıkanıklık, petek temizleme, kombi servisi. 7/24 acil müdahale, yazılı teklif.`,
    canonicalPath: `/hizmet-bolgeleri/${d.slug}`,
    stats: isHQ
      ? [
          { label: "Hizmet", value: "7/24" },
          { label: "Mahalle", value: "19" },
          { label: "Odak", value: "Kağıthane" },
        ]
      : [
          { label: "Hizmet", value: "7/24" },
          { label: "Yönlendirme", value: "Trafiğe göre" },
          { label: "Teklif", value: "Yazılı" },
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
    indexable: true,
    shortDescription: desc,
    description: `${n.title} mahallesi, Kağıthane ilçesinde yer alır. ${desc} Su kaçağı tespiti, tıkanıklık açma, petek temizleme, kombi servisi ve tüm tesisat ihtiyaçlarınızda cihazlı tespit ve yazılı teklif sunuyoruz.`,
    relatedServices: [...ALL_SERVICE_SLUGS],
    faq: buildNeighborhoodFaq(n.title, "Kağıthane", n.slug),
    seoTitle: `${n.title} Tesisat Hizmeti | Kağıthane`,
    seoDescription: `${n.title} mahallesinde tesisat hizmeti. Su kaçağı, tıkanıklık açma, petek temizleme, kombi servisi. 7/24 destek, yazılı teklif.`,
    canonicalPath: `/hizmet-bolgeleri/kagithane/${n.slug}`,
  };
}

export const istanbulCityLocation: Location = {
  id: "istanbul",
  title: "İstanbul",
  slug: "istanbul",
  city: "İstanbul",
  indexable: false,
  description:
    "724 Tesisatçı olarak İstanbul'un 39 ilçesinde 7/24 profesyonel tesisat hizmeti sunuyoruz. Kağıthane merkezli hizmet ağımızla Avrupa ve Anadolu Yakası'na mobil ekip yönlendirmesi yapıyoruz. Su kaçağı tespiti, tıkanıklık açma, petek temizleme, kombi servisi ve tüm tesisat ihtiyaçlarınızda cihazlı tespit ve yazılı teklif.",
  shortDescription:
    "İstanbul'un 39 ilçesinde 7/24 tesisat hizmeti. Kağıthane merkezli yönlendirme.",
  neighborhoods: [],
  relatedServices: [...ALL_SERVICE_SLUGS],
  faq: [
    {
      question: "İstanbul'un hangi ilçelerine hizmet veriyorsunuz?",
      answer:
        "İstanbul'un 39 ilçesinin tamamına 7/24 mobil ekip yönlendirmesi yapıyoruz. Kağıthane merkezli hizmet ağımızla Avrupa ve Anadolu Yakası'na erişim sağlıyoruz.",
      category: "istanbul",
    },
    {
      question: "İstanbul genelinde ne kadar sürede gelirsiniz?",
      answer:
        "Trafik ve ekip uygunluğuna göre hızlı yönlendirme yapılır. Acil durumlarda öncelikli sıra uygulanır.",
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
      question: "İstanbul'da yapılan işlemler nasıl teslim edilir?",
      answer:
        "Tüm İstanbul tesisat işlemlerimizde yazılı servis formu düzenlenir. İşçilik için 6 ay garanti verilir; malzemeler üretici garantisine tabidir. İşlem sonrası test yapılır.",
      category: "istanbul",
    },
    {
      question: "Hizmet ağınız nerede odaklanır?",
      answer:
        "Hizmet ağımız Kağıthane odaklıdır. Kağıthane'nin 19 mahallesine öncelikli destek sunarken, tüm İstanbul ilçelerine mobil ekip yönlendirmesi yapıyoruz.",
      category: "istanbul",
    },
  ],
  seoTitle: "İstanbul Geneli Tesisatçı | Avrupa & Anadolu 7/24 — 724 Tesisatçı",
  seoDescription:
    "İstanbul'un 39 ilçesinde 7/24 tesisatçı hizmeti. Su kaçağı, tıkanıklık, petek temizleme, kombi servisi. Kağıthane merkezli yönlendirme, yazılı teklif.",
  canonicalPath: "/hizmet-bolgeleri/istanbul",
  stats: [
    { label: "Hizmet Verilen İlçe", value: "39" },
    { label: "Hizmet", value: "7/24" },
    { label: "Odak", value: "Kağıthane" },
  ],
};

export const districtLocations: Location[] =
  istanbulDistricts.map(buildDistrictLocation);

export const allNeighborhoods: Neighborhood[] =
  kagithaneNeighborhoodNames.map(buildNeighborhood);
