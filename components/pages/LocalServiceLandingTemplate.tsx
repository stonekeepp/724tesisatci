import Link from "next/link";
import type { BreadcrumbItem, LocalServiceLanding, Service } from "@/types";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { HeroImagePanel } from "@/components/ui/StitchImage";
import { serviceHeroImages } from "@/data/mock/images";
import {
  getPhoneHref,
  getWhatsAppHref,
  siteSettings,
} from "@/data/mock/siteSettings";

interface LocalServiceLandingTemplateProps {
  landing: LocalServiceLanding;
  service: Service;
  relatedLocalLandings: LocalServiceLanding[];
  breadcrumbs: BreadcrumbItem[];
}

export function LocalServiceLandingTemplate({
  landing,
  service,
  relatedLocalLandings,
  breadcrumbs,
}: LocalServiceLandingTemplateProps) {
  const heroMeta = serviceHeroImages[service.slug];

  return (
    <>
      <Breadcrumb items={breadcrumbs} />

      <section className="py-12 md:py-20 bg-surface-container-lowest px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md w-fit">
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                location_on
              </span>
              Kağıthane Odaklı
            </span>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary font-bold leading-tight">
              {landing.h1}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-xl">
              {landing.heroDescription}
            </p>
            <div className="flex flex-wrap gap-3">
              {["7/24 Acil Servis", "Cihazlı Kontrol", "Yazılı Bilgilendirme"].map(
                (label) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 text-sm text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-full"
                  >
                    <span className="material-symbols-outlined text-secondary text-lg" aria-hidden="true">
                      verified
                    </span>
                    {label}
                  </span>
                )
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={getPhoneHref(siteSettings.phone)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-on-secondary rounded-xl font-label-md hover:bg-on-secondary-container transition-colors shadow-lg"
              >
                <span className="material-symbols-outlined" aria-hidden="true">call</span>
                Hemen Ara
              </a>
              <a
                href={getWhatsAppHref(
                  siteSettings.whatsapp,
                  `${landing.h1} için bilgi almak istiyorum.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#075E54] text-white rounded-xl font-label-md hover:bg-[#054A42] transition-colors shadow-lg"
              >
                <span className="material-symbols-outlined" aria-hidden="true">chat</span>
                WhatsApp
              </a>
            </div>
          </div>

          {heroMeta ? (
            <HeroImagePanel
              src={heroMeta.src}
              alt={landing.imageAlt}
              variant={heroMeta.variant}
              imageClassName={heroMeta.imageClassName}
              priority
            />
          ) : null}
        </div>
      </section>

      <section className="py-section-padding bg-surface-bright px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-10">
              {landing.intro}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {landing.sections.map((section) => (
                <article
                  key={section.title}
                  className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant soft-shadow"
                >
                  <h2 className="font-headline-md text-headline-md text-primary font-semibold mb-3">
                    {section.title}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {section.body}
                  </p>
                  {section.items ? (
                    <ul className="mt-4 space-y-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 font-body-md text-sm text-on-surface-variant"
                        >
                          <span className="material-symbols-outlined text-secondary text-lg shrink-0" aria-hidden="true">
                            check_circle
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 bg-surface-container-low rounded-xl p-6 border border-outline-variant soft-shadow">
              <h2 className="font-headline-md text-headline-md text-primary font-semibold mb-4">
                Kağıthane bağlantıları
              </h2>
              <div className="flex flex-col gap-3">
                <Link
                  href="/"
                  className="text-secondary font-label-md hover:text-primary transition-colors"
                >
                  Kağıthane tesisatçı
                </Link>
                <Link
                  href="/hizmet-bolgeleri/kagithane"
                  className="text-secondary font-label-md hover:text-primary transition-colors"
                >
                  Kağıthane tesisat hizmet bölgeleri
                </Link>
                <Link
                  href={service.canonicalPath}
                  className="text-secondary font-label-md hover:text-primary transition-colors"
                >
                  {service.title} genel hizmet sayfası
                </Link>
                {relatedLocalLandings.map((related) => (
                  <Link
                    key={related.slug}
                    href={related.canonicalPath}
                    className="text-secondary font-label-md hover:text-primary transition-colors"
                  >
                    {related.h1}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {landing.faq.length > 0 && (
        <section className="py-section-padding bg-surface-container-low px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block py-1 px-3 rounded-full bg-secondary-container/30 text-secondary font-label-md text-label-md mb-4">
                Sık Sorulan Sorular
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold">
                {landing.h1} Hakkında
              </h2>
            </div>
            <FAQAccordion items={landing.faq} variant="premium" />
          </div>
        </section>
      )}

      <section className="py-section-padding bg-primary-container text-on-primary px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-primary font-bold mb-4">
            Kağıthane&apos;de {landing.serviceType} için destek alın
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary-container mb-8 max-w-2xl mx-auto">
            Kağıthane merkezli ekip yönlendirmesi, cihazlı kontrol ve işlem öncesi açık bilgilendirme için 7/24 arayabilir veya WhatsApp üzerinden fotoğraf gönderebilirsiniz. Ana yerel hedef için{" "}
            <Link href="/" className="text-on-primary underline underline-offset-2 hover:text-secondary transition-colors">
              Kağıthane tesisat hizmeti
            </Link>
            &apos;ne de bakabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getPhoneHref(siteSettings.phone)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-on-secondary rounded-xl font-label-md hover:bg-on-secondary-container transition-colors shadow-lg"
            >
              <span className="material-symbols-outlined" aria-hidden="true">call</span>
              {siteSettings.phone}
            </a>
            <a
              href={getWhatsAppHref(
                siteSettings.whatsapp,
                `${landing.h1} için servis talebi oluşturmak istiyorum.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-surface text-primary rounded-xl font-label-md hover:bg-surface-variant transition-colors"
            >
              <span className="material-symbols-outlined" aria-hidden="true">chat</span>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
