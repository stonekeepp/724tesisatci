import Link from "next/link";
import type { BlogPost, Service } from "@/types";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ServiceAboutSection } from "@/components/pages/ServiceAboutSection";
import { HeroImagePanel } from "@/components/ui/StitchImage";
import { blogPosts } from "@/data/mock/blogPosts";
import { serviceHeroImages } from "@/data/mock/images";
import { getLocalLandingByServiceSlug } from "@/lib/services/localLandingService";
import {
  getPhoneHref,
  getWhatsAppHref,
  siteSettings,
} from "@/data/mock/siteSettings";

interface ServiceDetailDisplayOverrides {
  heroTitle?: string;
  heroDescription?: string;
  displayTitle?: string;
}

interface ServiceDetailTemplateProps {
  service: Service;
  relatedServiceItems: Service[];
  breadcrumbs: { label: string; href: string }[];
  displayOverrides?: ServiceDetailDisplayOverrides;
}

export function ServiceDetailTemplate({
  service,
  relatedServiceItems,
  breadcrumbs,
  displayOverrides,
}: ServiceDetailTemplateProps) {
  const heroTitle = displayOverrides?.heroTitle ?? service.heroTitle;
  const heroDescription =
    displayOverrides?.heroDescription ?? service.heroDescription;
  const displayTitle = displayOverrides?.displayTitle ?? service.title;
  const heroMeta = serviceHeroImages[service.slug];
  const relatedBlogPosts = blogPosts
    .filter(
      (post) =>
        post.status === "published" && post.relatedServices.includes(service.slug)
    )
    .slice(0, 3);
  const localLanding = getLocalLandingByServiceSlug(service.slug);
  const heroOverlay =
    service.slug === "su-kacagi-tespit-ve-onarim" ? (
      <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-on-secondary-container">
              precision_manufacturing
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-primary">%100 Noktasal Tespit</h3>
            <p className="text-sm text-on-surface-variant">
              Gereksiz kırma işlemine son.
            </p>
          </div>
        </div>
      </div>
    ) : undefined;

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <section className="relative py-12 md:py-24 overflow-hidden bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="z-10 flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md w-fit">
              <span className="material-symbols-outlined text-base">verified</span>
              Kırmadan Dökmeden Çözüm
            </span>
            <h1 className="font-display-lg text-display-lg md:text-display-lg text-primary leading-tight">
              {heroTitle}
            </h1>
            {heroMeta ? (
              <div className="md:hidden">
                <HeroImagePanel
                  src={heroMeta.src}
                  alt={heroMeta.alt}
                  variant={heroMeta.variant}
                  imageClassName={heroMeta.imageClassName}
                  overlay={heroOverlay}
                  priority
                />
              </div>
            ) : null}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              {heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href={getPhoneHref(siteSettings.phone)}
                className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-label-md hover:bg-on-secondary-fixed transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">call</span>
                Acil Servis Çağır
              </a>
              <Link
                href="/iletisim"
                className="bg-surface text-on-surface border border-outline-variant px-8 py-4 rounded-xl font-label-md hover:bg-surface-container transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">info</span>
                Fiyat Bilgisi Al
              </Link>
            </div>
          </div>
          {heroMeta ? (
            <div className="hidden md:block">
              <HeroImagePanel
                src={heroMeta.src}
                alt={heroMeta.alt}
                variant={heroMeta.variant}
                imageClassName={heroMeta.imageClassName}
                overlay={heroOverlay}
                priority
              />
            </div>
          ) : null}
        </div>
      </section>
      <ServiceDetailBody
        service={service}
        displayTitle={displayTitle}
        relatedServiceItems={relatedServiceItems}
        heroImage={heroMeta ? { src: heroMeta.src, alt: heroMeta.alt } : undefined}
        relatedBlogPosts={relatedBlogPosts}
        localLanding={localLanding}
      />
    </>
  );
}

function ServiceDetailBody({
  service,
  displayTitle,
  relatedServiceItems,
  heroImage,
  relatedBlogPosts,
  localLanding,
}: {
  service: Service;
  displayTitle: string;
  relatedServiceItems: Service[];
  heroImage?: { src: string; alt: string };
  relatedBlogPosts: BlogPost[];
  localLanding?: ReturnType<typeof getLocalLandingByServiceSlug>;
}) {
  return (
    <>
      <ServiceAboutSection service={service} heroImage={heroImage} />

      {localLanding && (
        <section className="py-12 bg-surface-container-low px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 soft-shadow">
              <div>
                <span className="inline-flex items-center gap-2 text-secondary font-label-md text-sm mb-3">
                  <span className="material-symbols-outlined text-lg" aria-hidden="true">
                    location_on
                  </span>
                  Kağıthane&apos;de bu hizmet
                </span>
                <h2 className="font-headline-md text-headline-md text-primary font-semibold mb-2">
                  {localLanding.h1}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl leading-relaxed">
                  Bu genel hizmet sayfası İstanbul niyetini korur. Kağıthane, Çeliktepe ve çevre mahallelerde aynı hizmetin yerel süreç, belirti ve fiyat faktörlerini incelemek için ilgili yerel sayfaya geçebilirsiniz.
                </p>
              </div>
              <Link
                href={localLanding.canonicalPath}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-on-secondary rounded-xl font-label-md hover:bg-on-secondary-container transition-colors shrink-0"
              >
                Kağıthane sayfası
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {service.symptoms.length > 0 && (
        <section className="py-section-padding bg-surface-bright">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
                {displayTitle} Belirtileri — Ne Zaman Müdahale Gerekir?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
                {displayTitle} sorunları genellikle küçük belirtilerle başlar ve ihmal edildiğinde komşu dairelere, yapıya ve bütçenize ciddi zarar verebilir. Aşağıdaki işaretleri fark ettiğinizde erken müdahale hem maliyeti düşürür hem de kalıcı çözüm sağlar.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.symptoms.map((symptom) => (
                <div
                  key={symptom.title}
                  className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant soft-shadow"
                >
                  <div className="w-14 h-14 bg-secondary-container rounded-lg flex items-center justify-center mb-6">
                    <span
                      className="material-symbols-outlined fill text-secondary text-3xl"
                    >
                      {symptom.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md font-semibold text-primary mb-3">
                    {symptom.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {symptom.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.methods.length > 0 && (
        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
                Kullandığımız Yöntemler ve Ekipmanlar
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
                724 Tesisatçı olarak {displayTitle.toLowerCase()} hizmetinde amatör yöntemler yerine sektör standardı ekipman ve kanıtlanmış teknikler kullanıyoruz. Her yöntem, sorunun türüne göre seçilir ve işlem sonrası test ile doğrulanır.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.methods.map((method) => (
                <div
                  key={method.title}
                  className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant soft-shadow"
                >
                  <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-secondary text-2xl">
                      build
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md font-semibold text-primary mb-3">
                    {method.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {method.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.processSteps.length > 0 && (
        <section className="py-section-padding bg-surface-bright">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-12">
              <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">
                {displayTitle} Servis Sürecimiz
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
                İstanbul genelinde sunduğumuz {displayTitle.toLowerCase()} hizmetinde her adımı şeffaf biçimde planlıyor, işlem öncesi bilgilendirme yapıyor ve onayınız olmadan müdahaleye başlamıyoruz.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.processSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant"
                >
                  <div className="w-10 h-10 bg-secondary text-on-secondary rounded-full flex items-center justify-center font-label-md mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.faq.length > 0 && (
        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="inline-block py-1 px-3 rounded-full bg-secondary-container/30 text-secondary font-label-md text-label-md mb-4">
                Bilgi Bankası
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4 font-bold">
                {displayTitle} Hakkında Sık Sorulan Sorular
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {displayTitle.toLowerCase()} hizmeti, fiyatlandırma, süre, garanti ve acil müdahale konularında en çok merak edilen {service.faq.length} sorunun yanıtı.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <FAQAccordion items={service.faq} variant="premium" />
            </div>
            <p className="text-center mt-8 font-body-md text-body-md text-on-surface-variant">
              Sorunuz listede yok mu?{" "}
              <Link href="/iletisim" className="text-secondary font-label-md hover:text-on-secondary-container transition-colors">
                Bize ulaşın
              </Link>
              {" "}veya{" "}
              <Link href="/sss" className="text-secondary font-label-md hover:text-on-secondary-container transition-colors">
                genel SSS sayfamıza
              </Link>
              {" "}göz atın.
            </p>
          </div>
        </section>
      )}

      {relatedServiceItems.length > 0 && (
        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-8 text-center">
              İlgili Hizmetler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServiceItems.map((related) => (
                <Link
                  key={related.slug}
                  href={related.canonicalPath}
                  className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant soft-shadow service-card-hover transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-secondary text-2xl">
                      {related.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">
                    {related.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {related.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedBlogPosts.length > 0 && (
        <section className="py-section-padding bg-surface-bright">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4 text-center">
              {displayTitle} Rehberleri
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant text-center max-w-2xl mx-auto mb-8">
              Bu hizmetle ilgili belirtiler, erken müdahale ve servis süreci
              hakkında hazırladığımız kullanıcı odaklı rehberler.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={post.canonicalPath}
                  className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant soft-shadow service-card-hover transition-all"
                >
                  <span className="font-label-md text-label-md text-secondary">
                    {post.category}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary mt-3 mb-3">
                    {post.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-8 bg-surface-bright px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/hizmetler"
              className="text-secondary font-label-md hover:text-on-secondary-container transition-colors"
            >
              Tüm Hizmetler →
            </Link>
            <Link
              href="/hizmet-bolgeleri"
              className="text-secondary font-label-md hover:text-on-secondary-container transition-colors"
            >
              Hizmet Bölgeleri →
            </Link>
            <Link
              href="/hizmet-bolgeleri/kagithane"
              className="text-secondary font-label-md hover:text-on-secondary-container transition-colors"
            >
              Kağıthane →
            </Link>
            <Link
              href="/sss"
              className="text-secondary font-label-md hover:text-on-secondary-container transition-colors"
            >
              SSS →
            </Link>
            <Link
              href="/blog"
              className="text-secondary font-label-md hover:text-on-secondary-container transition-colors"
            >
              Blog →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-section-padding bg-primary-container text-on-primary">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-headline-lg text-headline-lg md:text-[40px] font-bold text-on-primary mb-4">
            Acil {displayTitle} Mi Gerekiyor?
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary-container mb-8 max-w-2xl mx-auto">
            İstanbul genelinde 7/24 acil {displayTitle.toLowerCase()} ekibimiz ortalama 30 dakika içinde adresinize ulaşır. Cihazlı tespit, yazılı teklif ve garantili işçilik ile hizmet veriyoruz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getPhoneHref(siteSettings.phone)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-on-secondary rounded-lg font-label-md hover:bg-on-secondary-container transition-colors shadow-lg"
            >
              <span className="material-symbols-outlined">call</span>
              Hemen Ara
            </a>
            <a
              href={getWhatsAppHref(siteSettings.whatsapp, siteSettings.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-surface text-primary rounded-lg font-label-md hover:bg-surface-variant transition-colors"
            >
              <span className="material-symbols-outlined">chat</span>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
