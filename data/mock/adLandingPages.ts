import type { FAQItem } from "@/types";

export interface AdLandingPage {
  slug: string;
  serviceSlug?: string;
  heroTitle: string;
  heroDescription?: string;
  seoTitle: string;
  seoDescription: string;
  breadcrumbLabel: string;
  displayTitle?: string;
  noindex: true;
}

export const acilTesisatciFaqs: FAQItem[] = [
  {
    question: "Acil tesisatçı ne kadar sürede gelir?",
    answer:
      "Kağıthane merkezli ekiplerimiz İstanbul genelinde acil çağrılara trafik ve ekip uygunluğuna göre yönlendirme yapar. Su kaçağı ve geri taşma gibi vakalara öncelik verilir.",
    category: "Acil Servis",
  },
  {
    question: "Gece ve hafta sonu acil tesisat hizmeti var mı?",
    answer:
      "Evet. 7/24 acil tesisat ekibimiz gece, hafta sonu ve resmi tatillerde de hizmet verir. Telefon veya WhatsApp ile anında yönlendirme yapılır.",
    category: "Acil Servis",
  },
  {
    question: "Acil müdahale fiyatı nasıl belirlenir?",
    answer:
      "Adreste arıza tespit edildikten sonra yazılı teklif sunulur. Onayınız olmadan işleme başlanmaz. Gece tarifesi ve işlem türüne göre fiyat değişebilir.",
    category: "Acil Servis",
  },
  {
    question: "Hangi acil tesisat sorunlarına müdahale ediyorsunuz?",
    answer:
      "Su kaçağı tespiti, tıkanıklık ve pimaş açma, kombi arızası, petek sorunları, geri taşma ve basınç kaybı gibi acil tesisat vakalarına müdahale ediyoruz.",
    category: "Acil Servis",
  },
];

export const adLandingPages: AdLandingPage[] = [
  {
    slug: "su-kacagi-tespiti",
    serviceSlug: "su-kacagi-tespit-ve-onarim",
    heroTitle: "Su Kaçağı Tespiti",
    heroDescription:
      "Termal kamera, akustik dinleme ve nem ölçer ile kırmadan su kaçağı tespiti. Noktasal onarım, gereksiz kırım yok, 7/24 acil servis.",
    seoTitle: "Su Kaçağı Tespiti İstanbul | 7/24 Kırmadan",
    seoDescription:
      "İstanbul su kaçağı tespiti: termal kamera ile kırmadan noktasal tespit, yazılı rapor, yazılı servis formu. 7/24 acil ekip.",
    breadcrumbLabel: "Su Kaçağı Tespiti",
    displayTitle: "Su Kaçağı Tespiti",
    noindex: true,
  },
  {
    slug: "tikaniklik-acma",
    serviceSlug: "tikaniklik-acma",
    heroTitle: "Tıkanıklık Açma",
    heroDescription:
      "Lavabo, tuvalet, mutfak gideri ve ana pimaş hattı tıkanıklıklarını robotik makinelerle kırmadan açıyoruz. Kameralı kontrol ve 7/24 acil servis.",
    seoTitle: "Tıkanıklık Açma İstanbul | 7/24 Acil",
    seoDescription:
      "İstanbul tıkanıklık açma: lavabo, tuvalet, pimaş. Robotik cihazlarla kırmadan açma, kameralı kontrol. 7/24 acil servis.",
    breadcrumbLabel: "Tıkanıklık Açma",
    displayTitle: "Tıkanıklık Açma",
    noindex: true,
  },
  {
    slug: "pimas-acma",
    serviceSlug: "tikaniklik-acma",
    heroTitle: "Pimaş Açma",
    heroDescription:
      "Tuvalet, lavabo, mutfak piyasası ve ana pimaş hattı tıkanıklıklarını robotik spiral makine ile kırmadan açıyoruz. Geri taşma ve kötü kokuya 7/24 acil müdahale.",
    seoTitle: "Pimaş Açma İstanbul | 7/24 Acil Tıkanıklık",
    seoDescription:
      "İstanbul pimaş açma: ana hat ve bina pimaş tıkanıklıkları. Robotik cihaz, kameralı kontrol, basınçlı yıkama. 7/24 acil servis.",
    breadcrumbLabel: "Pimaş Açma",
    displayTitle: "Pimaş Açma",
    noindex: true,
  },
  {
    slug: "acil-tesisatci",
    heroTitle: "Acil Tesisatçı İstanbul",
    heroDescription:
      "Su kaçağı, tıkanıklık, pimaş tıkanması ve kombi arızalarında 7/24 acil tesisat ekibi. Kağıthane merkezli yönlendirme ile İstanbul geneline mobil destek.",
    seoTitle: "Acil Tesisatçı İstanbul | 7/24 Hızlı Müdahale",
    seoDescription:
      "İstanbul acil tesisatçı: su kaçağı, tıkanıklık, pimaş açma. 7/24 mobil ekip, cihazlı tespit, yazılı teklif.",
    breadcrumbLabel: "Acil Tesisatçı",
    noindex: true,
  },
];

export function getAdLandingBySlug(slug: string): AdLandingPage | undefined {
  return adLandingPages.find((page) => page.slug === slug);
}

export function getAllAdLandingSlugs(): string[] {
  return adLandingPages.map((page) => page.slug);
}
