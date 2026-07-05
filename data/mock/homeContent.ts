import type { FAQItem } from "@/types";

export const homeTrustPills = [
  { icon: "verified", label: "İstanbul Geneli Hizmet" },
  { icon: "timer", label: "Aynı Gün Servis" },
  { icon: "verified_user", label: "Garantili İşçilik" },
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
      "Kağıthane merkez operasyonumuzla Avrupa ve Anadolu Yakası'nda 39 ilçeye mobil ekip yönlendirmesi. Acil çağrılarda ortalama 30–45 dakika varış hedefi.",
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
    title: "Şeffaf ve Garantili Hizmet",
    description:
      "Keşif sonrası yazılı teklif, resmi servis formu ve işçilik garantisi. Onayınız olmadan işleme başlanmaz; gizli maliyet uygulanmaz.",
    iconBg: "bg-secondary/30",
    iconColor: "text-secondary-container",
  },
] as const;

export const homeTestimonials = [
  {
    name: "Ayşe K.",
    district: "Kağıthane",
    service: "Su Kaçağı Tespiti",
    rating: 5,
    text: "Duvar arkasındaki gizli kaçağı termal kamera ile kırmadan buldular. Fiyatı önceden yazılı verdiler, iş sonrası alanı tertemiz bıraktılar. Kesinlikle tavsiye ederim.",
  },
  {
    name: "Mehmet Y.",
    district: "Beşiktaş",
    service: "Tıkanıklık Açma",
    rating: 5,
    text: "Gece yarısı tuvalet tıkanıklığı için aradım, 40 dakikada geldiler. Robot cihazla açtılar, tekrar etmedi. WhatsApp üzerinden hızlı randevu almak çok kolaydı.",
  },
  {
    name: "Elif S.",
    district: "Kadıköy",
    service: "Petek Temizleme",
    rating: 5,
    text: "Petekler yarım ısınıyordu, temizlik sonrası fark gece gündüz. Kombi daha az çalışıyor, fatura düştü. Profesyonel ve güler yüzlü ekip.",
  },
] as const;

export const homeFaqs: FAQItem[] = [
  {
    question: "724 Tesisatçı hangi bölgelere hizmet veriyor?",
    answer:
      "Kağıthane merkezli operasyonumuzla İstanbul'un 39 ilçesinde (Avrupa ve Anadolu Yakası) 7/24 tesisat hizmeti sunuyoruz. Hizmet bölgeleri sayfasından ilçe ve mahalle detaylarına ulaşabilirsiniz.",
    category: "genel",
    relatedPage: "/hizmet-bolgeleri",
  },
  {
    question: "Acil durumlarda ne kadar sürede adresime gelirsiniz?",
    answer:
      "Merkez ilçelere ortalama 30–45 dakika, İstanbul geneline 45–90 dakika içinde ulaşmayı hedefliyoruz. Su kaçağı ve geri taşma gibi acil vakalara öncelik verilir.",
    category: "genel",
    relatedPage: "/iletisim",
  },
  {
    question: "Su kaçağı tespiti gerçekten kırmadan yapılabilir mi?",
    answer:
      "Evet. Termal kamera, akustik dinleme ve nem ölçer cihazlarımızla kaçak noktasını belirliyoruz. Onarım yalnızca tespit edilen bölgede minimum müdahale ile yapılır.",
    category: "su-kacagi",
    relatedPage: "/hizmetler/su-kacagi-tespit-ve-onarim",
  },
  {
    question: "Fiyat teklifi işlem öncesinde net olarak veriliyor mu?",
    answer:
      "Keşif ve cihazla tespit sonrası malzeme ve işçilik kalemlerini içeren yazılı fiyat teklifi sunulur. Onayınız alınmadan hiçbir işleme başlanmaz; gizli maliyet uygulanmaz.",
    category: "fiyatlandirma",
    relatedPage: "/iletisim",
  },
  {
    question: "Hizmetleriniz garantili mi?",
    answer:
      "Tüm işçilik hizmetlerimiz yazılı servis formu ve işçilik garantisi ile teslim edilir. Kullanılan malzemeler üretici garantisi kapsamındadır.",
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
      "Sürekli basınç kaybı çoğu zaman gizli su kaçağına işaret eder. Kombi servisi ile birlikte termal kamera destekli kaçak tespiti yaparak kalıcı çözüm sağlıyoruz.",
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
  },
  {
    question: "WhatsApp veya telefon ile nasıl randevu alabilirim?",
    answer:
      "7/24 çağrı hattımızdan veya WhatsApp hattımızdan arıza detayını iletmeniz yeterli. Size en yakın mobil ekip yönlendirilir; dilerseniz online servis talebi formunu da kullanabilirsiniz.",
    category: "genel",
    relatedPage: "/iletisim",
  },
];
