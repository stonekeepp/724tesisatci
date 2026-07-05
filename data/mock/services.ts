import type { Service } from "@/types";
import { getServiceFaq } from "@/data/mock/serviceFaqs";

export const services: Service[] = [
  {
    id: "1",
    title: "Su Tesisatı",
    slug: "su-tesisati",
    shortDescription:
      "Temiz su hattı çekimi, vana ve musluk onarımı, banyo-mutfak yenileme ve gizli kaçak tespiti. PPRC ve bakır boru ile garantili işçilik, basınç testi ve yazılı servis formu.",
    longDescription:
      "Su tesisatı, konut ve iş yerlerinin en kritik altyapı sistemlerinden biridir. Yanlış yapılan bir bağlantı, kalitesiz malzeme veya amatör müdahaleler kısa süre içinde su israfına, nem ve küf oluşumuna, komşu dairelere sızıntıya ve yüksek su faturalarına yol açabilir.\n\n724 Tesisatçı olarak İstanbul genelinde temiz su hattı çekimi, vana arızaları, musluk ve batarya montajı, banyo-mutfak tesisat yenileme ve gizli su kaçağı tespiti hizmetleri sunuyoruz. PPRC ve bakır boru sistemlerinde sektör standardı malzemeler kullanıyor, her işlem sonrası basınç testi yaparak sızdırmazlığı doğruluyoruz.\n\nEvinizde düşük su basıncı, paslı su, sürekli damlayan musluk veya duvarlarda nem fark ediyorsanız erken müdahale hem maliyeti düşürür hem de yapısal hasarı önler. İşlem öncesi yazılı teklif sunuyor, onayınız olmadan çalışmaya başlamıyoruz.\n\nKağıthane merkezli ekiplerimizle İstanbul'un Avrupa ve Anadolu Yakası'nda su tesisatı tamiri, yenileme ve acil müdahale hizmeti veriyoruz. Konut, apartman, ofis ve ticari alanlarda 7/24 ulaşabileceğiniz profesyonel su tesisatçı ekibimiz için hemen arayın veya online servis talebi oluşturun.",
    aboutHighlights: [
      "PPRC ve bakır boru ile standartlara uygun tesisat döşeme",
      "Basınç testi, servis formu ve işçilik garantisi",
      "Banyo-mutfak anahtar teslim tesisat yenileme",
      "Gizli kaçaklarda termal kamera destekli tespit",
    ],
    heroTitle: "İstanbul Su Tesisatı Tamir ve Yenileme",
    heroDescription:
      "Temiz su hattı çekimi, vana arızaları, musluk-batarya montajı ve banyo-mutfak tesisat yenileme. PPRC ve bakır boru ile garantili işçilik, basınç testi ve 7/24 acil servis.",
    icon: "plumbing",
    symptoms: [
      { title: "Düşük Su Basıncı", description: "Musluklardan zayıf su akışı genellikle boru tıkanıklığı, vana arızası veya ana hat basınç düşüşüne işaret eder. Uzun süre ihmal edilirse cihazlarınız düzgün çalışmaz ve tesisat hattında ek yük oluşur.", icon: "water_drop" },
      { title: "Paslı veya Kirli Su", description: "Eski galvaniz borulardan gelen paslı veya bulanık su, boru iç yüzeyinde korozyon oluştuğunu gösterir. Sağlık açısından risk taşır ve boru yenileme ihtiyacını ortaya koyar.", icon: "opacity" },
      { title: "Sürekli Damlayan Musluk", description: "Günde 20 litreye kadar su israfına yol açan damlayan musluklar hem faturayı artırır hem de contaların tamamen yıpranmasına neden olur. Hızlı müdahale ile hem tasarruf sağlanır hem de daha büyük arızalar önlenir.", icon: "water_damage" },
      { title: "Gizli Su Sızıntısı", description: "Duvarlarda nem, boyada kabarma, küf kokusu veya anormal su faturası artışı gizli kaçak belirtisidir. Termal kamera ve akustik dinleme ile kırmadan tespit edilebilir.", icon: "search" },
    ],
    processSteps: [
      { step: 1, title: "Keşif ve Tespit", description: "Adresinize gelen uzman ekibimiz boru hattını, vanaları ve bağlantı noktalarını cihazla kontrol eder. Sorunun kaynağı net biçimde belirlenir ve size sözlü bilgilendirme yapılır." },
      { step: 2, title: "Teklif ve Onay", description: "Malzeme ve işçilik kalemlerini içeren yazılı fiyat teklifi sunulur. Onayınız alınmadan hiçbir işleme başlanmaz." },
      { step: 3, title: "Profesyonel Onarım", description: "PPRC, bakır boru veya uygun malzeme ile kalıcı bağlantı ve montaj yapılır. Çalışma alanı işlem sonrası temiz bırakılır." },
      { step: 4, title: "Test ve Garanti", description: "Basınç testi ile sızdırmazlık doğrulanır, servis formu düzenlenir ve işçilik garantisi teslim edilir." },
    ],
    methods: [
      { title: "Temiz Su Hattı Çekimi", description: "Yeni bina, tadilat veya yenileme projelerinde PPRC ve bakır boru ile sıhhi tesisat döşeme. Hat güzergahı minimum duvar kırımı ile planlanır." },
      { title: "Vana ve Musluk Onarımı", description: "Tüm marka vanaların tamiri, contası değişimi ve musluk-batarya montajı. Sızıntı ve basınç sorunları kalıcı biçimde giderilir." },
      { title: "Banyo/Mutfak Yenileme", description: "Anahtar teslim tesisat yenileme: gider bağlantıları, temiz su hatları, duş ve klozet montajı dahil komple çözüm." },
    ],
    faq: getServiceFaq("su-tesisati"),
    relatedServices: ["su-kacagi-tespit-ve-onarim", "batarya-musluk-montaj", "gomme-rezervuar-tamiri"],
    relatedLocations: ["istanbul", "kagithane"],
    seoTitle: "İstanbul Su Tesisatı Tamir ve Yenileme | 724 Tesisatçı",
    seoDescription: "İstanbul su tesisatı tamir, yenileme, vana-musluk onarımı ve banyo-mutfak tesisatı. PPRC-bakır boru, basınç testi, yazılı teklif. 7/24 acil su tesisatçı.",
    canonicalPath: "/hizmetler/su-tesisati",
  },
  {
    id: "2",
    title: "Kombi Servisi ve Kombi Tesisatı",
    slug: "kombi-servisi-ve-tesisati",
    shortDescription:
      "Vaillant, Bosch, Buderus ve tüm marka kombilerde arıza tespiti, periyodik bakım, yedek parça değişimi ve tesisat bağlantısı. Basınç düşüşü, petek ısınmama ve su kaçağı sorunlarına kalıcı çözüm.",
    longDescription:
      "Kombi sistemi, kış aylarında evinizin konforunu doğrudan belirleyen kritik bir altyapıdır. Düşük basınç, peteklerin ısınmaması, kombi altından su akması veya anormal sesler hem enerji verimliliğini düşürür hem de güvenlik riski oluşturabilir.\n\n724 Tesisatçı olarak İstanbul genelinde tüm marka kombilerde arıza tespiti, periyodik bakım, yedek parça değişimi, tesisat bağlantı onarımı ve yeni kombi montajı hizmetleri sunuyoruz. Dijital arıza tespit cihazları ile sorunun kaynağını hızlıca belirliyor, orijinal veya eşdeğer kaliteli parçalarla garantili onarım yapıyoruz.\n\nKombi basıncının sürekli düşmesi çoğu zaman gizli su kaçağına işaret eder; bu durumda termal kamera destekli tespit ile birlikte kalıcı çözüm sağlıyoruz. Kış sezonu öncesi periyodik bakım yaptırarak arıza riskini minimize etmenizi öneriyoruz.\n\nVaillant, Bosch, Buderus, Demirdöküm ve ECA dahil tüm markalarda İstanbul geneli kombi servisi sunuyoruz. Acil arıza, basınç düşüşü veya ısınma sorunlarında 7/24 ekibimize ulaşabilir, yazılı teklif ve garantili onarım avantajından yararlanabilirsiniz.",
    aboutHighlights: [
      "Tüm marka kombilerde dijital arıza tespiti",
      "Orijinal ve kaliteli yedek parça garantisi",
      "Gizli kaçaklarda termal kamera ile birlikte çözüm",
      "Kış öncesi periyodik bakım ve basınç ayarı",
    ],
    heroTitle: "İstanbul Kombi Servisi ve Kalorifer Tesisatı",
    heroDescription:
      "Tüm marka kombilerde arıza tespiti, periyodik bakım, yedek parça değişimi ve tesisat onarımı. Basınç düşüşü, ısınma sorunları ve su kaçağına 7/24 acil müdahale.",
    icon: "heat_pump",
    symptoms: [
      { title: "Düşük Basınç", description: "Kombinizin su basıncı sürekli 1–1.5 bar'ın altına iniyorsa sistemde gizli kaçak, genleşme tankı arızası veya otomatik doldurma vanası sorunu olabilir. Basınç kaybı ihmal edilirse eşanjör ve pompa hasar görebilir.", icon: "speed" },
      { title: "Petekler Isınmıyor", description: "Alt petekler sıcak üstler soğuksa tesisatta hava birikimi, tıkanıklık veya pompa arızası vardır. Petek temizliği veya hava alma işlemi gerekebilir.", icon: "thermostat" },
      { title: "Kombi Altından Su", description: "Bağlantı rekorlarından, emniyet ventilinden veya eşanjörden kaynaklanan sızıntılar acil müdahale gerektirir. Su birikimi elektrik aksamına zarar verebilir.", icon: "water_drop" },
      { title: "Anormal Sesler", description: "Vuruntu, tıklama veya uğultu sesleri sirkülasyon pompası arızası, hava birikimi veya kireç tortusuna işaret eder. Erken müdahale büyük arızaları önler.", icon: "volume_up" },
    ],
    processSteps: [
      { step: 1, title: "Arıza Tespiti", description: "Kombi marka ve modeline göre dijital arıza kodu okuma ve görsel kontrol yapılır. Basınç, sıcaklık ve bağlantı noktaları incelenir." },
      { step: 2, title: "Parça Değişimi / Onarım", description: "Arızalı parça tespit edildikten sonra orijinal veya eşdeğer kaliteli yedek parça ile onarım uygulanır. Değişen parça bilgisi servis formuna yazılır." },
      { step: 3, title: "Basınç ve Sistem Ayarı", description: "Sistem basıncı ideal aralığa getirilir, genleşme tankı ve otomatik doldurma vanası kontrol edilir, peteklerden hava alınır." },
      { step: 4, title: "Performans Testi", description: "Kombi çalıştırılarak ısınma verimliliği, su sıcaklığı ve ses seviyesi test edilir. Müşteriye kullanım önerileri aktarılır." },
    ],
    methods: [
      { title: "Periyodik Bakım", description: "Yıllık kombi bakımı: brülör temizliği, baca gazı kontrolü, basınç ayarı, emniyet ventili testi. Verimlilik artışı ve arıza önleme sağlar." },
      { title: "Arıza Onarımı", description: "Vaillant, Bosch, Buderus, Demirdöküm, ECA ve diğer markalarda uzman servis. Dijital arıza tespiti ile hızlı çözüm." },
      { title: "Tesisat Bağlantısı", description: "Yeni kombi montajı, eski hat yenileme, petek bağlantıları ve genleşme tankı kurulumu. Standartlara uygun güvenli uygulama." },
    ],
    faq: getServiceFaq("kombi-servisi-ve-tesisati"),
    relatedServices: ["petek-temizleme", "kalorifer-tesisati", "su-kacagi-tespit-ve-onarim"],
    relatedLocations: ["istanbul", "kagithane"],
    seoTitle: "İstanbul Kombi Servisi ve Tesisatı | 724 Tesisatçı",
    seoDescription: "İstanbul kombi servisi, arıza tespiti, periyodik bakım ve tesisat onarımı. Tüm markalar, orijinal yedek parça, 7/24 acil kombi servisi.",
    canonicalPath: "/hizmetler/kombi-servisi-ve-tesisati",
  },
  {
    id: "3",
    title: "Kalorifer Tesisatı",
    slug: "kalorifer-tesisati",
    shortDescription:
      "Kalorifer tesisatı kurulumu, petek montajı, sirkülasyon pompası onarımı ve sistem dengeleme. Eşit ısınmayan petekler, boru kaçağı ve hava birikimi sorunlarına profesyonel çözüm.",
    longDescription:
      "Kalorifer tesisatı, kombi veya merkezi sistemden gelen ısıyı evinizin her odasına eşit biçimde dağıtan altyapıdır. Hatalı döşeme, eskiyen borular veya denge ayarı yapılmamış vanalar hem konforu düşürür hem de enerji faturalarınızı artırır.\n\n724 Tesisatçı olarak İstanbul genelinde kalorifer tesisatı kurulumu, petek montajı ve değişimi, sirkülasyon pompası onarımı, boru hattı yenileme ve sistem dengeleme hizmetleri sunuyoruz. Termal kamera ile gizli boru kaçaklarını kırmadan tespit ediyor, minimum müdahale ile kalıcı onarım sağlıyoruz.\n\nBazı odalar ısınmıyor, peteklerden gurgulama sesi geliyor veya duvarlarda ıslaklık fark ediyorsanız tesisatınızın kontrol edilmesi gerekir. Yeni bina ve tadilat projelerinde projeye uygun boru çapı ve petek kapasitesi hesaplaması yapıyoruz.\n\nİstanbul'da kalorifer tesisatı kurulum, onarım ve petek dengeleme ihtiyaçlarınız için 7/24 servis hattımız açıktır. Isınma verimliliğinizi artırmak, enerji maliyetlerinizi düşürmek ve kış konforunuzu güvence altına almak için uzman ekibimizle iletişime geçin.",
    aboutHighlights: [
      "Petek montajı, değişimi ve sistem dengeleme",
      "Termal kamera ile gizli boru kaçağı tespiti",
      "Sirkülasyon pompası onarım ve değişim",
      "Yeni bina ve tadilat projelerinde hat döşeme",
    ],
    heroTitle: "İstanbul Kalorifer Tesisatı Kurulum ve Onarım",
    heroDescription:
      "Kalorifer tesisatı kurulumu, petek montajı, sirkülasyon pompası onarımı ve sistem dengeleme. Termal kamera ile kaçak tespiti, garantili işçilik ve 7/24 servis.",
    icon: "thermostat",
    symptoms: [
      { title: "Eşit Isınmayan Petekler", description: "Bazı odalar ısınmıyor veya peteklerin yalnızca bir kısmı sıcaksa tesisatta denge problemi, tıkanıklık veya yetersiz pompa debisi vardır. Vana ayarı veya temizlik gerekebilir.", icon: "thermostat" },
      { title: "Sistemde Hava", description: "Peteklerden gelen gurgulama ve çarpma sesi hava birikimine işaret eder. Hava alınmazsa pompa ve petek verimliliği düşer, enerji israfı oluşur.", icon: "air" },
      { title: "Sirkülasyon Arızası", description: "Pompa çalışmıyor veya zayıf çalışıyorsa tüm sistem etkilenir. Petekler geç ısınır veya hiç ısınmaz. Acil müdahale gerekir.", icon: "settings" },
      { title: "Boru Kaçağı", description: "Duvarlarda ıslaklık, boyada kabarma veya koku kalorifer borusu kaçağına işaret eder. Termal kamera ile noktasal tespit mümkündür.", icon: "water_damage" },
    ],
    processSteps: [
      { step: 1, title: "Sistem Analizi", description: "Tüm kalorifer hattı basınç testi, petek kontrolü ve pompa performans ölçümü ile değerlendirilir. Sorunlu bölgeler haritalanır." },
      { step: 2, title: "Arıza Lokalizasyonu", description: "Termal kamera ve akustik cihazlarla kaçak veya tıkanıklık noktası kırmadan tespit edilir." },
      { step: 3, title: "Onarım / Kurulum", description: "Minimum duvar kırımı ile boru onarımı, petek değişimi veya yeni hat döşeme yapılır. Kaliteli malzeme kullanılır." },
      { step: 4, title: "Dengeleme ve Test", description: "Petek vanaları ayarlanarak oda bazında eşit ısınma sağlanır. Sistem basıncı test edilir ve müşteriye bilgi verilir." },
    ],
    methods: [
      { title: "Tesisat Kurulumu", description: "Yeni bina ve tadilat projelerinde kalorifer boru döşeme, kollektör montajı ve proje uyumlu hat çekimi." },
      { title: "Petek Montajı", description: "Alüminyum, panel ve döküm petek montajı, değişimi ve eski petek sökümü. Duvar bağlantıları sızdırmaz yapılır." },
      { title: "Pompa Onarımı", description: "Sirkülasyon pompası arıza tespiti, tamir ve değişim. Debi ayarı ile sistem verimliliği optimize edilir." },
    ],
    faq: getServiceFaq("kalorifer-tesisati"),
    relatedServices: ["kombi-servisi-ve-tesisati", "petek-temizleme", "su-kacagi-tespit-ve-onarim"],
    relatedLocations: ["istanbul", "kagithane"],
    seoTitle: "İstanbul Kalorifer Tesisatı Kurulum ve Onarım | 724 Tesisatçı",
    seoDescription: "İstanbul kalorifer tesisatı kurulum, petek montajı, pompa onarımı ve sistem dengeleme. Termal kamera ile kaçak tespiti, garantili işçilik.",
    canonicalPath: "/hizmetler/kalorifer-tesisati",
  },
  {
    id: "4",
    title: "Su Kaçağı Tespit ve Onarım",
    slug: "su-kacagi-tespit-ve-onarim",
    shortDescription:
      "Termal kamera, akustik dinleme ve nem ölçer ile kırmadan noktasal su kaçağı tespiti. Gizli kaçak, yerden ısıtma arızası ve yüksek su faturası sorunlarına kalıcı onarım.",
    longDescription:
      "Gizli su kaçağı, ev ve iş yerlerinde en sık karşılaşılan ve en maliyetli tesisat sorunlarından biridir. Duvar içinde, parke altında veya tavan arasında kalan kaçaklar uzun süre fark edilmez; nem, küf, boya dökülmesi ve komşu dairelere sızıntı gibi ciddi hasarlara yol açar.\n\n724 Tesisatçı olarak İstanbul genelinde termal kamera, akustik dinleme cihazı ve nem ölçer ile kırmadan noktasal su kaçağı tespiti ve onarım hizmeti sunuyoruz. Geleneksel yöntemlerde tüm duvar kırılarak arama yapılırken, cihazlı tespit sayesinde yalnızca kaçak noktasına müdahale edilir.\n\nSu sayacınız tüm musluklar kapalıyken dönüyorsa, su faturanız aniden arttıysa veya duvarlarda nem lekesi görüyorsanız acil tespit yaptırmanızı öneriyoruz. Tespit sonrası yazılı rapor sunuyor, onayınız ile noktasal onarım yapıyor ve basınç testi ile kaçağın giderildiğini doğruluyoruz.\n\nİstanbul'da su kaçağı tespiti ve onarımı için 7/24 acil ekibimiz ortalama 30 dakikada adresinize ulaşır. Gereksiz kırım maliyetinden kaçının; termal kamera ile kırmadan tespit, noktasal onarım ve işçilik garantisi için hemen bizi arayın.",
    aboutHighlights: [
      "Termal kamera, akustik dinleme ve nem ölçer",
      "Kırmadan noktasal tespit ve minimum müdahale",
      "Yazılı tespit raporu ve basınç testi",
      "Sigorta süreçlerinde kullanılabilir kayıt",
    ],
    heroTitle: "İstanbul Su Kaçağı Tespit ve Onarım",
    heroDescription:
      "Termal kamera, akustik dinleme ve nem ölçer ile kırmadan su kaçağı tespiti. Noktasal onarım, gereksiz kırım yok, garantili işçilik ve 7/24 acil servis.",
    icon: "water_drop",
    featured: true,
    symptoms: [
      { title: "Yüksek Su Faturası", description: "Aylık su tüketiminiz normalin üzerindeyse ve kullanım alışkanlıklarınız değişmediyse gizli kaçak olabilir. Erken tespit hem faturayı düşürür hem de yapısal hasarı önler.", icon: "receipt_long" },
      { title: "Duvarlarda Nem", description: "Duvar kağıdında kabarma, boyada dökülme, küf oluşumu veya koku nem ve su birikiminin belirtisidir. Kaynağı cihazla tespit edilmeden boya badana geçici çözüm olur.", icon: "humidity_percentage" },
      { title: "Zemin Isınması", description: "Parke veya fayans altından gelen sıcaklık yerden ısıtma sisteminde kaçağa işaret eder. Termal kamera ile hat boyunca tespit yapılır.", icon: "device_thermostat" },
      { title: "Sayaç Dönüyor", description: "Tüm musluklar ve cihazlar kapalıyken su sayacının dönmesi aktif kaçak demektir. Bu durumda acil tespit gereklidir.", icon: "speed" },
    ],
    processSteps: [
      { step: 1, title: "Cihazla Tespit", description: "Termal kamera ile sıcaklık farkları, akustik dinleme ile boru içi su sesi ve nem ölçer ile duvar içi nem oranı analiz edilir. Kaçak noktası harita üzerinde işaretlenir." },
      { step: 2, title: "Noktasal Müdahale", description: "Yalnızca tespit edilen noktada kontrollü açılım yapılır. Gereksiz duvar veya zemin kırımı yapılmaz." },
      { step: 3, title: "Onarım", description: "Arızalı boru, ek veya vana değiştirilir veya onarılır. Kaliteli malzeme ile kalıcı bağlantı sağlanır." },
      { step: 4, title: "Kontrol ve Garanti", description: "Basınç testi ile kaçağın tamamen giderildiği doğrulanır. İşlem raporu ve işçilik garantisi teslim edilir." },
    ],
    methods: [
      { title: "Termal Kamera", description: "Duvar, tavan ve zemin arkasındaki sıcaklık ve nem farklarını görüntüleyerek kaçak bölgesini daraltır. Kırmadan geniş alan taranır." },
      { title: "Akustik Dinleme", description: "Boru içindeki su sızıntı sesini dinleyerek milimetrik hassasiyetle kaçak noktasını belirler. Sessiz kaçaklarda etkilidir." },
      { title: "Nem Ölçer", description: "Duvar içi nem oranını ölçerek hasar derecesini ve kaçak bölgesini doğrular. Sigorta ve tadilat raporları için kullanılabilir." },
    ],
    faq: getServiceFaq("su-kacagi-tespit-ve-onarim"),
    relatedServices: ["kamerali-tesisat-goruntuleme-ve-onarim", "su-tesisati", "tikaniklik-acma"],
    relatedLocations: ["istanbul", "kagithane"],
    seoTitle: "İstanbul Su Kaçağı Tespit ve Onarım | 724 Tesisatçı",
    seoDescription: "İstanbul su kaçağı tespit ve onarım. Termal kamera ile kırmadan tespit, noktasal onarım, garantili işçilik. 7/24 acil servis.",
    canonicalPath: "/hizmetler/su-kacagi-tespit-ve-onarim",
  },
  {
    id: "5",
    title: "Tıkanıklık Açma",
    slug: "tikaniklik-acma",
    shortDescription:
      "Robotik spiral makine ve kameralı kontrol ile tuvalet, lavabo, duş gideri ve ana pimaş hattı tıkanıklıklarını kırmadan açma. Geri taşma, kötü koku ve yavaş boşalmaya kalıcı çözüm.",
    longDescription:
      "Tıkanıklık sorunları günlük yaşamı doğrudan etkiler: lavabo su taşır, tuvalet geri basar, mutfak giderinden koku gelir. Kimyasal dökücüler borulara zarar verebilir ve sorunu geçici olarak gizler; asıl tıkanıklık kısa sürede tekrarlar.\n\n724 Tesisatçı olarak İstanbul genelinde tuvalet, lavabo, banyo gideri, mutfak piyasası ve ana pimaş hattı tıkanıklıklarını robotik spiral makine ve kameralı kontrol ile kırmadan açıyoruz. Tıkanıklığın sebebini (yağ birikimi, yabancı cisim, boru eğimi hatası) görsel olarak tespit ederek kalıcı çözüm sunuyoruz.\n\nAcil geri taşma durumlarında 7/24 müdahale ekibimiz ortalama 30 dakika içinde adresinize ulaşır. İşlem sonrası kamera ile hattın tamamen açıldığı doğrulanır.\n\nİstanbul'da tuvalet, lavabo, mutfak gideri ve ana hat tıkanıklıkları için robotik cihazlarla kırmadan açma hizmeti sunuyoruz. Kimyasal kullanmadan, boruya zarar vermeden kalıcı çözüm için 7/24 acil tıkanıklık açma ekibimizi arayın.",
    aboutHighlights: [
      "Robotik spiral makine ile kırmadan açma",
      "Kameralı kontrol ile tıkanıklık sebebi tespiti",
      "150 bar basınçlı su ile derin temizlik",
      "Geri taşma ve acil durumlarda hızlı müdahale",
    ],
    heroTitle: "İstanbul Tıkanıklık Açma Hizmeti",
    heroDescription:
      "Lavabo, tuvalet, mutfak gideri ve ana pimaş hattı tıkanıklıklarını robotik makinelerle kırmadan açıyoruz. Kameralı kontrol, basınçlı yıkama ve 7/24 acil servis.",
    icon: "cleaning_services",
    symptoms: [
      { title: "Yavaş Boşalma", description: "Lavabo, duş veya mutfak gideri yavaş boşalıyorsa tıkanıklık başlangıcı vardır. Erken müdahale tam tıkanıklığı ve geri taşmayı önler.", icon: "hourglass_empty" },
      { title: "Kötü Koku", description: "Giderlerden gelen pis koku sifon su kaybı, boru birikimi veya kısmi tıkanıklık belirtisidir. Havalandırma hattı da kontrol edilmelidir.", icon: "air" },
      { title: "Geri Taşma", description: "Tuvalet veya giderden su geri geliyorsa acil müdahale gereklidir. Alt kata veya komşu daireye hasar riski vardır.", icon: "warning" },
      { title: "Gurgulama Sesi", description: "Boşaltma sırasında gelen gurgulama ve çarpma sesi hava birikimi veya boru hattında daralma göstergesidir.", icon: "volume_up" },
    ],
    processSteps: [
      { step: 1, title: "Kameralı Kontrol", description: "Pimaş içi HD kamera ile tıkanıklık noktası, sebebi ve boru durumu görsel olarak tespit edilir. Müşteriye kayıt gösterilebilir." },
      { step: 2, title: "Robotik Açma", description: "Elektrikli spiral makine ile tıkanıklık parçalanır veya geri çekilir. Boru duvarına zarar verilmeden işlem yapılır." },
      { step: 3, title: "Yüksek Basınç Yıkama", description: "Yağ ve kireç birikimi varsa basınçlı su ile hat derinlemesine temizlenir. Özellikle mutfak hatlarında etkilidir." },
      { step: 4, title: "Son Kontrol", description: "Kamera ile hattın tamamen açıldığı doğrulanır. Su testi yapılarak akış normale döndürülür." },
    ],
    methods: [
      { title: "Robotik Spiral Makine", description: "Farklı çap ve uzunlukta spiral uçlarla tuvalet, lavabo ve ana hat tıkanıklıkları açılır. Elektrikli motor ile kontrollü müdahale." },
      { title: "Kameralı Görüntüleme", description: "Tıkanıklık sebebini (yağ, saç, yabancı cisim, kök) görsel olarak tespit eder. Tekrarlayan sorunlarda kalıcı çözüm planlanır." },
      { title: "Basınçlı Yıkama", description: "150 bar basınçlı su ile boru içi yağ, kireç ve birikim temizliği. Restoran ve site ana hatlarında önerilir." },
    ],
    faq: getServiceFaq("tikaniklik-acma"),
    relatedServices: ["pimas-yikama", "pimas-tesisati", "kamerali-tesisat-goruntuleme-ve-onarim"],
    relatedLocations: ["istanbul", "kagithane"],
    seoTitle: "İstanbul Tıkanıklık Açma Hizmeti | 724 Tesisatçı",
    seoDescription: "İstanbul tıkanıklık açma: tuvalet, lavabo, pimaş. Robotik cihazlarla kırmadan açma, kameralı kontrol. 7/24 acil servis.",
    canonicalPath: "/hizmetler/tikaniklik-acma",
  },
  {
    id: "6",
    title: "Petek Temizleme",
    slug: "petek-temizleme",
    shortDescription:
      "Makineli petek temizliği ve sistem kimyasal yıkama ile ısınma verimliliğini artırın. Peteklerin yarı sıcak kalması, yüksek doğalgaz faturası ve uzun ısınma süresine kalıcı çözüm.",
    longDescription:
      "Kalorifer peteklerinin içinde zamanla çamur, pas, kireç ve magnetit birikir. Bu birikim su dolaşımını engeller, peteklerin yalnızca alt kısmının ısınmasına neden olur ve kombinizin daha fazla enerji harcamasına yol açar.\n\n724 Tesisatçı olarak İstanbul genelinde makineli petek temizliği ve sistem kimyasal yıkama hizmeti sunuyoruz. Özel petek temizleme makinesi ile her petekten tortu çıkarılır, ardından tüm kalorifer hattı kimyasal ile yıkanır. Temizlik sonrası koruyucu kimyasal eklenerek birikimin tekrarlanması geciktirilir.\n\nKış sezonu öncesi petek temizliği yaptırarak ısınma verimliliğinizi %30'a kadar artırabilir, doğalgaz faturanızı düşürebilirsiniz. Temizlik öncesi ve sonrası ısınma karşılaştırması yaparak farkı somut biçimde gösteriyoruz.\n\nİstanbul genelinde makineli petek temizliği ve kalorifer sistem yıkama hizmeti için randevu alın. Doğalgaz faturanızı düşürmek, peteklerin eşit ısınmasını sağlamak ve kombi ömrünü uzatmak için kışa girmeden petek temizliği yaptırmanızı öneriyoruz.",
    aboutHighlights: [
      "Makineli petek temizliği ile tortu ve pas giderme",
      "Sistem kimyasal yıkama ve koruyucu ekleme",
      "Temizlik öncesi-sonrası verimlilik karşılaştırması",
      "Kış sezonu öncesi enerji tasarrufu sağlama",
    ],
    heroTitle: "İstanbul Petek Temizleme Hizmeti",
    heroDescription:
      "Makineli petek temizliği ve sistem yıkama ile ısınma verimliliğinizi artırın, doğalgaz faturalarınızı düşürün. Garantili temizlik, hızlı servis ve 7/24 randevu.",
    icon: "heat",
    symptoms: [
      { title: "Petekler Yarı Sıcak", description: "Alt kısım sıcak üst soğuksa petek içinde çamur ve pas birikimi vardır. Temizlik yapılmazsa kombi yükü artar ve arıza riski oluşur.", icon: "thermostat" },
      { title: "Yüksek Doğalgaz Faturası", description: "Verimsiz ısınma doğrudan faturaya yansır. Petek temizliği yatırım maliyetini kısa sürede kendini amorti eder.", icon: "receipt_long" },
      { title: "Uzun Isınma Süresi", description: "Peteklerin ısınması normalden çok uzun sürüyorsa sistemde dolaşım engeli vardır. Temizlik ve dengeleme gerekebilir.", icon: "schedule" },
      { title: "Sistemde Gürültü", description: "Pompa ve peteklerden gelen uğultu ve tıklama sesleri birikim ve hava belirtisidir. Temizlik sonrası sesler kaybolur.", icon: "volume_up" },
    ],
    processSteps: [
      { step: 1, title: "Sistem Kontrolü", description: "Kalorifer sistemi basınç, pompa ve genel durum açısından kontrol edilir. Petek sayısı ve kapasitesi not edilir." },
      { step: 2, title: "Makineli Temizlik", description: "Her peteğe özel temizleme makinesi bağlanır, iç tortu dışarı çekilir. Kirli su toplanarak bertaraf edilir." },
      { step: 3, title: "Kimyasal Yıkama", description: "Gerekirse tüm sistem kimyasal ile yıkanır, pas ve kireç çözülür. Koruyucu kimyasal eklenir." },
      { step: 4, title: "Verimlilik Testi", description: "Temizlik öncesi ve sonrası petek sıcaklıkları karşılaştırılır. Sistem basıncı ayarlanır ve teslim edilir." },
    ],
    methods: [
      { title: "Makineli Petek Temizliği", description: "Basınçlı makine ile petek içinden çamur, pas ve magnetit tortusu çıkarılır. Duvara zarar verilmeden uygulanır." },
      { title: "Sistem Kimyasal Yıkama", description: "Tüm kalorifer hattının profesyonel kimyasal ile temizlenmesi. Eski sistemlerde verimlilik artışı belirgindir." },
      { title: "Koruyucu Kimyasal", description: "Temizlik sonrası sisteme eklenen koruyucu, yeni birikimin oluşmasını yavaşlatır ve boru ömrünü uzatır." },
    ],
    faq: getServiceFaq("petek-temizleme"),
    relatedServices: ["kombi-servisi-ve-tesisati", "kalorifer-tesisati", "su-kacagi-tespit-ve-onarim"],
    relatedLocations: ["istanbul", "kagithane"],
    seoTitle: "İstanbul Petek Temizleme Hizmeti | 724 Tesisatçı",
    seoDescription: "İstanbul petek temizleme ve kalorifer sistem yıkama. Makineli temizlik ile %30 verimlilik artışı. Profesyonel ekip, garantili işçilik.",
    canonicalPath: "/hizmetler/petek-temizleme",
  },
  {
    id: "7",
    title: "Kameralı Tesisat Görüntüleme ve Onarım",
    slug: "kamerali-tesisat-goruntuleme-ve-onarim",
    shortDescription:
      "HD kamera robotu ile pimaş ve boru hatlarının iç görüntülenmesi, çatlak-tıkanıklık tespiti ve noktasal onarım. Tekrarlayan tıkanıklık ve gider kokusuna kesin teşhis.",
    longDescription:
      "Pimaş ve atık su hatlarının içi gözle görülemez; sorunlar genellikle tıkanıklık açıldıktan kısa süre sonra tekrar eder veya kötü koku şeklinde kendini gösterir. Kör müdahale hem maliyetli hem de geçici çözüm sağlar.\n\n724 Tesisatçı olarak İstanbul genelinde HD kamera robotları ile pimaş, atık su ve yağmur suyu hatlarının iç görüntülenmesi, çatlak-tıkanıklık-eğim hatası tespiti ve noktasal onarım hizmeti sunuyoruz. 100 metreye kadar hat boyunca kayıt alınır, sorun noktası derinlik ve mesafe bilgisi ile işaretlenir.\n\n20 yıldan eski binalarda, sık tıkanan hatlarda ve tadilat öncesi mutlaka kameralı kontrol yaptırmanızı öneriyoruz. Görüntü kaydı size teslim edilir; sigorta ve site yönetimi süreçlerinde kullanılabilir.\n\nİstanbul'da kameralı tesisat görüntüleme ve onarım hizmeti ile boru içini görmeden müdahale etmiyoruz. Tekrarlayan tıkanıklık, gider kokusu veya eski bina tesisatı sorunlarında HD kamera robotu ile kesin teşhis için bizimle iletişime geçin.",
    aboutHighlights: [
      "100 metreye kadar HD kamera ile boru içi görüntüleme",
      "Çatlak, eğim hatası ve birikim tespiti",
      "Görüntü kaydı ve yazılı tespit raporu",
      "Noktasal onarım ile minimum kırım",
    ],
    heroTitle: "Kameralı Tesisat Görüntüleme ve Onarım",
    heroDescription:
      "HD kamera robotları ile pimaş ve boru hatlarının iç görüntülenmesi. Çatlak, tıkanıklık ve bağlantı hatalarına kesin teşhis, minimum müdahale, kalıcı onarım.",
    icon: "videocam",
    symptoms: [
      { title: "Tekrarlayan Tıkanıklık", description: "Sık tekrarlayan tıkanıklık boru hasarı, eğim hatası veya kök girişine işaret eder. Kamera ile kesin sebep belirlenir.", icon: "replay" },
      { title: "Gider Kokusu", description: "Sürekli kötü koku pimaş hattında çatlak, kopuk bağlantı veya sifon arızası olabilir. Görüntüleme ile nokta tespit edilir.", icon: "air" },
      { title: "Yavaş Akış", description: "Boru çapında daralma, birikim veya yanlış eğim akışı yavaşlatır. Kamera ile boru içi durum net görülür.", icon: "water" },
      { title: "Bina Yaşı", description: "20 yıldan eski binalarda boru çürümesi ve bağlantı gevşemesi sık görülür. Önleyici kontrol büyük hasarları önler.", icon: "apartment" },
    ],
    processSteps: [
      { step: 1, title: "Kamera Girişi", description: "Esnek HD kamera pimaş veya atık su hattına sokulur. Erişim noktası (rögar, sifon, menhol) belirlenir." },
      { step: 2, title: "Görüntüleme ve Kayıt", description: "Hat boyunca ilerlenir, çatlak, birikim, eğim hatası ve yabancı cisim kaydedilir. Metre sayacı ile konum işaretlenir." },
      { step: 3, title: "Raporlama", description: "Müşteriye görüntü kaydı ve yazılı tespit raporu sunulur. Onarım planı birlikte oluşturulur." },
      { step: 4, title: "Noktasal Onarım", description: "Tespit edilen noktaya minimum müdahale ile onarım yapılır. Sonrasında kamera ile doğrulama yapılır." },
    ],
    methods: [
      { title: "HD Kamera Robot", description: "100 metreye kadar boru hattı iç görüntüleme. LED aydınlatmalı, su geçirmez kamera ucu ile net kayıt." },
      { title: "Lokasyon Tespiti", description: "Sorun noktasının yer derinliği ve mesafe bilgisi ile kazı alanı minimuma indirilir." },
      { title: "Kayıt ve Rapor", description: "USB veya dijital ortamda görüntü teslimi. Site yönetimi ve sigorta süreçleri için kullanılabilir." },
    ],
    faq: getServiceFaq("kamerali-tesisat-goruntuleme-ve-onarim"),
    relatedServices: ["tikaniklik-acma", "pimas-yikama", "su-kacagi-tespit-ve-onarim"],
    relatedLocations: ["istanbul", "kagithane"],
    seoTitle: "Kameralı Tesisat Görüntüleme ve Onarım | 724 Tesisatçı",
    seoDescription: "İstanbul kameralı tesisat görüntüleme. HD kamera ile pimaş kontrolü, çatlak ve tıkanıklık tespiti, noktasal onarım. 7/24 servis.",
    canonicalPath: "/hizmetler/kamerali-tesisat-goruntuleme-ve-onarim",
  },
  {
    id: "8",
    title: "Pimaş Tesisatı",
    slug: "pimas-tesisati",
    shortDescription:
      "PVC pimaş boru döşeme, bağlantı onarımı ve hat yenileme. Sık tıkanan hatlar, koku problemi ve alt kata sızıntıya kameralı teşhis ile kalıcı çözüm.",
    longDescription:
      "Pimaş tesisatı, binaların atık su sisteminin omurgasıdır. Yanlış eğim, eskiyen borular, gevşek ek yerleri veya yanlış çap seçimi sık tıkanıklık, koku ve alt kata su sızıntısı gibi ciddi sorunlara yol açar.\n\n724 Tesisatçı olarak İstanbul genelinde PVC pimaş boru döşeme, bağlantı onarımı, hat yenileme ve kameralı kontrol hizmetleri sunuyoruz. Yeni bina, tadilat veya eski hat yenileme projelerinde minimum müdahale ile kalıcı çözüm sağlıyoruz.\n\n30 yıldan eski binalarda pimaş hatlarının komple yenilenmesi uzun vadede tıkanıklık ve sızıntı maliyetlerini önemli ölçüde düşürür. Keşif sonrası yazılı teklif ve işçilik garantisi sunuyoruz.\n\nİstanbul'da pimaş tesisatı kurulum, onarım ve hat yenileme ihtiyaçlarınız için kameralı teşhis ve PVC boru ile garantili işçilik sunuyoruz. Sık tıkanan hatlar, koku problemi veya alt kata sızıntı durumlarında 7/24 ekibimize ulaşın.",
    aboutHighlights: [
      "Standart PVC pimaş boru ile döşeme ve yenileme",
      "Kameralı kontrol ile kesin teşhis",
      "Minimum kırım ile hat onarımı",
      "Su testi ile sızdırmazlık garantisi",
    ],
    heroTitle: "İstanbul Pimaş Tesisatı Kurulum ve Onarım",
    heroDescription:
      "PVC pimaş boru döşeme, bağlantı onarımı ve hat yenileme. Kameralı kontrol ile kesin teşhis, sızdırmazlık testi ve garantili işçilik.",
    icon: "pipe",
    symptoms: [
      { title: "Sık Tıkanıklık", description: "Sürekli tekrarlayan tıkanıklık hat eğimi hatası, boru çürümesi veya yetersiz çap göstergesidir. Kamera ile kesin teşhis yapılmalıdır.", icon: "block" },
      { title: "Koku Problemi", description: "Banyo ve mutfaktan gelen pis koku sifon su kaybı, kırık pimaş veya hatalı bağlantıdan kaynaklanır. Sağlık açısından önemlidir.", icon: "air" },
      { title: "Su Sızıntısı", description: "Pimaş ek yerlerinden veya manşonlardan sızıntı alt kata nem ve hasar verir. Erken müdahale komşu ilişkilerini ve yapıyı korur.", icon: "water_damage" },
      { title: "Eski Boru Sistemi", description: "30 yıldan eski pimaş hatları çatlama ve deformasyona açıktır. Yenileme uzun vadede en ekonomik çözümdür.", icon: "history" },
    ],
    processSteps: [
      { step: 1, title: "Hat İncelemesi", description: "Kameralı kontrol ile mevcut pimaş hattının durumu, eğimi ve bağlantı noktaları değerlendirilir." },
      { step: 2, title: "Planlama", description: "Minimum kırım ile onarım veya yenileme planı oluşturulur. Malzeme listesi ve yazılı teklif sunulur." },
      { step: 3, title: "Uygulama", description: "Standart PVC pimaş boru ve uygun çap ile döşeme veya onarım yapılır. Ek yerleri sızdırmaz bırakılır." },
      { step: 4, title: "Su Testi", description: "Hat su ile doldurularak sızdırmazlık testi yapılır. Kamera ile son kontrol gerçekleştirilir." },
    ],
    methods: [
      { title: "Pimaş Döşeme", description: "Yeni bina ve tadilat projelerinde standart PVC pimaş boru ile atık su hattı döşeme. Doğru eğim ve çap hesaplaması." },
      { title: "Bağlantı Onarımı", description: "Ek yerleri, manşon ve dirsek tamiri. Sızıntı ve koku kaynakları kalıcı biçimde giderilir." },
      { title: "Hat Yenileme", description: "Eski ve hasarlı hatların komple veya kısmi yenilenmesi. Minimum duvar kırımı ile uygulama." },
    ],
    faq: getServiceFaq("pimas-tesisati"),
    relatedServices: ["pimas-yikama", "tikaniklik-acma", "kamerali-tesisat-goruntuleme-ve-onarim"],
    relatedLocations: ["istanbul", "kagithane"],
    seoTitle: "İstanbul Pimaş Tesisatı Kurulum ve Onarım | 724 Tesisatçı",
    seoDescription: "İstanbul pimaş tesisatı kurulum, onarım ve hat yenileme. Kameralı kontrol, PVC boru, garantili işçilik. 7/24 servis.",
    canonicalPath: "/hizmetler/pimas-tesisati",
  },
  {
    id: "9",
    title: "Doğalgaz Tesisatı",
    slug: "dogalgaz-tesisati",
    shortDescription:
      "Doğalgaz tesisatı projelendirme, boru montajı, cihaz bağlantısı ve periyodik güvenlik kontrolü. Lisanslı ekip, sızdırmazlık testi ve standartlara uygun uygulama.",
    longDescription:
      "Doğalgaz tesisatı güvenlik açısından en kritik altyapı sistemlerinden biridir. Hatalı montaj, eskiyen borular veya periyodik kontrolün yapılmaması ciddi güvenlik riskleri oluşturur.\n\n724 Tesisatçı olarak İstanbul genelinde doğalgaz tesisatı projelendirme, boru montajı, kombi-ocak-soba bağlantısı, sızdırmazlık testi ve periyodik güvenlik kontrolü hizmetleri sunuyoruz. Tüm uygulamalar ilgili standartlara uygun, lisanslı ekip tarafından gerçekleştirilir.\n\nGaz kokusu fark ettiğinizde vanayı kapatıp pencere açın ve acil olarak bizi arayın. Periyodik kontrol süresi dolmuş tesisatlar ceza riski taşır; yıllık kontrol yaptırmanızı öneriyoruz.\n\nİstanbul'da doğalgaz tesisatı projelendirme, montaj ve yıllık periyodik güvenlik kontrolü için lisanslı ekibimizle iletişime geçin. Sızdırmazlık testi, basınç kontrolü ve standartlara uygun uygulama ile güvenliğinizi garanti altına alıyoruz.",
    aboutHighlights: [
      "Lisanslı ekip ile standartlara uygun montaj",
      "Basınç testi ve sızdırmazlık kontrolü",
      "Kombi, ocak ve soba bağlantı hizmeti",
      "Yıllık periyodik güvenlik kontrolü",
    ],
    heroTitle: "İstanbul Doğalgaz Tesisatı Hizmeti",
    heroDescription:
      "Doğalgaz tesisatı projelendirme, montaj, sızdırmazlık testi ve periyodik güvenlik kontrolü. Lisanslı ekip, standartlara uygun ve güvenli uygulama.",
    icon: "local_fire_department",
    symptoms: [
      { title: "Gaz Kokusu", description: "Doğalgaz kokusu acil müdahale gerektirir. Ana vanayı kapatın, elektrik düğmesine dokunmayın, pencere açın ve profesyonel destek alın.", icon: "warning" },
      { title: "Sönmeyen Ocak Alev Rengi", description: "Alev renginin turuncuya dönmesi veya kararsız yanma tesisat veya cihaz sorununa işaret eder. Kontrol gerekir.", icon: "local_fire_department" },
      { title: "Yüksek Doğalgaz Faturası", description: "Beklenenden yüksek tüketim sızıntı, kaçak veya verimsiz cihazlardan kaynaklanabilir. Sızdırmazlık testi önerilir.", icon: "receipt_long" },
      { title: "Kontrol Süresi Doldu", description: "Periyodik kontrol yaptırılmamış tesisatlar yasal ceza riski taşır. Yıllık kontrol güvenliğiniz için zorunludur.", icon: "event_busy" },
    ],
    processSteps: [
      { step: 1, title: "Proje Hazırlığı", description: "Bina yapısı, cihaz konumları ve hat güzergahına göre doğalgaz tesisat projesi hazırlanır." },
      { step: 2, title: "Montaj", description: "Endüstriyel standartlarda boru döşeme, vana montajı ve cihaz bağlantıları yapılır." },
      { step: 3, title: "Sızdırmazlık Testi", description: "Basınç testi ve kaçak dedektörü ile tüm hat kontrol edilir. Sızdırmazlık belgesi düzenlenir." },
      { step: 4, title: "Ruhsatlandırma", description: "Gerekli evraklar tamamlanarak onay süreci yürütülür. Müşteriye kullanım talimatları aktarılır." },
    ],
    methods: [
      { title: "Tesisat Projesi", description: "Mevcut ve yeni bina doğalgaz tesisat projelendirme. Hat güzergahı, çap hesabı ve cihaz uyumluluğu." },
      { title: "Boru Montajı", description: "Endüstriyel standartlarda galvaniz veya esnek boru döşeme. Sızdırmaz ek yerleri ve vana montajı." },
      { title: "Periyodik Kontrol", description: "Yıllık gaz tesisatı güvenlik kontrolü. Sızdırmazlık testi, cihaz kontrolü ve raporlama." },
    ],
    faq: getServiceFaq("dogalgaz-tesisati"),
    relatedServices: ["kombi-servisi-ve-tesisati", "su-tesisati", "su-kacagi-tespit-ve-onarim"],
    relatedLocations: ["istanbul", "kagithane"],
    seoTitle: "İstanbul Doğalgaz Tesisatı | 724 Tesisatçı",
    seoDescription: "İstanbul doğalgaz tesisatı projelendirme, montaj ve periyodik kontrol. Lisanslı ekip, sızdırmazlık testi, güvenli uygulama.",
    canonicalPath: "/hizmetler/dogalgaz-tesisati",
  },
  {
    id: "10",
    title: "Pimaş Yıkama",
    slug: "pimas-yikama",
    shortDescription:
      "150 bar basınçlı su ve kameralı robot ile pimaş hatlarının derin temizliği. Kötü koku, yavaş gider ve tekrarlayan tıkanıklığa kalıcı çözüm. Restoran ve site hatları için periyodik bakım.",
    longDescription:
      "Pimaş hatlarında biriken yağ, kireç, sabun kalıntısı ve organik atıklar zamanla boru çapını daraltır. Bu durum yavaş gider, kötü koku ve sık tekrarlayan tıkanıklık olarak kendini gösterir. Kimyasal dökücüler geçici rahatlama sağlar ancak boruya zarar verebilir.\n\n724 Tesisatçı olarak İstanbul genelinde 150 bar basınçlı su, kameralı robot ve kimyasal yıkama ile pimaş hatlarının derin temizliği hizmeti sunuyoruz. Önce kamera ile hat durumu incelenir, ardından basınçlı su ve gerekirse spiral makine ile birikim tamamen temizlenir.\n\nRestoran, apartman site yönetimleri ve yağlı atık yoğun mutfaklar için yılda en az bir kez periyodik pimaş yıkama öneriyoruz. Temizlik sonrası kamera ile hattın tamamen açıldığı doğrulanır.\n\nİstanbul'da pimaş yıkama ve gider temizliği için 150 bar basınçlı su, kameralı robot ve profesyonel yağ çözücü ile derin temizlik sunuyoruz. Restoran, site ve iş yerleri için periyodik bakım programı oluşturmak üzere ekibimizle iletişime geçin.",
    aboutHighlights: [
      "150 bar basınçlı su ile derin pimaş yıkama",
      "Kameralı robot ile öncesi-sonrası kontrol",
      "Profesyonel yağ çözücü kimyasal uygulama",
      "Restoran ve site için periyodik bakım programı",
    ],
    wideCard: true,
    heroTitle: "İstanbul Pimaş Yıkama ve Gider Temizliği",
    heroDescription:
      "150 bar basınçlı su ve kameralı robot ile pimaş hatlarınızı derinlemesine temizliyoruz. Kötü koku, yavaş gider ve tekrarlayan tıkanıklığa kalıcı çözüm.",
    icon: "water_pump",
    symptoms: [
      { title: "Kötü Koku", description: "Giderlerden gelen pis koku yağ ve organik birikime işaret eder. Havalandırma hattı da kontrol edilmelidir.", icon: "air" },
      { title: "Yavaş Gider", description: "Boru çapında yağ tabakası ve kireç birikimi akışı yavaşlatır. Basınçlı yıkama ile tabaka tamamen temizlenir.", icon: "hourglass_empty" },
      { title: "Tekrarlayan Tıkanıklık", description: "Açılan tıkanıklık kısa sürede tekrarlıyorsa boru içi birikim vardır. Yıkama kalıcı çözüm sağlar.", icon: "replay" },
      { title: "Restoran / Yoğun Mutfak", description: "Yağlı atık yoğun ortamlarda periyodik pimaş yıkama zorunludur. İşletme hijyeni ve tıkanıklık önleme için planlı bakım sunuyoruz.", icon: "restaurant" },
    ],
    processSteps: [
      { step: 1, title: "Kameralı İnceleme", description: "Hat içi HD kamera ile birikim seviyesi, daralma noktaları ve boru durumu tespit edilir." },
      { step: 2, title: "Basınçlı Yıkama", description: "150 bar basınçlı su ile yağ, kireç ve organik birikim boru duvarından sökülür ve hat dışına alınır." },
      { step: 3, title: "Robotik Temizlik", description: "İnatçı birikimler spiral makine ile mekanik olarak temizlenir. Dar geçişlerde özel uçlar kullanılır." },
      { step: 4, title: "Son Kontrol", description: "Kamera ile hattın tamamen temiz ve açık olduğu doğrulanır. Su testi ile akış normale döndürülür." },
    ],
    methods: [
      { title: "Basınçlı Su Yıkama", description: "150 bar yüksek basınçlı pimaş yıkama. Yağ tabakası ve kireç birikimini boru duvarından ayırır." },
      { title: "Kimyasal Yıkama", description: "Profesyonel yağ çözücü ile derin temizlik. Endüstriyel mutfak ve restoran hatlarında etkilidir." },
      { title: "Periyodik Bakım Programı", description: "Restoran, site ve iş yeri yönetimleri için yıllık veya 6 aylık planlı pimaş yıkama programı." },
    ],
    faq: getServiceFaq("pimas-yikama"),
    relatedServices: ["tikaniklik-acma", "pimas-tesisati", "kamerali-tesisat-goruntuleme-ve-onarim"],
    relatedLocations: ["istanbul", "kagithane"],
    seoTitle: "İstanbul Pimaş Yıkama ve Gider Temizliği | 724 Tesisatçı",
    seoDescription: "İstanbul pimaş yıkama ve gider temizliği. 150 bar basınçlı su, kameralı kontrol, kalıcı çözüm. Restoran ve site hatları için periyodik bakım.",
    canonicalPath: "/hizmetler/pimas-yikama",
  },
  {
    id: "11",
    title: "Gömme Rezervuar Tamiri",
    slug: "gomme-rezervuar-tamiri",
    shortDescription:
      "Geberit, Vitra, ECA ve tüm marka gömme rezervuar arıza tespiti, iç takım değişimi, sızıntı onarımı ve montaj. Sürekli su akması, zayıf sifon ve klozet arkası nem sorunlarına kalıcı çözüm.",
    longDescription:
      "Gömme rezervuar sistemleri modern banyolarda estetik ve alan tasarrufu sağlar; ancak iç mekanizma arızaları, contasız bağlantılar veya yanlış montaj ciddi su israfına ve duvar içi kaçaklara yol açabilir. Rezervuar kapağı arkasında nem, zayıf sifon sesi, sürekli su akışı veya klozet taşması en sık görülen belirtilerdir.\n\n724 Tesisatçı olarak İstanbul genelinde tüm marka gömme rezervuarlarda arıza tespiti, iç takım (sifon mekanizması, doldurma ventili, contalar) değişimi, sızıntı onarımı ve yeni montaj hizmetleri sunuyoruz. Duvar içi hat bağlantılarını kontrol ediyor, gereksiz kırım yapmadan erişilebilir noktalardan müdahale ediyoruz.\n\nGömme rezervuardan kaynaklanan gizli su kaçakları yüksek su faturası ve komşu dairelere sızıntı riski oluşturur. Erken müdahale hem maliyeti düşürür hem de duvar içi yapısal hasarı önler. İşlem öncesi yazılı teklif sunuyor, kullanılan parçaların marka bilgisini servis formuna işliyoruz.\n\nGeberit, Vitra, ECA, Kale ve diğer marka gömme rezervuar tamiri için Kağıthane merkezli ekiplerimizle İstanbul'un 39 ilçesinde 7/24 servis veriyoruz. Acil sızıntı, zayıf sifon veya mekanizma arızalarında hemen arayın veya WhatsApp üzerinden randevu oluşturun.",
    aboutHighlights: [
      "Geberit, Vitra, ECA ve tüm marka gömme rezervuar servisi",
      "İç takım, conta ve doldurma ventili değişimi",
      "Gizli sızıntılarda termal kamera destekli tespit",
      "Minimum kırım ile duvar içi bağlantı onarımı",
    ],
    wideCard: true,
    heroTitle: "İstanbul Gömme Rezervuar Tamiri ve Montaj",
    heroDescription:
      "Tüm marka gömme rezervuar arıza tespiti, iç takım değişimi, sızıntı onarımı ve montaj. Sürekli su akması, zayıf sifon ve duvar arkası nem sorunlarına 7/24 acil müdahale.",
    icon: "plumbing",
    symptoms: [
      { title: "Sürekli Su Akışı", description: "Rezervuar dolduktan sonra bile su akıyorsa doldurma ventili veya sifon contası arızalıdır. Günde onlarca litre su israfına ve yüksek faturaya yol açar.", icon: "water_drop" },
      { title: "Zayıf veya Çalışmayan Sifon", description: "Sifon tuşuna basıldığında su az geliyor veya hiç gelmiyorsa mekanizma kırılmış veya bağlantı gevşemiş olabilir. Erken müdahale tam arızayı önler.", icon: "plumbing" },
      { title: "Duvar Arkasında Nem", description: "Gömme rezervuar kapağı çevresinde nem, küf veya koku duvar içi sızıntıya işaret eder. Termal kamera ile kaçak noktası tespit edilebilir.", icon: "water_damage" },
      { title: "Klozet Taşması", description: "Taşma veya geri basma durumunda tıkanıklık veya rezervuar debisi uyumsuzluğu olabilir. Robotik tıkanıklık açma ile birlikte kalıcı çözüm sağlanır.", icon: "water_damage" },
    ],
    processSteps: [
      { step: 1, title: "Arıza Tespiti", description: "Gömme rezervuar kapağı açılarak iç mekanizma, doldurma ventili, sifon contası ve duvar bağlantıları kontrol edilir. Su akış testi yapılır." },
      { step: 2, title: "Parça Değişimi / Onarım", description: "Arızalı iç takım, conta veya ventil orijinal veya eşdeğer kaliteli parça ile değiştirilir. Bağlantı noktaları sıkılarak sızdırmazlık sağlanır." },
      { step: 3, title: "Sızıntı Kontrolü", description: "Duvar içi hat ve rezervuar gövdesi su testi ile kontrol edilir. Gizli kaçak şüphesinde termal kamera ile ek inceleme yapılır." },
      { step: 4, title: "Test ve Garanti", description: "Sifon, doldurma ve debi testleri tamamlanır. Servis formu düzenlenir, işçilik garantisi teslim edilir." },
    ],
    methods: [
      { title: "İç Takım Değişimi", description: "Sifon mekanizması, doldurma ventili, yüzen vanalar ve contaların marka uyumlu parçalarla değişimi. Geberit, Vitra, ECA ve diğer markalarda uzman uygulama." },
      { title: "Sızıntı Onarımı", description: "Rezervuar-duvar bağlantı contaları, gider bağlantısı ve doldurma hattı sızıntılarının tespiti ve onarımı. Minimum müdahale ile kalıcı çözüm." },
      { title: "Yeni Montaj", description: "Banyo tadilatı veya yenileme projelerinde gömme rezervuar montajı, klozet bağlantısı ve basınç testi. Standartlara uygun güvenli kurulum." },
    ],
    faq: getServiceFaq("gomme-rezervuar-tamiri"),
    relatedServices: ["su-tesisati", "tikaniklik-acma", "su-kacagi-tespit-ve-onarim"],
    relatedLocations: ["istanbul", "kagithane"],
    seoTitle: "İstanbul Gömme Rezervuar Tamiri | Geberit, Vitra, ECA — 724 Tesisatçı",
    seoDescription: "İstanbul gömme rezervuar tamiri ve montaj. Geberit, Vitra, ECA iç takım değişimi, sızıntı onarımı, zayıf sifon çözümü. Yazılı teklif, garantili işçilik, 7/24 acil servis.",
    canonicalPath: "/hizmetler/gomme-rezervuar-tamiri",
  },
  {
    id: "12",
    title: "Batarya Musluk Montaj",
    slug: "batarya-musluk-montaj",
    shortDescription:
      "Mutfak, banyo ve lavabo batarya-musluk montajı, değişimi ve tamiri. Damlayan musluk, eski batarya yenileme, mutfak evye ve duş bataryası montajı. Tüm markalarda garantili işçilik.",
    longDescription:
      "Damlayan musluk, sızıntı yapan batarya veya eskiyen armatürler hem su israfına hem de alt dolap ve tezgah hasarına yol açar. Yanlış montaj, uyumsuz bağlantı veya yıpranmış contalar kısa sürede tekrarlayan arızalara neden olur.\n\n724 Tesisatçı olarak İstanbul genelinde mutfak evye bataryası, banyo lavabo bataryası, duş ve küvet bataryası montajı, değişimi ve tamiri hizmetleri sunuyoruz. Grohe, ECA, Kale, Artema ve diğer tüm marka armatürlerde profesyonel montaj yapıyor, eski hat bağlantılarını kontrol ederek sızdırmazlığı garanti altına alıyoruz.\n\nYeni batarya montajında flex hortum, contalar ve bağlantı rekorları kaliteli malzeme ile değiştirilir. Banyo ve mutfak tadilat projelerinde anahtar teslim batarya-musluk montajı, su basıncı ayarı ve test ile teslim edilir.\n\nDamlayan musluk, düşük basınç veya batarya değişimi ihtiyaçlarınız için İstanbul genelinde 7/24 servis hattımıza ulaşabilirsiniz. Keşif sonrası yazılı teklif, garantili işçilik ve hızlı montaj avantajından yararlanın.",
    aboutHighlights: [
      "Mutfak, banyo ve lavabo batarya-musluk montajı",
      "Grohe, ECA, Kale ve tüm marka armatür servisi",
      "Damlayan musluk tamiri ve conta değişimi",
      "Tadilat projelerinde anahtar teslim montaj",
    ],
    heroTitle: "İstanbul Batarya ve Musluk Montaj Hizmeti",
    heroDescription:
      "Mutfak, banyo ve lavabo batarya-musluk montajı, değişimi ve tamiri. Damlayan musluk onarımı, eski batarya yenileme ve garantili montaj. 7/24 acil servis.",
    icon: "faucet",
    symptoms: [
      { title: "Damlayan Musluk", description: "Musluk ucu veya contadan sürekli damlama günde 20 litreye kadar su israfına yol açar. Conta veya kartuş değişimi ile hızlı ve ekonomik çözüm sağlanır.", icon: "water_damage" },
      { title: "Düşük Su Basıncı", description: "Bataryadan zayıf su akışı aeratör tıkanıklığı, vana arızası veya hat basınç düşüşünden kaynaklanabilir. Montaj sırasında hat ve filtre kontrol edilir.", icon: "speed" },
      { title: "Eski veya Arızalı Batarya", description: "Paslanmış, kireçlenmiş veya kırık armatürler su kalitesini ve estetiği olumsuz etkiler. Yeni batarya montajı ile hijyen ve konfor artar.", icon: "build" },
      { title: "Tezgah Altı Sızıntı", description: "Batarya bağlantı noktalarından veya flex hortumlardan sızıntı dolap ve zemin hasarına yol açar. Acil müdahale ile hasar büyümeden giderilir.", icon: "plumbing" },
    ],
    processSteps: [
      { step: 1, title: "Keşif ve Ölçüm", description: "Mevcut batarya, bağlantı noktaları ve tezgah/lavabo uyumu kontrol edilir. Yeni armatür ölçüleri ve montaj tipi belirlenir." },
      { step: 2, title: "Söküm ve Hazırlık", description: "Eski batarya ve musluk sökülür, contalar ve flex hortumlar yenilenir. Hat uçları temizlenir ve basınç kontrol edilir." },
      { step: 3, title: "Montaj ve Bağlantı", description: "Yeni batarya standartlara uygun monte edilir, contalar sıkılarak sızdırmazlık sağlanır. Aeratör ve perlatör ayarı yapılır." },
      { step: 4, title: "Test ve Teslim", description: "Sıcak-soğuk su testi, basınç kontrolü ve sızıntı testi yapılır. Servis formu düzenlenir, işçilik garantisi teslim edilir." },
    ],
    methods: [
      { title: "Batarya Montajı", description: "Mutfak evye, banyo lavabo, duş ve küvet bataryası montajı. Tek delik, çift delik ve duvar tipi armatürlerde profesyonel uygulama." },
      { title: "Musluk Tamiri", description: "Damlayan musluk, sıkışan vana ve conta değişimi. Kartuş, aeratör ve bağlantı rekoru onarımı ile su israfını önleme." },
      { title: "Tadilat Montajı", description: "Banyo-mutfak yenileme projelerinde anahtar teslim batarya montajı, duvar içi hat bağlantısı ve basınç testi." },
    ],
    faq: getServiceFaq("batarya-musluk-montaj"),
    relatedServices: ["su-tesisati", "gomme-rezervuar-tamiri", "su-kacagi-tespit-ve-onarim"],
    relatedLocations: ["istanbul", "kagithane"],
    seoTitle: "İstanbul Batarya Musluk Montaj ve Tamiri | 724 Tesisatçı",
    seoDescription: "İstanbul batarya musluk montaj, değişim ve tamiri. Mutfak ve banyo armatür montajı, damlayan musluk onarımı. Tüm markalar, yazılı teklif, 7/24 servis.",
    canonicalPath: "/hizmetler/batarya-musluk-montaj",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
