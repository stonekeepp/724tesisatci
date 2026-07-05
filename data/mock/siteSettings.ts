import type { SiteSettings } from "@/types";

export const siteSettings: SiteSettings = {
  siteName: "724 Tesisatçı",
  phone: "+90 530 241 20 50",
  whatsapp: "+90 530 241 20 50",
  whatsappMessage:
    "Merhaba, tesisat hizmeti hakkında bilgi almak istiyorum.",
  email: "info@724tesisatci.com",
  address: "Merkez Mahallesi, Tesisat Sokak No: 12, Kağıthane / İstanbul",
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
