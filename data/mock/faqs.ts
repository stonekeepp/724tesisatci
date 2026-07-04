import type { FAQItem } from "@/types";

export const faqs: FAQItem[] = [
  {
    question: "724 Tesisatçı hangi bölgelere hizmet veriyor?",
    answer:
      "Merkez ofisimiz İstanbul'da olup, şu an için İstanbul'un tüm ilçelerine (Avrupa ve Anadolu Yakası) mobil ekiplerimizle hizmet sağlamaktayız. Detaylı ilçe listesi için Hizmet Bölgelerimiz sayfasını ziyaret edebilirsiniz.",
    category: "genel",
    relatedPage: "/hizmet-bolgeleri",
  },
  {
    question: "Acil durumlarda ne kadar sürede gelirsiniz?",
    answer:
      "Kağıthane merkezli operasyonumuz sayesinde merkez ilçelere ortalama 30-45 dakika, İstanbul geneline ise 45-90 dakika içinde ulaşıyoruz. Acil su kaçağı ve tıkanıklık durumlarında öncelik verilir.",
    category: "genel",
    relatedPage: "/iletisim",
  },
  {
    question: "Hizmetleriniz garantili mi?",
    answer:
      "Evet. Tüm işçilik hizmetlerimiz yazılı garanti belgesi ile teslim edilir. Kullanılan malzemeler de üretici garantisi kapsamındadır.",
    category: "genel",
  },
  {
    question: "Su kaçağı tespiti kırmadan yapılabilir mi?",
    answer:
      "Evet. Termal kamera, akustik dinleme ve nem ölçer cihazlarımız ile kaçak noktasını kırmadan tespit ediyoruz. Sadece onarım noktasında minimum müdahale yapılır.",
    category: "su-kacagi",
    relatedPage: "/hizmetler/su-kacagi-tespit-ve-onarim",
  },
  {
    question: "Su kaçağı tespiti ne kadar sürer?",
    answer:
      "Standart bir daire tespiti 1-2 saat sürer. Onarım dahil toplam süre genellikle yarım günü geçmez.",
    category: "su-kacagi",
    relatedPage: "/hizmetler/su-kacagi-tespit-ve-onarim",
  },
  {
    question: "Gizli su kaçağı nasıl anlaşılır?",
    answer:
      "Yüksek su faturası, duvarlarda nem ve küf, zemin ısınması ve tüm musluklar kapalıyken sayacın dönmesi gizli kaçak belirtileridir.",
    category: "su-kacagi",
    relatedPage: "/blog/su-kacagi-belirtileri",
  },
  {
    question: "Robotla tıkanıklık açma işlemi pimaş borulara zarar verir mi?",
    answer:
      "Hayır, kesinlikle zarar vermez. Kullandığımız robotik makinelerin ucundaki yaylar, pimaş boruların (PVC) iç yapısına uygun esnekliktedir ve dönerek ilerler.",
    category: "tikaniklik",
    relatedPage: "/hizmetler/tikaniklik-acma",
  },
  {
    question: "Mutfak tıkanıklığı neden sürekli tekrarlar?",
    answer:
      "Sürekli tekrarlayan mutfak tıkanıklıklarının en yaygın sebebi boru içinde biriken yemek yağlarıdır. Gerekirse Pimaş Yıkama işlemi uyguluyoruz.",
    category: "tikaniklik",
    relatedPage: "/hizmetler/pimas-yikama",
  },
  {
    question: "Petek temizliği ne sıklıkla yapılmalı?",
    answer:
      "Kalorifer sistemlerinde petek temizliği 3-5 yılda bir önerilir. Sistemin verimliliğini artırır ve enerji maliyetlerini düşürür.",
    category: "petek",
    relatedPage: "/hizmetler/petek-temizleme",
  },
  {
    question: "Petek temizliği kombi performansını etkiler mi?",
    answer:
      "Evet. Temiz petekler daha hızlı ısınır, kombi daha az çalışır ve doğalgaz tüketimi azalır. %30'a kadar enerji tasarrufu sağlanabilir.",
    category: "petek",
    relatedPage: "/hizmetler/petek-temizleme",
  },
  {
    question: "Fiyatlandırma nasıl yapılıyor?",
    answer:
      "Keşif sonrası net fiyat verilir. Gizli maliyet yoktur. İşlem öncesi yazılı teklif sunulur ve onayınız alınır.",
    category: "fiyatlandirma",
  },
  {
    question: "Keşif ücreti alınıyor mu?",
    answer:
      "Standart keşiflerde ücret alınmaz. Onarım yapılması durumunda keşif bedeli işlem tutarından düşülür.",
    category: "fiyatlandirma",
    relatedPage: "/iletisim",
  },
];

export const faqCategories = [
  { id: "genel", label: "Genel Sorular", icon: "help" },
  { id: "su-kacagi", label: "Su Kaçağı", icon: "water_drop" },
  { id: "tikaniklik", label: "Tıkanıklık Açma", icon: "cleaning_services" },
  { id: "petek", label: "Petek Temizleme", icon: "heat" },
  { id: "fiyatlandirma", label: "Fiyatlandırma", icon: "payments" },
];

export function getFaqsByCategory(category: string): FAQItem[] {
  return faqs.filter((f) => f.category === category);
}
