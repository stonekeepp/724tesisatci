import type { FAQItem, Location, Neighborhood } from "@/types";
import {
  istanbulDistricts,
  kagithaneNeighborhoodNames,
  REGION_GROUP_LABELS,
  type IstanbulDistrictMeta,
} from "./istanbulDistricts";
import { isDistrictIndexable } from "./districtArrivalTimes";
import { getDistrictProfile } from "./districtProfiles";
import { getTurkishLocative } from "@/lib/utils/turkishSuffix";

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

const KAGITHANE_LANDING_SLUGS = [
  "kagithane-su-tesisati",
  "kagithane-su-kacagi-tespiti",
  "kagithane-gizli-su-kacagi",
  "kagithane-tikaniklik-acma",
  "kagithane-lavabo-tikanikligi",
  "kagithane-tuvalet-tikanikligi",
  "kagithane-pimas-acma",
  "kagithane-pimas-tesisati",
  "kagithane-petek-temizleme",
  "kagithane-kombi-servisi",
  "kagithane-kalorifer-tesisati",
  "kagithane-kamerali-tesisat-goruntuleme",
  "kagithane-dogalgaz-tesisati",
] as const;

function buildDistrictFaq(d: IstanbulDistrictMeta): FAQItem[] {
  const title = d.title;
  const locative = getTurkishLocative(title);
  const slug = d.slug;
  const regionLabel = REGION_GROUP_LABELS[d.regionGroup];
  const isHQ = slug === "kagithane";

  const generic: FAQItem[] = [
    {
      question: `${title} tesisatçı fiyatları nasıl belirlenir?`,
      answer: `Keşif ve cihazla değerlendirme sonrası ${title} için yazılı teklif sunulur. Malzeme ve işçilik kalemleri ayrı belirtilir; onay olmadan işleme başlanmaz.`,
      category: "fiyatlandirma",
      source: "generic-service-area",
    },
    {
      question: `${title} tesisat hizmeti 7/24 açık mı?`,
      answer: `Evet. Su kaçağı, tıkanıklık, kombi ve acil tesisat çağrıları için 7/24 hat aktiftir. Yönlendirme trafik ve ekip uygunluğuna göre planlanır; sabit dakika vaadi verilmez.`,
      category: slug,
      source: "generic-service-area",
    },
  ];

  const regionFaq: FAQItem = {
    question: `${regionLabel} hattında hangi ilçelere yönlendirme yapıyorsunuz?`,
    answer: `${regionLabel} grubundaki ilçelere Kağıthane merkezli mobil ekiplerle servis yönlendirmesi yapılır. ${locative} çağrılarda yakın ilçe planı ve trafik durumu birlikte değerlendirilir.`,
    category: d.regionGroup,
    source: "region-specific",
  };

  if (isHQ) {
    return [
      {
        question: "Hangi Kağıthane mahallelerine hizmet veriliyor?",
        answer:
          "Kağıthane’nin 19 mahallesine (Çağlayan, Gültepe, Seyrantepe, Emniyet Evleri, Merkez ve diğerleri) tesisat, su kaçağı, tıkanıklık, kombi ve petek hizmeti yönlendirilir. Mahalle listesi hizmet bölgeleri sayfasında yer alır.",
        category: "kagithane",
        source: "district-specific",
      },
      {
        question: "Su kaçağı tespitinde hangi yöntemler kullanılabilir?",
        answer:
          "Termal kamera, akustik dinleme ve nem ölçümü birlikte değerlendirilir. Amaç gereksiz kırım yapmadan olası noktayı daraltmaktır; tek belirtiye dayalı kesin teşhis dili kullanılmaz.",
        category: "kagithane",
        source: "district-specific",
        needsTechnicalReview: true,
      },
      {
        question: "Tıkanıklık işleminden önce hangi bilgiler istenir?",
        answer:
          "Mahalle, kat, hangi giderlerin etkilendiği, taşma/geri tepme olup olmadığı ve mümkünse fotoğraf/video istenir. Bu bilgiler yöntem seçimini (açma, yıkama, kamera) netleştirir.",
        category: "kagithane",
        source: "district-specific",
      },
      {
        question: "Varış süresi nasıl belirlenir?",
        answer:
          "Varış; trafik, ekip uygunluğu, çağrı tipi ve site giriş koşullarına göre değişir. Sabit dakika veya kesin varış vaadi verilmez; acil sızıntı/taşma çağrıları önceliklendirilir.",
        category: "kagithane",
        source: "district-specific",
      },
      {
        question: "İşlem öncesinde fiyat nasıl açıklanır?",
        answer:
          "Keşif/tespit sonrası kapsam yazılı teklifle paylaşılır. Onay olmadan onarıma başlanmaz; gizli maliyet uygulanmaz.",
        category: "fiyatlandirma",
        source: "district-specific",
      },
    ];
  }

  // Non-HQ: 1 district-safe + 1 region + 1–2 generic (no invented local claims)
  const districtSafe: FAQItem = {
    question: `${locative} hangi tesisat hizmetleri sunuluyor?`,
    answer: `${locative} su kaçağı tespiti, tıkanıklık açma, petek temizleme, kombi servisi ve ilgili tesisat işlemleri için yönlendirme yapılır. Kapsam keşif sonrası yazılı netleşir.`,
    category: slug,
    source: "district-specific",
  };

  return [districtSafe, regionFaq, generic[0], generic[1]].slice(0, 5);
}

function buildNeighborhoodFaq(
  mahalle: string,
  districtTitle: string,
  _neighborhoodSlug: string
): FAQItem[] {
  const locative = getTurkishLocative(mahalle);
  return [
    {
      question: `${mahalle} mahallesine ne kadar sürede gelirsiniz?`,
      answer: `Kağıthane merkezli hizmet ağımızla ${mahalle} mahallesine trafik ve ekip uygunluğuna göre yönlendirme yapılır. Acil durumlarda öncelikli sıra uygulanır; sabit dakika vaadi verilmez.`,
      category: "kagithane",
      source: "district-specific",
    },
    {
      question: `${mahalle} tesisatçı hizmeti 7/24 açık mı?`,
      answer: `Evet. ${mahalle} mahallesinde su kaçağı, tıkanıklık, kombi arızası ve acil tesisat müdahaleleri için 7/24 servis hattımız aktiftir.`,
      category: "kagithane",
      source: "generic-service-area",
    },
    {
      question: `${locative} hangi tesisat hizmetlerini veriyorsunuz?`,
      answer: `${locative} su tesisatı, su kaçağı tespiti, tıkanıklık açma, petek temizleme, kombi servisi ve ilgili tesisat işlemleri sunulur.`,
      category: "kagithane",
      source: "district-specific",
    },
    {
      question: `${mahalle} tesisatçı fiyatları nasıl belirlenir?`,
      answer: `Keşif sonrası ${mahalle} mahallesi için yazılı fiyat teklifi sunulur. Malzeme ve işçilik kalemleri ayrı belirtilir; onay olmadan işleme başlanmaz.`,
      category: "fiyatlandirma",
      source: "generic-service-area",
    },
  ];
}

const neighborhoodDescriptions: Record<string, string> = {
  caglayan:
    "Adliye çevresi ve yoğun konut alanlarında su kaçağı, tıkanıklık ve tesisat arızalarına 7/24 destek sağlıyoruz. Yoğun trafik saatlerinde alternatif rota planlaması uygulanır.",
  celiktepe:
    "Çeliktepe mahallesinde petek temizleme, kombi servisi ve su kaçağı tespiti için 7/24 ekip yönlendirmesi yapılır.",
  "emniyet-evleri":
    "Prestijli site ve apartman stoğunda gizli su kaçağı, gömme rezervuar ve ortak pimaş hatları sık kontrol edilir. Site giriş izinleri önceden planlanır; şaft ve bodrum erişimi yazılı teklifte netleştirilir.",
  gulbag:
    "Konut yoğunluğunda su tesisatı onarımı, tıkanıklık açma ve kombi servisi hizmetleri sunuyoruz. Acil çağrılara öncelik tanıyoruz.",
  gursel:
    "Konut ve ticaret alanlarında cihazlı tespit ve şeffaf tesisat onarımı yapıyoruz. Ticari işletme ve evsel müdahalelerde yazılı teklif sunuyoruz.",
  gultepe:
    "1990’lar ve öncesi apartman stoğunda eski boru, flex ve şaft birleşimleri kaçak riskini artırır. Kırmadan termal/akustik tespit ve noktasal onarım odaklı çalışılır; alt kata sızıntı çağrıları önceliklendirilir.",
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
    "Sanayi sitesi ve konut karışımında yağlı mutfak gideri, pimaş daralması ve tıkanıklık sık görülür. Robot açma sonrası kamera ile eğim/yağ tabakası kontrol edilir; tekrar riski yazılı paylaşılır.",
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
    regionGroup: d.regionGroup,
    nearbyDistrictSlugs: d.nearbyDistrictSlugs,
    isPriority: d.isPriority,
    indexStatus: d.indexStatus,
    relatedLocalLandingSlugs: isHQ ? [...KAGITHANE_LANDING_SLUGS] : undefined,
    description: profile.description,
    shortDescription: profile.shortDescription,
    neighborhoods: isHQ
      ? kagithaneNeighborhoodNames.map((n) => n.slug)
      : [],
    relatedServices: [...ALL_SERVICE_SLUGS],
    faq: buildDistrictFaq(d),
    seoTitle: isHQ
      ? "Kağıthane Tesisat Hizmet Bölgeleri | Mahalle Mahalle Servis"
      : `${d.title} Tesisatçı Hizmetleri | 724 Tesisatçı`,
    seoDescription: isHQ
      ? "Kağıthane tesisat hizmet bölgeleri: 19 mahalle, apartman ve site servisi. Su kaçağı, tıkanıklık, pimaş, petek ve kombi için mahalle mahalle yönlendirme."
      : `${getTurkishLocative(d.title)} su kaçağı tespiti, tıkanıklık açma ve tesisat işlemleri için sunulan hizmetleri ve çalışma sürecini inceleyin.`,
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
  indexable: true,
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
