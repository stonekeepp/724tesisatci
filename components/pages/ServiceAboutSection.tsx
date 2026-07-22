import Link from "next/link";
import type { Service } from "@/types";
import { StitchImage } from "@/components/ui/StitchImage";
import {
  getPhoneHref,
  getWhatsAppHref,
  siteSettings,
} from "@/data/mock/siteSettings";

interface ServiceAboutSectionProps {
  service: Service;
  heroImage?: { src: string; alt: string };
}

const trustStats = [
  { icon: "schedule", label: "7/24 Acil Servis" },
  { icon: "verified", label: "Yazılı Servis Formu" },
  { icon: "location_on", label: "İstanbul Geneli" },
  { icon: "speed", label: "Ekip ve Trafik Durumuna Göre" },
] as const;

export function ServiceAboutSection({
  service,
  heroImage,
}: ServiceAboutSectionProps) {
  const paragraphs = service.longDescription.split(/\n\n+/).filter(Boolean);
  const highlights =
    service.aboutHighlights ?? service.methods.map((method) => method.title);

  if (paragraphs.length === 0) return null;

  return (
    <section className="py-section-padding bg-surface border-y border-outline-variant/40">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md w-fit">
              <span className="material-symbols-outlined text-base">{service.icon}</span>
              İstanbul Geneli Profesyonel Hizmet
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary leading-tight">
              {service.title} Hakkında
            </h2>
            <div className="flex flex-col gap-5">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    index === 0
                      ? "font-body-lg text-body-lg text-on-surface font-medium leading-relaxed"
                      : "font-body-md text-body-md text-on-surface-variant leading-relaxed"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={getPhoneHref(siteSettings.phone)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-on-secondary rounded-xl font-label-md hover:bg-on-secondary-container transition-colors shadow-md"
              >
                <span className="material-symbols-outlined text-xl">call</span>
                Hemen Ara
              </a>
              <a
                href={getWhatsAppHref(siteSettings.whatsapp, siteSettings.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-surface border border-outline-variant text-primary rounded-xl font-label-md hover:bg-surface-container transition-colors"
              >
                <span className="material-symbols-outlined text-xl">chat</span>
                WhatsApp
              </a>
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-secondary font-label-md hover:text-on-secondary-container transition-colors"
              >
                Online Talep Formu
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant soft-shadow overflow-hidden">
              {heroImage && (
                <div className="relative h-48 w-full">
                  <StitchImage
                    src={heroImage.src}
                    alt={heroImage.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 font-headline-md text-headline-md text-on-primary">
                    {service.title}
                  </p>
                </div>
              )}
              <div className="p-6">
                <h3 className="font-headline-md text-headline-md text-primary mb-4">
                  Neden 724 Tesisatçı?
                </h3>
                <ul className="flex flex-col gap-3">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-md text-body-md text-on-surface-variant leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {trustStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-surface-container-low rounded-xl p-4 border border-outline-variant/60 flex flex-col items-center text-center gap-2"
                >
                  <span className="material-symbols-outlined text-secondary text-2xl">
                    {stat.icon}
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
