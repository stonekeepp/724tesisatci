import type { FAQItem } from "@/types";

export const homeTrustPills = [
  { icon: "verified", label: "İstanbul Geneli Hizmet" },
  { icon: "timer", label: "Aynı Gün Servis" },
  { icon: "verified_user", label: "Şeffaf İşçilik" },
] as const;

export const homeHeroBadges = [
  { icon: "schedule", label: "7/24 Acil Destek" },
  { icon: "radar", label: "Cihazlı Tespit" },
  { icon: "handyman", label: "Kırmadan Çözüm" },
  { icon: "cleaning_services", label: "Temiz İşçilik" },
  { icon: "flash_on", label: "Hızlı Servis" },
] as const;

export const homeValueProps = [
  {
    icon: "location_on",
    title: "İstanbul Geneli Servis",
    description:
      "Kağıthane merkezli hizmet ağımızla Avrupa ve Anadolu Yakası'nda 39 ilçeye mobil ekip yönlendirmesi. Acil çağrılarda trafik ve ekip uygunluğuna göre hızlı yönlendirme yapılır.",
    iconBg: "bg-secondary/30",
    iconColor: "text-secondary-container",
  },
  {
    icon: "radar",
    title: "Cihazlı ve Noktasal Tespit",
    description:
      "Termal kamera, akustik dinleme ve robotik cihazlarla kırmadan tespit. Gereksiz duvar kırımını önleyerek maliyet ve süreyi minimuma indiriyoruz.",
    iconBg: "bg-secondary/30",
    iconColor: "text-secondary-container",
  },
  {
    icon: "handyman",
    title: "Gereksiz Kırımı Önleme",
    description:
      "Yalnızca arızalı bölgeye müdahale ederek evinizi şantiye alanına çevirmeden kalıcı, temiz ve profesyonel çözümler sunuyoruz.",
    iconBg: "bg-secondary/30",
    iconColor: "text-secondary-container",
  },
  {
    icon: "verified",
    title: "Şeffaf Hizmet",
    description:
      "Keşif sonrası yazılı teklif ve resmi servis formu. Onayınız olmadan işleme başlanmaz; gizli maliyet uygulanmaz.",
    iconBg: "bg-secondary/30",
    iconColor: "text-secondary-container",
  },
] as const;

export const homeFaqs: FAQItem[] = [
  {
    question: "724 Tesisatçı hangi bölgelere hizmet veriyor?",
    answer:
      "Kağıthane merkezli hizmet ağımızla İstanbul'un 39 ilçesinde (Avrupa ve Anadolu Yakası) 7/24 tesisat hizmeti sunuyoruz. Hizmet bölgeleri sayfasından ilçe ve mahalle detaylarına ulaşabilirsiniz. Kağıthane'de 19 mahalle için öncelikli yönlendirme yapılır; Çağlayan, Gültepe, Seyrantepe, Emniyet Evleri ve Merkez gibi yoğun bölgelerde rota trafik saatine göre planlanır. Diğer ilçelerde mobil ekip yönlendirmesi aynı hat üzerinden yapılır; acil su kaçağı, geri taşma ve kombi basınç kaybı çağrıları önceliklendirilir. Yerel landing sayfalarında su kaçağı, tıkanıklık, pimaş, petek ve kombi tesisatı için mahalle bazlı rehberler bulunur.",
    category: "genel",
    relatedPage: "/hizmet-bolgeleri",
    relatedPageLabel: "Hizmet bölgelerimizi inceleyin",
  },
  {
    question: "Acil durumlarda ne kadar sürede adresime gelirsiniz?",
    answer:
      "Trafik ve ekip uygunluğuna göre hızlı yönlendirme yapılır. Su kaçağı ve geri taşma gibi acil vakalara öncelik verilir. Kağıthane içinde mahalle bilgisi ve belirti fotoğrafı paylaşımı yönlendirmeyi hızlandırır; gece ve hafta sonu acil çağrılarda da aynı 7/24 hat aktiftir. Varış süresi trafik, iş yoğunluğu ve çağrı tipine göre değişir; sabit dakika vaadi verilmez. Acil durumda ana vanayı kapatmanız, elektrik riski olan alanlardan uzak durmanız ve sızıntı bölgesinin fotoğrafını çekmeniz ekip hazırlığını kolaylaştırır.",
    category: "genel",
    relatedPage: "/iletisim",
    relatedPageLabel: "Servis talebi oluşturun",
  },
  {
    question: "Su kaçağı tespiti gerçekten kırmadan yapılabilir mi?",
    answer:
      "Evet. Termal kamera, akustik dinleme ve nem ölçer cihazlarımızla kaçak noktasını belirliyoruz. Onarım yalnızca tespit edilen bölgede minimum müdahale ile yapılır. Kağıthane'deki eski apartman stokunda kaçak çoğu zaman banyo şaftı, mutfak duvar birleşimi veya kalorifer hattı bağlantılarından çıkar; önce tüm musluklar kapalıyken sayaç testi yapılır. Termal görüntü yüzey sıcaklık farklarını, akustik cihaz su sesini, nem ölçer ise duvar nemini değerlendirir; tek bir cihaz sonucuyla geniş kırım kararı verilmez. Alt kata sızıntı, elektrik hattına yakın nem veya hızla artan fatura varsa beklemek hasarı büyütür; sonuç yazılı özet ve onay sonrası teklif olarak paylaşılır.",
    category: "su-kacagi",
    relatedPage: "/hizmetler/su-kacagi-tespit-ve-onarim",
    relatedPageLabel: "Su kaçağı tespiti hizmeti",
  },
  {
    question: "Fiyat teklifi işlem öncesinde net olarak veriliyor mu?",
    answer:
      "Keşif ve cihazla tespit sonrası malzeme ve işçilik kalemlerini içeren yazılı fiyat teklifi sunulur. Onayınız alınmadan hiçbir işleme başlanmaz; gizli maliyet uygulanmaz. Su kaçağı, tıkanıklık, pimaş, petek ve kombi tesisatı işlemlerinde kapsam keşif sonrası netleşir; malzeme markası, işçilik süresi ve garanti koşulları ayrı satırlarda belirtilir. Standart keşiflerde ücret alınmaz; onarım yapılması durumunda keşif bedeli işlem tutarından düşülür. İşlem sonrası yazılı servis formu düzenlenir ve 6 ay işçilik garantisi formda yer alır.",
    category: "fiyatlandirma",
    relatedPage: "/iletisim",
    relatedPageLabel: "Servis talebi oluşturun",
  },
  {
    question: "Hizmetleriniz nasıl teslim edilir?",
    answer:
      "Tüm işçilik hizmetlerimiz yazılı servis formu ile teslim edilir. İşçilik için 6 ay garanti verilir; kullanılan malzemeler üretici koşullarına tabidir.",
    category: "genel",
  },
  {
    question: "Robotla tıkanıklık açma pimaş borulara zarar verir mi?",
    answer:
      "Hayır. Kullandığımız robotik spiral makineler PVC pimaş boruların iç yapısına uygun esnek uçlarla çalışır; boru duvarına zarar vermeden tıkanıklığı giderir.",
    category: "tikaniklik",
    relatedPage: "/hizmetler/tikaniklik-acma",
  },
  {
    question: "Kombi basıncı sürekli düşüyorsa ne yapmalıyım?",
    answer:
      "Sürekli basınç kaybı çoğu zaman gizli su kaçağına işaret eder. Kombi servisi ile birlikte termal kamera destekli kaçak tespiti yaparak uygun onarım planı sunuyoruz.",
    category: "genel",
    relatedPage: "/hizmetler/kombi-servisi-ve-tesisati",
  },
  {
    question: "Petek temizliği ne sıklıkla yaptırılmalı?",
    answer:
      "Kalorifer sistemlerinde petek temizliği 3–5 yılda bir önerilir. Isınma verimini artırır, kombi yükünü azaltır ve enerji maliyetlerini düşürür.",
    category: "petek",
    relatedPage: "/hizmetler/petek-temizleme",
  },
  {
    question: "Keşif ücreti alınıyor mu?",
    answer:
      "Standart keşiflerde ücret alınmaz. Onarım yapılması durumunda keşif bedeli işlem tutarından düşülür.",
    category: "fiyatlandirma",
    relatedPage: "/iletisim",
    relatedPageLabel: "Servis talebi oluşturun",
  },
  {
    question: "WhatsApp veya telefon ile nasıl randevu alabilirim?",
    answer:
      "7/24 çağrı hattımızdan veya WhatsApp hattımızdan arıza detayını iletmeniz yeterli. Size en yakın mobil ekip yönlendirilir; dilerseniz online servis talebi formunu da kullanabilirsiniz.",
    category: "genel",
    relatedPage: "/iletisim",
    relatedPageLabel: "Servis talebi oluşturun",
  },
];
