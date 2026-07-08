/**
 * İlçe bazlı özgün açıklama metinleri (thin-content / doorway spam önleme).
 * Layout değişmez; yalnızca description katmanı özelleştirilir.
 */
export const districtProfiles: Record<
  string,
  { description: string; shortDescription?: string }
> = {
  kagithane: {
    description:
      "Kağıthane Çeliktepe merkezli operasyonumuz ile ilçenin 19 mahallesine ortalama 10–15 dakika içinde ulaşıyoruz. Yoğun konut ve yeni dönüşüm projelerinde su kaçağı tespiti, tıkanıklık açma, petek temizleme ve kombi servisi sunuyoruz. Cihazlı tespit, yazılı teklif ve garantili işçilik standart hizmetimizdir.",
    shortDescription:
      "Kağıthane merkez operasyon — 19 mahalle, 7/24 acil servis, Çeliktepe'den hızlı varış.",
  },
  besiktas: {
    description:
      "Beşiktaş'taki eski apartman ve villa tipi yapılarda gizli su kaçağı, kombi basınç düşüşü ve tıkanıklık sık görülür. Kağıthane merkezli ekibimiz Barbaros, Levent ve sahil hattına hızlı ulaşım sağlar. Termal kamera ve robotik cihazlarla kırmadan müdahale ediyoruz.",
    shortDescription:
      "Beşiktaş ilçesinde eski bina ve konut tesisatı. Cihazlı tespit, 7/24 acil servis.",
  },
  sisli: {
    description:
      "Şişli'nin yoğun ticaret ve konut dokusunda ofis binaları, apartmanlar ve otellerde acil tesisat müdahalesi gerektiren arızalar sık yaşanır. Merkez operasyonumuza komşu ilçe konumunda olduğumuz için en kısa varış sürelerinden birini sunuyoruz.",
    shortDescription:
      "Şişli merkez ve çevresinde 7/24 tesisat. Hızlı varış, yazılı teklif.",
  },
  beyoglu: {
    description:
      "Beyoğlu'ndaki tarihi bina stoğu ve yoğun restoran-gayrimenkul karışımında eski boru hatları, pimaş tıkanıklığı ve su kaçağı riski yüksektir. Ticari işletme ve konut müdahalelerinde deneyimli ekibimizle 7/24 hizmet veriyoruz.",
    shortDescription:
      "Beyoğlu tarihi bina ve ticari tesisat. Kırmadan tespit, garantili işçilik.",
  },
  eyupsultan: {
    description:
      "Eyüpsultan'da Haliç kıyısı ve yeni konut projelerinde kombi, kalorifer ve su tesisatı arızalarına hızlı müdahale sağlıyoruz. Merkez operasyonumuza yakın konum sayesinde acil çağrılarda öncelikli yönlendirme uygulanır.",
    shortDescription:
      "Eyüpsultan Haliç ve çevresi tesisatçı. 7/24 acil servis, cihazlı tespit.",
  },
  uskudar: {
    description:
      "Üsküdar'daki köklü apartmanlar ve Boğaz manzaralı konutlarda gizli kaçak, petek verimsizliği ve tıkanıklık sık karşılaşılan sorunlardır. Anadolu Yakası'na Köprü ve tünel bağlantıları üzerinden hızlı ekip yönlendirmesi yapıyoruz.",
    shortDescription:
      "Üsküdar Anadolu Yakası tesisat hizmeti. Su kaçağı, kombi, tıkanıklık.",
  },
  bayrampasa: {
    description:
      "Bayrampaşa'da yoğun konut blokları ve sanayi-ticaret alanlarında tesisat altyapısı yoğun kullanıma maruz kalır. Forum çevresi ve mahalle içi sokaklara mobil ekiplerimizle 7/24 ulaşım sağlıyoruz.",
    shortDescription:
      "Bayrampaşa konut ve ticaret alanı tesisatçı. Hızlı müdahale, yazılı teklif.",
  },
  fatih: {
    description:
      "Fatih'teki tarihi yarımada binalarında eski tesisat hatları, dar sokak erişimi ve yüksek katlı yapılarda su kaçağı tespiti özel dikkat gerektirir. Sultanahmet'ten Aksaray'a kadar cihazlı tespit ve onarım hizmeti sunuyoruz.",
    shortDescription:
      "Fatih tarihi yarımada tesisatçı. Eski bina uzmanlığı, 7/24 servis.",
  },
  gaziosmanpasa: {
    description:
      "Gaziosmanpaşa'da yoğun konut yoğunluğu ve eski bina stoğu nedeniyle tıkanıklık, kombi arızası ve su kaçağı talepleri yüksektir. İlçe genelinde termal kamera destekli kırmadan tespit hizmeti veriyoruz.",
    shortDescription:
      "Gaziosmanpaşa konut tesisatı. Tıkanıklık açma, su kaçağı, kombi servisi.",
  },

  esenler: {
    description:
      "Esenler'de merkezi konumdaki konut ve ticaret alanlarında acil tesisat müdahaleleri için mobil ekiplerimizi hızla yönlendiriyoruz. Otogar çevresi ve mahalle içi erişimde deneyimli ekibimizle 7/24 hizmet sunuyoruz.",
    shortDescription:
      "Esenler merkez tesisatçı. Acil müdahale, garantili işçilik.",
  },
  gungoren: {
    description:
      "Güngören'deki yoğun apartman yerleşiminde petek temizliği, kombi bakımı ve gizli su kaçağı tespiti en sık talep edilen hizmetlerdir. Kağıthane merkezine yakınlık sayesinde kısa varış süreleri sunuyoruz.",
    shortDescription:
      "Güngören apartman tesisatı. Petek temizleme, su kaçağı, 7/24 servis.",
  },
  sariyer: {
    description:
      "Sarıyer'in villaları, site konutları ve Boğaz hattı yapılarında kalorifer, su tesisatı ve dış hat arızalarına özel çözümler sunuyoruz. Maslak ve Tarabya hattında cihazlı tespit ve garantili onarım yapıyoruz.",
    shortDescription:
      "Sarıyer villa ve site tesisatçı. Boğaz hattı uzmanlığı, 7/24 destek.",
  },
  beykoz: {
    description:
      "Beykoz'un geniş coğrafyasında konut, köy yerleşimleri ve sahil hattı yapılarında su kaçağı ve tıkanıklık müdahaleleri için mobil ekip yönlendirmesi yapıyoruz. Yeşil alanlı bölgelerde erişim planlaması ile hızlı servis sağlıyoruz.",
    shortDescription:
      "Beykoz geniş alan tesisat hizmeti. Su kaçağı, tıkanıklık, kombi servisi.",
  },
  sultangazi: {
    description:
      "Sultangazi'de yoğun konut projeleri ve eski yapı stoğunda kombi, petek ve su tesisatı arızalarına 7/24 müdahale ediyoruz. Cihazlı tespit ile gereksiz kırım yapmadan noktasal onarım uyguluyoruz.",
    shortDescription:
      "Sultangazi konut tesisatçı. Kırmadan tespit, yazılı teklif.",
  },
  bagcilar: {
    description:
      "Bağcılar'da yüksek katlı konut blokları ve yoğun ticaret alanlarında tesisat altyapısı sürekli test edilir. Tıkanıklık açma, su kaçağı tespiti ve kombi servisinde ilçe geneline mobil ekip gönderiyoruz.",
    shortDescription:
      "Bağcılar yoğun konut tesisatı. 7/24 acil servis, garantili işçilik.",
  },
  bahcelievler: {
    description:
      "Bahçelievler'deki merkezi konumlu apartman ve ticaret bölgelerinde gizli su kaçağı, kombi basınç kaybı ve pimaş tıkanıklığı sık görülür. Merkez operasyonumuza yakın ilçe olarak hızlı varış süreleri sunuyoruz.",
    shortDescription:
      "Bahçelievler merkez tesisatçı. Su kaçağı, kombi, tıkanıklık açma.",
  },
  bakirkoy: {
    description:
      "Bakırköy'de sahil hattı konutları, AVM çevresi ve yoğun apartmanlarda acil tesisat müdahalesi için deneyimli ekibimizle hizmet veriyoruz. Eski bina renovasyonlarında tesisat yenileme ve onarım da sunuyoruz.",
    shortDescription:
      "Bakırköy sahil ve merkez tesisatçı. 7/24 acil müdahale.",
  },
  zeytinburnu: {
    description:
      "Zeytinburnu'ndaki sanayi-konut karışık dokuda eski tesisat hatları ve yoğun kullanım nedeniyle tıkanıklık ile su kaçağı talepleri artmaktadır. Merkez ilçelere yakın konumda hızlı ekip yönlendirmesi yapıyoruz.",
    shortDescription:
      "Zeytinburnu sanayi-konut tesisatı. Cihazlı tespit, 7/24 servis.",
  },
  kadikoy: {
    description:
      "Kadıköy'ün Moda, Fenerbahçe ve merkez hattındaki eski apartmanlar ile yeni projelerde su kaçağı, kombi ve tıkanıklık arızalarına Anadolu Yakası ekibimizle müdahale ediyoruz. Boğaz geçişi üzerinden planlı rota ile hızlı ulaşım sağlıyoruz.",
    shortDescription:
      "Kadıköy Anadolu Yakası tesisatçı. Eski bina ve yeni proje uzmanlığı.",
  },
  atasehir: {
    description:
      "Ataşehir'deki site yönetimli konutlar ve plaza binalarında kalorifer dengesizliği, gizli kaçak ve ortak alan tesisat arızalarına profesyonel çözüm sunuyoruz. Site ve bağımsız bölüm müdahalelerinde yazılı teklif ve garanti sağlıyoruz.",
    shortDescription:
      "Ataşehir site ve plaza tesisatı. Yönetim planlı bakım, 7/24 acil.",
  },
  umraniye: {
    description:
      "Ümraniye'de hızla gelişen konut projeleri ve sanayi bölgelerinde su tesisatı, kombi ve pimaş hattı arızalarına mobil ekip yönlendirmesi yapıyoruz. Çamlıca ve merkez hattına kısa sürede ulaşım sağlıyoruz.",
    shortDescription:
      "Ümraniye yeni proje ve konut tesisatçı. Hızlı varış, garantili işçilik.",
  },
  cekmekoy: {
    description:
      "Çekmeköy'ün yeşil alanlı konut bölgelerinde villa ve site tipi yapılarda kalorifer, su tesisatı ve dış hat sorunlarına uzman müdahale sunuyoruz. Anadolu Yakası bağlantı yolları üzerinden planlı servis rotası uyguluyoruz.",
    shortDescription:
      "Çekmeköy villa ve site tesisatı. Su kaçağı, petek temizleme.",
  },
  basaksehir: {
    description:
      "Başakşehir'deki geniş konut projeleri ve yeni yerleşim alanlarında tesisat altyapısı kurulum, onarım ve acil müdahale hizmetleri veriyoruz. Site yönetimleri için planlı bakım ve acil çağrı desteği sunuyoruz.",
    shortDescription:
      "Başakşehir yeni proje tesisatçı. Site bakımı, 7/24 acil servis.",
  },
  maltepe: {
    description:
      "Maltepe sahil hattı ve iç mahallelerinde eski bina stoğu ile yeni konut projelerinde su kaçağı, tıkanıklık ve kombi arızalarına müdahale ediyoruz. Anadolu Yakası ekibimizle ilçe geneline 7/24 ulaşım sağlıyoruz.",
    shortDescription:
      "Maltepe sahil ve konut tesisatı. Cihazlı tespit, yazılı teklif.",
  },
  sancaktepe: {
    description:
      "Sancaktepe'de yoğun konut yerleşimi ve yeni dönüşüm alanlarında tesisat arızalarına hızlı müdahale için mobil ekip yönlendirmesi yapıyoruz. Petek temizliği ve kombi servisinde kış sezonu öncelikli randevu imkânı sunuyoruz.",
    shortDescription:
      "Sancaktepe konut tesisatçı. Kombi, petek, su kaçağı servisi.",
  },
  kartal: {
    description:
      "Kartal'da sanayi-konut geçiş bölgeleri ve sahil hattı yapılarında pimaş, su tesisatı ve kalorifer arızalarına 7/24 müdahale sağlıyoruz. E-5 bağlantısı üzerinden planlı rota ile ekip yönlendirmesi yapıyoruz.",
    shortDescription:
      "Kartal sanayi-konut tesisatı. Tıkanıklık açma, kombi servisi.",
  },
  pendik: {
    description:
      "Pendik'te havalimanı çevresi, yoğun konut alanları ve sanayi bölgelerinde acil tesisat müdahaleleri için Anadolu Yakası ekibimizi yönlendiriyoruz. Uzun mesafe çağrılarda önceden varış süresi bilgisi veriyoruz.",
    shortDescription:
      "Pendik Anadolu Yakası tesisatçı. 7/24 acil servis, yazılı teklif.",
  },
  sultanbeyli: {
    description:
      "Sultanbeyli'deki yoğun konut yerleşiminde tıkanıklık, su kaçağı ve kombi arızalarına mobil ekip gönderiyoruz. Yeni bina ve eski yapı stoğunda kameralı tesisat kontrolü ile kesin teşhis sunuyoruz.",
    shortDescription:
      "Sultanbeyli konut tesisatçı. Kameralı kontrol, garantili işçilik.",
  },
  kucukcekmece: {
    description:
      "Küçükçekmece gölü çevresi ve merkez konut alanlarında nem, su kaçağı ve tesisat korozyonu riski yüksektir. Sahil ve iç mahallelerde termal kamera destekli tespit ve onarım hizmeti veriyoruz.",
    shortDescription:
      "Küçükçekmece göl çevresi tesisatçı. Su kaçağı, nem tespiti.",
  },
  avcilar: {
    description:
      "Avcılar'da üniversite çevresi yoğun konutları ve sahil hattı yapılarında tesisat arızalarına 7/24 müdahale ediyoruz. Öğrenci evi ve apartman tipi yapılarda hızlı ve ekonomik çözümler sunuyoruz.",
    shortDescription:
      "Avcılar konut ve sahil tesisatı. 7/24 acil servis.",
  },
  esenyurt: {
    description:
      "Esenyurt'taki yoğun konut projelerinde kalorifer dengesizliği, su basıncı düşüşü ve tıkanıklık sık görülür. Geniş coğrafyada mobil ekip planlaması ile ilçe geneline servis yönlendirmesi yapıyoruz.",
    shortDescription:
      "Esenyurt yoğun konut tesisatçı. Kombi, tıkanıklık, su kaçağı.",
  },
  beylikduzu: {
    description:
      "Beylikdüzü'ndeki site konutları ve yeni yerleşim projelerinde tesisat kurulum, onarım ve acil müdahale hizmetleri sunuyoruz. Marina ve sahil hattı yapılarında deniz nemi kaynaklı korozon arızalarına da müdahale ediyoruz.",
    shortDescription:
      "Beylikdüzü site ve sahil tesisatı. 7/24 servis, yazılı teklif.",
  },
  adalar: {
    description:
      "Adalar'a feribot ulaşımı planlanarak mobil ekip yönlendirmesi yapıyoruz. Konut ve ticari yapılarda su kaçağı, tıkanıklık ve kombi arızalarında ada koşullarına uygun randevu ve varış süresi bilgisi veriyoruz.",
    shortDescription:
      "Adalar feribot planlı tesisat servisi. Randevulu ve acil müdahale.",
  },
  arnavutkoy: {
    description:
      "Arnavutköy'ün geniş ve hızla büyüyen yerleşim alanlarında yeni bina tesisatı, onarım ve acil müdahale hizmetleri veriyoruz. Havalimanı çevresi konut projelerinde deneyimli ekibimizle 7/24 destek sunuyoruz.",
    shortDescription:
      "Arnavutköy yeni yerleşim tesisatçı. Kurulum, onarım, acil servis.",
  },
  buyukcekmece: {
    description:
      "Büyükçekmece gölü çevresi ve sahil konutlarında su kaçağı, tesisat korozonu ve dış hat arızalarına uzak ilçe planlaması ile müdahale ediyoruz. Varış süresi önceden bildirilir; acil çağrılarda öncelikli sıra uygulanır.",
    shortDescription:
      "Büyükçekmece göl çevresi tesisatçı. Planlı varış, 7/24 servis.",
  },
  catalca: {
    description:
      "Çatalca'nın geniş kırsal alanında konut ve ticari yapılarda tesisat arızalarına uzak mesafe ekibi yönlendirmesi yapıyoruz. Randevulu servis planlaması ile varış süresi önceden paylaşılır.",
    shortDescription:
      "Çatalca geniş alan tesisat servisi. Randevulu planlama.",
  },
  silivri: {
    description:
      "Silivri sahil ve iç kesim konutlarında su tesisatı, kombi ve pimaş arızalarına uzak ilçe mobil ekibi gönderiyoruz. Yazlık ve sürekli konut yapılarında sezon öncesi bakım hizmeti de sunuyoruz.",
    shortDescription:
      "Silivri sahil ve kırsal tesisatçı. Sezon bakımı, acil servis.",
  },
  sile: {
    description:
      "Şile'nin sahil ve kırsal yerleşimlerinde yazlık konutların tesisat bakımı, su kaçağı ve tıkanıklık müdahaleleri için uzak mesafe ekip planlaması yapıyoruz. Varış süresi çağrı sırasında netleştirilir.",
    shortDescription:
      "Şile sahil ve yazlık tesisat servisi. Sezonluk bakım, acil müdahale.",
  },
  tuzla: {
    description:
      "Tuzla'daki sanayi tesisleri, tersane çevresi ve konut alanlarında endüstriyel ve evsel tesisat müdahaleleri sunuyoruz. Anadolu Yakası'nın güney hattına planlı rota ile ekip yönlendirmesi yapıyoruz.",
    shortDescription:
      "Tuzla sanayi ve konut tesisatı. Endüstriyel ve evsel servis.",
  },
};

export function getDistrictProfile(
  slug: string,
  title: string,
  fallbackDescription: string,
  fallbackShort: string
): { description: string; shortDescription: string } {
  const profile = districtProfiles[slug];
  if (!profile) {
    return {
      description: fallbackDescription,
      shortDescription: fallbackShort,
    };
  }

  return {
    description: profile.description,
    shortDescription: profile.shortDescription ?? fallbackShort,
  };
}
