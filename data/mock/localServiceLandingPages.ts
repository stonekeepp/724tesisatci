import type { LocalServiceLanding } from "@/types";

export const localServiceLandingPages: LocalServiceLanding[] = [
  {
    slug: "kagithane-su-kacagi-tespiti",
    serviceSlug: "su-kacagi-tespit-ve-onarim",
    title: "Kağıthane Su Kaçağı Tespiti | Kırmadan Cihazlı",
    description:
      "Kağıthane su kaçağı tespiti: alt kata su, tavan nemi ve kabarma için termal kamera, akustik dinleme ve nem ölçerle kırmadan noktasal kontrol.",
    h1: "Kağıthane Su Kaçağı Tespiti",
    heroDescription:
      "Alt kata su sızması, tavanda nem veya kabarma, yüksek fatura ve sayaç hareketinde termal kamera, akustik dinleme ve nem ölçerle kaçak noktası daraltılır; sonuç yazılı olarak paylaşılır.",
    intro:
      "Kağıthane'de su kaçağı çoğu zaman banyo, mutfak, temiz su borusu veya kalorifer hattından başlar. Ekibimiz önce belirtileri dinler; gereksiz kırma yapmadan termal, akustik ve nem ölçümle kaynağı doğrulamaya odaklanır.",
    serviceType: "Su kaçağı tespiti",
    canonicalPath: "/kagithane-su-kacagi-tespiti",
    imageAlt:
      "Kağıthane'de termal kamera ile su kaçağı tespiti yapan tesisat ekibi",
    sections: [
      {
        title: "Alt kata su ve tavan nemi neyi gösterir?",
        body:
          "Alt komşuya damlama, tavanda sararma veya boya kabarması kaçığın ilerlediğini gösterir. Musluklar kapalıyken sayaç dönüyorsa veya fatura ani yükselmişse beklemek hasarı büyütür.",
        items: [
          "Alt kata su akması veya damlama",
          "Tavan ve duvarda nem, kabarma, küf kokusu",
          "Tüm musluklar kapalıyken sayaç hareketi",
          "Ani yükselen su faturası",
        ],
      },
      {
        title: "Termal, akustik ve nem ölçümle tespit",
        body:
          "Önce gözle kontrol ve sayaç testi yapılır. Ardından hattın tipine göre termal kamera, akustik dinleme ve nem ölçer kullanılır. Kaçak noktası netleşmeden geniş kırma önerilmez; tespit sonrası yazılı bilgilendirme verilir.",
      },
      {
        title: "Çeliktepe ve Gültepe dairelerinde sık senaryolar",
        body:
          "Çeliktepe ve Gültepe'deki eski borulu dairelerde ek yerleri ve şaft geçişleri; Ortabayır ve Merkez'deki daha yeni yapılarda gömme hat bağlantıları dikkatle kontrol edilir. Her binada aynı noktadan başlanmaz. Saha notu (Gültepe, Şubat 2026): Alt kata su sızması şikâyetiyle gelen 1990’lar apartman dairesinde sayaç testi ve termal tarama sonrası banyo-duvar birleşimindeki eski flex bağlantı kaynak gösterildi. Yalnızca ilgili duvar bölgesinde noktasal müdahale yapıldı; alt komşu dairesindeki nem izi kuruduktan sonra yazılı servis formu teslim edildi.",
      },
      {
        title: "Su kaçağı tespit ücretini ne belirler?",
        body:
          "Kaçağın temiz su, gider veya kalorifer hattında olması; termal/akustik cihaz kullanımı; erişim zorluğu ve sonrasında noktasal onarım ihtiyacı ücreti etkiler. Müdahale öncesi kapsam açıkça paylaşılır.",
      },
    ],
    faq: [
      {
        question: "Kağıthane'de su kaçağı tespiti için duvar kırılıyor mu?",
        answer:
          "Öncelik kırmadan cihazlı tespittir. Termal kamera, akustik dinleme ve nem ölçer ile nokta daraltılır; kırma gerekiyorsa yalnızca tespit edilen alana müdahale edilir. Kağıthane’de eski apartman stokunda kaçak çoğu zaman banyo şaftı, mutfak duvar birleşimi veya kalorifer hattı bağlantılarından çıkar; bu yüzden önce sayaç testi ve cihazlı tarama yapılır, geniş alan kırımı önerilmez. Gültepe, Çeliktepe ve Emniyet Evleri gibi mahallelerde alt kata sızıntı şikâyetlerinde termal görüntü ve akustik ölçüm birlikte yorumlanır; sonuç yazılı özet ve onay sonrası teklif olarak paylaşılır. İşlem sonrası nem kontrolü tekrarlanır ve 6 ay işçilik garantisi servis formunda belirtilir.",
        category: "Kağıthane su kaçağı",
      },
      {
        question: "Alt kata su akıyorsa önce ne yapmalıyım?",
        answer:
          "Ana vanayı kapatın, elektrik riski olan alanları kullanmayın ve sızıntı bölgesinin fotoğrafını çekin. Ekip gelince sayaç, hat testi ve cihazlı ölçümle kaynak doğrulanır.",
        category: "Acil durum",
      },
      {
        question: "Yüksek fatura tek başına kaçak belirtisi midir?",
        answer:
          "Tek başına kesin kanıt değildir; ancak sayaç hareketi, nem izi veya alt kata sızıntı ile birlikteyse cihazlı kontrol önerilir. Sonuçlar yazılı olarak özetlenir.",
        category: "Fatura",
      },
    ],
    relatedLocalSlugs: [
      "kagithane-kamerali-tesisat-goruntuleme",
      "kagithane-kalorifer-tesisati",
      "kagithane-kombi-servisi",
    ],
  },
  {
    slug: "kagithane-tikaniklik-acma",
    serviceSlug: "tikaniklik-acma",
    title: "Kağıthane Tıkanıklık Açma | Robot Cihazlı Servis",
    description:
      "Kağıthane tıkanıklık açma: lavabo yavaş akma, tuvalet taşıma ve mutfak kokusunda robot, spiral veya kameralı müdahale.",
    h1: "Kağıthane Tıkanıklık Açma",
    heroDescription:
      "Lavabo yavaş akıyorsa, tuvalet taşıyorsa veya mutfaktan koku geliyorsa gider tipine göre robot cihaz, spiral veya kameralı kontrol ile tıkanıklık açılır.",
    intro:
      "Kağıthane'de tıkanıklık çoğu zaman yağ, kireç, saç veya yabancı cisim birikiminden kaynaklanır. Seyrantepe ve Sanayi çevresindeki mutfaklarda yağ; Çağlayan dairelerinde ise lavabo ve tuvalet noktasal tıkanıklıkları sık görülür. Yöntem, gider tipine göre seçilir.",
    serviceType: "Tıkanıklık açma",
    canonicalPath: "/kagithane-tikaniklik-acma",
    imageAlt: "Kağıthane'de robot cihaz ile lavabo tıkanıklığı açma",
    sections: [
      {
        title: "Lavabo, tuvalet ve mutfak giderinde uyarılar",
        body:
          "Gider yavaşlıyor, tuvalet suyu yükseliyor veya mutfaktan koku geliyorsa hatta birikim başlamış olabilir. Yoğun kimyasal ürünler geçici rahatlama verse de conta ve boruya zarar verebilir.",
        items: [
          "Lavabonun yavaş akması veya fokurdama sesi",
          "Tuvaletin taşıması veya geri basması",
          "Mutfak giderinden yağ kokusu",
          "Banyo süzgecinde su birikmesi",
        ],
      },
      {
        title: "Robot, spiral ve kameralı açma",
        body:
          "Gidere uygun uç seçilir; robot veya spiral ile birikim parçalanır ve akış testi yapılır. Yağ/kireç tabakası veya tekrarlayan tıkanıklıkta kameralı kontrol ile hat eğimi, kırık veya çökme değerlendirilir.",
      },
      {
        title: "Seyrantepe ve Sanayi'de sık görülen tıkanıklıklar",
        body:
          "Seyrantepe ve Sanayi iş yerlerinde yoğun mutfak kullanımı yağ birikimini hızlandırır. Çağlayan ve Merkez apartmanlarında ise peçete, saç ve eski gider daralmaları öne çıkar; her durumda aynı yöntem uygulanmaz. Saha notu (Seyrantepe, Ocak 2026): Sanayi çevresindeki iş yerinde mutfak gideri yavaş akıyor ve koku şikâyeti vardı. Robot cihazla açım sonrası kamera kontrolünde yağ tabakası ve daralmış hat eğimi görüldü; tekrar riski için basınçlı yıkama planlandı. Akış testi sonrası koku kayboldu, işlem yazılı form ile teslim edildi.",
      },
      {
        title: "Tıkanıklık açma fiyatı hangi duruma göre değişir?",
        body:
          "Tıkanıklığın lavabo, tuvalet, mutfak veya ana hatta olması; robot/spiral ihtiyacı; kameralı kontrol gerekip gerekmediği ve erişim kolaylığı fiyatı belirler. İşlem öncesi kapsam netleştirilir.",
      },
    ],
    faq: [
      {
        question: "Kağıthane'de tıkanıklık açma kırmadan yapılır mı?",
        answer:
          "Çoğu lavabo, tuvalet ve banyo gideri robot veya spiral ile kırmadan açılır. Kırık hat veya çökme şüphesinde kamera kontrolü önerilir. Kağıthane’de Seyrantepe ve Sanayi çevresindeki mutfak hatlarında yağ birikimi; Çağlayan ve Merkez apartmanlarında ise saç, peçete ve eski PVC daralmaları sık görülür. Tek noktada yavaş akış varsa sifon ve yakın hat kontrol edilir; birden fazla gider etkileniyorsa ana pimaş hattı değerlendirilir. Kimyasal dökmek conta ve boruya zarar verebilir; özellikle tuvalet taşıyorsa cihazlı müdahale daha güvenlidir. Açma sonrası akış testi yapılır, tekrarlayan tıkanıklıkta kamera kaydı alınır ve sonuç yazılı olarak paylaşılır.",
        category: "Tıkanıklık",
      },
      {
        question: "Mutfak kokusu tıkanıklık belirtisi midir?",
        answer:
          "Sıkça evet. Yağ birikimi ve sifon sorunları kokuyu artırır. Açma sonrası akış ve koku kontrolü yapılır; tekrarlıyorsa kamera ile hat incelenir.",
        category: "Mutfak",
      },
      {
        question: "Kimyasal gider açıcı kullanmalı mıyım?",
        answer:
          "Yoğun kimyasal conta ve boru bağlantılarına zarar verebilir. Özellikle tuvalet taşıyorsa cihazlı müdahale daha güvenlidir.",
        category: "Güvenlik",
      },
    ],
    relatedLocalSlugs: [
      "kagithane-pimas-acma",
      "kagithane-kamerali-tesisat-goruntuleme",
      "kagithane-gomme-rezervuar-tamiri",
    ],
  },
  {
    slug: "kagithane-pimas-acma",
    serviceSlug: "pimas-yikama",
    title: "Kağıthane Pimaş Açma | Ana Hat ve Gider Kontrolü",
    description:
      "Kağıthane pimaş açma: ana hat geri tepme, koku, bodrum taşması ve apartman ana giderinde cihazlı açma ile kameralı kontrol.",
    h1: "Kağıthane Pimaş Açma",
    heroDescription:
      "Ana hat geri tepmesi, giderlerden koku, bodrum taşması veya sık tekrarlayan tıkanıklıklarda pimaş hattı cihazla açılır; gerekirse eğim, kök ve çökme için kamera kullanılır.",
    intro:
      "Pimaş sorunu tek lavabo tıkanıklığından farklıdır; apartman ana giderinde yağ, kireç, kök girişi veya hat çökmesi olabilir. Hamidiye ve Emniyet Evleri çevresindeki binalarda kolon hattı ve bodrum çıkışı birlikte değerlendirilir. Kağıthane merkezli ekibimiz aynı gün cihazlı açma ve gerekirse kameralı kontrol planlar; genel süreç için pimaş yıkama hizmet sayfasını, bakım için periyodik tesisat bakımı rehberini inceleyebilirsiniz.",
    serviceType: "Pimaş açma",
    canonicalPath: "/kagithane-pimas-acma",
    imageAlt: "Kağıthane'de kameralı kontrol ile pimaş açma hizmeti",
    sections: [
      {
        title: "Ana hat geri tepme ve koku belirtileri",
        body:
          "Birden fazla gider aynı anda yavaşlıyor, klozet ile yer süzgeci birlikte yükseliyor veya bodrumda taşma varsa sorun ana hatta yaklaşmıştır. Kötü koku ve fokurdama da pimaş kontrolü gerektirir.",
        items: [
          "Ana hat geri tepmesi veya taşma",
          "Birden fazla giderde aynı anda yavaşlama",
          "Bodrum veya rögar çevresinde birikim",
          "Açıldıktan kısa süre sonra tekrarlayan tıkanıklık",
        ],
      },
      {
        title: "Eğim, kök ve çökme kontrolü",
        body:
          "Robotla açma sonrası sorun hızla dönüyorsa kamera ile boru içi incelenir. Ters eğim, kök girişi, çökme veya sertleşmiş yağ tabakası varsa müdahale yöntemi buna göre planlanır.",
      },
      {
        title: "Hamidiye ve Emniyet Evleri apartman hatları",
        body:
          "Hamidiye ve Emniyet Evleri'nde apartman ana gideri ve kolon hattı ortak kullanım nedeniyle daha hızlı yüklenir. Ortabayır'daki eski pimaş hatlarında ise daralma ve ek yeri sorunları sık görülür. Çeliktepe ve Seyrantepe sanayi-konut karışık bölgelerde yağ birikimi daha hızlı oluşabilir.",
      },
      {
        title: "Cihazlı açma adımları",
        body:
          "Önce kullanım durdurulur, ana hat erişim noktası belirlenir. Robot veya spiral ile tıkanıklık temizlenir; gerekirse basınçlı yıkama uygulanır. Tekrar riski yüksekse kamera kaydı alınır ve yazılı bilgilendirme yapılır.",
        items: [
          "Erişim noktası ve ana hat tespiti",
          "Robot / spiral ile açma",
          "Gerekirse basınçlı yıkama",
          "Kamera kontrolü ve yazılı özet",
        ],
      },
      {
        title: "Pimaş hattında maliyeti artıran durumlar",
        body:
          "Ana hat uzunluğu, tıkanıklığın derinliği, kamera ihtiyacı, basınçlı yıkama ve kök/çökme şüphesi maliyeti artırır. Tekrarlayan hatlarda yalnızca açma değil sebep analizi de yapılır. Keşif sonrası net fiyat yazılı teklifle paylaşılır.",
      },
    ],
    faq: [
      {
        question: "Pimaş açma ile lavabo tıkanıklığı açma aynı mı?",
        answer:
          "Her zaman değil. Lavabo tıkanıklığı noktasal olabilir; pimaş açma çoğu zaman apartman ana gideri, kolon hattı ve tekrarlayan sorunların kontrolünü kapsar.",
        category: "Pimaş",
      },
      {
        question: "Bodrumda taşma varsa ne yapılmalı?",
        answer:
          "Kullanımı durdurun, elektrik riskine dikkat edin ve ana hat için cihazlı ekip çağırın. Gecikme alt katlarda hasarı büyütür.",
        category: "Ana hat",
      },
      {
        question: "Kötü koku her zaman pimaş tıkanıklığı mıdır?",
        answer:
          "Birikim sık nedendir; sifon veya havalandırma da kokuyu artırabilir. Akış ve gerekirse kamera ile sebep ayrıştırılır.",
        category: "Koku",
      },
      {
        question: "Kağıthane'de aynı gün pimaş açma yapılır mı?",
        answer:
          "Trafik ve ekip uygunluğuna göre aynı gün cihazlı müdahale planlanır. Telefon veya WhatsApp ile mahalle ve belirtiyi iletmeniz yönlendirmeyi hızlandırır.",
        category: "Süre",
      },
    ],
    relatedLocalSlugs: [
      "kagithane-tikaniklik-acma",
      "kagithane-kamerali-tesisat-goruntuleme",
      "kagithane-musluk-tamiri",
    ],
  },
  {
    slug: "kagithane-petek-temizleme",
    serviceSlug: "petek-temizleme",
    title: "Kağıthane Petek Temizleme | Makine ile Tesisat Bakımı",
    description:
      "Kağıthane petek temizleme: altı soğuk üstü sıcak petek, çamurlaşma ve kış öncesi makineyle tesisat temizliği.",
    h1: "Kağıthane Petek Temizleme",
    heroDescription:
      "Peteklerin altı soğuk üstü sıcak kalıyorsa, son petek ısınmıyorsa veya kombi çalıştığı halde ev ısınmıyorsa tesisat içi çamur ve tortu makineyle temizlenir.",
    intro:
      "Kağıthane'de kış öncesi petek temizliği, özellikle eski kalorifer hatlarında ısı verimini korur. Gültepe ve Ortabayır dairelerinde çamurlaşma sık görülür; temizlik makinesi ve uygun koruyucu kimyasalla dolaşım yeniden dengelenir.",
    serviceType: "Petek temizleme",
    canonicalPath: "/kagithane-petek-temizleme",
    imageAlt: "Kağıthane'de makine ile petek temizleme işlemi",
    sections: [
      {
        title: "Altı soğuk petek ve ısınmayan odalar",
        body:
          "Petek üstü sıcak altı soğuksa, hattın son petekleri geç ısınıyorsa veya kombi çalışırken ev yeterince ısınmıyorsa tesisatta tortu ve çamur birikmiş olabilir.",
        items: [
          "Petek altının soğuk, üstünün sıcak kalması",
          "Hattın son peteklerinin geç ısınması",
          "Kombi çalışıyor ama ev ısınmıyor hissi",
          "Sık hava alma ve dolaşım zayıflığı",
        ],
      },
      {
        title: "Makine ve koruyucu kimyasal ile temizlik",
        body:
          "Petekler kontrol edilir, temizlik makinesi sisteme bağlanır; uygun sirkülasyon ve gerektiğinde koruyucu kimyasal ile çamur uzaklaştırılır. İşlem sonunda hava alma ve ısı dağılımı test edilir.",
      },
      {
        title: "Gültepe ve Ortabayır'da kış öncesi bakım",
        body:
          "Gültepe ve Ortabayır'daki eski dairelerde tesisat içi tortu daha sık birikir. Çeliktepe'deki kollektörlü sistemlerde ise vana ayarı ve petek dengesi temizlikle birlikte kontrol edilir.",
      },
      {
        title: "Petek temizleme ücretinde daire ve petek sayısı etkisi",
        body:
          "Dairedeki petek sayısı, tesisat tipi, çamur yoğunluğu ve koruyucu kimyasal ihtiyacı ücreti belirler. İşlem öncesinde petek sayısı ve erişim öğrenilir.",
      },
    ],
    faq: [
      {
        question: "Petek temizliği kombiye zarar verir mi?",
        answer:
          "Uygun makine ve doğru bağlantı ile yapılan temizlik kombiye zarar vermez. Basınç ve akış işlem boyunca kontrol altında tutulur.",
        category: "Petek temizleme",
      },
      {
        question: "Kış öncesi petek temizliği ne zaman yapılmalı?",
        answer:
          "Isınma sezonu başlamadan önce tercih edilir. Böylece tortu kaynaklı ısınma kaybı ve gereksiz enerji tüketimi azaltılır.",
        category: "Bakım",
      },
      {
        question: "Temizlik sonrası basınç düşmesi düzelir mi?",
        answer:
          "Basınç düşmesi kaçaktan kaynaklanıyorsa temizlik tek başına yetmez; tesisat kaçağı kontrolü gerekir. Belirti ayrımı işlem öncesi yapılır.",
        category: "Basınç",
      },
    ],
    relatedLocalSlugs: [
      "kagithane-kombi-servisi",
      "kagithane-kalorifer-tesisati",
      "kagithane-su-kacagi-tespiti",
    ],
  },
  {
    slug: "kagithane-kombi-servisi",
    serviceSlug: "kombi-servisi-ve-tesisati",
    title: "Kağıthane Kombi ve Tesisat Kontrolü | Basınç Düşmesi",
    description:
      "Kağıthane kombi basınç düşmesi, tesisat kaçağı şüphesi ve petek ısınmama sorunlarında tesisat kaynaklı kontrol.",
    h1: "Kağıthane Kombi ve Tesisat Kontrolü",
    heroDescription:
      "Kombi basıncı düşüyorsa, petekler ısınmıyorsa veya tesisat kaçağı şüphesi varsa genleşme tankı/tesisat tarafı ve hat bağlantıları kontrol edilir; cihaz içi işlem gereken durumda güvenli yönlendirme yapılır.",
    intro:
      "Sürekli basınç düşmesi her zaman cihaz arızası değildir. Merkez ve Çeliktepe dairelerinde kalorifer hattı, petek bağlantısı veya tesisat kaçağı basıncı düşürebilir. Bu sayfa tesisat odaklı kontrole odaklanır; cihaz içi servis gereken durumda kullanıcı güvenli şekilde yönlendirilir.",
    serviceType: "Kombi tesisat kontrolü",
    canonicalPath: "/kagithane-kombi-servisi",
    imageAlt: "Kağıthane'de kombi basınç düşmesi için tesisat kontrolü",
    sections: [
      {
        title: "Basınç düşmesi ve petek ısınmama belirtileri",
        body:
          "Basınç sık sık 1 barın altına iniyorsa, petek çevresinde nem varsa veya bazı odalar ısınmıyorsa önce tesisat hattı değerlendirilmelidir.",
        items: [
          "Kombi basıncının sürekli düşmesi",
          "Petek veya boru çevresinde nem",
          "Bazı peteklerin ısınmaması",
          "Kalorifer hattında kaçak şüphesi",
        ],
      },
      {
        title: "Tesisat tarafı kontrol ve güvenli yönlendirme",
        body:
          "Odak; basınç düşmesi, tesisat kaçağı şüphesi, petek ısınma sorunu ve genleşme/tesisat tarafı bağlantılarıdır. Sorun cihaz içi arızaya işaret ediyorsa kullanıcı, cihaz üreticisi veya uygun servis kanalına güvenli şekilde yönlendirilir; bu sayfada cihaz içi marka işlemi sunulmaz.",
      },
      {
        title: "Merkez ve Çeliktepe'de kış öncesi tesisat kontrolü",
        body:
          "Merkez ve Çeliktepe'deki eski kalorifer hatlarında kaçak ile tortu birlikte görülebilir. Hamidiye'deki daha yeni sistemlerde kollektör, vana ayarı ve petek bağlantıları öne çıkar. Saha notu (Çeliktepe, Aralık 2025): Kombi basıncı haftada iki kez 1 barın altına inen dairede petek altında nem ve boru bağlantısında hafif damlama tespit edildi. Tesisat hattı kontrolü sonrası bağlantı sıkıldı ve kaçak noktası onarıldı; basınç 48 saat stabil kaldı. Cihaz içi arıza bulunmadığı için kullanıcıya yalnızca tesisat tarafı müdahalesi yapıldı, servis formu ile teslim edildi.",
      },
      {
        title: "Kombi basınç ve tesisat kontrolünde kapsam nasıl belirlenir?",
        body:
          "Kapsam; basınç düşmesinin tesisat kaçağı, petek bağlantısı, vana veya tortu kaynaklı olup olmamasına göre belirlenir. Gerekirse su kaçağı tespiti veya petek temizleme ayrı planlanır; cihaz içi işlem bu hizmetin dışında bırakılır.",
      },
    ],
    faq: [
      {
        question: "Kombi basıncı düşüyorsa tesisat kaçağı olabilir mi?",
        answer:
          "Evet. Kalorifer hattındaki küçük kaçaklar basıncı düşürebilir. Tesisat hattı, petek bağlantıları ve nemli noktalar kontrol edilir. Kağıthane’de Merkez ve Çeliktepe’deki eski apartmanlarda petek altı nem, vana contası veya boru ek yerinden mikro sızıntı basıncı düşürür; Hamidiye’deki daha yeni sistemlerde kollektör ve genleşme hattı bağlantıları da kontrol edilir. Sürekli basınç kaybı her zaman cihaz arızası değildir; önce tesisat tarafı değerlendirilir, cihaz içi arıza şüphesi varsa güvenli yönlendirme yapılır. Gerekirse su kaçağı tespiti veya petek temizliği ayrı planlanır; onay sonrası yazılı teklif paylaşılır ve işlem servis formu ile teslim edilir.",
        category: "Kombi basıncı",
      },
      {
        question: "Bu hizmet cihaz içi kombi bakımını kapsar mı?",
        answer:
          "Hayır. Sayfa kombiyle ilişkili tesisat kontrollerine odaklanır. Cihaz içi arıza veya üretici bakımı gereken durumda güvenli yönlendirme yapılır.",
        category: "Kapsam",
      },
      {
        question: "Petekler ısınmıyorsa sorun tesisatta mı?",
        answer:
          "Hava, tortu, vana ayarı veya kaçak şüphesi tesisat tarafında kontrol edilir. Belirtiler cihaz içi arızaya işaret ederse uygun servis kanalına yönlendirilirsiniz.",
        category: "Isınma",
      },
    ],
    relatedLocalSlugs: [
      "kagithane-petek-temizleme",
      "kagithane-kalorifer-tesisati",
      "kagithane-dogalgaz-tesisati",
    ],
  },
  {
    slug: "kagithane-gomme-rezervuar-tamiri",
    serviceSlug: "gomme-rezervuar-tamiri",
    title: "Kağıthane Gömme Rezervuar Tamiri | İç Takım ve Sızıntı",
    description:
      "Kağıthane gömme rezervuar tamiri: sürekli su akması, iç takım arızası, zayıf sifon ve duvar içi sızıntı kontrolü.",
    h1: "Kağıthane Gömme Rezervuar Tamiri",
    heroDescription:
      "Rezervuar sürekli su akıtıyor, sifon zayıf çalışıyor veya klozet arkasında nem oluşuyorsa iç takım, conta ve bağlantılar servis kapağından kontrol edilir.",
    intro:
      "Gömme rezervuar arızası faturayı yükseltir, duvar içinde nem bırakır ve alt kata sızıntı riski oluşturur. Çağlayan ve Merkez'deki dairelerde erişilebilir kapaktan mekanizma kontrolü yapılır; gereksiz kırma yerine parça ve conta odaklı çözüm aranır.",
    serviceType: "Gömme rezervuar tamiri",
    canonicalPath: "/kagithane-gomme-rezervuar-tamiri",
    imageAlt: "Kağıthane'de gömme rezervuar iç takım tamiri",
    sections: [
      {
        title: "Sürekli akan rezervuar ve zayıf sifon",
        body:
          "Klozet içine ince akış, sürekli su sesi veya sifon tuşunun çalışmaması iç takımda problem olduğunu gösterir. Erken müdahale hem su kaybını hem duvar hasarını azaltır.",
        items: [
          "Doldurma ventili arızası",
          "Sifon contası yıpranması",
          "Klozet arkasında nem",
          "Zayıf veya çalışmayan sifon",
        ],
      },
      {
        title: "Servis kapağından iç takım onarımı",
        body:
          "Kapak açılarak şamandıra, conta, doldurma ventili ve bağlantılar kontrol edilir. Uygun parça değişimi sonrası doldurma, boşaltma ve sızdırmazlık testi yapılır.",
      },
      {
        title: "Çağlayan ve Merkez banyolarında dikkat edilenler",
        body:
          "Çağlayan'daki yeni tadilatlarda montaj ölçüsü; Merkez ve Gültepe'deki eski dairelerde duvar içi bağlantı ve conta deformasyonu daha sık sorun çıkarır. Yalnızca görünen parçaya değil bağlantı hattına da bakılır.",
      },
      {
        title: "Gömme rezervuar tamirinde maliyeti ne belirler?",
        body:
          "Değişecek iç takım parçası, model uyumu, sızıntının duvar içinde olup olmaması ve erişim kolaylığı maliyeti belirler. Duvar içi kaçak şüphesinde önce nokta doğrulanır.",
      },
    ],
    faq: [
      {
        question: "Gömme rezervuar sürekli su akıtıyorsa hangi parça değişir?",
        answer:
          "Genellikle doldurma ventili, sifon contası veya iç takım mekanizması kontrol edilir. Kesin parça servis kapağı açıldıktan sonra belirlenir.",
        category: "Rezervuar",
      },
      {
        question: "Tamir için fayans kırılır mı?",
        answer:
          "Çoğu iç takım arızası servis kapağından çözülür. Duvar içi kaçak şüphesinde önce sızıntı noktası doğrulanır.",
        category: "Müdahale",
      },
      {
        question: "Sürekli akan rezervuar faturayı artırır mı?",
        answer:
          "Evet. İnce bir akış bile gün içinde ciddi su israfı oluşturabilir. Erken onarım su kaybını ve nem hasarını azaltır.",
        category: "Su tasarrufu",
      },
    ],
    relatedLocalSlugs: [
      "kagithane-musluk-tamiri",
      "kagithane-su-kacagi-tespiti",
      "kagithane-tikaniklik-acma",
    ],
  },
  {
    slug: "kagithane-musluk-tamiri",
    serviceSlug: "batarya-musluk-montaj",
    title: "Kağıthane Musluk Tamiri | Batarya ve Flex Hortum",
    description:
      "Kağıthane musluk tamiri: damlama, batarya değişimi, flex hortum sızıntısı ve lavabo bağlantıları için tesisatçı desteği.",
    h1: "Kağıthane Musluk Tamiri",
    heroDescription:
      "Musluk damlatıyor, batarya gevşedi veya lavabo altındaki flex hortum sızdırıyorsa conta, kartuş, armatür ve bağlantı noktaları kontrol edilir.",
    intro:
      "Küçük bir damlama zamanla su israfına ve dolap içi çürümeye yol açar. Sanayi ve Seyrantepe iş yerlerinde yoğun kullanım kartuş ömrünü kısaltır; Emniyet Evleri dairelerinde ise flex hortum yıpranması sık görülür.",
    serviceType: "Musluk tamiri",
    canonicalPath: "/kagithane-musluk-tamiri",
    imageAlt: "Kağıthane'de damlayan musluk ve batarya tamiri",
    sections: [
      {
        title: "Damlama, düşük akış ve lavabo altı sızıntı",
        body:
          "Musluk ucunda damlama, batarya gövdesinden kaçırma veya lavabo altında ıslaklık küçük görünse de dolap, parke ve duvar yüzeyine zarar verebilir.",
        items: [
          "Musluk ucunda sürekli damlama",
          "Batarya gövdesinden su kaçırma",
          "Flex hortum ve ara musluk sızıntısı",
          "Aeratör tıkanıklığına bağlı düşük akış",
        ],
      },
      {
        title: "Conta, kartuş ve batarya değişimi",
        body:
          "Vana kapatılır; conta, kartuş, flex hortum ve bağlantı rekorları kontrol edilir. Tamir veya yeni batarya montajı sonrası sızdırmazlık testi yapılır.",
      },
      {
        title: "Sanayi ve Emniyet Evleri kullanım senaryoları",
        body:
          "Sanayi çevresindeki iş yerlerinde sık aç-kapa kartuş arızasını hızlandırır. Emniyet Evleri ve Ortabayır dairelerinde eski flex hortum ve gevşek montaj daha sık sorun çıkarır.",
      },
      {
        title: "Musluk ve batarya tamirinde ücret nasıl oluşur?",
        body:
          "Ücret; değişecek parça, yeni batarya gerekip gerekmediği, lavabo altı erişimi ve hat vanalarının durumuna göre oluşur. Keşif sonrası kapsam netleştirilir.",
      },
    ],
    faq: [
      {
        question: "Damlayan musluk tamir edilir mi yoksa değişmeli mi?",
        answer:
          "Conta veya kartuş arızası varsa tamir edilebilir. Gövde çatlağı, korozyon veya uyumsuz bağlantı varsa değişim daha doğru olabilir.",
        category: "Musluk",
      },
      {
        question: "Flex hortum sızıntısı acil midir?",
        answer:
          "Evet. Flex hortum patlarsa kısa sürede ciddi su baskını oluşabilir. Sızıntı fark edildiğinde ara vana kapatılmalı ve hortum kontrol edilmelidir.",
        category: "Sızıntı",
      },
      {
        question: "Batarya değişiminde eski bağlantılar kontrol edilir mi?",
        answer:
          "Evet. Yeni batarya takılırken vana, flex hortum, conta ve bağlantı rekorları sızdırmazlık açısından kontrol edilir.",
        category: "Montaj",
      },
    ],
    relatedLocalSlugs: [
      "kagithane-gomme-rezervuar-tamiri",
      "kagithane-su-kacagi-tespiti",
      "kagithane-tikaniklik-acma",
    ],
  },
  {
    slug: "kagithane-kalorifer-tesisati",
    serviceSlug: "kalorifer-tesisati",
    title: "Kağıthane Kalorifer Tesisatı | Hat Kaçağı ve Petek Montajı",
    description:
      "Kağıthane kalorifer tesisatı: hat kaçağı, petek montajı, sirkülasyon sorunu ve ısı dağılımı için tesisat kontrolü.",
    h1: "Kağıthane Kalorifer Tesisatı",
    heroDescription:
      "Kalorifer hattında kaçak, petek montajı ihtiyacı, sirkülasyon zayıflığı veya odalar arası ısı farkı varsa hat, vana ve petek bağlantıları kontrol edilir.",
    intro:
      "Kalorifer tesisatı ısının odalara dengeli dağılmasını sağlar. Çeliktepe ve Gültepe'deki eski borulu dairelerde kaçak ve tortu; Hamidiye'deki kollektörlü sistemlerde vana ayarı öne çıkar. Odak her zaman hat ve petek tarafıdır.",
    serviceType: "Kalorifer tesisatı",
    canonicalPath: "/kagithane-kalorifer-tesisati",
    imageAlt: "Kağıthane'de kalorifer tesisatı ve petek montajı",
    sections: [
      {
        title: "Hat kaçağı, sirkülasyon ve dengesiz ısınma",
        body:
          "Bir odanın ısınmaması, petekten ses gelmesi veya basıncın düşmesi kalorifer hattında hava, tortu, kaçak veya sirkülasyon problemi olduğunu gösterebilir.",
        items: [
          "Petek montajı ve yer değişimi",
          "Kalorifer borusunda kaçak şüphesi",
          "Sirkülasyon zayıflığı ve dengesiz ısınma",
          "Vana, kollektör ve bağlantı kontrolü",
        ],
      },
      {
        title: "Keşif, basınç testi ve montaj planı",
        body:
          "Hat güzergahı, petek bağlantıları ve vanalar incelenir. Kaçak şüphesinde termal kamera ve basınç testi; montaj ihtiyacında ölçü ve bağlantı planı yapılır.",
      },
      {
        title: "Çeliktepe eski hatlar, Hamidiye kollektör sistemleri",
        body:
          "Çeliktepe ve Gültepe'de eski kalorifer hatlarında kaçak ve tortu riski yüksektir. Hamidiye ve Emniyet Evleri'ndeki yeni yapılarda kollektör ayarı ve petek dengesi daha kritiktir.",
      },
      {
        title: "Kalorifer tesisatı işlerinde kapsam ve maliyet",
        body:
          "Kapsam ve maliyet; petek sayısı, boru güzergahı, kaçak tespiti ihtiyacı, malzeme türü ve erişim durumuna göre belirlenir. İş kapsamı keşif sonrası netleştirilir.",
      },
    ],
    faq: [
      {
        question: "Kalorifer hattı kaçağı kırmadan bulunabilir mi?",
        answer:
          "Çoğu durumda termal kamera ve basınç testi ile kaçak bölgesi daraltılır. Kırma gerekiyorsa noktasal müdahale hedeflenir.",
        category: "Kalorifer kaçağı",
      },
      {
        question: "Petek montajında ölçü nasıl belirlenir?",
        answer:
          "Oda büyüklüğü, mevcut hat ve kullanım ihtiyacına göre petek ölçüsü ve bağlantı tipi değerlendirilir.",
        category: "Petek montajı",
      },
      {
        question: "Sirkülasyon sorunu petek temizliğiyle çözülür mü?",
        answer:
          "Tortu kaynaklıysa petek temizliği yardımcı olabilir. Pompa, vana veya hat bağlantısı sorunu varsa ayrıca tesisat kontrolü gerekir.",
        category: "Sirkülasyon",
      },
    ],
    relatedLocalSlugs: [
      "kagithane-petek-temizleme",
      "kagithane-kombi-servisi",
      "kagithane-dogalgaz-tesisati",
    ],
  },
  {
    slug: "kagithane-kamerali-tesisat-goruntuleme",
    serviceSlug: "kamerali-tesisat-goruntuleme-ve-onarim",
    title: "Kağıthane Kameralı Tesisat Görüntüleme | Boru İçi Kontrol",
    description:
      "Kağıthane kameralı tesisat görüntüleme: pimaş, gider ve boru içi kontrol ile kırık, çökme, tıkanıklık ve kötü koku analizi.",
    h1: "Kağıthane Kameralı Tesisat Görüntüleme",
    heroDescription:
      "Tekrarlayan tıkanıklık, kötü koku, pimaş geri tepmesi veya boru kırığı şüphesinde kamera ile boru içi görüntüleme yapılır; müdahale görüntüye göre planlanır.",
    intro:
      "Kameralı görüntüleme, sorunu tahminle değil boru içi görüntüyle değerlendirmeyi sağlar. Ortabayır ve Seyrantepe'deki apartman ve işletme hatlarında kırık, çökme, ters eğim veya yoğun birikim kamera ile netleştirilir.",
    serviceType: "Kameralı tesisat görüntüleme",
    canonicalPath: "/kagithane-kamerali-tesisat-goruntuleme",
    imageAlt: "Kağıthane'de boru içi kameralı tesisat görüntüleme",
    sections: [
      {
        title: "Tekrarlayan tıkanıklık ve koku için kamera",
        body:
          "Tıkanıklık açıldıktan kısa süre sonra dönüyorsa, giderden koku geliyorsa veya pimaş hattında kırık şüphesi varsa kamera karar vermeyi kolaylaştırır.",
        items: [
          "Pimaş ve ana gider hattı görüntüleme",
          "Kırık, çökme veya ters eğim kontrolü",
          "Kötü koku ve tekrarlayan tıkanıklık analizi",
          "Onarım öncesi ve sonrası hat durumu",
        ],
      },
      {
        title: "Boru içi görüntüleme ve raporlama",
        body:
          "Uygun erişim noktasından kamera hatta ilerletilir. Daralma, kırık, kök, yağ tabakası veya yabancı cisim ekranda değerlendirilir; açma, yıkama veya onarım önerisi görüntüye göre verilir.",
      },
      {
        title: "Ortabayır ve Seyrantepe hatlarında kullanım",
        body:
          "Ortabayır apartmanlarında eski pimaş eğimi; Seyrantepe ve Sanayi işletmelerinde yağ birikimi kamera ile daha net ayrıştırılır. Tadilat sonrası doğrulama için de kullanılır.",
      },
      {
        title: "Kameralı görüntülemede ücreti etkileyen unsurlar",
        body:
          "Hat uzunluğu, erişim noktası, görüntülenecek bölüm sayısı ve görüntüleme sonrası açma/temizlik ihtiyacı ücreti etkiler. Kapsam işlem öncesi paylaşılır.",
      },
    ],
    faq: [
      {
        question: "Kameralı tesisat görüntüleme kırmadan yapılır mı?",
        answer:
          "Evet. Uygun gider veya kontrol kapağından kamera hatta ilerletilir. Amaç kırmadan önce sorunu görüntüyle doğrulamaktır.",
        category: "Kamera",
      },
      {
        question: "Kamera ile temiz su kaçağı da bulunur mu?",
        answer:
          "Kamera daha çok gider ve pimaş içi problemleri gösterir. Temiz su veya kalorifer kaçağı için termal kamera ve akustik dinleme tercih edilir.",
        category: "Kapsam",
      },
      {
        question: "Görüntüleme sonrası tıkanıklık açılabilir mi?",
        answer:
          "Evet. Görüntüde birikim veya yabancı cisim görülürse robot cihaz, basınçlı yıkama veya uygun onarım yöntemi planlanabilir.",
        category: "Tıkanıklık",
      },
    ],
    relatedLocalSlugs: [
      "kagithane-pimas-acma",
      "kagithane-tikaniklik-acma",
      "kagithane-su-kacagi-tespiti",
    ],
  },
  {
    slug: "kagithane-dogalgaz-tesisati",
    serviceSlug: "dogalgaz-tesisati",
    title: "Kağıthane Doğalgaz Tesisatı | Bağlantı ve Sızdırmazlık",
    description:
      "Kağıthane doğalgaz tesisatı: kombi-ocak bağlantısı, hat kontrolü ve sızdırmazlık testi. Keşif sonrası yazılı teklif; trafik ve ekibe göre yönlendirme.",
    h1: "Kağıthane Doğalgaz Tesisatı",
    heroDescription:
      "Kombi veya ocak bağlantısı, doğalgaz hattı kontrolü ve sızdırmazlık testi ihtiyaçlarında keşif yapılır; kapsam yazılı teklifle netleştirilir. Gaz kokusu varsa vanayı kapatıp pencere açın ve hemen arayın.",
    intro:
      "Doğalgaz hattı, güvenlik açısından en kritik tesisat kollarından biridir. Emniyet Evleri ve Çeliktepe apartmanlarında kombi değişimi, ocak bağlantısı veya eski hat kontrolü sık talep edilir. Odak; bağlantı, sızdırmazlık ve standartlara uygun uygulamadır. Kesin varış saati trafik ve ekip uygunluğuna göre planlanır.",
    serviceType: "Doğalgaz tesisatı",
    canonicalPath: "/kagithane-dogalgaz-tesisati",
    imageAlt: "Kağıthane'de doğalgaz bağlantısı ve sızdırmazlık kontrolü",
    sections: [
      {
        title: "Bağlantı, hat kontrolü ve gaz kokusu",
        body:
          "Yeni kombi/ocak bağlantısı, hat yenileme veya şüpheli koku durumunda önce güvenlik adımları uygulanır. Koku hissedilirse cihazlar kullanılmaz; vana kapatılır ve acil destek alınır.",
        items: [
          "Kombi ve ocak doğalgaz bağlantısı",
          "Hat sızdırmazlık ve basınç kontrolü",
          "Eski bağlantı ve fleks yenileme ihtiyacı",
          "Gaz kokusu durumunda acil güvenlik yönlendirmesi",
        ],
      },
      {
        title: "Keşif, sızdırmazlık testi ve yazılı teklif",
        body:
          "Keşifte mevcut hat, cihaz tipi ve bağlantı noktaları incelenir. Uygun görülen işlerde sızdırmazlık/basınç kontrolü planlanır. İş kapsamı ve malzeme ihtiyacı keşif sonrası yazılı teklifle paylaşılır; onay olmadan işe başlanmaz.",
      },
      {
        title: "Emniyet Evleri ve Çeliktepe apartman bağlantıları",
        body:
          "Emniyet Evleri'ndeki site ve yeni dairelerde kollektör/cihaz bağlantısı; Çeliktepe eski stokta fleks, vana ve ek yerleri daha sık kontrol edilir. Hamidiye ve Merkez mahallelerinde kombi değişimi ile birlikte hat uygunluğu değerlendirilir.",
      },
      {
        title: "Kapsam ve planlamayı etkileyen unsurlar",
        body:
          "Hat uzunluğu, cihaz tipi, erişim, malzeme ihtiyacı ve güvenlik testi ihtiyacı kapsamı etkiler. Acil koku çağrılarında öncelik güvenliktedir; planlı montajlarda randevu trafik ve ekibe göre ayarlanır.",
      },
    ],
    faq: [
      {
        question: "Gaz kokusu alırsam ne yapmalıyım?",
        answer:
          "Cihazları ve elektrik düğmelerini kullanmayın, vanayı kapatın, pencereleri açın ve dışarıdan acil hattı arayın. Kokuyu doğrulamak için ateş veya çakmak kullanmayın.",
        category: "Güvenlik",
      },
      {
        question: "Kombi değişiminde doğalgaz bağlantısı yapılır mı?",
        answer:
          "Evet. Uygun hat ve cihaz uyumu keşifte değerlendirilir; bağlantı ve sızdırmazlık kontrolü planlanır. Cihaz içi üretici servisi gereken durumda ayrıca yönlendirme yapılır.",
        category: "Bağlantı",
      },
      {
        question: "Sızdırmazlık testi ne zaman gerekir?",
        answer:
          "Yeni bağlantı, hat müdahalesi veya şüpheli koku sonrası güvenlik kontrolü için önerilir. Test kapsamı keşifte netleştirilir.",
        category: "Test",
      },
      {
        question: "Kağıthane'de aynı gün doğalgaz işi yapılır mı?",
        answer:
          "Acil güvenlik durumlarında öncelikli yönlendirme yapılır. Planlı montaj ve hat işleri trafik ile ekip uygunluğuna göre randevulanır.",
        category: "Planlama",
      },
    ],
    relatedLocalSlugs: [
      "kagithane-kombi-servisi",
      "kagithane-kalorifer-tesisati",
      "kagithane-su-kacagi-tespiti",
    ],
  },
];
