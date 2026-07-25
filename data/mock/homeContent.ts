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
      "Kağıthane merkezli tesisat ağımızla 19 mahalleye öncelikli, 39 ilçeye mobil yönlendirme. Çağlayan, Gültepe, Seyrantepe ve Emniyet Evleri çağrılarında trafik ve ekip uygunluğuna göre plan yapılır; sabit varış dakikası vaadi verilmez.",
    iconBg: "bg-secondary/30",
    iconColor: "text-secondary-container",
  },
  {
    icon: "radar",
    title: "Cihazlı ve Noktasal Tespit",
    description:
      "Termal kamera, akustik dinleme ve robotik cihazlarla kırmadan tespit. Kağıthane eski apartman stokunda şaft, flex ve kalorifer bağlantıları öncelikli taranır; geniş kırım önerilmez.",
    iconBg: "bg-secondary/30",
    iconColor: "text-secondary-container",
  },
  {
    icon: "handyman",
    title: "Gereksiz Kırımı Önleme",
    description:
      "Yalnızca arızalı bölgeye müdahale ederek evi şantiye alanına çevirmeden temiz işçilik sunuyoruz. Onay sonrası noktasal onarım; işlem bitiminde test ve yazılı servis formu.",
    iconBg: "bg-secondary/30",
    iconColor: "text-secondary-container",
  },
  {
    icon: "verified",
    title: "Şeffaf Hizmet",
    description:
      "Keşif sonrası yazılı teklif ve resmi servis formu. Onayınız olmadan işleme başlanmaz; gizli maliyet uygulanmaz. 6 ay işçilik garantisi formda belirtilir.",
    iconBg: "bg-secondary/30",
    iconColor: "text-secondary-container",
  },
] as const;

export const homeFaqs: FAQItem[] = [
  {
    question: "724 Tesisatçı hangi bölgelere hizmet veriyor?",
    answer:
      "Kağıthane merkezli hizmet ağımızla İstanbul'un 39 ilçesinde (Avrupa ve Anadolu Yakası) 7/24 tesisat hizmeti sunuyoruz. Hizmet bölgeleri sayfasından ilçe ve mahalle detaylarına ulaşabilirsiniz. Kağıthane'de 19 mahalle için öncelikli yönlendirme yapılır; Çağlayan, Gültepe, Seyrantepe, Emniyet Evleri, Merkez, Hamidiye ve Ortabayır gibi yoğun bölgelerde rota trafik saatine göre planlanır. Diğer ilçelerde mobil ekip yönlendirmesi aynı hat üzerinden yapılır; acil su kaçağı, geri taşma, tıkanıklık ve kombi basınç kaybı çağrıları önceliklendirilir. Yerel landing sayfalarında su kaçağı tespiti, tıkanıklık açma, pimaş, petek temizleme ve kombi tesisat kontrolü için mahalle bazlı rehberler bulunur. WhatsApp veya telefon ile mahalle, daire tipi ve belirtiyi iletmeniz ekip atamasını hızlandırır; keşif sonrası kapsam yazılı teklifle netleşir. Sabit ilçe dışı vaat verilmez; varış ve süre her zaman trafik ile ekip uygunluğuna bağlıdır. Talatpaşa, Nurtepe ve Yahya Kemal mahallelerinde de aynı servis standartları geçerlidir; ortak alan müdahalelerinde site yönetimi bilgilendirilir. Yazılı teklif ve servis formu tüm işlemlerde standarttır.",
    category: "genel",
    relatedPage: "/hizmet-bolgeleri",
    relatedPageLabel: "Hizmet bölgelerimizi inceleyin",
  },
  {
    question: "Kağıthane tesisatçı fiyatları nasıl belirlenir?",
    answer:
      "Kağıthane tesisatçı fiyatları arızanın türüne, erişim kolaylığına, cihaz ihtiyacına ve malzeme kalemine göre değişir; tek sabit paket fiyatı her arıza için doğru olmaz. Su kaçağı tespiti, tıkanıklık açma, pimaş, petek temizleme, musluk veya rezervuar onarımı farklı kapsamlar taşır. Standart keşiflerde ücret alınmaz; onarım yapılırsa keşif bedeli işlem tutarından düşülür. Keşif ve cihazlı ölçüm sonrası malzeme ve işçilik satırlarını içeren yazılı teklif sunulur; onayınız olmadan işleme başlanmaz, gizli maliyet uygulanmaz. Site veya apartman ortak alanı müdahalelerinde yetkili onayı teklif öncesi netleştirilir. Çağlayan, Gültepe, Seyrantepe ve Emniyet Evleri gibi mahallelerde bina tipi ve şaft erişimi maliyeti etkileyebilir. WhatsApp ile mahalle, kat ve belirti fotoğrafı paylaşmanız ön değerlendirmeyi hızlandırır; nihai tutar yerinde ölçüm sonrası kesinleşir. 6 ay işçilik garantisi servis formunda belirtilir; malzemeler üretici garantisine tabidir. Abartılı yüzde yüz veya sabit dakika vaadi kullanılmaz.",
    category: "fiyatlandirma",
    relatedPage: "/iletisim",
    relatedPageLabel: "Servis talebi oluşturun",
  },
  {
    question: "Kağıthane'de acil tesisatçı hizmeti 7/24 var mı?",
    answer:
      "Evet. Kağıthane'de su kaçağı, alt kata sızıntı, gider taşması, tıkanıklık ve ani tesisat arızalarında 7/24 acil tesisatçı hattımız aktiftir. Gece, hafta sonu ve resmi tatilde de aynı numara üzerinden yönlendirme yapılır. Acil durumda mümkünse ana vanayı kapatın, elektrik riski olan alanlardan uzak durun ve sızıntı veya taşma bölgesinin fotoğrafını çekin; mahalle, kat ve belirti bilgisi ekip hazırlığını hızlandırır. Seyrantepe, Sanayi ve Çağlayan gibi yoğun arterlerde alternatif rota planlanır; Emniyet Evleri site girişlerinde güvenlik/izin bilgisi önceden alınırsa bekleme azalır. Varış süresi trafik, iş yoğunluğu ve çağrı tipine göre değişir; sabit dakika veya her zaman aynı sürede varış vaadi verilmez. Keşif sonrası kapsam yazılı teklifle paylaşılır; onay olmadan onarıma başlanmaz. Gültepe, Merkez, Hamidiye, Ortabayır, Talatpaşa ve Nurtepe mahallelerinde de aynı acil öncelik standardı geçerlidir. Sonuçlar dürüst ve şeffaf özetlenir; 6 ay işçilik garantisi ilgili onarımda formda belirtilir.",
    category: "genel",
    relatedPage: "/iletisim",
    relatedPageLabel: "Servis talebi oluşturun",
  },
  {
    question: "Acil durumlarda ne kadar sürede adresime gelirsiniz?",
    answer:
      "Trafik ve ekip uygunluğuna göre hızlı yönlendirme yapılır. Su kaçağı, alt kata sızıntı ve geri taşma gibi acil vakalara öncelik verilir. Kağıthane içinde mahalle bilgisi, kat ve belirti fotoğrafı paylaşımı yönlendirmeyi hızlandırır; gece ve hafta sonu acil çağrılarda da aynı 7/24 hat aktiftir. Varış süresi trafik, iş yoğunluğu, hava durumu ve çağrı tipine göre değişir; sabit dakika veya 'her zaman X dakikada' vaadi verilmez. Acil durumda ana vanayı kapatmanız, elektrik riski olan alanlardan uzak durmanız, mümkünse sızıntı bölgesinin fotoğrafını çekmeniz ve komşu daireye su geçiyorsa durumu not etmeniz ekip hazırlığını kolaylaştırır. Seyrantepe, Sanayi ve Çağlayan gibi yoğun arterlerde alternatif rota planlanır; Emniyet Evleri site girişlerinde güvenlik/izin bilgisi önceden alınır. Keşif sonrası kapsam yazılı teklifle paylaşılır; onay olmadan onarıma başlanmaz. Sonuçlar dürüst ve şeffaf paylaşılır; abartılı süre iddiası kullanılmaz. Talatpaşa ve Nurtepe mahallelerinde de aynı acil öncelik geçerlidir.",
    category: "genel",
    relatedPage: "/iletisim",
    relatedPageLabel: "Servis talebi oluşturun",
  },
  {
    question: "Su kaçağı tespiti gerçekten kırmadan yapılabilir mi?",
    answer:
      "Evet. Termal kamera, akustik dinleme ve nem ölçer cihazlarımızla kaçak noktasını belirliyoruz. Onarım yalnızca tespit edilen bölgede minimum müdahale ile yapılır. Kağıthane'deki eski apartman stokunda kaçak çoğu zaman banyo şaftı, mutfak duvar birleşimi, gömme rezervuar çevresi veya kalorifer hattı bağlantılarından çıkar; önce tüm musluklar kapalıyken sayaç testi yapılır. Termal görüntü yüzey sıcaklık farklarını, akustik cihaz duvar içi su sesini, nem ölçer ise sıva ve şap nemini değerlendirir; tek bir cihaz sonucuyla geniş kırım kararı verilmez. Gültepe, Çeliktepe ve Emniyet Evleri mahallelerinde alt kata sızıntı şikâyetlerinde üç ölçüm birlikte yorumlanır. Alt kata sızıntı, elektrik hattına yakın nem veya hızla artan fatura varsa beklemek hasarı büyütür; sonuç yazılı özet ve onay sonrası teklif olarak paylaşılır. İşlem sonrası nem kontrolü tekrarlanır ve 6 ay işçilik garantisi servis formunda belirtilir. WhatsApp ile mahalle ve nem fotoğrafı göndermeniz yönlendirmeyi hızlandırır. Abartılı yüzde yüz iddiası kullanılmaz.",
    category: "su-kacagi",
    relatedPage: "/hizmetler/su-kacagi-tespit-ve-onarim",
    relatedPageLabel: "Su kaçağı tespiti hizmeti",
  },
  {
    question: "Fiyat teklifi işlem öncesinde net olarak veriliyor mu?",
    answer:
      "Keşif ve cihazla tespit sonrası malzeme ve işçilik kalemlerini içeren yazılı fiyat teklifi sunulur. Onayınız alınmadan hiçbir işleme başlanmaz; gizli maliyet veya sürpriz fatura uygulanmaz. Su kaçağı, tıkanıklık, pimaş, petek ve kombi tesisatı işlemlerinde kapsam keşif sonrası netleşir; malzeme markası, işçilik süresi, garanti koşulları ve varsa kamera kaydı ayrı satırlarda belirtilir. Standart keşiflerde ücret alınmaz; onarım yapılması durumunda keşif bedeli işlem tutarından düşülür. Kağıthane'de site yönetimi veya apartman ortak alanı müdahalelerinde yetkili onayı da teklif öncesi netleştirilir. İşlem sonrası yazılı servis formu düzenlenir; 6 ay işçilik garantisi formda yer alır, malzemeler üretici garantisine tabidir. WhatsApp üzerinden fotoğraf göndererek ön değerlendirme talep edebilirsiniz; nihai fiyat yerinde ölçüm sonrası kesinleşir. Test ve kalite kontrolü işlem bitiminde yapılır. Sonuçlar dürüst ve şeffaf paylaşılır. Abartılı yüzde yüz iddiası kullanılmaz.",
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
