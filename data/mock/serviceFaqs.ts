import type { FAQItem } from "@/types";

export const commonServiceFaq: FAQItem[] = [
  {
    question: "Fiyatlandırma nasıl yapılıyor?",
    answer:
      "Keşif ve cihazla tespit sonrası net, yazılı fiyat teklifi sunulur. Gizli maliyet veya sürpriz fatura uygulamıyoruz. İşlem öncesi onayınız alınır; malzeme ve işçilik kalemleri ayrı ayrı belirtilir.",
    category: "fiyatlandirma",
  },
  {
    question: "İstanbul'un hangi ilçelerine hizmet veriyorsunuz?",
    answer:
      "Kağıthane merkezli ekiplerimizle İstanbul'un Avrupa ve Anadolu Yakası'ndaki tüm ilçelere 7/24 servis yönlendirmesi yapıyoruz. Acil durumlarda en yakın mobil ekibimiz ortalama 30 dakika içinde adresinize ulaşır.",
    category: "genel",
  },
  {
    question: "Yapılan işlemlere garanti veriliyor mu?",
    answer:
      "Evet. Tüm hizmetlerimizde işçilik garantisi sunuyoruz. Kullanılan malzemelerin marka ve garanti bilgileri resmi servis formunda belirtilir. İşlem sonrası test ve kontrol ile kalite doğrulanır.",
    category: "genel",
  },
  {
    question: "Acil servis için nasıl ulaşabilirim?",
    answer:
      "7/24 acil servis hattımızı arayabilir veya WhatsApp üzerinden konum ve sorun detayını iletebilirsiniz. Acil su kaçağı, geri taşma ve kombi arızalarında öncelikli yönlendirme yapılır.",
    category: "genel",
  },
];

export const serviceSpecificFaq: Record<string, FAQItem[]> = {
  "su-tesisati": [
    {
      question: "İstanbul'da su tesisatı tamiri ne kadar sürer?",
      answer:
        "Musluk, vana veya küçük bağlantı onarımları genellikle 1–2 saat içinde tamamlanır. Banyo-mutfak tesisat yenileme veya hat değişimi 1–3 gün sürebilir. Keşif sonrası net süre ve yazılı teklif sunulur.",
      category: "su-tesisati",
    },
    {
      question: "PPRC ve bakır boru arasında hangisini tercih etmeliyim?",
      answer:
        "PPRC boru sıcak-soğuk su hatlarında ekonomik ve dayanıklı çözümdür; bakır boru eski binalarda ve yüksek basınç gerektiren noktalarda tercih edilir. Ekibimiz binanızın yaşı, basınç değeri ve kullanım alışkanlığınıza göre en uygun malzemeyi önerir.",
      category: "su-tesisati",
    },
    {
      question: "Gizli su kaçağı su tesisatından mı kaynaklanır?",
      answer:
        "Evet, duvar içi temiz su hattı kaçakları en sık su tesisatı arızalarından biridir. Termal kamera ve akustik dinleme ile kırmadan tespit edilir; yalnızca arızalı noktaya müdahale edilerek onarım yapılır.",
      category: "su-tesisati",
    },
    {
      question: "Su basıncı düşüklüğü tesisat arızası mı?",
      answer:
        "Düşük basınç boru tıkanıklığı, vana arızası, eski galvaniz hat korozyonu veya ana hat basınç düşüşünden kaynaklanabilir. Keşif sırasında hat boyunca basınç ölçümü yapılarak kesin sebep belirlenir.",
      category: "su-tesisati",
    },
    {
      question: "Banyo tadilatında tesisat ne zaman yenilenmeli?",
      answer:
        "20 yıldan eski binalarda, paslı su veya sık sızıntı yaşanan hatlarda tadilat sırasında tesisat yenileme önerilir. Yeni fayans öncesi hat değişimi, ileride kırım maliyetini önemli ölçüde düşürür.",
      category: "su-tesisati",
    },
    {
      question: "Su tesisatı fiyatları nasıl hesaplanır?",
      answer:
        "Metraj, malzeme kalitesi (PPRC/bakır), erişim zorluğu ve iş kapsamına göre fiyat belirlenir. Keşif sonrası malzeme ve işçilik kalemlerini içeren yazılı teklif sunulur; onay olmadan işleme başlanmaz.",
      category: "su-tesisati",
    },
  ],
  "kombi-servisi-ve-tesisati": [
    {
      question: "Kombi basıncı neden sürekli düşer?",
      answer:
        "Sürekli basınç kaybı gizli su kaçağı, genleşme tankı arızası, otomatik doldurma vanası sorunu veya radyatör vanası kaçağından kaynaklanabilir. Dijital arıza tespiti ile kaynak belirlenir ve kalıcı onarım yapılır.",
      category: "kombi",
    },
    {
      question: "Hangi kombi markalarına servis veriyorsunuz?",
      answer:
        "Vaillant, Bosch, Buderus, Demirdöküm, ECA, Baymak ve diğer tüm marka kombilerde arıza tespiti, bakım ve yedek parça değişimi hizmeti sunuyoruz. Orijinal veya eşdeğer kaliteli parçalar kullanılır.",
      category: "kombi",
    },
    {
      question: "Kombi periyodik bakım ne sıklıkla yaptırılmalı?",
      answer:
        "Üretici önerilerine göre yılda en az bir kez periyodik bakım önerilir. Brülör temizliği, baca gazı kontrolü, basınç ayarı ve emniyet ventili testi ile verimlilik artar, arıza riski azalır.",
      category: "kombi",
    },
    {
      question: "Kombi altından su akması ne anlama gelir?",
      answer:
        "Bağlantı rekorları, emniyet ventili, eşanjör veya pompa contasından kaynaklanabilir. Su birikimi elektrik aksamına zarar verebileceğinden acil müdahale gerekir; 7/24 ekibimiz hızlı yönlendirme yapar.",
      category: "kombi",
    },
    {
      question: "Kombi servisi fiyatları nasıl belirlenir?",
      answer:
        "Arıza türü, değişecek parça, marka-model ve işçilik kapsamına göre fiyatlandırılır. Tespit sonrası parça ve işçilik kalemlerini içeren yazılı teklif sunulur.",
      category: "kombi",
    },
    {
      question: "Yeni kombi montajı ne kadar sürer?",
      answer:
        "Standart daire montajı genellikle yarım gün ile bir gün arasında tamamlanır. Tesisat bağlantısı, baca kontrolü, basınç testi ve devreye alma dahil tüm süreç profesyonel ekip tarafından yürütülür.",
      category: "kombi",
    },
  ],
  "kalorifer-tesisati": [
    {
      question: "Kalorifer tesisatı kurulumu ne kadar sürer?",
      answer:
        "Daire büyüklüğü, petek sayısı ve hat uzunluğuna göre 2–5 gün sürebilir. Proje planlaması, boru döşeme, petek montajı ve dengeleme testi aşamaları yazılı programla yürütülür.",
      category: "kalorifer",
    },
    {
      question: "Petekler neden eşit ısınmıyor?",
      answer:
        "Hava birikimi, tıkanıklık, yetersiz pompa debisi veya denge vanası ayarı bozukluğundan kaynaklanır. Sistem analizi sonrası hava alma, temizlik veya vana ayarı ile eşit ısınma sağlanır.",
      category: "kalorifer",
    },
    {
      question: "Kalorifer boru kaçağı kırmadan tespit edilebilir mi?",
      answer:
        "Evet. Termal kamera ve akustik dinleme cihazları ile duvar içi boru kaçağı noktasal olarak tespit edilir. Yalnızca arızalı bölgeye müdahale edilerek gereksiz kırım önlenir.",
      category: "kalorifer",
    },
    {
      question: "Sirkülasyon pompası arızası nasıl anlaşılır?",
      answer:
        "Petekler geç veya hiç ısınmıyorsa, pompadan uğultu geliyorsa veya kombi sürekli çalışıp ısı vermiyorsa pompa arızası olabilir. Debi ölçümü ile teşhis konur.",
      category: "kalorifer",
    },
    {
      question: "Kalorifer tesisatı yenileme fiyatı neye göre belirlenir?",
      answer:
        "Petek sayısı, boru metrajı, malzeme kalitesi ve erişim zorluğuna göre fiyatlandırılır. Keşif sonrası detaylı yazılı teklif ve işçilik garantisi sunulur.",
      category: "kalorifer",
    },
    {
      question: "Yeni bina kalorifer tesisatı projelendirme yapıyor musunuz?",
      answer:
        "Evet. Metrekare, oda sayısı ve ısı ihtiyacına göre boru çapı, petek kapasitesi ve hat güzergahı hesaplanır. Standartlara uygun, verimli sistem tasarımı sunuyoruz.",
      category: "kalorifer",
    },
  ],
  "su-kacagi-tespit-ve-onarim": [
    {
      question: "Su kaçağı tespiti kırmadan yapılabilir mi?",
      answer:
        "Evet. Termal kamera, akustik dinleme ve nem ölçer cihazlarımız ile kaçak noktasını kırmadan tespit ediyoruz. Onarım aşamasında yalnızca tespit edilen noktaya müdahale edilir.",
      category: "su-kacagi",
    },
    {
      question: "Su kaçağı tespiti ne kadar sürer?",
      answer:
        "Standart bir daire tespiti 1–2 saat sürer. Onarım dahil toplam süre genellikle yarım günü geçmez. Kaçağın konumu ve erişim zorluğuna göre süre değişebilir.",
      category: "su-kacagi",
    },
    {
      question: "Sigorta su kaçağı tespitini karşılar mı?",
      answer:
        "Birçok konut sigortası ani su hasarlarını kapsar. Tespit raporumuz sigorta sürecinizde kullanılabilir. Poliçenizi sigorta şirketinizden teyit etmenizi öneririz.",
      category: "su-kacagi",
    },
    {
      question: "Musluklar kapalıyken sayaç dönüyorsa ne yapmalıyım?",
      answer:
        "Bu aktif su kaçağı belirtisidir. Ana vanayı kapatıp acil tespit ekibimizi arayın. Gizli kaçak komşu dairelere ve yapıya ciddi hasar verebilir; erken müdahale kritiktir.",
      category: "su-kacagi",
    },
    {
      question: "Yerden ısıtma kaçağı nasıl tespit edilir?",
      answer:
        "Termal kamera ile zemin altı sıcaklık farkları taranır; kaçak bölgesi harita üzerinde işaretlenir. Noktasal müdahale ile parke veya fayans alanı minimum düzeyde açılır.",
      category: "su-kacagi",
    },
    {
      question: "Su kaçağı tespit fiyatları nasıl belirlenir?",
      answer:
        "Alan büyüklüğü, kaçak şüphesi bölgesi ve kullanılacak cihaz türüne göre fiyatlandırılır. Tespit sonrası onarım teklifi ayrı kalemler halinde sunulur.",
      category: "su-kacagi",
    },
  ],
  "tikaniklik-acma": [
    {
      question: "Tıkanıklık açma işlemi ne kadar sürer?",
      answer:
        "Lavabo ve duş gideri tıkanıklıkları genellikle 30–60 dakikada açılır. Ana pimaş hattı veya tuvalet tıkanıklıkları 1–2 saat sürebilir. Kameralı kontrol ile kesin süre keşifte belirlenir.",
      category: "tikaniklik",
    },
    {
      question: "Kimyasal dökücü kullanmak boruya zarar verir mi?",
      answer:
        "Ev tipi kimyasallar PVC borulara ve contalara zarar verebilir, sorunu geçici gizler. Robotik spiral makine ile mekanik açma kalıcı ve güvenli çözümdür.",
      category: "tikaniklik",
    },
    {
      question: "Tuvalet tıkanıklığı acil müdahale gerektirir mi?",
      answer:
        "Geri taşma durumunda acil müdahale şarttır; alt kata ve komşu dairelere hasar riski vardır. 7/24 ekibimiz ortalama 30 dakika içinde adresinize ulaşır.",
      category: "tikaniklik",
    },
    {
      question: "Tekrarlayan tıkanıklık neden olur?",
      answer:
        "Yağ birikimi, boru eğim hatası, kök girişi veya boru hasarı tekrarlayan tıkanıklığa yol açar. Kameralı görüntüleme ile kök sebep tespit edilerek kalıcı çözüm planlanır.",
      category: "tikaniklik",
    },
    {
      question: "Mutfak gideri tıkanıklığı nasıl açılır?",
      answer:
        "Robotik spiral makine ile yağ ve gıda birikimi parçalanır; gerekirse basınçlı su ile hat derinlemesine temizlenir. Kimyasal kullanılmadan boruya zarar verilmeden işlem yapılır.",
      category: "tikaniklik",
    },
    {
      question: "Tıkanıklık açma fiyatları neye göre belirlenir?",
      answer:
        "Tıkanıklık türü (lavabo, tuvalet, ana hat), erişim zorluğu ve kullanılacak ekipmana göre fiyatlandırılır. İşlem öncesi yazılı teklif sunulur.",
      category: "tikaniklik",
    },
  ],
  "petek-temizleme": [
    {
      question: "Petek temizliği ne kadar sürer?",
      answer:
        "Standart dairede 6–10 petek için 3–5 saat sürer. Sistem kimyasal yıkama dahil edilirse süre uzayabilir. Randevu saatinde ekip adresinize gelir.",
      category: "petek",
    },
    {
      question: "Petek temizliği doğalgaz faturasını düşürür mü?",
      answer:
        "Evet. Petek içi tortu temizlendikten sonra ısınma verimliliği %20–30 artabilir. Temizlik öncesi-sonrası sıcaklık karşılaştırması ile fark somut biçimde gösterilir.",
      category: "petek",
    },
    {
      question: "Peteklerin altı sıcak üstü soğuk — ne yapmalıyım?",
      answer:
        "Petek içinde çamur, pas ve magnetit birikimi vardır. Makineli petek temizliği ile tortu çıkarılır; gerekirse sistem kimyasal yıkama uygulanır.",
      category: "petek",
    },
    {
      question: "Petek temizliği ne sıklıkla yaptırılmalı?",
      answer:
        "Kullanım yoğunluğuna göre 3–5 yılda bir petek temizliği önerilir. Eski binalarda ve yüksek kireçli su bölgelerinde daha sık bakım gerekebilir.",
      category: "petek",
    },
    {
      question: "Petek temizliği kombi ömrünü uzatır mı?",
      answer:
        "Evet. Temiz sistemde kombi ve pompa daha az yük altında çalışır; arıza riski ve enerji tüketimi düşer. Kış sezonu öncesi temizlik özellikle önerilir.",
      category: "petek",
    },
    {
      question: "Petek temizleme fiyatları nasıl hesaplanır?",
      answer:
        "Petek sayısı, sistem büyüklüğü ve kimyasal yıkama ihtiyacına göre fiyatlandırılır. Keşif sonrası net yazılı teklif sunulur.",
      category: "petek",
    },
  ],
  "kamerali-tesisat-goruntuleme-ve-onarim": [
    {
      question: "Kameralı tesisat görüntüleme ne kadar sürer?",
      answer:
        "Standart daire pimaş hattı 30–60 dakikada görüntülenir. Site ana hatları ve uzun mesafe hatlarda süre uzayabilir. Kayıt ve rapor aynı gün teslim edilir.",
      category: "kamera",
    },
    {
      question: "Kameralı kontrol hangi durumlarda gerekli?",
      answer:
        "Tekrarlayan tıkanıklık, sürekli gider kokusu, 20 yıldan eski binalar ve tadilat öncesi mutlaka kameralı kontrol önerilir. Kör müdahale maliyetli ve geçici çözüm sağlar.",
      category: "kamera",
    },
    {
      question: "Pimaş kamerası boruya zarar verir mi?",
      answer:
        "Hayır. Esnek HD kamera ucu su geçirmez ve boru iç yüzeyine zarar vermez. LED aydınlatmalı kamera ile net görüntü kaydı alınır.",
      category: "kamera",
    },
    {
      question: "Görüntü kaydı bana teslim edilir mi?",
      answer:
        "Evet. USB veya dijital ortamda görüntü kaydı ve yazılı tespit raporu teslim edilir. Site yönetimi ve sigorta süreçlerinde kullanılabilir.",
      category: "kamera",
    },
    {
      question: "Kameralı tespit sonrası onarım nasıl yapılır?",
      answer:
        "Sorun noktası metre ve derinlik bilgisi ile işaretlenir; yalnızca tespit edilen bölgeye minimum müdahale ile onarım yapılır. Sonrasında kamera ile doğrulama gerçekleştirilir.",
      category: "kamera",
    },
    {
      question: "Kameralı tesisat görüntüleme fiyatları neye göre belirlenir?",
      answer:
        "Hat uzunluğu, erişim noktası sayısı ve raporlama kapsamına göre fiyatlandırılır. Onarım teklifi ayrı kalemler halinde sunulur.",
      category: "kamera",
    },
  ],
  "pimas-tesisati": [
    {
      question: "Pimaş tesisatı yenileme ne zaman gerekir?",
      answer:
        "30 yıldan eski binalarda, sık tıkanan hatlarda, koku ve sızıntı sorunlarında ve tadilat projelerinde pimaş yenileme önerilir. Kameralı kontrol ile hat durumu değerlendirilir.",
      category: "pimas",
    },
    {
      question: "PVC pimaş boru mu yoksa eski boru mu tercih edilmeli?",
      answer:
        "Yeni uygulamalarda standart PVC pimaş boru kullanılır; doğru eğim ve çap hesaplaması ile uzun ömürlü sistem elde edilir. Eski boru hatları kameralı kontrol ile değerlendirilir.",
      category: "pimas",
    },
    {
      question: "Alt kata su sızıntısı pimaş arızası mı?",
      answer:
        "Evet, pimaş ek yerleri, manşon veya boru çatlaklarından sızıntı alt kata nem ve hasar verir. Kameralı teşhis ile nokta tespit edilerek kalıcı onarım yapılır.",
      category: "pimas",
    },
    {
      question: "Pimaş tesisatı kurulumu ne kadar sürer?",
      answer:
        "Daire tadilatında 1–3 gün, komple bina hat yenilemede proje kapsamına göre süre uzar. Keşif sonrası yazılı program ve teklif sunulur.",
      category: "pimas",
    },
    {
      question: "Pimaş hattında koku neden oluşur?",
      answer:
        "Sifon su kaybı, kırık boru, hatalı bağlantı veya boru içi birikim koku yapar. Kameralı kontrol ile kaynak belirlenir; onarım veya yıkama ile kalıcı çözüm sağlanır.",
      category: "pimas",
    },
    {
      question: "Pimaş tesisatı fiyatları nasıl hesaplanır?",
      answer:
        "Metraj, boru çapı, erişim zorluğu ve yenileme kapsamına göre fiyatlandırılır. Malzeme ve işçilik kalemleri yazılı teklifte ayrı ayrı belirtilir.",
      category: "pimas",
    },
  ],
  "dogalgaz-tesisati": [
    {
      question: "Doğalgaz tesisatı periyodik kontrol ne sıklıkla yapılır?",
      answer:
        "Konut doğalgaz tesisatlarında yılda bir kez periyodik güvenlik kontrolü zorunludur. Kontrol süresi dolmuş tesisatlar ceza riski taşır; randevu alarak kontrol yaptırmanızı öneririz.",
      category: "dogalgaz",
    },
    {
      question: "Gaz kokusu fark ettiğimde ne yapmalıyım?",
      answer:
        "Ana vanayı kapatın, elektrik düğmesine dokunmayın, pencere açın ve acil olarak profesyonel destek alın. 7/24 acil ekibimiz hızlı müdahale sağlar.",
      category: "dogalgaz",
    },
    {
      question: "Doğalgaz tesisatı montajı lisanslı ekip tarafından mı yapılır?",
      answer:
        "Evet. Tüm uygulamalar ilgili standartlara uygun, yetkili ve lisanslı ekip tarafından gerçekleştirilir. Sızdırmazlık testi ve basınç kontrolü zorunludur.",
      category: "dogalgaz",
    },
    {
      question: "Yeni kombi için doğalgaz hattı çekimi yapıyor musunuz?",
      answer:
        "Evet. Kombi, ocak ve soba bağlantıları dahil doğalgaz hattı projelendirme, montaj ve devreye alma hizmeti sunuyoruz.",
      category: "dogalgaz",
    },
    {
      question: "Doğalgaz tesisatı fiyatları neye göre belirlenir?",
      answer:
        "Hat metrajı, cihaz sayısı, boru tipi ve proje kapsamına göre fiyatlandırılır. Keşif sonrası detaylı yazılı teklif sunulur.",
      category: "dogalgaz",
    },
    {
      question: "Sızdırmazlık testi nedir?",
      answer:
        "Montaj sonrası tüm hat basınç altında tutularak kaçak olup olmadığı kontrol edilir. Kaçak dedektörü ile ek yerleri taranır; sızdırmazlık belgesi düzenlenir.",
      category: "dogalgaz",
    },
  ],
  "pimas-yikama": [
    {
      question: "Pimaş yıkama ne kadar sürer?",
      answer:
        "Standart daire pimaş hattı 2–4 saat sürer. Restoran ve site ana hatlarında hat uzunluğuna göre süre uzayabilir. Kameralı öncesi-sonrası kontrol dahildir.",
      category: "pimas-yikama",
    },
    {
      question: "Pimaş yıkama ile tıkanıklık açma arasındaki fark nedir?",
      answer:
        "Tıkanıklık açma anlık blokajı giderir; pimaş yıkama boru duvarındaki yağ, kireç ve birikimi tamamen temizleyerek tekrarlayan sorunları önler.",
      category: "pimas-yikama",
    },
    {
      question: "Restoran pimaş hattı ne sıklıkla yıkanmalı?",
      answer:
        "Yağlı atık yoğun restoran ve endüstriyel mutfaklarda yılda en az bir kez, yoğun işletmelerde 6 ayda bir periyodik pimaş yıkama önerilir.",
      category: "pimas-yikama",
    },
    {
      question: "150 bar basınçlı yıkama boruya zarar verir mi?",
      answer:
        "Profesyonel ekipman ve doğru basınç ayarı ile PVC pimaş borulara zarar verilmeden derin temizlik yapılır. İşlem öncesi kamera ile boru durumu kontrol edilir.",
      category: "pimas-yikama",
    },
    {
      question: "Pimaş yıkama kötü kokuyu giderir mi?",
      answer:
        "Evet. Boru içi yağ ve organik birikim temizlendikten sonra gider kokusu kalıcı biçimde giderilir. Havalandırma hattı da kontrol edilir.",
      category: "pimas-yikama",
    },
    {
      question: "Pimaş yıkama fiyatları nasıl belirlenir?",
      answer:
        "Hat uzunluğu, birikim yoğunluğu, erişim noktası ve kimyasal yıkama ihtiyacına göre fiyatlandırılır. Site ve restoranlar için toplu teklif sunulur.",
      category: "pimas-yikama",
    },
  ],
};

export function getServiceFaq(slug: string): FAQItem[] {
  const specific = serviceSpecificFaq[slug] ?? [];
  return [...specific, ...commonServiceFaq];
}
