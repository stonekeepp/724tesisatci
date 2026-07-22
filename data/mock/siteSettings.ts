import type { SiteSettings } from "@/types";

export const siteSettings: SiteSettings = {
  siteName: "724 Tesisatçı",
  phone: "+90 532 346 87 69",
  whatsapp: "+90 532 346 87 69",
  whatsappMessage:
    "Merhaba, tesisat hizmeti hakkında bilgi almak istiyorum.",
  email: "info@724tesisatci.com",
  address: "Emniyet Evleri, Semerkant Sk. 14/A, 34415 Kağıthane/İstanbul",
  mapsDestination: "Emniyet Evleri, Semerkant Sk. 14/A, 34415 Kağıthane/İstanbul",
  city: "İstanbul",
  workingHours: "7/24 Acil Servis",
  businessName: "724 Tesisatçı",
  telephone: "+90 532 346 87 69",
  streetAddress: "Emniyet Evleri, Semerkant Sk. 14/A",
  addressLocality: "Kağıthane",
  addressRegion: "İstanbul",
  postalCode: "34415",
  serviceArea: "Kağıthane, İstanbul",
  openingHours: "Mo-Su 00:00-23:59",
  // Doldurulunca Plumber/Organization schema'ya geo + sameAs eklenir (GBP URL, lat/lng, sosyal).
  googleBusinessProfileUrl: undefined,
  latitude: undefined,
  longitude: undefined,
  sameAs: undefined,
};

export function getPhoneHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function getWhatsAppHref(
  whatsapp: string,
  message: string
): string {
  const number = whatsapp.replace(/[^0-9]/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getMapsDirectionsHref(
  destination: string = siteSettings.mapsDestination
): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
}

export function getMapsEmbedSrc(
  destination: string = siteSettings.mapsDestination
): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(destination)}&hl=tr&z=16&output=embed`;
}
