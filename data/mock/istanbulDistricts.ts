export type IstanbulSide = "avrupa" | "anadolu";

export interface IstanbulDistrictMeta {
  slug: string;
  title: string;
  side: IstanbulSide;
}

/** İstanbul'un 39 resmi ilçesi */
export const istanbulDistricts: IstanbulDistrictMeta[] = [
  { slug: "adalar", title: "Adalar", side: "anadolu" },
  { slug: "arnavutkoy", title: "Arnavutköy", side: "avrupa" },
  { slug: "atasehir", title: "Ataşehir", side: "anadolu" },
  { slug: "avcilar", title: "Avcılar", side: "avrupa" },
  { slug: "bagcilar", title: "Bağcılar", side: "avrupa" },
  { slug: "bahcelievler", title: "Bahçelievler", side: "avrupa" },
  { slug: "bakirkoy", title: "Bakırköy", side: "avrupa" },
  { slug: "basaksehir", title: "Başakşehir", side: "avrupa" },
  { slug: "bayrampasa", title: "Bayrampaşa", side: "avrupa" },
  { slug: "besiktas", title: "Beşiktaş", side: "avrupa" },
  { slug: "beykoz", title: "Beykoz", side: "anadolu" },
  { slug: "beylikduzu", title: "Beylikdüzü", side: "avrupa" },
  { slug: "beyoglu", title: "Beyoğlu", side: "avrupa" },
  { slug: "buyukcekmece", title: "Büyükçekmece", side: "avrupa" },
  { slug: "catalca", title: "Çatalca", side: "avrupa" },
  { slug: "cekmekoy", title: "Çekmeköy", side: "anadolu" },
  { slug: "esenler", title: "Esenler", side: "avrupa" },
  { slug: "esenyurt", title: "Esenyurt", side: "avrupa" },
  { slug: "eyupsultan", title: "Eyüpsultan", side: "avrupa" },
  { slug: "fatih", title: "Fatih", side: "avrupa" },
  { slug: "gaziosmanpasa", title: "Gaziosmanpaşa", side: "avrupa" },
  { slug: "gungoren", title: "Güngören", side: "avrupa" },
  { slug: "kadikoy", title: "Kadıköy", side: "anadolu" },
  { slug: "kagithane", title: "Kağıthane", side: "avrupa" },
  { slug: "kartal", title: "Kartal", side: "anadolu" },
  { slug: "kucukcekmece", title: "Küçükçekmece", side: "avrupa" },
  { slug: "maltepe", title: "Maltepe", side: "anadolu" },
  { slug: "pendik", title: "Pendik", side: "anadolu" },
  { slug: "sancaktepe", title: "Sancaktepe", side: "anadolu" },
  { slug: "sariyer", title: "Sarıyer", side: "avrupa" },
  { slug: "silivri", title: "Silivri", side: "avrupa" },
  { slug: "sultanbeyli", title: "Sultanbeyli", side: "anadolu" },
  { slug: "sultangazi", title: "Sultangazi", side: "avrupa" },
  { slug: "sile", title: "Şile", side: "anadolu" },
  { slug: "sisli", title: "Şişli", side: "avrupa" },
  { slug: "tuzla", title: "Tuzla", side: "anadolu" },
  { slug: "umraniye", title: "Ümraniye", side: "anadolu" },
  { slug: "uskudar", title: "Üsküdar", side: "anadolu" },
  { slug: "zeytinburnu", title: "Zeytinburnu", side: "avrupa" },
];

export const kagithaneNeighborhoodNames: { slug: string; title: string }[] = [
  { slug: "caglayan", title: "Çağlayan" },
  { slug: "celiktepe", title: "Çeliktepe" },
  { slug: "emniyet-evleri", title: "Emniyet Evleri" },
  { slug: "gulbag", title: "Gülbağ" },
  { slug: "gursel", title: "Gürsel" },
  { slug: "gultepe", title: "Gültepe" },
  { slug: "hamidiye", title: "Hamidiye" },
  { slug: "harmantepe", title: "Harmantepe" },
  { slug: "hurriyet", title: "Hürriyet" },
  { slug: "merkez", title: "Merkez" },
  { slug: "nurtepe", title: "Nurtepe" },
  { slug: "ortabayir", title: "Ortabayır" },
  { slug: "sanayi", title: "Sanayi" },
  { slug: "seyrantepe", title: "Seyrantepe" },
  { slug: "sirintepe", title: "Şirintepe" },
  { slug: "talatpasa", title: "Talatpaşa" },
  { slug: "telsizler", title: "Telsizler" },
  { slug: "yahya-kemal", title: "Yahya Kemal" },
  { slug: "yesilce", title: "Yeşilce" },
];
