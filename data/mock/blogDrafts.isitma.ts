import type { BlogPost } from "@/types";

export const draftBlogPostsIsitma: BlogPost[] = [
  {
    id: "draft-kombi-basinc",
    title: "Kombi Basıncı Neden Sürekli Düşer?",
    slug: "kombi-basinci-neden-surekli-duser",
    excerpt:
      "Kombi basıncının sürekli düşmesi tesisat kaçağı, genleşme tankı veya emniyet ventili gibi nedenlerden kaynaklanabilir. Güvenli gözlem rehberi.",
    content: `
## Basınç düşmesi neyi anlatır?

Kombi panelindeki basınç göstergesi (manometre), kapalı devredeki suyun basıncını gösterir. Bu değerin zaman zaman hafifçe dalgalanması beklenen bir durumdur; ortam sıcaklığı, sistemin ısınıp genleşmesi ve mevsimsel farklar göstergeyi bir miktar oynatabilir. Asıl dikkat çekici olan, göstergenin kısa aralıklarla tekrar tekrar düşük seviyeye inmesi ve sistemin sürekli su ile doldurulmak zorunda kalınmasıdır. Ara sıra yapılan tek seferlik doldurma ile günler veya haftalar içinde tekrarlayan düşüş birbirinden farklı değerlendirilir; ikincisi kapalı devrede bir su kaybı veya basınç dengeleme sorunu ihtimalini güçlendirir. Kesin neden, panelden okunan tek bir sayı ile söylenemez; belirtilerin birlikte değerlendirilmesi gerekir.

## Basınç aralığı neden tek bir sayı ile anlatılmaz?

Birçok yerde “normal basınç şu değerdir” şeklinde tek bir rakam paylaşıldığı görülür. Oysa doğru referans her zaman cihazın kendi kullanım kılavuzu ve etiketidir. Basınç aralığı; kombi markasına, modeline, sistemin kat yüksekliğine ve tesisatın büyüklüğüne göre değişebilir. Bu yazıda bilinçli olarak tek bir “standart” değer verilmemektedir; kesin referans için cihazın kılavuzuna bakılmalı, belirsizlik durumunda yetkili servisten teyit alınmalıdır.

## Radyatör ve vana bağlantılarında kaçak

Peteğin altında nem, vana gövdesinde veya dip bağlantılarında ıslaklık, contadan sızma izi ya da yerde küçük bir birikinti görülmesi kaçak ihtimalini akla getirir. Bu tür kaçaklar bazen çok yavaş bir damlama şeklindedir ve günlük gözle kolayca fark edilmeyebilir; buna rağmen zaman içinde toplam su kaybını artırarak basıncı düşürebilir. Petek vanalarının, üç yollu vanaların ve dönüş/gidiş bağlantı noktalarının periyodik olarak gözle kontrol edilmesi, sorunu erken fark etmeye yardımcı olur.

## Tesisat borusu kaçağı

Duvar içinden veya döşeme altından geçen tesisat hatlarındaki kaçaklar çoğu zaman gözle görülmeden basınç kaybı yaratabilir. Alt kata sızıntı, lokal bir zemin ısınması ya da parke veya laminat üzerinde hafif bir şişme, bu ihtimali destekleyen ek belirtiler olabilir. Ancak basıncın düşmesi tek başına “kesinlikle bir boru kaçağı var” anlamına gelmez; aynı belirti kombinin alt bağlantılarından, genleşme tankından veya emniyet ventilinden de kaynaklanabilir. Bu nedenle yalnızca kombiye tekrar tekrar su doldurarak ilerlemek altta yatan nedeni gizler ve gerçek kaynağın tespiti gecikir.

## Kombinin alt bağlantı noktaları

Kombinin alt kısmındaki giriş-çıkış rakorları, dolum musluğu ve tahliye bağlantıları zamanla sızdırmaya başlayabilir. Bu bölge cihazın gövdesine yakın olduğu için kullanıcı tarafından fark edilmesi güçtür; sızıntı genelde cihazın altında biriken hafif bir nemle ya da rakor çevresindeki pas izleriyle ortaya çıkar. Bu bağlantılardaki kontrol, sıkma veya conta değişimi işlemleri teknik bilgi ve doğru ekipman gerektirir; kullanıcı tarafından denenmesi önerilmez.

## Kombi iç bileşenleri

Eşanjör, dahili hatlar, contalar veya sirkülasyon pompası salmastırası da su kaybettirebilir. Bu tür kontroller kombinin kapağı açılarak yapılır ve elektrik ile gaz bağlantılarına yakın çalışılır; bu yüzden kullanıcının kendi başına kapak açıp iç aksama müdahale etmesi güvenli değildir. İç bileşen şüphesi olduğunda değerlendirme yetkili teknik servise bırakılmalıdır.

## Genleşme tankı

Genleşme tankındaki hava yastığı zamanla zayıflayabilir. Hava tarafı zayıfladığında sistem suyunun genleşmesi düzgün karşılanamaz ve basınç ya beklenenden hızlı düşer ya da ısınma sırasında aşırı yükselir. Tankın hava basıncının ölçülmesi ve gerekiyorsa ayarlanması teknik ölçüm gerektiren bir işlemdir; kullanıcının kendi başına tankın valfiyle oynaması veya değeri tahmini olarak ayarlaması önerilmez. Bu değerlendirme yetkili serviste yapılmalıdır.

## Emniyet ventili

Emniyet ventilinden su damlaması veya sürekli akış, sistemden basınç tahliye edildiğinin işaretidir. Bunun nedeni yüksek basınç darbesi, genleşme tankı arızası ya da ventilin kendisinin arızalanmış olması olabilir. Ventili bantla kapatmak, tıkamak veya sökmeye çalışmak ciddi güvenlik riski taşır; bu bir emniyet elemanıdır ve tahliye işlevinin kasıtlı olarak engellenmemesi gerekir.

## Hava alma sonrası basınç değişimi

Peteklerden hava alındıktan hemen sonra basınçta küçük bir düşüş görülmesi beklenen bir durumdur; hava tahliye edilirken sistemden az miktarda su da çıkabilir. Bu tek seferlik ve sınırlı düşüş ile günler ya da haftalar içinde tekrarlayan, kalıcı düşüş ayrı değerlendirilmelidir. Hava alma sonrası bir kez normale dönen ve orada kalan basınç genelde tek başına endişe kaynağı sayılmaz.

## Gösterge veya sensör şüphesi

Nadiren basınç göstergesi veya sensör hatalı okuma yapabilir. Bu ihtimal; ıslaklık, ses veya ısınma bozukluğu gibi başka bir belirti yokken akla gelebilir. Yine de bu bir varsayımdır ve doğrulanması teknik kontrol gerektirir; “gösterge yanlış okuyordur” diyerek konuyu kapatmak risklidir.

## Basınç düşüşünü hızlandıran faktörler

Kış aylarındaki sık ısınma-soğuma döngüleri, sistemin sık hava alması, yakın zamanda yapılan bir tesisat değişikliği veya tadilat, mevcut küçük bir sızıntının daha görünür hale gelmesine katkıda bulunabilir. Bu faktörler kaçağın kendisini yaratmaz; yalnızca var olan bir sorunun fark edilme hızını etkiler.

## Evde güvenli gözlemler

- Petek ve vana altlarını, ayrıca kombinin alt kısmını nem için düzenli kontrol edin
- Basınç değerini ve doldurma sıklığını tarih belirterek not edin
- Alt kata sızıntı veya ıslak zemin varsa durumu fotoğraflayın
- Kombi kapağını açmayın, elektrik ve gaz bağlantılarına dokunmayın
- Emniyet ventilini iptal etmeyin veya tıkamayın
- Genleşme tankının hava valfiyle kendiniz oynamayın

## Ne zaman profesyonel destek gerekir?

Basıncı sık sık doldurmak zorunda kalıyorsanız, doldurma sonrası birkaç gün içinde tekrar düşüyorsa veya ıslaklık gibi ek belirtiler varsa [kombi servisi](/hizmetler/kombi-servisi-ve-tesisati) ve gerektiğinde [kalorifer tesisatı](/hizmetler/kalorifer-tesisati) kontrolü birlikte planlanmalıdır. Amaç, su kaybının cihazdan mı yoksa tesisat hattından mı geldiğini basınç testi ve gözle muayene ile ayırmaktır. Petek altında dengesiz ısınma da eşlik ediyorsa bu belirti [peteğin altı soğuk üstü sıcak](/blog/petegin-alti-soguk-ustu-sicaksa-ne-yapilmali) yazısındaki ayrımla birlikte değerlendirilebilir. Basınç düşüşüne hata kodu da eşlik ediyorsa [kombi arızası ile tesisat arızası ayrımı](/blog/kombi-arizasi-ile-tesisat-arizasi-nasil-ayirt-edilir) konusuna bakılabilir. Kağıthane bölgesinde benzer belirtiler için [Kağıthane kombi basıncı düşüyor](/kagithane-kombi-basinci-dusuyor) ve [Kağıthane kombi ve petek sorunları](/blog/kagithane-kombi-petek-sorunlari) rehberleri de referans alınabilir.

## Sonuç

Sürekli basınç düşmesi “biraz su ekleyeyim” diyerek geçiştirilecek bir sinyal değildir. Görünür kaçak, gizli tesisat hattı, kombinin alt bağlantıları, genleşme tankı veya emniyet ventili ayrı ayrı düşünülmeli; hiçbirinde riskli kullanıcı müdahalesine başvurulmamalıdır. Doğru yaklaşım, gözlemleri kaydetmek ve nedeni ölçümle ayıracak profesyonel değerlendirmeyi planlamaktır.
    `.trim(),
    category: "Isıtma",
    publishedAt: "2026-08-26T09:15:00.000Z",
    updatedAt: "2026-08-26T09:15:00.000Z",
    readingTime: 7,
    seoTitle: "Kombi Basıncı Neden Sürekli Düşer?",
    seoDescription:
      "Kombi basıncı sürekli düşüyorsa olası nedenler: petek/vana kaçağı, tesisat hattı, alt bağlantılar, genleşme tankı ve emniyet ventili.",
    canonicalPath: "/blog/kombi-basinci-neden-surekli-duser",
    relatedServices: ["kombi-servisi-ve-tesisati", "kalorifer-tesisati"],
    relatedServiceSlugs: ["kombi-servisi-ve-tesisati", "kalorifer-tesisati"],
    relatedArticleSlugs: [
      "petegin-alti-soguk-ustu-sicaksa-ne-yapilmali",
      "kombi-arizasi-ile-tesisat-arizasi-nasil-ayirt-edilir",
    ],
    cluster: "isitma",
    searchIntent: "informational",
    primaryKeyword: "kombi basıncı neden sürekli düşer",
    secondaryKeywords: [
      "kombi su basıncı düşüyor",
      "kombi sürekli su eksiltiyor",
      "kalorifer tesisatı kaçak belirtileri",
    ],
    needsTechnicalReview: false,
    status: "published",
    reviewerId: "mucahit-korkmaz",
    image: "/images/blog-kombi-basinci.webp",
    imageAlt: "Kombi basınç göstergesinde sürekli düşen basınç kontrolü",
    relatedLinks: [
      { href: "/kagithane-kombi-basinci-dusuyor", label: "Kağıthane kombi basıncı düşüyor" },
      { href: "/kagithane-kombi-servisi", label: "Kağıthane kombi servisi" },
      { href: "/", label: "Kağıthane tesisatçı (ana sayfa)" },
      { href: "/hizmet-bolgeleri/kagithane", label: "Kağıthane tesisat hizmet bölgeleri" },
      { href: "/iletisim", label: "Servis talebi oluştur" },
    ],
    technicalReview: {
      items: [
        {
          topic: "Basınç aralığı ifadeleri",
          status: "verified",
          note: "Tek bir basınç değeri verilmediği ve kılavuz referansı vurgusu teknik incelemede uygun bulundu.",
        },
        {
          topic: "Genleşme tankı ve kaçak ayrımı",
          status: "verified",
          note: "Genleşme tankı ile hat kaynaklı kayıp ayrımı teknik incelemede uygun bulundu.",
        },
        {
          topic: "Kombi alt bağlantı rakorları",
          status: "verified",
          note: "Alt bağlantı senaryosu kullanıcı müdahalesine yönlendirmediği doğrulandı.",
        },
        {
          topic: "Emniyet ventili güvenlik uyarısı",
          status: "verified",
          note: "Ventile müdahale edilmemesi uyarısı teknik incelemede yeterli bulundu.",
        },
      ],
    },
    faq: [
      {
        question: "Kombiye sürekli su eklemek zararlı mıdır?",
        answer:
          "Sürekli doldurma altta yatan kaybı maskeleyebilir ve tesisata oksijenli taze su taşıyarak korozyon riskini artırabilir. Neden bulunmadan bu bir alışkanlık haline getirilmemelidir.",
        category: "isitma",
      },
      {
        question: "Basınç sabah düşük, öğlen normalse ne olur?",
        answer:
          "Sıcaklık ve genleşmeyle basınç bir miktar değişebilir. Ancak düzenli olarak minimum seviyenin altına iniyorsa kayıp veya dengeleme sorunu araştırılmalıdır.",
        category: "isitma",
      },
      {
        question: "Kendim genleşme tankı ayarı yapabilir miyim?",
        answer:
          "Tank ve dahili komponent ayarları kullanıcıya önerilmez. Yanlış müdahale gaz/elektrik riski yaratabilir; bu değerlendirme yetkili teknik servis alanında bırakılmalıdır.",
        category: "isitma",
      },
      {
        question: "Kombinin altında hafif nem var ama gözle kaçak görünmüyor, ne yapmalıyım?",
        answer:
          "Kombinin alt bağlantı rakorlarından kaynaklanan yavaş sızıntılar gözle her zaman net görünmeyebilir. Nemi fotoğraflayıp tarihlendirin ve kapağı kendiniz açmadan yetkili servise bildirin.",
        category: "isitma",
      },
      {
        question: "Basınç göstergesi bozuk olabilir mi?",
        answer:
          "Nadiren olabilir, ancak bu bir varsayım olarak bırakılmamalıdır. Başka belirti yoksa dahi gösterge doğruluğu teknik kontrolle teyit edilmelidir.",
        category: "isitma",
      },
    ],
  },
  {
    id: "draft-petek-alti",
    title: "Peteğin Altı Soğuk, Üstü Sıcaksa Ne Yapılmalı?",
    slug: "petegin-alti-soguk-ustu-sicaksa-ne-yapilmali",
    excerpt:
      "Petek altı soğuk üstü sıcak olduğunda tortu, düşük debi veya dengeleme sorunu olabilir. Her durumda petek temizliği gerekmez; güvenli adımlar.",
    content: `
## Bu belirti neyi düşündürür?

Radyatörün üstü ısınıp altı serin kalıyorsa dolaşım veya iç birikinti şüphesi doğar. Hava genellikle sistemde üstte toplanır; bu yüzden “altı soğuk, üstü sıcak” tablosu, klasik hava alma tablosundan (genelde üst kısmın soğuk kalmasıyla anılır) farklı yorumlanır. Yine de tek bir belirtiyle kesin teşhis konmaz; aynı görüntüyü birkaç farklı neden üretebilir. Belirtinin ne zamandır sürdüğü, tüm mevsim boyunca mı yoksa yeni mi ortaya çıktığı da değerlendirmeye katkı sağlar; yeni ortaya çıkan bir belirti ile yıllardır süregelen bir alışkanlık farklı önceliklerle ele alınabilir.

## Su kalitesi ve tortu oluşumunun arka planı

Tortu birikimi genellikle tek bir nedenle değil, zaman içinde birikerek oluşur. Şebeke suyunun sertliği, sisteme sık su eklenmesi, farklı metal aksamın (çelik petek, bakır boru, pirinç bağlantı) bir arada kullanılması ve yıllar içinde biriken kireç/pas parçacıkları bu sürece katkıda bulunabilir. Bu nedenle tortu şüphesi değerlendirilirken yalnızca "petek eskidiği için" gibi tek bir açıklamaya değil, sistemin genel yaşına ve bakım geçmişine de bakılır.

## Neden hava alma ile karıştırılabilir?

Kullanıcılar sıkça “petek ısınmıyorsa hava vardır” genellemesine başvurur. Oysa hava genelde peteğin en üst noktasında birikir ve üst kısmın soğuk kalmasına yol açar. Alt kısmın soğuk olması farklı bir mekanizmayı işaret eder: sıcak su peteğe girip dolaşamadan geri dönüyor ya da alt bölgede bir engel/birikinti var demektir. Bu ayrım önemlidir çünkü sürekli hava alma denemesi, asıl nedeni gizleyip zaman kaybettirebilir.

## Tortu ve çamur birikimi

Sistem suyundaki tortu zamanla peteğin alt bölgesine çökebilir ve o kısımda ısı transferini zayıflatabilir. Bu durumda [petek temizleme](/hizmetler/petek-temizleme) aday yöntemlerden biridir; ancak bu, her “altı soğuk” belirtisinin otomatik olarak temizlik gerektirdiği anlamına gelmez. Tortu şüphesi, diğer olası nedenler (vana, debi, dengeleme) gözden geçirildikten sonra daha güçlü bir aday haline gelir.

## Düşük debi ve pislik tutucu daralması

Vananın kısık bırakılmış olması, hat üzerindeki pislik tutucunun tıkanması veya boru çapının o noktada daralması da yetersiz debiye ve dengesiz ısınmaya yol açabilir. Debi düşükse su peteğin tamamını dolduramadan geri dönüş yapabilir; bu da alt bölgenin soğuk kalmasına neden olabilir. Öncelikli kontrol noktası, vana konumlarının tam açık olup olmadığıdır.

## Dengeleme problemi

Çok petekli sistemlerde bazı radyatörler baskın şekilde ısınırken bazıları zayıf kalabilir. Bu durumda hattaki su, direnci düşük olan peteklere yönelir ve diğer peteklerde debi azalır. Alt-üst ısınma farkı, tek bir peteğin sorunundan çok, sistem genelindeki dengeleme ihtiyacını da işaret edebilir. Dengeleme ihtiyacı genellikle zamanla ortaya çıkar; yeni bir petek eklenmesi, tesisatta yapılan bir değişiklik veya vanaların yıllar içinde farklı konumlara getirilmiş olması dengeyi bozabilir. Bu nedenle dengeleme, tek seferlik bir ayar değil, sistemin genel davranışına bakılarak yapılan bir değerlendirmedir.

## Vana problemi

Tıkalı, yarı kapanmış veya arızalı dönüş/gidiş vanası su akışını bozar. Termostatik vanalar da mekanik takılma veya kısmi kapanma nedeniyle beklenenden az debi geçirebilir. Vana konumunun gözle kontrolü, ilk ve en güvenli adımlardan biridir.

## Pompa ve sistem dolaşımı

Sirkülasyon pompasının debisi yetersiz kalıyorsa veya tesisat hattının genel direnci yüksekse ısınma sistemin genelinde düzensizleşebilir; bu, yalnızca bir petek temizliğiyle çözülecek bir durum olmayabilir. Pompa hızının düşük ayarda kalması, pompa yaşının ilerlemiş olması veya hat üzerinde birden fazla daralma noktası bulunması benzer bir tabloya yol açabilir. Pompa performansına dair ayarlar ve kontroller kullanıcı tarafından denenmemeli, teknik değerlendirmeye bırakılmalıdır; pompanın sökülmesi veya sistemin kullanıcı tarafından boşaltılması güvenli değildir.

## Bağlantı tipi ve tasarım

Nadiren ters bağlantı, uygun olmayan boru çapı veya hat tasarımı lokal bir soğuk bölge üretebilir. Tek borulu (seri bağlantılı) sistemlerde sondaki petekler, hattın başındaki peteklere göre daha zayıf ısınabilir; bu durum bir arıza değil, tasarımın doğal bir sonucu olabilir. Çift borulu sistemlerde ise böyle bir sıralı zayıflama beklenmez, bu yüzden dengesizlik daha çok yerel bir nedene işaret eder. Montaj geçmişi bilinmiyorsa veya yakın zamanda bir tesisat değişikliği yapıldıysa bu ihtimaller birlikte değerlendirmeye dahil edilir.

## Tek petek mi, tüm sistem mi etkileniyor?

Belirtinin yalnızca bir peteği mi yoksa evdeki çoğu peteği mi etkilediği, olası nedeni daraltmada önemli bir ayrımdır. Tek bir petekte görülen “altı soğuk” tablosu, o peteğin vanası, bağlantısı veya yerel birikintisiyle daha çok ilişkilendirilir. Aynı belirti evin çoğu radyatöründe görülüyorsa, dengeleme, pompa veya sistem geneli tortu yayılımı gibi daha kapsamlı nedenler öne çıkar.

## Evde güvenli kontrol adımları

- Vana ve termostatik vana konumlarının tam açık olduğunu doğrulayın
- Belirtinin tek petekte mi yoksa tüm peteklerde mi olduğunu not edin
- Kombi panelinde bir hata kodu görünüp görünmediğine bakın
- Oda termostatının doğru ayarlandığından ve peteğe yakın konumlanmadığından emin olun
- Görünür kaçak veya nem olup olmadığını kontrol edin
- Kombi kapağını açmayın, gaz ve elektrik bağlantılarına dokunmayın
- Peteği sökmeyin, sistemi kendi başınıza boşaltmayın ve pompaya müdahale etmeyin
- Sisteme ev tipi kimyasal “temizleyici” dökmeyin

## Ne zaman profesyonel destek gerekir?

Vana konumları doğru olduğu halde belirti sürüyorsa, birden fazla petekte görülüyorsa, basınç aynı zamanda düşüyorsa veya genel ısınma yetersizse profesyonel değerlendirme zamanı gelmiş demektir. Bu noktada [kalorifer tesisatı](/hizmetler/kalorifer-tesisati) kontrolü ve gerektiğinde [petek temizleme](/hizmetler/petek-temizleme) birlikte planlanmalıdır. Temizlik kararı, tek başına belirtiye değil ölçüm ve sistem durumuna göre verilir. Aynı dönemde basınç düşüşü de yaşıyorsanız [kombi basıncı neden düşer](/blog/kombi-basinci-neden-duser) yazısına bakılabilir. Kağıthane bölgesi için [kombi ve petek sorunları rehberi](/blog/kagithane-kombi-petek-sorunlari) de destekleyici bir kaynaktır.

## Sonuç

Peteğin altı soğuk üstü sıcak olması tortu ihtimalini güçlendirebilir; ancak düşük debi, vana problemi, dengeleme ve bağlantı tasarımı da aynı görüntüyü verebilir. Her durumda petek temizliği gerekir demek doğru değildir; önce vana ve tek/çoklu petek ayrımı yapılmalı, ardından gerekirse profesyonel değerlendirme planlanmalıdır.
    `.trim(),
    category: "Isıtma",
    publishedAt: "2026-08-01T09:15:00.000Z",
    updatedAt: "2026-08-01T09:15:00.000Z",
    readingTime: 7,
    seoTitle: "Peteğin Altı Soğuk, Üstü Sıcaksa Ne Yapılmalı?",
    seoDescription:
      "Peteğin altı soğuk üstü sıcak olduğunda tortu, düşük debi, vana ve dengeleme ayrımı. Her durumda petek temizliği gerekmediğini anlatan rehber.",
    canonicalPath: "/blog/petegin-alti-soguk-ustu-sicaksa-ne-yapilmali",
    relatedServices: ["petek-temizleme", "kalorifer-tesisati"],
    relatedServiceSlugs: ["petek-temizleme", "kalorifer-tesisati"],
    relatedArticleSlugs: [
      "kombi-basinci-neden-surekli-duser",
      "kombi-arizasi-ile-tesisat-arizasi-nasil-ayirt-edilir",
    ],
    cluster: "isitma",
    searchIntent: "informational",
    primaryKeyword: "peteğin altı soğuk üstü sıcak",
    secondaryKeywords: [
      "petek altı ısınmıyor",
      "radyatörün yarısı soğuk",
      "petek temizliği gerekir mi",
    ],
    needsTechnicalReview: false,
    status: "published",
    image: "/images/blog-petegin-alti-soguk-ustu-sicaksa-ne-yapilmali.png",
    imageAlt:
      "Peteğin altı soğuk üstü sıcak kaldığında radyatör ısınma kontrolü",
    technicalReview: {
      items: [
        {
          topic: "Petek temizliği gereklilik iddiası",
          // verified = technical explanation reviewed; not credential verification
          status: "verified",
          note: "Her soğuk alt belirtisinin otomatik temizlik gerektirmediği mesajı teknik incelemede uygun bulundu.",
        },
        {
          topic: "Pompa ve dolaşım ifadeleri",
          status: "verified",
          note: "Pompa/dolaşım ifadelerinin DIY müdahaleye yönlendirmediği teknik incelemede uygun bulundu.",
        },
        {
          topic: "Dengeleme ve vana ayrımı",
          status: "verified",
          note: "Dengeleme ve vana ayrımı teknik incelemede uygun bulundu.",
        },
      ],
    },
    reviewerId: "mucahit-korkmaz",
    faq: [
      {
        question: "Altı soğuk petek için önce hava almak yeterli mi?",
        answer:
          "Hava genellikle peteğin üst kısmında birikir. Alt soğukluğunda tek başına hava alma çözüm olmayabilir; yine de sistem genelinde hava şüphesi varsa bu da kontrol edilmelidir.",
        category: "isitma",
      },
      {
        question: "Tek petek mi yoksa hepsi mi etkilenmeli, bu neyi değiştirir?",
        answer:
          "Tek petekte vana veya yerel birikinti daha olasıdır. Çoklu petekte sistemsel dolaşım, dengeleme veya tortu yayılımı gibi daha kapsamlı nedenler öne çıkar.",
        category: "isitma",
      },
      {
        question: "Petek temizliği her yıl şart mı?",
        answer:
          "Şart değildir. İhtiyaç; ısınma şikâyeti, su kalitesi ve sistemin genel durumuna göre belirlenir.",
        category: "isitma",
      },
      {
        question: "Vana tam açık olduğu halde petek yine dengesiz ısınıyorsa ne olabilir?",
        answer:
          "Vana açıkken de dengesizlik sürüyorsa dengeleme, pompa debisi veya hat direnci gibi sistem geneline dair nedenler değerlendirilmelidir.",
        category: "isitma",
      },
      {
        question: "Kombi ekranında hata kodu yoksa petek sorunu önemsiz midir?",
        answer:
          "Hayır. Hata kodu olmaması, ısıtma hattındaki lokal bir vana veya tortu sorununu dışlamaz. Kod, cihaz tarafındaki belirli arızalar için görünür; tesisat kaynaklı dengesizlikte ekran sessiz kalabilir.",
        category: "isitma",
      },
    ],
  },
  {
    id: "draft-kombi-tesisat",
    title: "Kombi Arızası ile Tesisat Arızası Nasıl Ayırt Edilir?",
    slug: "kombi-arizasi-ile-tesisat-arizasi-nasil-ayirt-edilir",
    excerpt:
      "Sıcak su var petekler ısınmıyor, bazı petekler soğuk veya basınç düşüyorsa kombi mi tesisat mı? Ön değerlendirme rehberi — kesin teşhis değil.",
    content: `
## Neden ayırt etmek önemli?

Yanlış varsayım, yanlış ekibi ya da yanlış müdahaleyi çağırmaya sebep olabilir. Kombi ekranında görülen bir hata kodu her zaman cihaz arızası demek değildir; tesisattaki bir direnç veya akış sorunu da cihazı koruma moduna sokabilir. Aynı şekilde tesisat kaynaklı sanılan bir belirti bazen cihazın kendi ısıtma devresinden kaynaklanabilir. Bu rehber bir ön değerlendirme aracıdır; kesin teşhis ölçüm ve keşifle konur, burada anlatılanlar evde yapılabilecek gözlem ve kayıt tutma adımlarını kapsar.

## Bu ayrım neden tek bir belirtiyle yapılamaz?

Isıtma sistemleri birbirine bağlı parçalardan oluşur: kombi, pompa, vanalar, petekler ve bunları birbirine bağlayan hat. Bir bölümdeki sorun, kendini başka bir bölümdeki belirti gibi gösterebilir; örneğin tesisattaki bir direnç kombiyi koruma moduna sokup hata kodu üretebilir, ya da kombideki bir ayar sorunu yalnızca bazı odalarda fark edilebilir. Bu yüzden bu rehberde her senaryo ayrı ayrı ele alınır ve hiçbiri tek başına kesin sonuç olarak sunulmaz.

## Sıcak su var, petekler ısınmıyor

Kullanım suyu (musluk/duş) çalışıyorsa cihazın en azından bir kısmı görevini yapıyor demektir; bu durumda ısıtma hattı, üç yollu vana, sirkülasyon pompası veya tesisat dolaşımı şüpheye girer. Bu tabloyu yalnızca “kombi bozuldu” diye yorumlamak eksik kalabilir; sorun çoğu zaman ısıtma tarafındaki bir bileşen veya hat kaynaklıdır.

## Sıcak su da yok, petekler de ısınmıyor

Hem kullanım suyu hem ısıtma aynı anda çalışmıyorsa şüphe daha çok cihaza, gaz/elektrik beslemesine veya genel su beslemesine kayar. Bu durumda önce basit kontroller yapılır: gaz vanası açık mı, elektrik kesintisi var mı, su beslemesi kesilmiş mi. Bunlar dışlandığında sorun büyük olasılıkla kombi tarafındadır ve teknik servis gerektirir.

## Bazı petekler ısınıyor, bazıları ısınmıyor

Bu tabloda lokal vana problemi, dengeleme ihtiyacı, hava birikimi veya o hatta yerel bir tortu birikimi daha olasıdır. Belirti evin tamamına yayılmışsa cihaz veya ana dolaşım tarafı daha güçlü bir olasılık haline gelir. Bu ayrım [peteğin altı soğuk üstü sıcak](/blog/petegin-alti-soguk-ustu-sicaksa-ne-yapilmali) yazısındaki değerlendirmeyle birlikte okunabilir.

## Tek petek problemli

Yalnızca bir peteğin soğuk kalması durumunda öncelik o peteğin vanası, bağlantısı veya iç birikintisidir. Sistemin geneli normal çalışıyorsa cihaz arızasından çok yerel bir neden aranmalıdır.

## Kombi hata kodu veriyor

Ekrandaki kod bir uyarıdır; kök neden her zaman cihazın kendisinde olmayabilir, düşük basınç veya yetersiz akış gibi tesisat kaynaklı durumlar da benzer kodları tetikleyebilir. Hata kodları markaya ve modele göre farklı anlamlar taşır; bu yazıda belirli bir kod numarası veya anlamı verilmemektedir. Ekranda görünen kodu, cihazın kendi kullanım kılavuzuyla karşılaştırmak veya yetkili servise bildirmek en güvenli yoldur. Kodu art arda sıfırlayıp “geçer” diye beklemek yerine; basınç, vana konumları ve ıslaklık belirtileri not edilmelidir. Kartlara veya elektronik aksama müdahale kullanıcı işi değildir.

## Basınç sürekli düşüyor

Bu belirti çoğu zaman tesisat veya bağlantı kaynaklı bir su kaybını düşündürür; yalnızca kombiye odaklanmak yetersiz kalabilir. Ayrıntılı neden listesi için [kombi basıncı neden sürekli düşer](/blog/kombi-basinci-neden-surekli-duser) yazısına bakılabilir.

## Tesisattan ses geliyor veya dolaşım zayıf

Gürültü; hava birikimi, düşük debi veya bir hattaki daralmanın işaretçisi olabilir. Sesin peteklerden mi yoksa kombinin kendisinden mi geldiği kaba bir dinlemeyle ayırt edilebilir. Zayıf dolaşım (evin geneli yavaş ısınıyor, sıcaklık uzun sürede yükseliyor) genellikle pompa performansı, hat direnci veya sistem genelindeki tortu ile ilişkilendirilir; bu da tek başına kombi arızası anlamına gelmez.

## Termostatik vana ve oda termostatı etkisi

Termostatik vanalar kısmi kapanma yaparak bir peteğin yeterince ısınmamasına yol açabilir; bu durum kombi arızasıyla karıştırılabilir. Benzer şekilde, oda termostatının yanlış konumlandırılmış olması (örneğin bir ısı kaynağına yakın veya cereyan alan bir yerde olması) tüm sistemi olduğundan erken kapatıp “ısıtma yetersiz” izlenimi verebilir. Bu iki bileşen, kombiye dokunmadan önce kontrol edilmesi gereken basit ama sık atlanan noktalardır.

## Kombinin yaşı ve bakım geçmişi neden fark yaratır?

Uzun süredir periyodik bakımı yapılmamış bir kombide iç aksamdaki birikim veya yıpranma, tesisattan bağımsız belirtiler üretebilir. Buna karşılık düzenli bakımlı bir cihazda benzer bir belirti daha çok tesisat kaynaklı bir nedeni işaret edebilir. Bakım geçmişi tek başına teşhis koydurmaz, ancak hangi ihtimalin daha ağırlıklı değerlendirileceğine dair bir ipucu sunar. Bu bilgiyi, keşif talep ederken teknik ekiple paylaşmak değerlendirmeyi hızlandırabilir.

## Tüm sistem problemli

Evin genelinde ısınma sorunu varsa pompa, ana hat, kombinin ısıtma fonksiyonu veya sistem genelindeki tortu yayılımı gündeme gelir. Bu kapsamda [kalorifer tesisatı](/hizmetler/kalorifer-tesisati) ve [kombi servisi](/hizmetler/kombi-servisi-ve-tesisati) birlikte planlanabilir.

## Evde güvenli kontrol listesi

Aşağıdaki adımlar bir onarım yöntemi değil, durumu netleştirmek ve teknik ekibe doğru bilgiyi aktarmak için tutulan bir gözlem listesidir. Amaç, keşif öncesinde mümkün olduğunca fazla ipucu toplamaktır.

- Tüm petek vanalarının açık olduğunu doğrulayın
- Basınç değerini not edin (kapağı açmadan)
- Islaklık ve alt kat sızıntısını kontrol edin
- Hata kodunu, varsa, fotoğraflayın ve kılavuzla karşılaştırın
- Oda termostatının konumunu ve ayarını kontrol edin
- Belirtinin tek petekte mi yoksa evin genelinde mi olduğunu not edin
- Gaz kaçağı şüphesinde alanı terk edip ilgili acil hatları arayın

Kombi kapağını açmayın, kartı resetlemek için riskli yöntemler denemeyin ve hata kodunu art arda sıfırlayıp sonuç beklemeyin.

## Ne zaman hangi hizmet?

Belirtiler cihaza işaret ediyorsa [kombi servisi](/hizmetler/kombi-servisi-ve-tesisati); hat veya petek ağırlıklıysa [kalorifer tesisatı](/hizmetler/kalorifer-tesisati) ve gerektiğinde [petek temizleme](/hizmetler/petek-temizleme) değerlendirilir. Durum net değilse, yukarıdaki gözlem listesiyle birlikte bir keşif talep etmek en güvenli yoldur; bu sayede doğru ekip ilk seferde yönlendirilebilir. Kağıthane bölgesi için [kombi ve petek sorunları rehberi](/blog/kagithane-kombi-petek-sorunlari) de destekleyici bir kaynak olarak kullanılabilir.

## Sonuç

Kombi ile tesisat arızasını ayırt etmek, tek bir belirtiye değil birkaç belirtinin birleşimine bakmayı gerektirir. Sıcak su durumu, etkilenen petek sayısı, hata kodu, basınç seyri ve termostat/vana konumları birlikte değerlendirilmelidir. Tek bir işaretle kesin hüküm vermek yerine güvenli gözlem kaydı tutmak ve profesyonel ölçümle netleştirmek tercih edilmelidir.
    `.trim(),
    category: "Isıtma",
    publishedAt: "2026-08-26T09:30:00.000Z",
    updatedAt: "2026-08-26T09:30:00.000Z",
    readingTime: 8,
    seoTitle: "Kombi Arızası ile Tesisat Arızası Nasıl Ayırt Edilir?",
    seoDescription:
      "Kombi mi tesisat mı arızalı? Sıcak su, petek sayısı, hata kodu, basınç düşmesi ve termostat vanası senaryolarıyla ön değerlendirme.",
    canonicalPath: "/blog/kombi-arizasi-ile-tesisat-arizasi-nasil-ayirt-edilir",
    relatedServices: [
      "kombi-servisi-ve-tesisati",
      "kalorifer-tesisati",
      "petek-temizleme",
    ],
    relatedServiceSlugs: [
      "kombi-servisi-ve-tesisati",
      "kalorifer-tesisati",
      "petek-temizleme",
    ],
    relatedArticleSlugs: [
      "kombi-basinci-neden-surekli-duser",
      "petegin-alti-soguk-ustu-sicaksa-ne-yapilmali",
    ],
    cluster: "isitma",
    searchIntent: "informational",
    primaryKeyword: "kombi arızası ile tesisat arızası farkı",
    secondaryKeywords: [
      "kombi mi tesisat mı arızalı",
      "petekler ısınmıyor",
      "kalorifer tesisatı problemi",
    ],
    needsTechnicalReview: false,
    status: "published",
    reviewerId: "mucahit-korkmaz",
    image: "/images/kombi-servisi-hero.webp",
    imageAlt: "Kombi ve kalorifer tesisatı arızası ayrımı için ön değerlendirme",
    relatedLinks: [
      { href: "/kagithane-kombi-servisi", label: "Kağıthane kombi servisi" },
      { href: "/kagithane-kalorifer-tesisati", label: "Kağıthane kalorifer tesisatı" },
      { href: "/kagithane-kombi-basinci-dusuyor", label: "Kağıthane kombi basıncı düşüyor" },
      { href: "/", label: "Kağıthane tesisatçı (ana sayfa)" },
      { href: "/hizmet-bolgeleri/kagithane", label: "Kağıthane tesisat hizmet bölgeleri" },
      { href: "/iletisim", label: "Servis talebi oluştur" },
    ],
    technicalReview: {
      items: [
        {
          topic: "Hata kodu genellemeleri",
          status: "verified",
          note: "Spesifik kod verilmediği ve kılavuz yönlendirmesi teknik incelemede uygun bulundu.",
        },
        {
          topic: "Senaryo bazlı ayrım listesi",
          status: "verified",
          note: "Senaryoların ön değerlendirme olduğu, kesin teşhis izlenimi vermediği doğrulandı.",
        },
        {
          topic: "Basınç düşüşü ile tesisat ilişkisi",
          status: "verified",
          note: "Basınç düşüşü ifadeleri küme içeriğiyle tutarlı bulundu.",
        },
      ],
    },
    faq: [
      {
        question: "Sıcak su geliyor ama petekler soğuksa kombi mi bozuldu?",
        answer:
          "Cihazın kullanım suyu tarafı çalışıyor olabilir; ısıtma hattı, üç yollu vana veya dolaşım da sorumlu olabilir. Tek başına kombi arızası demek erken olur.",
        category: "isitma",
      },
      {
        question: "Hata kodu görürsem ne yapmalıyım?",
        answer:
          "Kodu not alın veya fotoğraflayın, basınç ve vana durumunu kontrol edin, kodu kombinin kendi kılavuzuyla karşılaştırın. Kart müdahalesi veya kapak açma kullanıcıya önerilmez.",
        category: "isitma",
      },
      {
        question: "Tek petek soğuksa tesisatçı mı kombi servisi mi çağırmalıyım?",
        answer:
          "Öncelik o peteğin vanası ve yerel durumudur. Yaygın soğukluk veya cihaz kaynaklı bir kod varsa kombi/tesisat ayrımı keşifle netleşir.",
        category: "isitma",
      },
      {
        question: "Basınç düşüyorsa önce nereye bakılır?",
        answer:
          "Görünür petek/vana kaçakları ve ıslaklık belirtileri önceliklidir. Gizli hat ihtimali de vardır; durum sürekli su doldurarak idare edilmemelidir.",
        category: "isitma",
      },
      {
        question: "Hem sıcak su hem ısıtma aynı anda çalışmıyorsa bu ne anlama gelir?",
        answer:
          "Bu tablo genelde cihaza, gaz/elektrik beslemesine veya genel su girişine işaret eder. Önce basit besleme kontrolleri yapılmalı, ardından teknik servise başvurulmalıdır.",
        category: "isitma",
      },
      {
        question: "Oda termostatı ısınma sorununa neden olabilir mi?",
        answer:
          "Evet. Yanlış konumlandırılmış veya hatalı ayarlanmış bir oda termostatı, sistemi olduğundan erken durdurup yetersiz ısınma izlenimi verebilir; bu durum kombi arızasıyla karıştırılabilir.",
        category: "isitma",
      },
    ],
  },
];
