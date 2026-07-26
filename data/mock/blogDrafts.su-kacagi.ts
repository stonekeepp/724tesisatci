import type { BlogPost } from "@/types";

/**
 * Topical authority guides for the su-kacagi cluster.
 * One pilot may be published after technical approval; others remain draft.
 */
export const draftBlogPosts: BlogPost[] = [
  {
    id: "draft-su-sayaci",
    title: "Musluklar Kapalıyken Su Sayacı Neden Döner?",
    slug: "musluklar-kapaliyken-su-sayaci-neden-doner",
    excerpt:
      "Musluklar kapalıyken sayaç hareketi aktif kaçak şüphesini güçlendirebilir. Rezervuar, ortak hat ve okuma hatası dahil olası nedenler ile evde güvenle yapılabilecek kontroller.",
    content: `
Tüm musluklar ve kullanım noktaları kapalıyken su sayacının hareket etmesi, tesisatta gözle görünmeyen bir su geçişi olduğuna işaret edebilir. Bu, çoğu zaman düşünülenin aksine tek bir nedene bağlanamaz: yavaş bir rezervuar sızıntısı, damlayan bir vana, bahçe hattındaki unutulmuş bir musluk, ortak kullanılan bir bina hattı veya nadiren sayacın kendisindeki bir okuma sapması aynı görüntüyü verebilir. Sayaç hareketi tek başına nokta teşhis değildir; önce evde yapılabilecek güvenli gözlemlerle şüphe daraltılır, gerekirse cihazlı tespitle netleştirilir. Bu yazı, sayacın neden döndüğünü değerlendirirken hangi sırayla ilerlemek gerektiğini ve hangi müdahalelerden kaçınılması gerektiğini anlatır.

## Sayaç hareketinin başlıca nedenleri

### Klozet rezervuarı sızıntısı
Rezervuar içindeki şamandıra veya dolum vanası tam kapanmazsa su, fark edilmeden sürekli klozete akabilir. Ses çoğu zaman çok hafiftir ve gece sessizliğinde bile duyulmayabilir. Bu, evlerde en sık rastlanan “sessiz” su kaybı nedenlerinden biridir.

### Damlatan musluk veya sızdıran vana
Tek damla küçük görünse de saatler içinde litrelerce suya dönüşebilir. Sık kullanılmayan misafir banyosu, çamaşırlık vanası veya bahçe musluğu bu yüzden gözden kaçabilir.

### Bahçe hattı veya dış mekân kullanımı
Bahçe sulama vanası, yıkama hortumu bağlantısı veya dış cephedeki bir musluk açık unutulduğunda iç mekândaki muslukların kapalı olması durumu yanıltıcı hale getirebilir. Dış noktaları da kontrol listesine eklemek gerekir.

### Ortak bina hattı veya paylaşımlı tesisat
Bazı binalarda sayaç, dairenin tamamen tek başına kontrol edemediği bir ortak hat veya bağlantı noktasının gerisinde konumlanmış olabilir. Böyle durumlarda hareket, dairedeki kullanımdan değil bina genelindeki bir noktadan kaynaklanabilir; bu ihtimal site/apartman yönetimiyle birlikte değerlendirilir.

### Aktif temiz su kaçağı
Boru, manşon, vana gövdesi veya bağlantı noktalarından sızan su da sayacı döndürür. Kaçak duvar içinde, şaftta veya döşeme altında olabilir; bu yüzden yüzeyde herhangi bir ıslaklık görülmeyebilir.

### Sayaç veya bağlantı kaynaklı hatalı okuma
Nadiren sayaç mekanizması, dişli takımı veya bağlantı contasındaki bir sorun da beklenmedik harekete yol açabilir. Bu ihtimal genellikle diğer olasılıklar dışlandıktan sonra gündeme gelir ve sayacın kendisiyle ilgili teknik bir değerlendirme gerektirir.

### Isıtma hattı ile karıştırılan durumlar
Kombi veya kalorifer kapalı devresi genellikle içme suyu sayacını etkilemez; bu iki sistem çoğunlukla ayrı sayaçlarla veya ayrı basınç mantığıyla çalışır. Ancak doldurma vanası açık bırakılmışsa veya tesisatta bir karışım noktası varsa bu ayrımı yaparken hat tipini ve basıncı birlikte değerlendirmek gerekir.

## Görünmeyen su kaçağını evde nasıl kontrol edersiniz?

İlk adım, tüm musluk, duş, bahçe vanası ve dış mekân bağlantılarının kapalı olduğundan emin olmaktır. Çamaşır ve bulaşık makinesinin program dışı olduğunu doğrulayın. Ardından sayaç üzerindeki rakam veya dönen göstergeyi net bir fotoğrafla kaydedin. 30-60 dakika kimse su kullanmadan bekleyip tekrar bakın; hareket devam ediyorsa aktif bir kaçak ihtimali güçlenir. Bu süre boyunca evde kimsenin farkında olmadan bir musluk açmadığından da emin olmak faydalıdır.

## Rezervuar kaynaklı şüpheyi nasıl güçlendirirsiniz?

Klozet kapağını açıp şamandıra seviyesini gözlemleyin; suyun taşma borusuna doğru sürekli ince bir akış hâlinde gittiğini görürseniz rezervuar kaynaklı sızıntı olası görünür. Bir diğer basit gözlem, rezervuara birkaç damla gıda boyası eklemek ve belirli bir süre klozet içine geçiş olup olmadığına bakmaktır; klozet haznesinde renk görülürse rezervuar sızıntısı ihtimali artar. Bu, kesin bir laboratuvar testi değil, yönlendirici bir ev gözlemidir.

## Ana vana karşılaştırması nasıl yorumlanır?

Ana vanayı yavaşça kapatıp sayacı bir süre daha izlemek, hareketin daire içi tesisattan mı yoksa sayaç öncesi/sonrası başka bir noktadan mı geldiğini ayırt etmeye yardımcı olabilir. Vana kapalıyken sayaç duruyorsa şüphe genellikle daire içi hatta yoğunlaşır. Vana kapalı olmasına rağmen hareket sürüyorsa sayaç arızası, vana sızdırması veya farklı bir bağlantı senaryosu değerlendirilmelidir. Bu karşılaştırma yalnızca gözlem amaçlıdır ve tek başına kesin sonuç anlamına gelmez; ayrıca ana vanayı asla zorlamayın. Eski veya sıkışmış bir vanaya ani kuvvet uygulamak, vananın kendisinde hasara ve yeni bir sızıntıya yol açabilir.

## Yanlış yorumlanabilecek belirtiler

Yüksek su faturası tek başına kaçak kanıtı değildir; mevsimsel kullanım artışı, misafir ağırlama veya bahçe sulaması da faturayı yükseltebilir. Benzer şekilde duvarda hafif bir nem lekesi her zaman su hattından gelmez; yoğuşma veya farklı bir kaynak da benzer görüntü verebilir. Sayaç göstergesindeki çok hafif titreşimler bazen ölçüm hassasiyetinden kaynaklanabilir; bu yüzden testi birden fazla kez tekrarlamak, tek bir gözleme dayanarak sonuca varmaktan daha güvenilirdir.

## Kayıt tutmak neden fark yaratır

Tek seferlik bir sayaç kontrolü, bazen yanıltıcı olabilir; o anda unutulmuş bir musluk veya kısa süreli bir kullanım hareketi görüntü verebilir. Bunun yerine birkaç gün boyunca aynı saatte sayaç okuması yapıp bir kenara not etmek, gerçek bir örüntü olup olmadığını görmeye yardımcı olur. Her gün benzer saatte artan bir tüketim varsa aktif kaçak ihtimali güçlenir; tüketim gün gün değişkense mevsimsel kullanım farkları daha olasıdır. Bu kayıtlar, sonradan bir profesyonelle görüşüldüğünde de değerlendirmeyi hızlandıran somut bir veri seti oluşturur.

## Evde güvenle yapılabilecek kontroller

- Tüm kullanım noktalarını (iç ve dış mekân) kapatıp sayaç fotoğrafı alın
- Rezervuarı gözlemleyin, gerekirse boya testi uygulayın
- Nemli duvar, tavan lekesi ve zemin ıslaklığını not edin
- Elektrik prizi yakınında nem varsa o noktayı kullanmayın ve elektrikle teması önleyin
- Komşu daireyle veya bina yönetimiyle ortak hat şüphesinde iletişime geçin
- Ana vanayı yalnızca gözlem amaçlı, nazikçe kapatıp açın; zorlamayın

Kırma, boru sökme, kaçak yerini tahmin ederek duvar delme veya kimyasal maddeleri tesisata dökme gibi riskli müdahalelerden kaçının; bu tür girişimler hem güvenlik riski taşır hem de gerçek kaynağı gizleyebilir.

## Ne zaman profesyonel destek gerekir?

Sayaç testi tekrarlanabilir şekilde pozitif çıkıyorsa, alt kata sızıntı belirtisi varsa, duvarda hızla yayılan bir nem oluşuyorsa veya rezervuar/musluk kontrolleri durumu açıklamıyorsa, cihazlı [su kaçağı tespiti ve onarım](/hizmetler/su-kacagi-tespit-ve-onarim) hizmeti değerlendirilmelidir. Amaç, gereksiz kırım yapmadan olası noktaları daraltmak ve onarım kapsamını yazılı olarak netleştirmektir.

## Sonuç

Musluklar kapalıyken sayacın dönmesi önemli bir uyarı işaretidir; ancak sebebi her seferinde aynı değildir. Rezervuar, damlayan vana, dış mekân kullanımı, ortak hat veya sayaç arızası gibi farklı olasılıklar sırayla değerlendirilmelidir. Evde yapılan gözlemler şüpheyi yönlendirir; nokta teşhisi ve güvenli onarım için cihazlı değerlendirme tercih edilmelidir.
    `.trim(),
    category: "Su Kaçağı",
    publishedAt: "2026-07-26T10:00:00.000Z",
    updatedAt: "2026-07-26T12:00:00.000Z",
    readingTime: 10,
    seoTitle: "Musluklar Kapalıyken Su Sayacı Neden Döner?",
    seoDescription:
      "Musluklar kapalıyken sayaç dönmesinin olası nedenleri: rezervuar, dış mekân, ortak hat ve sayaç arızası. Güvenli ev kontrolleri ve ne zaman destek gerektiği.",
    canonicalPath: "/blog/musluklar-kapaliyken-su-sayaci-neden-doner",
    relatedServices: ["su-kacagi-tespit-ve-onarim"],
    relatedServiceSlugs: ["su-kacagi-tespit-ve-onarim"],
    relatedArticleSlugs: [
      "alt-kata-su-sizmasinin-kaynagi-nasil-bulunur",
      "duvar-nemi-su-kacagi-mi-yogusma-mi",
    ],
    cluster: "su-kacagi",
    searchIntent: "informational",
    primaryKeyword: "musluklar kapalıyken su sayacı neden döner",
    secondaryKeywords: [
      "su sayacı kendi kendine dönüyor",
      "evde su kaçağı belirtileri",
      "musluklar kapalıyken sayaç dönmesi",
    ],
    needsTechnicalReview: false,
    technicalReview: {
      items: [
        {
          topic: "Ana vana karşılaştırma yönteminin güvenli anlatımı",
          // verified = technical explanation reviewed; not credential verification
          status: "verified",
          note: "Vananın zorlanmaması gerektiği vurgusu ve yöntemin yalnızca yönlendirici olduğu ifadesi teknik incelemede uygun bulundu.",
        },
        {
          topic: "Rezervuar boya testi açıklaması",
          status: "verified",
          note: "Boya testi adımlarının saha pratiğiyle uyumu teknik incelemede uygun bulundu.",
        },
        {
          topic: "Ortak bina hattı / paylaşımlı tesisat ifadeleri",
          status: "verified",
          note: "Sorumluluk dilinin nötr çerçevesi teknik incelemede uygun bulundu.",
        },
      ],
    },
    status: "published",
    reviewerId: "mucahit-korkmaz",
    faq: [
      {
        question: "Klozet rezervuarı kaçağı su sayacını döndürür mü?",
        answer:
          "Evet. Rezervuar dolum vanası veya şamandıra tam kapanmazsa sürekli su geçişi sayacı hareket ettirebilir. Boya testi ve görsel kontrol bu şüpheyi güçlendirebilir; yine de tek başına tüm hat kaçağını dışlamaz.",
        category: "su-kacagi",
      },
      {
        question: "Bahçe musluğu veya dış hat sayacı etkiler mi?",
        answer:
          "Evet, iç mekândaki muslukların kapalı olması dış mekân musluklarının da kapalı olduğu anlamına gelmez. Sayaç kontrolü yaparken bahçe vanası ve dış cephe bağlantılarını da listeye eklemek gerekir.",
        category: "su-kacagi",
      },
      {
        question: "Çok yavaş dönen sayaç da kaçak belirtisi midir?",
        answer:
          "Yavaş hareket de dikkat gerektirir. Özellikle uzun süreli gözlemde ilerleme varsa aktif kaçak ihtimali artar. Kısa süreli titreşim veya okuma hatası olasılığı için testi tekrarlamak faydalıdır.",
        category: "su-kacagi",
      },
      {
        question:
          "Ana vana kapatıldığında sayaç dönmeye devam ederse ne anlama gelir?",
        answer:
          "Genelde daire içi hattın dışında bir durum veya vana/sayaç kaynaklı bir sorun değerlendirilir. Vanayı zorlamadan durumu not edin ve profesyonel kontrol isteyin.",
        category: "su-kacagi",
      },
      {
        question: "Sayaç arızalı olabilir mi?",
        answer:
          "Olabilir, ancak önce kullanım noktaları ve rezervuar kontrolleri yapılmalıdır. Sayaç arızası ihtimali, diğer olası kaçak kaynakları elendikten sonra gündeme gelir.",
        category: "su-kacagi",
      },
      {
        question: "Yüksek fatura tek başına kaçak kanıtı mıdır?",
        answer:
          "Hayır. Mevsimsel kullanım artışı, misafir ağırlama veya bahçe sulaması da faturayı yükseltebilir. Fatura artışı, sayaç ve rezervuar gözlemleriyle birlikte değerlendirilmelidir.",
        category: "su-kacagi",
      },
    ],
  },
  {
    id: "draft-alt-kat",
    title: "Alt Kata Su Sızmasının Kaynağı Nasıl Bulunur?",
    slug: "alt-kata-su-sizmasinin-kaynagi-nasil-bulunur",
    excerpt:
      "Alt kata su sızmasında ıslak nokta her zaman kaçağın başladığı yer değildir. Temiz su, gider, klozet, izolasyon, ısıtma ve ortak hat ayrımı için kapsamlı rehber.",
    content: `
Alt komşuya su akması veya tavandan damlama, yaşandığı anda stres yaratan ve hızlı hareket etme isteği uyandıran bir durumdur. Ancak görülen ıslaklık noktası, kaynağın tam olarak nerede başladığını göstermeyebilir; su, döşeme arası, şap tabakası, duvar boşluğu veya şaft boyunca yatay ilerleyip farklı bir noktada ortaya çıkabilir. Bu nedenle ilk yapılması gereken şey rastgele kırmaya başlamak değil, olası kaynak kategorilerini sistematik biçimde daraltmaktır. Bu yazı, temiz su, gider, klozet bağlantısı, izolasyon, ısıtma tesisatı ve ortak hat gibi farklı kaynak türlerini birbirinden ayırmaya yardımcı olacak belirtileri ve evde güvenle atılabilecek ilk adımları anlatır.

## Kaynak türlerini ayırmak neden önemlidir?

Temiz su hattı, gider borusu, duş teknesi izolasyonu, derz/silikon detayları, klozet bağlantısı, ısıtma tesisatı veya ortak kolon hattı birbirinden tamamen farklı müdahale yöntemleri gerektirir. Yanlış bir varsayımla hareket etmek gereksiz kırıma, gecikmeye ve bazen yanlış dairede yapılan müdahaleye yol açabilir. Amaç, önce kategoriyi daraltmak, ardından cihazlı yöntemlerle nokta tespiti yapmaktır.

## Temiz su tesisatı kaçağı

Basınçlı temiz su hattındaki bir sızıntı, kullanım olmasa bile sürekli veya kullanım sırasında belirginleşen bir ıslaklığa yol açabilir. Musluklar kapalıyken sayaç hareketi görülmesi bu kategoriyi destekleyen önemli bir ipucudur. Duvar içi boru hatları, kolektör bağlantıları veya vana grupları bu tür kaçaklarda aday noktalar arasındadır.

## Gider borusu kaçağı

Gider kaynaklı kaçaklar çoğunlukla kullanım anında belirginleşir: duş alınırken, lavabo boşaltılırken veya klozet sifonu çekilirken alt kattaki damlamanın arttığı gözlemlenebilir. Kullanım olmadığı zamanlarda ıslaklık aynı şekilde devam ediyorsa gider kaynaklı olasılık biraz daha zayıflar; ancak birikmiş suyun gecikmeli olarak damlaması da mümkün olduğundan bu ayrım tek başına kesin değildir.

## Duş teknesi, küvet ve izolasyon detayları

Duş teknesi kenarı, zayıflamış su yalıtımı veya şap altında biriken su, boru hiçbir yerde delinmeden de alt kata sızabilir. Derz ve silikon hattındaki çatlaklar yüzey suyunu emip kenarlardan aşağı taşıyabilir. Bu tür durumlarda sorun bir “boru arızası” değil, yapısal bir yalıtım veya detay sorunudur ve farklı bir müdahale planı gerektirir.

## Klozet bağlantısı ve taban contası

Klozet taban contası veya bağlantı kelepçesi sızdırıyorsa su, zemin altına sessizce ilerleyebilir. Kötü koku, zemin döşemesinde yumuşama hissi veya sifon çekildikten kısa süre sonra alt katta ani damlama görülmesi bu şüpheyi güçlendiren belirtilerdir.

## Isıtma tesisatı kaynaklı sızıntı

Kalorifer veya yerden ısıtma hattındaki bir kaçak, içme suyu sayacını her zaman etkilemez; bunun yerine sistemin kendi basıncında düşüş daha tipik bir işarettir. Peteğe yakın bir bölgede zemin ısınması veya sistem basıncında kayıpla birlikte alt kata sızıntı gözlemleniyorsa, ısıtma hattı da olası kaynaklar arasında değerlendirilmelidir.

## Ortak kolon veya bina hattı

Bazı sızıntılar dairenin kendi tesisatından değil, ortak kolon, şaft veya bina ana hattından kaynaklanır. Bu durumda sorumluluk ve müdahale kapsamı, bina/site yönetim planına ve ortak alan tanımına göre değişebilir; erken bir kategori ayrımı, yanlış dairede gereksiz kırım yapılmasını önlemeye yardımcı olur.

## Üst kattaki farklı bir kullanımdan kaynaklanma ihtimali

Bazen sızıntının kaynağı üst kattaki daireye ait olmakla birlikte, o dairenin kendi fark etmediği bir noktadan (örneğin balkon çiçekliği sulaması, klima kondensasyon hattı veya arka mutfak kullanımı) gelebilir. Bu ihtimal, üst kat sakiniyle nazik bir iletişim ve karşılıklı gözlemle değerlendirilmelidir; suçlayıcı bir yaklaşımdan ziyade birlikte kaynak arama yaklaşımı daha sonuç vericidir.

## Çatı veya cephe kaynaklı olabilecek durumlar

Üst katlarda veya çatıya yakın dairelerde görülen sızıntılarda, kaynak her zaman iç tesisat olmayabilir; çatı yalıtımı, teras suyun tahliyesi veya cephe detayları da benzer bir ıslaklık görüntüsü verebilir. Bu ihtimal, özellikle yağış sonrası artan belirtilerde göz önünde bulundurulmalıdır.

## Su görülen yerin kaynak olmayabileceği ilkesi

Burada önemli bir hatırlatma yapmak gerekir: ıslaklığın göründüğü nokta, çoğu zaman kaynağın tam olarak bulunduğu yer değildir. Su, yerçekimi ve yapı malzemesinin gözenekli yapısı nedeniyle yatay veya çapraz ilerleyebilir. Bu nedenle yalnızca damlama noktasının hemen üstünü açmak, gerçek kaynağı gözden kaçırma riski taşır.

## Zaman çizelgesi tutmanın faydası

Sızıntının ne zaman başladığını, hangi saatlerde arttığını ve hangi kullanımlarla eş zamanlı göründüğünü not etmek, kaynak kategorisini daraltırken oldukça değerlidir. Örneğin yalnızca sabah duş saatlerinde beliren bir damlama gider veya izolasyon tarafını; gün boyu sabit devam eden bir ıslaklık ise temiz su hattını veya ortak kolon ihtimalini güçlendirebilir. Bu tür bir zaman çizelgesi, sahaya gelecek teknik ekiple yapılacak görüşmeyi de büyük ölçüde hızlandırır.

## Evde güvenli ilk adımlar

- Üst kattaki ilgili alanın su kullanımını geçici olarak azaltın
- Elektrik panosuna ve ıslak bölgeye yakın prizlere dikkat edin, gerekirse o devreyi kapatın
- Islaklığın arttığı saatleri ve hangi kullanımla ilişkili olduğunu not edin
- Fotoğraf ve kısa video kaydı alarak zaman damgalı bir belge oluşturun
- Ana vanayı yalnızca güvenli bildiğiniz şekilde kullanın, zorlamayın
- Üst kat komşunuz veya bina yönetimiyle sakin bir dille iletişime geçin

Kırma, rastgele delme veya “şu duvardan çıkacak” varsayımıyla müdahale etmekten kaçının; bu tür girişimler hem gereksiz hasara hem de gerçek kaynağın gözden kaçmasına yol açabilir.

## Birden fazla kaynağın aynı anda etkili olması ihtimali

Bazı durumlarda tek bir kaynak değil, birden fazla etken aynı anda alt kata sızıntıya katkıda bulunabilir; örneğin zayıflamış bir izolasyon detayı ile birlikte hafif bir gider sızıntısı aynı bölgede görülebilir. Bu tür karma tablo, yalnızca bir noktaya odaklanıldığında sorunun tam çözülmemiş gibi görünmesine yol açabilir. Bu yüzden ilk müdahale sonrası ıslaklığın tamamen durmaması, tek bir kaynağın giderilmiş ama diğerinin hâlâ etkili olduğu anlamına gelebilir ve bu ihtimal göz ardı edilmemelidir.

## Profesyonel tespit ne zaman gerekir?

Islaklık yayılmaya devam ediyorsa, kaynak kategorisi net biçimde belirlenemiyorsa veya elektrik riski varsa cihazlı [su kaçağı tespiti ve onarım](/hizmetler/su-kacagi-tespit-ve-onarim) hizmeti planlanmalıdır. Nem ölçümü, termal görüntüleme ve gerektiğinde hat basınç testleri kaynağı daraltmaya yardımcı olur. Değerlendirme sonucu yazılı olarak özetlenir; onay sonrasında onarım aşamasına geçilir.

## Sonuç

Alt kata su sızmasında en kritik adım, ıslak noktayı doğrudan kaynak sanmamaktır. Temiz su, gider, klozet bağlantısı, izolasyon, ısıtma tesisatı, ortak hat ve hatta çatı/cephe kaynaklı ihtimaller ayrı ayrı düşünülmelidir. Evdeki gözlemler yönlendiricidir; kaynağın kesin noktasını belirlemek için sistematik kontrol ve ölçüme dayalı bir değerlendirme gerekir.
    `.trim(),
    category: "Su Kaçağı",
    publishedAt: "2026-07-26T10:05:00.000Z",
    updatedAt: "2026-07-26T00:00:00.000Z",
    readingTime: 12,
    seoTitle: "Alt Kata Su Sızmasının Kaynağı Nasıl Bulunur?",
    seoDescription:
      "Alt kata su sızmasında temiz su, gider, klozet, izolasyon, ısıtma ve ortak hat ayrımı. Su görülen yerin kaynak olmayabileceğini açıklayan kapsamlı rehber.",
    canonicalPath: "/blog/alt-kata-su-sizmasinin-kaynagi-nasil-bulunur",
    relatedServices: ["su-kacagi-tespit-ve-onarim"],
    relatedServiceSlugs: ["su-kacagi-tespit-ve-onarim"],
    relatedArticleSlugs: [
      "musluklar-kapaliyken-su-sayaci-neden-doner",
      "duvar-nemi-su-kacagi-mi-yogusma-mi",
    ],
    cluster: "su-kacagi",
    searchIntent: "informational",
    primaryKeyword: "alt kata su sızması",
    secondaryKeywords: [
      "alt komşuya su akması",
      "tavandan su damlaması",
      "banyo alt kata su sızdırıyor",
    ],
    needsTechnicalReview: true,
    technicalReview: {
      items: [
        {
          topic: "Isıtma tesisatı kaynaklı sızıntı belirtileri",
          status: "pending",
          note: "Sistem basınç kaybı ile alt kata sızıntı ilişkisinin sahada gözlemlenen tipik senaryolarla örtüştüğü kontrol edilmeli.",
        },
        {
          topic: "Ortak kolon / bina hattı sorumluluk ifadeleri",
          status: "pending",
          note: "Site yönetim planına atıf yapan cümlelerin hukuki açıdan nötr ve doğru çerçevede kaldığı teyit edilmeli.",
        },
        {
          topic: "Üst kat komşu iletişimi önerisi",
          status: "pending",
          note: "Tonun suçlayıcı olmadığından ve sahada önerilen iletişim yaklaşımıyla uyumlu olduğundan emin olunmalı.",
        },
        {
          topic: "Çatı/cephe kaynaklı ihtimal paragrafı",
          status: "pending",
          note: "Bu ihtimalin hangi kat/konumlarda anlamlı olduğu ve abartılı genelleme yapılmadığı doğrulanmalı.",
        },
      ],
    },
    status: "draft",
    faq: [
      {
        question: "Alt kata akan su her zaman banyodan mı kaynaklanır?",
        answer:
          "Hayır. Mutfak hattı, ısıtma tesisatı, klozet bağlantısı veya ortak kolon da kaynak olabilir. Banyo en sık şüphelenen alandır ama tek varsayım olmamalıdır.",
        category: "su-kacagi",
      },
      {
        question: "Kaçak, görülen ıslak noktanın tam üstünde mi olur?",
        answer:
          "Çoğu zaman üstte bir kaynak aranır; ancak su yatay ilerleyip farklı bir noktada da ortaya çıkabilir. Bu yüzden yalnızca damlama noktasının dikey üstü açılmamalıdır.",
        category: "su-kacagi",
      },
      {
        question: "İzolasyon sorunu ile boru kaçağı nasıl ayırt edilir?",
        answer:
          "Kullanım anına bağlı ıslaklık, sayaç hareketi ve basınç değişimleri ayrımda yardımcı olur. Yine de kesin ayrım için nem ölçümü ve hat kontrolleri gerekir.",
        category: "su-kacagi",
      },
      {
        question: "Ortak gider veya kolon arızasından kim sorumludur?",
        answer:
          "Sorumluluk, bina/site yönetim planına ve kaçak noktasının ortak alan sayılıp sayılmamasına göre değişir. Teknik tespit sonrası yönetim ve daire paydaşlarıyla netleştirilir.",
        category: "su-kacagi",
      },
      {
        question: "Üst kat komşuyla nasıl iletişime geçmeliyim?",
        answer:
          "Suçlayıcı bir üslup yerine gözlemlerinizi paylaşıp birlikte kaynak aramayı önermek daha sonuç vericidir. Fotoğraf ve zaman notları bu görüşmede faydalı olur.",
        category: "su-kacagi",
      },
      {
        question: "Sızıntı yağmurdan sonra artıyorsa ne düşünülmeli?",
        answer:
          "Bu durumda çatı, teras tahliyesi veya cephe kaynaklı bir ihtimal de değerlendirilmelidir; sorun her zaman iç tesisattan kaynaklanmayabilir.",
        category: "su-kacagi",
      },
    ],
  },
  {
    id: "draft-duvar-nemi",
    title: "Duvar Nemi Su Kaçağı mı, Yoğuşma mı?",
    slug: "duvar-nemi-su-kacagi-mi-yogusma-mi",
    excerpt:
      "Duvar nemi yoğuşma, ısı köprüsü, cephe/çatı nemi, tesisat kaçağı veya banyo izolasyonundan kaynaklanabilir. Belirtileri karşılaştıran, kesin teşhis dayatmayan rehber.",
    content: `
Duvarda terleme, boya kabarması veya rutubet kokusu fark edildiğinde akla ilk gelen genellikle bir su kaçağıdır. Oysa yoğuşma, ısı köprüsü, dış cephe veya çatı kaynaklı nem, zeminden yükselen rutubet, banyo su yalıtımındaki zayıflık ya da tesisat kaynaklı bir kaçak da birbirine oldukça benzeyen görüntüler üretebilir. Bu yazı, bu farklı olasılıkları ayırt etmeye yardımcı olacak belirtileri karşılaştırır; ancak hiçbir gözlem tek başına kesin bir teşhis anlamına gelmez. Amaç, evde yapılabilecek dikkatli gözlemlerle şüpheyi daraltmak ve gerektiğinde doğru uzmanlık alanına yönlenmektir.

## Yoğuşma neden benzer bir görüntü verir?

Sıcak ve soğuk yüzeyler arasındaki fark ile ortam nemi, özellikle kış aylarında cam kenarlarında, kuzeye bakan duvarlarda veya havalandırması zayıf odalarda su damlacıkları oluşturabilir. Bu tür nem genellikle yüzeyseldir ve duş alma, çamaşır kurutma veya yemek pişirme gibi kullanım artışlarıyla belirginleşir. Havalandırma iyileştirildiğinde nemin gerilemesi, yoğuşma lehine güçlü bir işarettir; ancak gerileme olmuyorsa başka bir kaynak da araştırılmalıdır.

## Isı köprüsü etkisi

Bina yalıtımının zayıf veya kesintili olduğu noktalarda (kolon-kiriş birleşimleri, balkon çıkıntıları, dış duvar köşeleri gibi) yüzey sıcaklığı çevresine göre daha düşük kalabilir. Bu soğuk yüzeyler, oda havasındaki nemin yoğuşmasını kolaylaştırır ve genellikle belirli bir şerit veya köşe boyunca tekrarlayan leke deseni oluşturur. Isı köprüsü kaynaklı nem, tesisat kaçağından farklı olarak mevsimsel olarak kışın belirginleşme eğilimindedir.

## Dış cephe veya çatı kaynaklı nem

Yağmur sonrasında artan lekeler, çatı saçağına yakın ıslaklık veya balkon birleşim noktalarındaki kabarma, dış kaynaklı bir nem şüphesini güçlendirir. Bu durumda iç tesisatta bir kaçak olmayabilir; sorun yapı dış kabuğunun yalıtımı veya su tahliye detaylarıyla ilgilidir ve farklı bir uzmanlık alanı gerektirir.

## Temiz su tesisatı kaçağı

Basınçlı su hattındaki bir sızıntı, belirli bir noktada tekrarlayan ve zamanla büyüyen bir nem oluşturabilir. Musluklar kapalıyken su sayacında hareket gözlemleniyorsa, nem noktası hat güzergâhına yakınsa veya alt kata sızıntı bu neme eşlik ediyorsa, temiz su kaynaklı bir kaçak ihtimali güçlenir. Yine de nemin konumu tek başına “boru delinmiştir” sonucunu kanıtlamaz; ölçümle desteklenmesi gerekir.

## Gider hattı kaynaklı nem

Duş veya lavabo kullanımıyla eşzamanlı olarak artan duvar ya da zemin nemi, gider tarafını düşündürür. Kullanım olmadığında nem geriliyorsa bu ayrım daha da desteklenmiş olur; ancak birikmiş suyun gecikmeli sızması da mümkün olduğundan tek bir gözlemle karar vermek yerine birkaç gün boyunca örüntüyü izlemek daha güvenilirdir.

## Zeminden yükselen nem

Özellikle zemin katlarda ve bodrum katlarında, yalıtım eksikliği veya kılcal nem hareketi duvar diplerinde yatay bir şerit halinde iz bırakabilir. Bu, tesisat hattından tamamen bağımsız, yapısal bir süreç olabilir ve genellikle duvarın alt kısmında, belirli bir yükseklikten sonra kesilen bir sınır çizgisiyle kendini gösterir.

## Banyo su yalıtımı zayıflığı

Derz, silikon dolgusu veya su yalıtım membranı zamanla zayıfladığında, duş suyu duvar arkasına veya bitişik odaya sızabilir. Bu durum, basınçlı bir boru kaçağı olmasa bile ciddi bir yapı nemi ve zamanla malzeme bozulmasına yol açabilir. Genellikle ıslak hacme bitişik duvarlarda, kullanım sonrası artan bir nem örüntüsüyle fark edilir.

## Belirtileri karşılaştırmalı değerlendirme

Nem yağmur sonrası artıyorsa dış cephe/çatı kaynağı öne çıkar. Nem, duş veya musluk kullanımıyla eşzamanlı artıyorsa tesisat veya banyo yalıtımı düşünülür. Nem havalandırma ile geriliyorsa ve özellikle kışın belirginleşiyorsa yoğuşma veya ısı köprüsü ihtimali güçlenir. Nem duvarın alt kısmında yatay bir şerit halindeyse ve mevsimden bağımsız sürekliyse zeminden yükselen rutubet akla gelir. Bu karşılaştırma yönlendiricidir; birden fazla belirti aynı anda görülebileceğinden kesin ayrım için ölçüm gerekir.

Örneğin bir duvarda hem kış aylarında belirginleşen yüzeysel bir terleme hem de belirli bir noktada yıl boyu süren daha derin bir leke aynı anda görülebilir; bu durum, yoğuşmanın var olan bir yapısal nem sorununu daha görünür hale getirdiği bir tabloya işaret edebilir. Böyle karma durumlarda tek bir açıklamayla yetinmek yerine, her belirti grubunu ayrı ayrı değerlendirmek daha sağlıklı bir yaklaşımdır.

## Nem ölçüm cihazlarının sınırları

Piyasada bulunan basit nem ölçer cihazlar, yüzeydeki nem oranı hakkında hızlı bir fikir verebilir ve hangi bölgenin daha nemli olduğunu karşılaştırmalı olarak göstermede faydalıdır. Ancak bu cihazlar, nemin kaynağını (yoğuşma mı, tesisat mı, yapısal mı) tek başına ayırt edemez; ölçtükleri yalnızca o anki nem seviyesidir, nedeni değil. Duvarın iç katmanlarındaki nem dağılımı, termal görüntüleme ve gerektiğinde nokta bazlı ölçümlerle daha güvenilir biçimde değerlendirilebilir. Bu nedenle ev tipi bir ölçümün "normal" veya "yüksek" çıkması, tek başına bir sonuca varmak için yeterli kabul edilmemelidir.

## Nemin duvar malzemesine etkisi

Sürekli nem altında kalan duvarlarda zamanla boya tabakasında kabarma, sıva yüzeyinde ufalanma veya duvar kağıdında ayrılma görülebilir. Bu fiziksel değişimler, nemin ne kadar süredir devam ettiğine dair bir fikir verse de kaynağını göstermez. Erken fark edilen bir nem belirtisi, ilerlemiş bir malzeme hasarına dönüşmeden önce doğru kaynağın belirlenmesini kolaylaştırır; bu yüzden ilk belirtilerde gözlem yapıp kayıt tutmak, sorunu geciktirmemek adına faydalıdır.

## Evde güvenli gözlemler

- Nemin yağmurla mı, duş/musluk kullanımıyla mı, yoksa sürekli mi arttığını birkaç gün boyunca not edin
- Karşı duvarı ve komşu dairenin benzer bir durumu olup olmadığını sorun
- Küf kokusu ve elektrik tesisatına yakın ıslaklığı ciddiye alın, ilgili prizi kullanmayın
- Boya kazıma, sıva sökme veya rastgele delme yapmayın
- Havalandırmayı artırıp birkaç gün sonra nemin değişip değişmediğini gözlemleyin

## Ne zaman profesyonel destek gerekir?

Nem yayılmaya devam ediyorsa, alt kata geçiyorsa, sayaç hareketi şüpheliyse veya elektrik tesisatına yakın bir ıslaklık varsa, [su kaçağı tespiti ve onarım](/hizmetler/su-kacagi-tespit-ve-onarim) kapsamında nem ölçümü ve hat kontrolü planlanmalıdır. Dış cephe veya yapısal nem şüphesi güçlüyse bu değerlendirme, yapı kabuğuna yönelik ayrı bir inceleme ile birlikte ele alınmalıdır. Amaç, yoğuşma ile aktif kaçağı doğru biçimde ayırıp gereksiz müdahaleyi azaltmaktır.

## Sonuç

Duvarda görülen nem, otomatik olarak bir su kaçağı anlamına gelmez. Yoğuşma, ısı köprüsü, dış cephe/çatı, temiz su, gider, zeminden yükselen rutubet ve banyo yalıtımı ayrı ayrı düşünülmesi gereken olasılıklardır. Evdeki gözlemler yön gösterir; kaynağın kesin noktasını belirlemek için ölçüme dayalı, sistematik bir kontrol gerekir.
    `.trim(),
    category: "Su Kaçağı",
    publishedAt: "2026-07-26T10:10:00.000Z",
    updatedAt: "2026-07-26T00:00:00.000Z",
    readingTime: 11,
    seoTitle: "Duvar Nemi Su Kaçağı mı, Yoğuşma mı?",
    seoDescription:
      "Duvar neminde yoğuşma, ısı köprüsü, cephe/çatı, temiz su ve gider kaçağı ayrımı. Belirtilerin yönlendirici olduğunu anlatan kapsamlı karşılaştırma rehberi.",
    canonicalPath: "/blog/duvar-nemi-su-kacagi-mi-yogusma-mi",
    relatedServices: ["su-kacagi-tespit-ve-onarim"],
    relatedServiceSlugs: ["su-kacagi-tespit-ve-onarim"],
    relatedArticleSlugs: [
      "musluklar-kapaliyken-su-sayaci-neden-doner",
      "alt-kata-su-sizmasinin-kaynagi-nasil-bulunur",
    ],
    cluster: "su-kacagi",
    searchIntent: "informational",
    primaryKeyword: "duvar nemi su kaçağı mı",
    secondaryKeywords: [
      "duvar terlemesi",
      "duvarda nem neden olur",
      "rutubet ve su kaçağı farkı",
    ],
    needsTechnicalReview: true,
    technicalReview: {
      items: [
        {
          topic: "Isı köprüsü açıklamasının teknik doğruluğu",
          status: "pending",
          note: "Isı köprüsü tanımının ve tipik görülme noktalarının (kolon-kiriş, balkon çıkıntısı) doğru anlatıldığı teyit edilmeli.",
        },
        {
          topic: "Zeminden yükselen nem ile tesisat kaçağı ayrımı",
          status: "pending",
          note: "Yatay şerit deseni açıklamasının sahada gözlemlenen tipik örüntüyle uyumlu olduğu kontrol edilmeli.",
        },
        {
          topic: "Küf ile ilgili ifadelerin kapsamı",
          status: "pending",
          note: "Küf hakkında herhangi bir sağlık/tıbbi iddia içermediğinden, yalnızca nem sonucu olarak ele alındığından emin olunmalı.",
        },
      ],
    },
    status: "draft",
    faq: [
      {
        question: "Duvar terlemesi her zaman kaçak mıdır?",
        answer:
          "Hayır. Özellikle soğuk yüzeylerde yoğuşma da terleme görüntüsü verir. Yağmur ve kullanım ilişkisi ile birlikte değerlendirmek gerekir.",
        category: "su-kacagi",
      },
      {
        question: "Küf görülmesi mutlaka bir boru arızası mı gösterir?",
        answer:
          "Küf, nemin bir sonucudur; kaynağı boru kaçağı, yoğuşma, ısı köprüsü veya yalıtım zayıflığı olabilir. Küf tek başına boru teşhisi anlamına gelmez.",
        category: "su-kacagi",
      },
      {
        question: "Isı köprüsü ile boru kaçağı nasıl ayırt edilir?",
        answer:
          "Isı köprüsü kaynaklı nem genellikle belirli bir köşe veya şeritte, kışın belirginleşen bir örüntü izler. Tesisat kaçağı ise mevsimden daha bağımsız, kullanım veya sayaç hareketiyle ilişkili olabilir.",
        category: "su-kacagi",
      },
      {
        question: "Nem ölçer evde yeterli midir?",
        answer:
          "Ev tipi ölçümler fikir verebilir ancak hat basıncı, termal görüntü ve sistem bilgisi olmadan nokta teşhisi güvenilir olmayabilir.",
        category: "su-kacagi",
      },
      {
        question: "Zeminden yükselen rutubet nasıl fark edilir?",
        answer:
          "Genellikle duvarın alt kısmında, belirli bir yükseklikten sonra kesilen yatay bir şerit şeklinde görülür ve mevsimden bağımsız sürekli olabilir. Bu, tesisat kaçağından farklı bir yapısal süreçtir.",
        category: "su-kacagi",
      },
      {
        question: "Havalandırmayı artırmak nemi tamamen çözer mi?",
        answer:
          "Yoğuşma kaynaklı nemde havalandırma iyileşmesi genellikle belirgin bir gerileme sağlar. Ancak nem devam ediyorsa yoğuşma dışında bir kaynak da araştırılmalıdır.",
        category: "su-kacagi",
      },
    ],
  },
];
