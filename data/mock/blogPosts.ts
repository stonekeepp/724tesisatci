import type { BlogPost } from "@/types";
import { blogImages } from "@/data/mock/images";

const editorialReviewedBy = "724 Tesisatçı saha ekibi";
const editorialReviewedAt = "2026-07-09";

const kagithaneCoreLinks = [
  {
    href: "/hizmet-bolgeleri/kagithane",
    label: "Kağıthane merkez tesisat ekibi",
  },
  {
    href: "/hizmet-bolgeleri/kagithane-mahalleleri",
    label: "Kağıthane mahalle servis ağı",
  },
  {
    href: "/iletisim",
    label: "Servis talebi oluştur",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Su Kaçağı Belirtileri Nelerdir? Gizli Tehlikeyi Nasıl Fark Edersiniz?",
    slug: "su-kacagi-belirtileri",
    excerpt:
      "Su kaçağı belirtilerini erken fark etmek büyük hasarları önler. Duvar nemlenmesi, yüksek su faturası ve sayaç dönmesi gibi işaretleri öğrenin.",
    content: `
## Su Kaçağı Nedir ve Neden Tehlikelidir?

Su kaçağı, bina tesisatındaki boru, vana veya bağlantı noktalarından suyun kontrolsüz şekilde sızmasıdır. Gizli kaçaklar özellikle tehlikelidir çünkü uzun süre fark edilmeden duvar, tavan ve zemin hasarına yol açabilir. İstanbul'da eski bina stokunun yüksek olması nedeniyle gizli su kaçakları sık görülür.

## En Sık Görülen Su Kaçağı Belirtileri

### 1. Anormal Su Faturası Artışı
Tüm alışkanlıklarınız aynı kalmasına rağmen su faturanız belirgin şekilde arttıysa, tesisatınızda gizli bir kaçak olabilir. Önce tüm muslukları kapatıp sayaç hareketini kontrol edin.

### 2. Duvarlarda Nem ve Küf
Duvar kağıdında kabarma, boyada dökülme veya köşelerde küf oluşumu nem birikiminin en belirgin işaretlerindendir. Banyo ve mutfak duvarlarına özellikle dikkat edin.

### 3. Sayaç Kontrolü
Tüm musluklar kapalıyken su sayacı dönüyorsa, tesisatta aktif bir kaçak ihtimali güçlenir. Bu basit test evde hemen uygulanabilir.

### 4. Zemin Isınması veya Bölgesel Nem
Yerden ısıtma ve kalorifer hatlarında kaçak olduğunda zemin belirli noktalarda anormal şekilde ısınabilir ya da nemlenebilir. Termal kamera bu noktaları kırmadan daraltmaya yardımcı olur.

### 5. Duvar İçinden Gelen Sesler
Sessiz bir ortamda duvar içinden gelen hafif su sesi veya tıslama kaçak belirtisi olabilir. Ses tek başına kesin tanı değildir; cihazlı kontrolle doğrulanmalıdır.

## Ne Zaman Profesyonel Destek Almalısınız?

Belirtilerden biri sürekli tekrar ediyorsa, komşu daireye sızıntı varsa veya sayaç testi şüpheli görünüyorsa profesyonel su kaçağı tespiti gerekir. Termal kamera, akustik dinleme ve nem ölçerle kaçak noktası çoğu durumda gereksiz kırım yapılmadan belirlenebilir.

## Kağıthane'de Hızlı Kontrol Avantajı

Kağıthane Çeliktepe merkez operasyonumuz sayesinde Çağlayan, Gültepe, Seyrantepe, Emniyet Evleri ve çevre mahallelere kısa sürede ekip yönlendirebiliyoruz. Su kaçağı şüphesinde amaç önce hasarı sınırlamak, ardından yazılı teklif ve garantili işçilikle doğru onarımı planlamaktır.
    `.trim(),
    category: "Su Kaçağı",
    publishedAt: "2025-06-15T10:00:00.000Z",
    updatedAt: "2026-07-09T09:00:00.000Z",
    readingTime: 6,
    seoTitle: "Su Kaçağı Belirtileri Nelerdir? | 724 Tesisatçı Blog",
    seoDescription:
      "Su kaçağı belirtileri: yüksek fatura, nem, küf, sayaç dönmesi ve gizli sesler. Kağıthane merkezli cihazlı tespit ekibinden pratik rehber.",
    canonicalPath: "/blog/su-kacagi-belirtileri",
    relatedServices: [
      "su-kacagi-tespit-ve-onarim",
      "kamerali-tesisat-goruntuleme-ve-onarim",
    ],
    faq: [
      {
        question: "Su kaçağı kendim tespit edebilir miyim?",
        answer:
          "Basit sayaç kontrolü evde yapılabilir; ancak duvar içi ve zemin altı gizli kaçaklar için termal kamera ve akustik dinleme gibi profesyonel cihazlar gerekir.",
        category: "su-kacagi",
      },
      {
        question: "Su kaçağı faturayı ne kadar artırır?",
        answer:
          "Kaçağın büyüklüğüne göre değişir. Küçük bir sızıntı bile ay sonunda belirgin fatura artışı yapabilir; sürekli artış varsa sayaç testi yapılmalıdır.",
        category: "su-kacagi",
      },
      {
        question: "Gizli su kaçağı duvara zarar verir mi?",
        answer:
          "Evet. Uzun süre fark edilmeyen kaçaklar küf, boya kabarması, sıva çatlağı ve komşu daireye su sızıntısı gibi ciddi hasarlara neden olabilir.",
        category: "su-kacagi",
      },
    ],
    status: "published",
    image: blogImages["su-kacagi-belirtileri"],
    imageAlt: "Termal kamera ile gizli su kaçağı belirtisi kontrolü",
    localFocus: "Kağıthane",
    editorialReviewedBy,
    editorialReviewedAt,
    editorialNote:
      "Belirti listesi saha çağrılarında en sık karşılaşılan kontrol adımlarına göre güncellendi.",
    relatedLinks: [
      { href: "/kagithane-su-kacagi-tespiti", label: "Kağıthane su kaçağı tespiti" },
      ...kagithaneCoreLinks,
    ],
  },
  {
    id: "2",
    title: "Kombi Basıncı Neden Düşer? Evde Yapılabilecek Hızlı Kontroller",
    slug: "kombi-basinci-neden-duser",
    excerpt:
      "Kış aylarında sık görülen kombi su basıncı düşmesinin temel nedenleri, evde güvenli kontrol adımları ve servis gerektiren durumlar.",
    content: `
## Kombi Basıncı Nedir ve Neden Önemlidir?

Kombi basıncı, ısıtma devresindeki suyun bar cinsinden ölçülen değeridir. Çoğu kombide ideal aralık 1,0-1,5 bar seviyesidir; yine de üretici kılavuzu esas alınmalıdır. Basınç düştüğünde kombi çalışmayı durdurabilir veya petekler yeterince ısınmayabilir.

## Kombi Basıncı Neden Düşer?

### 1. Sistemde Hava Birikimi
Peteklerde hava toplanması ısı dağılımını bozar ve basınç dalgalanmasına yol açabilir. Hava alma işlemi kontrollü yapılmalı, işlem sonrasında basınç tekrar kontrol edilmelidir.

### 2. Kaçak veya Sızıntı
Radyatör vanaları, bağlantı noktaları, havlupan veya yerden ısıtma devresindeki küçük sızıntılar zamanla basıncı düşürür. Sürekli basınç kaybı gizli kaçak belirtisi olabilir.

### 3. Genleşme Tankı Sorunu
Genleşme tankı basıncı bozulduğunda kombi basıncı sık sık yükselip düşebilir. Bu parçada işlem yapılması uzman servis gerektirir.

### 4. Doldurma Musluğunun Yanlış Kullanımı
Doldurma musluğu ile su eklenebilir; ancak basıncın 2,5 bar üzerine çıkmaması gerekir. Basınç kısa sürede tekrar düşüyorsa sorunun nedeni yalnızca su eksikliği değildir.

## Evde Yapılabilecek Güvenli Kontroller

Kombi panelindeki basınç göstergesini okuyun, peteklerde gözle görülür sızıntı olup olmadığını kontrol edin ve son günlerde basıncın ne sıklıkla düştüğünü not edin. Gaz hattı, elektrik bağlantısı veya kapalı cihaz parçalarına müdahale etmeyin.

## Kağıthane'de Servis Ne Zaman Gerekir?

Kağıthane'de özellikle eski apartmanlarda ve yoğun kullanılan petek hatlarında basınç kaybı kış aylarında sık bildirilir. Basınç birkaç gün içinde tekrar düşüyorsa Çeliktepe merkezli ekibimiz kaçak, petek ve kombi hattını cihazlı kontrolle değerlendirir.
    `.trim(),
    category: "Kombi & Petek Bakımı",
    publishedAt: "2025-05-20T10:00:00.000Z",
    updatedAt: "2026-07-09T09:00:00.000Z",
    readingTime: 5,
    seoTitle: "Kombi Basıncı Neden Düşer? Evde Kontroller | 724 Tesisatçı",
    seoDescription:
      "Kombi basıncı neden düşer? Hava, kaçak, genleşme tankı ve güvenli ev kontrolleri. Kağıthane kombi ve petek hattı rehberi.",
    canonicalPath: "/blog/kombi-basinci-neden-duser",
    relatedServices: ["kombi-servisi-ve-tesisati", "petek-temizleme"],
    faq: [
      {
        question: "Kombi basıncı kaç olmalı?",
        answer:
          "Çoğu kombide ideal basınç 1,0-1,5 bar aralığındadır. Modelin kullanım kılavuzundaki değer önceliklidir; 0,8 bar altı birçok modelde arıza uyarısı oluşturur.",
        category: "kombi",
      },
      {
        question: "Kombiye su eklemek güvenli mi?",
        answer:
          "Doldurma musluğu ile kontrollü su eklenebilir. Basınç 2,5 barı geçmemeli; emin değilseniz işlem öncesi servis desteği almak daha güvenlidir.",
        category: "kombi",
      },
      {
        question: "Basınç sürekli düşüyorsa ne yapmalıyım?",
        answer:
          "Tekrarlayan basınç kaybında sistemde kaçak, vana sorunu veya genleşme tankı arızası olabilir. Cihazlı kontrol yaptırmak gerekir.",
        category: "kombi",
      },
    ],
    status: "published",
    image: blogImages["kombi-basinci-neden-duser"],
    imageAlt: "Kombi basınç göstergesi ve petek hattı kontrolü",
    localFocus: "Kağıthane",
    editorialReviewedBy,
    editorialReviewedAt,
    editorialNote:
      "Evde yapılabilecek adımlar güvenlik sınırları ve servis gerektiren durumlar ayrılarak güncellendi.",
    relatedLinks: [
      { href: "/kagithane-kombi-servisi", label: "Kağıthane kombi tesisat kontrolü" },
      { href: "/kagithane-petek-temizleme", label: "Kağıthane petek temizleme" },
      ...kagithaneCoreLinks,
    ],
  },
  {
    id: "3",
    title: "Lavabo Tıkanıklığı Nasıl Açılır? Kameralı Sistemlerin Avantajları",
    slug: "lavabo-tikanikligi-nasil-acilir",
    excerpt:
      "Lavabo tıkanıklığının nedenleri, evde denenebilecek güvenli yöntemler ve kalıcı çözüm için kameralı sistem avantajları.",
    content: `
## Lavabo Tıkanıklığı Neden Olur?

Mutfak ve banyo lavabolarında yağ, gıda artığı, saç ve sabun kalıntıları boru içinde birikerek tıkanıklığa yol açar. Sifon bölgesi en sık tıkanan noktadır. Eski bina tesisatlarında dar boru çapı ve hat eğimi de tekrar eden tıkanıklığı artırabilir.

## Evde Denenebilecek Güvenli Yöntemler

### 1. Sıcak Su ve Deterjan
Yağ kaynaklı hafif tıkanıklıklarda sıcak su ve bulaşık deterjanı geçici rahatlama sağlayabilir. Kaynar suyu PVC hatta sık ve kontrolsüz dökmek contalara zarar verebilir.

### 2. Pompa Kullanımı
Lavabo ağzını kapatıp pompa ile basınç uygulamak sifon çevresindeki yumuşak tıkanıklıkları açabilir. Taşma riski varsa işlemi durdurun.

### 3. Sifon Temizliği
Alt dolap altındaki sifonu söküp temizlemek basit tıkanıklıklarda etkilidir. Conta ve bağlantılar geri takılırken su sızıntısı kontrol edilmelidir.

## Kimyasal Açıcı Konusunda Dikkat

Kimyasal açıcılar kısa süreli çözüm gibi görünse de PVC boru, conta ve eski pimaş hatlarında hasar riskini artırabilir. Tekrarlayan tıkanıklıkta hattın içini görmek daha sağlıklı karar verir.

## Kameralı Sistemlerin Avantajı

Endoskopik kamera ile boru içi görüntülenir; tıkanıklığın yeri, nedeni ve boru hasarı net şekilde tespit edilir. Bu sayede gereksiz kırım yapılmadan robotik cihaz veya pimaş yıkama ile doğru işlem planlanır.

## Kağıthane'de Tekrarlayan Tıkanıklıklar

Kağıthane'de yoğun kullanılan apartman hatlarında mutfak gideri ve ana pimaş tıkanıklıkları sık yaşanabilir. Çeliktepe merkezli ekibimiz özellikle Çağlayan, Gültepe, Seyrantepe ve Talatpaşa hattında hızlı yönlendirme ile kameralı kontrol yapar.
    `.trim(),
    category: "Tıkanıklık Açma",
    publishedAt: "2025-04-10T10:00:00.000Z",
    updatedAt: "2026-07-09T09:00:00.000Z",
    readingTime: 5,
    seoTitle: "Lavabo Tıkanıklığı Nasıl Açılır? | Kameralı Tespit",
    seoDescription:
      "Lavabo tıkanıklığı için güvenli ev kontrolleri, kimyasal açıcı riski ve kameralı tespit. Kağıthane gider hattı rehberi.",
    canonicalPath: "/blog/lavabo-tikanikligi-nasil-acilir",
    relatedServices: ["tikaniklik-acma", "kamerali-tesisat-goruntuleme-ve-onarim"],
    faq: [
      {
        question: "Lavabo tıkanıklığı için kimyasal açıcı kullanmalı mıyım?",
        answer:
          "Kimyasal açıcılar PVC borulara ve contalara zarar verebilir. Tekrarlayan tıkanıklıklarda profesyonel makine ve kamera ile müdahale daha güvenlidir.",
        category: "tikaniklik",
      },
      {
        question: "Kameralı tıkanıklık açma ne işe yarar?",
        answer:
          "Boru içi görüntülenerek tıkanıklığın tam yeri ve nedeni belirlenir. Kırım yapılmadan noktasal müdahale planlanır.",
        category: "tikaniklik",
      },
      {
        question: "Mutfak ve banyo tıkanıklığı aynı hatta mı olur?",
        answer:
          "Bazı binalarda ortak hat kullanılır. Birden fazla giderin aynı anda yavaşlaması ana hat tıkanıklığına işaret edebilir.",
        category: "tikaniklik",
      },
    ],
    status: "published",
    image: blogImages["lavabo-tikanikligi-nasil-acilir"],
    imageAlt: "Kameralı sistemle lavabo gider hattı kontrolü",
    localFocus: "Kağıthane",
    editorialReviewedBy,
    editorialReviewedAt,
    editorialNote:
      "Kimyasal açıcı uyarıları ve kameralı tespit gerekçeleri kullanıcı güvenliği için netleştirildi.",
    relatedLinks: [
      { href: "/kagithane-tikaniklik-acma", label: "Kağıthane tıkanıklık açma" },
      { href: "/kagithane-kamerali-tesisat-goruntuleme", label: "Kağıthane kameralı tesisat görüntüleme" },
      ...kagithaneCoreLinks,
    ],
  },
  {
    id: "4",
    title: "Periyodik Tesisat Bakımının Önemi ve Maliyetlere Etkisi",
    slug: "periyodik-tesisat-bakimi",
    excerpt:
      "Su tesisatı, pimaş hattı, kombi ve petek sistemlerinin düzenli kontrolü ani arıza riskini ve gereksiz maliyetleri azaltır.",
    content: `
## Periyodik Tesisat Bakımı Nedir?

Periyodik tesisat bakımı; su tesisatı, pimaş hatları, kombi devresi, petekler ve vanaların belirli aralıklarla kontrol edilmesidir. Amaç küçük sorunları büyümeden fark etmek ve ani arızaları azaltmaktır.

## Düzenli Bakımın Faydaları

### 1. Ani Arızaları Azaltır
Küçük sızıntılar ve gevşek bağlantılar zamanla büyük hasara dönüşür. Yıllık kontrol ile erken müdahale mümkündür.

### 2. Su ve Enerji Tasarrufu Sağlar
Gizli kaçaklar su faturasını, verimsiz petekler ise doğalgaz giderini artırabilir. Bakımlı sistem daha az kaynak tüketir.

### 3. Koku ve Tıkanıklık Riskini Düşürür
Pimaş hatlarındaki yağ ve tortu birikimi kokuya ve geri tepmeye neden olabilir. Periyodik pimaş yıkama yoğun kullanılan hatlarda hijyen sağlar.

### 4. Mülk Değerini Korur
Nem, küf ve tesisat hasarı konut değerini düşürebilir. Düzenli bakım ve servis kayıtları apartman ve site yönetimleri için güven verir.

## Ne Sıklıkla Bakım Yapılmalı?

Genel su tesisatı kontrolü yılda bir kez önerilir. Kombi ve petek bakımı ısıtma sezonu öncesi, pimaş yıkama ise kullanım yoğunluğuna göre 1-2 yılda bir veya tıkanıklık tekrarında yapılmalıdır.

## Kağıthane Apartmanları İçin Bakım Notu

Kağıthane'de eski bina stoku ile yeni dönüşüm projeleri bir arada bulunduğu için bakım ihtiyacı yapıya göre değişir. Çeliktepe merkez operasyonumuzla 19 mahallede keşif, yazılı teklif ve garantili işçilik standardını koruyoruz.
    `.trim(),
    category: "Genel Bakım",
    publishedAt: "2025-03-01T10:00:00.000Z",
    updatedAt: "2026-07-09T09:00:00.000Z",
    readingTime: 5,
    seoTitle: "Periyodik Tesisat Bakımı Neden Önemli? | 724 Tesisatçı",
    seoDescription:
      "Periyodik tesisat bakımı; su kaçağı, pimaş, kombi ve petek sorunlarını erken fark etmeye yardımcı olur. Kağıthane bakım notları.",
    canonicalPath: "/blog/periyodik-tesisat-bakimi",
    relatedServices: ["su-tesisati", "pimas-yikama", "petek-temizleme"],
    faq: [
      {
        question: "Tesisat bakımı ne sıklıkla yapılmalı?",
        answer:
          "Genel tesisat kontrolü yılda bir kez önerilir. Kombi bakımı ısıtma sezonu öncesi, pimaş yıkama ise ihtiyaca göre 1-2 yılda bir yapılmalıdır.",
        category: "bakim",
      },
      {
        question: "Periyodik bakım maliyeti düşürür mü?",
        answer:
          "Evet. Küçük müdahaleler büyük tadilat ve su faturası artışından çoğu zaman daha ekonomiktir. Erken tespit uzun vadede tasarruf sağlar.",
        category: "bakim",
      },
      {
        question: "Pimaş yıkama neden gereklidir?",
        answer:
          "Pimaş hatlarındaki yağ ve tortu birikimi tıkanıklık ve koku yapabilir. Periyodik yıkama boru ömrünü uzatır ve hijyene katkı sağlar.",
        category: "bakim",
      },
    ],
    status: "published",
    image: blogImages["periyodik-tesisat-bakimi"],
    imageAlt: "Periyodik tesisat bakımında pimaş ve su hattı kontrolü",
    localFocus: "Kağıthane",
    editorialReviewedBy,
    editorialReviewedAt,
    editorialNote:
      "Bakım sıklığı ve fayda bölümleri eski bina, yeni proje ve apartman kullanımı dikkate alınarak düzenlendi.",
    relatedLinks: [
      { href: "/kagithane-pimas-acma", label: "Kağıthane pimaş açma" },
      { href: "/kagithane-petek-temizleme", label: "Kağıthane petek temizleme" },
      ...kagithaneCoreLinks,
    ],
  },
  {
    id: "5",
    title: "Kağıthane’de Su Kaçağı Nasıl Anlaşılır? | Kontrol Rehberi",
    slug: "kagithane-su-kacagi-tespiti",
    excerpt:
      "Kağıthane’de su kaçağı belirtilerini nasıl ayırt edersiniz? Sayaç kontrolü, nem izleri ve ne zaman servis çağırılacağına dair pratik rehber.",
    content: `
## Kağıthane’de Su Kaçağı Belirtilerini Ayırt Etmek

Su kaçağı şüphesinde önce görünen belirtiler ve sayaç hareketi kontrol edilir. Musluklar kapalıyken sayaç dönüyorsa, duvar veya zemin altında aktif kaçak olasılığı artar.

## Kırmadan Tespit Süreci

Termal kamera yüzey sıcaklık farklarını, akustik dinleme cihazı su sesini, nem ölçer ise duvar ve zemin nemini değerlendirir. Bu veriler birlikte yorumlanır; tek bir cihaz sonucuyla gereksiz kırım kararı verilmez.

## Kağıthane Mahallelerinde Operasyon

Çeliktepe merkezli ekiplerimiz Çağlayan, Gültepe, Seyrantepe, Talatpaşa, Emniyet Evleri ve diğer Kağıthane mahallelerine 7/24 servis yönlendirir. Merkeze yakın yapı sayesinde acil sızıntı çağrılarında hızlı keşif planlanır.

## Onarım ve Teklif Aşaması

Kaçak noktası belirlendikten sonra işlem kapsamı yazılı teklif ile paylaşılır. Onay olmadan onarıma başlanmaz; kullanılan malzeme ve işçilik bilgisi servis formuna işlenir.

## Ne Zaman Beklememek Gerekir?

Komşu daireye su sızması, elektrik hattına yakın nem, tavanda damlama veya hızla artan fatura varsa beklemek hasarı büyütebilir. Bu durumlarda hattın kapatılması ve servis çağrısı önceliklidir.
    `.trim(),
    category: "Kağıthane Rehberi",
    publishedAt: "2026-07-09T08:30:00.000Z",
    updatedAt: "2026-07-09T09:00:00.000Z",
    readingTime: 4,
    seoTitle: "Kağıthane’de Su Kaçağı Nasıl Anlaşılır? | Kontrol Rehberi",
    seoDescription:
      "Kağıthane’de su kaçağı nasıl anlaşılır? Sayaç kontrolü, nem ve kabarma belirtileri, ne zaman cihazlı kontrol gerektiği hakkında rehber.",
    canonicalPath: "/blog/kagithane-su-kacagi-tespiti",
    relatedServices: ["su-kacagi-tespit-ve-onarim", "su-tesisati"],
    faq: [
      {
        question: "Kağıthane'de su kaçağı tespiti kırmadan yapılır mı?",
        answer:
          "Çoğu gizli kaçakta termal kamera, akustik dinleme ve nem ölçerle nokta daraltılır. Kırım gerekiyorsa yalnızca gerekli alan için teklif verilir.",
        category: "kagithane",
      },
      {
        question: "Kağıthane su kaçağı servisinde fiyat nasıl belirlenir?",
        answer:
          "Keşif ve cihazlı kontrol sonrası işlem kapsamı netleşir. Malzeme ve işçilik kalemleri yazılı teklif olarak paylaşılır.",
        category: "fiyatlandirma",
      },
    ],
    status: "published",
    image: blogImages["kagithane-su-kacagi-tespiti"],
    imageAlt: "Kağıthane'de termal kamera ile su kaçağı tespiti",
    localFocus: "Kağıthane",
    editorialReviewedBy,
    editorialReviewedAt,
    editorialNote:
      "Yerel tespit süreci Kağıthane merkez operasyon ve cihazlı kontrol adımlarıyla uyumlu yazıldı.",
    relatedLinks: [
      { href: "/kagithane-su-kacagi-tespiti", label: "Kağıthane kırmadan su kaçağı tespiti" },
      ...kagithaneCoreLinks,
    ],
  },
  {
    id: "6",
    title: "Kağıthane’de Gider Tıkanıklığı Neden Olur? | Pratik Rehber",
    slug: "kagithane-tikaniklik-acma",
    excerpt:
      "Kağıthane’de lavabo, tuvalet ve ana gider tıkanıklığı neden oluşur? Tekil hat ile ortak hat farkı, koku ve geri tepme belirtileri.",
    content: `
## Gider Tıkanıklığı Neden Oluşur?

Tek bir lavaboda yavaş akış varsa sorun çoğu zaman sifon veya yakın gider hattındadır. Birden fazla gider aynı anda etkileniyorsa ana hat ya da ortak pimaş hattı kontrol edilmelidir.

## Kameralı Kontrol Ne Sağlar?

Kamera, boru içindeki yağ birikimi, yabancı cisim, kırık veya eğim sorununu görmeye yardımcı olur. Böylece aynı hattın kısa sürede tekrar tıkanmasına neden olan asıl problem belirlenir.

## Robotik Açma ve Pimaş Yıkama

Yumuşak birikimlerde robotik cihazla açma yeterli olabilir. Yoğun yağ, tortu ve ana hat birikimlerinde pimaş yıkama daha kalıcı sonuç verir.

## Kağıthane'de Sık Görülen Durumlar

Yoğun konut kullanımı olan mahallelerde mutfak gideri, apartman ana pimaş hattı ve bodrum geri tepmesi çağrıları öne çıkar. Çeliktepe merkezli ekibimiz Kağıthane'nin 19 mahallesine rota planı yapar.

## Acil Müdahale Gerektiren Belirtiler

Tuvaletten geri tepme, kötü koku, bodrumda taşma veya apartmanda birden fazla dairenin etkilenmesi acil müdahale gerektirir. Bu durumlarda kimyasal dökmek yerine hattı profesyonel ekipmanla kontrol etmek daha güvenlidir.
    `.trim(),
    category: "Kağıthane Rehberi",
    publishedAt: "2026-07-08T10:00:00.000Z",
    updatedAt: "2026-07-09T09:00:00.000Z",
    readingTime: 4,
    seoTitle: "Kağıthane’de Gider Tıkanıklığı Neden Olur? | Pratik Rehber",
    seoDescription:
      "Kağıthane’de gider tıkanıklığı neden olur? Lavabo, tuvalet ve ana hat belirtileri, koku, geri tepme ve ne zaman kamera kontrolü gerekir.",
    canonicalPath: "/blog/kagithane-tikaniklik-acma",
    relatedServices: ["tikaniklik-acma", "pimas-yikama", "kamerali-tesisat-goruntuleme-ve-onarim"],
    faq: [
      {
        question: "Kağıthane'de ana gider tıkanıklığı nasıl anlaşılır?",
        answer:
          "Birden fazla gider aynı anda yavaşlıyor, koku veya geri tepme oluşuyorsa ana gider hattı kontrol edilmelidir.",
        category: "kagithane",
      },
      {
        question: "Tıkanıklık açıldıktan sonra neden tekrar eder?",
        answer:
          "Boruda eğim sorunu, kırık, yoğun yağ tabakası veya ortak hat problemi varsa tıkanıklık tekrar edebilir. Kamera kontrolü bu nedeni görmeye yardımcı olur.",
        category: "tikaniklik",
      },
    ],
    status: "published",
    image: blogImages["kagithane-tikaniklik-acma"],
    imageAlt: "Kağıthane'de kameralı gider hattı tıkanıklık kontrolü",
    localFocus: "Kağıthane",
    editorialReviewedBy,
    editorialReviewedAt,
    editorialNote:
      "İçerik, apartman ana hattı ve tekil lavabo tıkanıklığı ayrımını netleştirmek için hazırlandı.",
    relatedLinks: [
      { href: "/kagithane-tikaniklik-acma", label: "Kağıthane robotik tıkanıklık açma" },
      { href: "/kagithane-pimas-acma", label: "Kağıthane pimaş açma" },
      ...kagithaneCoreLinks,
    ],
  },
  {
    id: "7",
    title: "Kağıthane’de Kombi Basıncı ve Petek Isınması: Evde Kontrol Rehberi",
    slug: "kagithane-kombi-petek-sorunlari",
    excerpt:
      "Kağıthane’de kombi basıncı neden düşer, petekler neden ısınmaz? Evde güvenli kontroller ve ne zaman tesisat servisi gerektiği.",
    content: `
## Kış Sezonunda En Sık Bildirilen Sorunlar

Kombi basıncının düşmesi, peteklerin altının soğuk kalması, bazı odaların ısınmaması ve tesisatta hava oluşması kış aylarında sık görülür. Sorunun kaynağı kombi, petek, vana veya tesisat hattı olabilir.

## Basınç Kaybı ve Kaçak İlişkisi

Basınç bir kez düştüyse kontrollü su ekleme yeterli olabilir. Basınç sık sık düşüyorsa petek bağlantıları, havlupan, kalorifer hattı ve gizli kaçak ihtimali birlikte değerlendirilmelidir.

## Petek Temizliği Ne Zaman Gerekir?

Peteklerin alt kısmı soğuk, üst kısmı sıcak kalıyorsa çamurlaşma ve tortu birikimi olabilir. Makineli petek temizliği, tesisatın ısı transferini iyileştirmeye yardımcı olur.

## Kağıthane'de Servis Planı

Çeliktepe merkez operasyonumuz sayesinde Kağıthane mahallelerinde kombi, petek ve kalorifer hattı çağrılarını aynı rota içinde değerlendirebiliyoruz. Site ve apartman yönetimleri için planlı bakım da yapılabilir.

## Güvenlik Sınırları

Gaz hattı, kombinin kapalı gövdesi veya elektrikli parçalar kullanıcı tarafından açılmamalıdır. Evde yapılabilecek kontroller basınç göstergesi, görünen vana sızıntısı ve petek hava durumuyla sınırlı kalmalıdır.
    `.trim(),
    category: "Kağıthane Rehberi",
    publishedAt: "2026-07-07T10:00:00.000Z",
    updatedAt: "2026-07-09T09:00:00.000Z",
    readingTime: 4,
    seoTitle: "Kağıthane’de Kombi Basıncı ve Petek Isınması | Evde Kontrol Rehberi",
    seoDescription:
      "Kağıthane’de kombi basınç düşmesi ve petek ısınmama nedenleri. Evde güvenli kontroller, tesisat kaçağı şüphesi ve servis zamanı.",
    canonicalPath: "/blog/kagithane-kombi-petek-sorunlari",
    relatedServices: ["kombi-servisi-ve-tesisati", "petek-temizleme", "kalorifer-tesisati"],
    faq: [
      {
        question: "Peteklerin altı neden soğuk kalır?",
        answer:
          "Tortu birikimi, hava, vana ayarı veya tesisat dolaşım sorunu peteklerin altının soğuk kalmasına neden olabilir.",
        category: "petek",
      },
      {
        question: "Kombi basıncı sürekli düşüyorsa peteklerden olabilir mi?",
        answer:
          "Evet. Petek bağlantıları, havlupan, vana ve kalorifer hattındaki küçük sızıntılar basıncı düşürebilir.",
        category: "kombi",
      },
    ],
    status: "published",
    image: blogImages["kagithane-kombi-petek-sorunlari"],
    imageAlt: "Kağıthane'de kombi basıncı ve petek ısınma kontrolü",
    localFocus: "Kağıthane",
    editorialReviewedBy,
    editorialReviewedAt,
    editorialNote:
      "Kombi ve petek kontrolleri kullanıcı güvenliği sınırlarıyla birlikte yazıldı.",
    relatedLinks: [
      { href: "/kagithane-kombi-servisi", label: "Kağıthane kombi tesisat kontrolü" },
      { href: "/kagithane-petek-temizleme", label: "Kağıthane petek temizleme" },
      ...kagithaneCoreLinks,
    ],
  },
  {
    id: "8",
    title: "Çeliktepe Merkez Operasyon: Kağıthane Mahallelerine Servis Rehberi",
    slug: "celiktepe-merkez-operasyon-mahalle-servisi",
    excerpt:
      "Çeliktepe merkez operasyonundan Kağıthane'nin 19 mahallesine 7/24 tesisat yönlendirmesi, rota planı ve hizmet kapsamı.",
    content: `
## Merkez Operasyon Neden Önemli?

Yerel tesisat servisinde rota, ekipman ve hızlı karar verme önemlidir. Çeliktepe merkez operasyonumuz Kağıthane içindeki çağrılara daha kısa rota planı yapmamıza yardımcı olur.

## Hangi Mahallelere Hizmet Veriliyor?

Kağıthane'nin 19 mahallesine su kaçağı tespiti, tıkanıklık açma, petek temizleme, kombi servisi, pimaş yıkama ve genel su tesisatı hizmeti veriyoruz. Çağlayan, Gültepe, Seyrantepe, Talatpaşa, Emniyet Evleri ve Çeliktepe öncelikli rota içindedir.

## Acil ve Planlı İş Ayrımı

Su baskını, geri tepme ve aktif kaçak acil çağrı olarak değerlendirilir. Petek temizleme, pimaş yıkama ve tesisat yenileme gibi işlemler ise planlı randevu ile daha verimli ilerler.

## Yazılı Teklif ve Garanti Standardı

Keşif sonrasında işlem kapsamı netleştirilir, malzeme ve işçilik kalemleri yazılı teklif olarak sunulur. Tamamlanan işlerde servis formu ve işçilik garantisi standardı korunur.

## Blog İçerikleri Nasıl Yardımcı Olur?

Blog rehberleri, kullanıcıların sorunu tanımasına ve doğru servise yönelmesine yardımcı olur. Nihai hedef, Kağıthane ana hizmet sayfası ve servis talebi üzerinden hızlı, doğru ve güvenilir dönüşüm sağlamaktır.
    `.trim(),
    category: "Kağıthane Rehberi",
    publishedAt: "2026-07-06T10:00:00.000Z",
    updatedAt: "2026-07-09T09:00:00.000Z",
    readingTime: 4,
    seoTitle: "Çeliktepe Merkez Operasyon | Kağıthane Mahalle Servis Rehberi",
    seoDescription:
      "Çeliktepe merkezden Kağıthane’nin 19 mahallesine tesisat yönlendirmesi nasıl planlanır? Rota, acil/planlı iş ayrımı ve servis kapsamı.",
    canonicalPath: "/blog/celiktepe-merkez-operasyon-mahalle-servisi",
    relatedServices: ["su-tesisati", "tikaniklik-acma", "su-kacagi-tespit-ve-onarim"],
    faq: [
      {
        question: "Çeliktepe merkez operasyon hangi avantajı sağlar?",
        answer:
          "Kağıthane içindeki mahallelere daha kısa rota planı, ekip yönlendirme ve acil çağrı önceliği sağlar.",
        category: "kagithane",
      },
      {
        question: "Kağıthane'nin tüm mahallelerine servis var mı?",
        answer:
          "Evet. Kağıthane'nin 19 mahallesine 7/24 tesisat, su kaçağı, tıkanıklık, kombi ve petek hizmeti verilir.",
        category: "kagithane",
      },
    ],
    status: "published",
    image: blogImages["celiktepe-merkez-operasyon-mahalle-servisi"],
    imageAlt: "Çeliktepe merkezden Kağıthane mahallelerine tesisat servis planı",
    localFocus: "Kağıthane",
    editorialReviewedBy,
    editorialReviewedAt,
    editorialNote:
      "İçerik, Kağıthane yerel dönüşüm hedefi için ana hizmet sayfasını destekleyen merkez operasyon rehberi olarak hazırlandı.",
    relatedLinks: [
      ...kagithaneCoreLinks,
      { href: "/kagithane-su-kacagi-tespiti", label: "Kağıthane su kaçağı tespiti" },
      { href: "/kagithane-tikaniklik-acma", label: "Kağıthane tıkanıklık açma" },
      { href: "/hizmetler", label: "Tüm tesisat hizmetleri" },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPublishedBlogPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.status === "published");
}
