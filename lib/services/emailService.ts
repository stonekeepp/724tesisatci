import nodemailer from "nodemailer";
import { siteSettings } from "@/data/mock/siteSettings";

export type ContactLeadMail = {
  fullName: string;
  phone: string;
  district?: string;
  serviceType?: string;
  description: string;
};

export interface IEmailService {
  sendContactNotification(lead: ContactLeadMail): Promise<void>;
}

function formatContactMailBody(lead: ContactLeadMail): string {
  return [
    "Yeni servis talebi",
    "",
    `Ad Soyad: ${lead.fullName}`,
    `Telefon: ${lead.phone}`,
    `Bölge: ${lead.district ?? "-"}`,
    `Hizmet: ${lead.serviceType ?? "-"}`,
    "",
    "Açıklama:",
    lead.description,
  ].join("\n");
}

/**
 * Local / unset SMTP: log only.
 */
export class MockEmailService implements IEmailService {
  async sendContactNotification(lead: ContactLeadMail): Promise<void> {
    console.log("[MockEmailService] Contact lead received:", lead);
  }
}

/**
 * Sends contact notifications when SMTP_HOST is configured.
 */
export class SmtpEmailService implements IEmailService {
  async sendContactNotification(lead: ContactLeadMail): Promise<void> {
    const host = process.env.SMTP_HOST?.trim();
    if (!host) {
      throw new Error("SMTP_HOST is required for SmtpEmailService");
    }

    const port = Number(process.env.SMTP_PORT || "587");
    const user = process.env.SMTP_USER?.trim();
    const pass = process.env.SMTP_PASS;
    const from =
      process.env.SMTP_FROM?.trim() ||
      user ||
      siteSettings.email ||
      "noreply@724tesisatci.com";
    const to =
      process.env.CONTACT_NOTIFY_TO?.trim() ||
      siteSettings.email ||
      "info@724tesisatci.com";

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: user && pass ? { user, pass } : undefined,
    });

    await transporter.sendMail({
      from,
      to,
      subject: `Yeni servis talebi — ${lead.fullName}`,
      text: formatContactMailBody(lead),
    });
  }
}

export function createEmailService(): IEmailService {
  if (process.env.SMTP_HOST?.trim()) {
    return new SmtpEmailService();
  }
  return new MockEmailService();
}

export const emailService = createEmailService();
