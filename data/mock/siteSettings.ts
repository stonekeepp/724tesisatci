import type { SiteSettings } from "@/types";

export const siteSettings: SiteSettings = {
  siteName: "724 Tesisatçı",
  phone: "+90 530 241 20 50",
  whatsapp: "+90 530 241 20 50",
  whatsappMessage:
    "Merhaba, tesisat hizmeti hakkında bilgi almak istiyorum.",
  email: "info@724tesisatci.com",
  address: "Emniyet Evleri, Semerkant Sk. 14/A, 34415 Kağıthane/İstanbul",
  mapsDestination: "Emniyet Evleri, Semerkant Sk. 14/A, 34415 Kağıthane/İstanbul",
  city: "İstanbul",
  workingHours: "7/24 Acil Servis",
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
