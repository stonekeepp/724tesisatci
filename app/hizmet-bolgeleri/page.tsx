import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContextualLinks } from "@/components/ui/ContextualLinks";
import { getDistrictLocations, getLocationBySlug } from "@/data/mock/locations";
import { getNeighborhoodsByDistrict } from "@/lib/services/neighborhoodService";
import { buildMetadata } from "@/lib/services/seoService";
import { staticPageSeo } from "@/data/mock/seo";
import { pageImages } from "@/data/mock/images";
import { StitchImage } from "@/components/ui/StitchImage";
import {
  getPhoneHref,
  getWhatsAppHref,
  siteSettings,
} from "@/data/mock/siteSettings";
import { primaryHubLinks } from "@/lib/utils/internalLinks";

export const metadata = buildMetadata(staticPageSeo["hizmet-bolgeleri"]);

export default async function HizmetBolgeleriPage() {
  const istanbul = getLocationBySlug("istanbul");
  const districts = getDistrictLocations();
  const avrupaDistricts = districts.filter((d) => d.side === "avrupa");
  const anadoluDistricts = districts.filter((d) => d.side === "anadolu");
  const kagithane = getLocationBySlug("kagithane");
  const kagithaneNeighborhoods = await getNeighborhoodsByDistrict("kagithane");

  return (
    <SiteLayout activePath="/hizmet-bolgeleri">
      <section className="hero-bg py-section-padding px-margin-mobile md:px-margin-desktop border-b border-outline-variant">
        <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-gutter items-center">
          <div className="flex flex-col gap-stack-lg">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary-container text-secondary-container font-label-md text-label-md w-fit">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                map
              </span>
              39 İlçe · 7/24 Servis
            </span>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary font-bold leading-tight">
              İstanbul Tesisatçı Hizmet Bölgeleri
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
              İstanbul&apos;un 39 ilçesinde 7/24 profesyonel tesisat hizmeti. Merkez operasyonumuz Kağıthane&apos;de; Avrupa ve Anadolu Yakası&apos;na hızlı mobil ekip yönlendirmesi yapıyoruz.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={getPhoneHref(siteSettings.phone)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-on-secondary rounded-xl font-label-md hover:bg-on-secondary-container transition-colors shadow-lg"
              >
                <span className="material-symbols-outlined" aria-hidden="true">call</span>
                Hemen Ara
              </a>
              <a
                href={getWhatsAppHref(siteSettings.whatsapp, siteSettings.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-xl font-label-md hover:bg-[#128C7E] transition-colors shadow-lg"
              >
                <span className="material-symbols-outlined" aria-hidden="true">chat</span>
                WhatsApp
              </a>
              <Link
                href="/hizmet-bolgeleri/istanbul"
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface text-primary border border-outline-variant rounded-xl font-label-md hover:bg-surface-variant transition-colors"
              >
                İstanbul Geneli
              </Link>
            </div>
          </div>
          <div className="relative w-full h-[380px] rounded-2xl overflow-hidden soft-shadow border border-outline-variant bg-surface-container-low mt-8 md:mt-0">
            <StitchImage src={pageImages.istanbulMap} alt="İstanbul hizmet bölgeleri haritası" fill className="opacity-90" />
          </div>
        </div>
      </section>

      {kagithane && (
        <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-primary-container">
          <div className="max-w-container-max mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div>
                <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 text-secondary-container font-label-md text-label-md mb-3">
                  <span className="material-symbols-outlined text-base" aria-hidden="true">home_pin</span>
                  Merkez Operasyon
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-primary font-bold mb-2">
                  Kağıthane — Ana Operasyon Merkezi
                </h2>
                <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl">
                  {kagithane.description}
                </p>
              </div>
              <Link
                href={kagithane.canonicalPath}
                className="inline-flex items-center gap-2 px-6 py-3 bg-on-primary text-primary rounded-xl font-label-md hover:bg-surface-container-lowest transition-colors shrink-0"
              >
                Kağıthane Detay
                <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {kagithaneNeighborhoods.map((n) => (
                <Link
                  key={n.slug}
                  href={n.canonicalPath}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15 hover:bg-white/15 transition-colors text-center"
                >
                  <span className="font-label-md text-sm text-on-primary font-semibold block">
                    {n.title}
                  </span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/hizmet-bolgeleri/kagithane-mahalleleri"
                className="text-secondary-container font-label-md hover:text-white transition-colors"
              >
                Tüm 19 Kağıthane Mahalleleri →
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-section-padding bg-surface-bright px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold mb-3">
              Avrupa Yakası İlçeleri
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Avrupa Yakası&apos;nın tüm ilçelerinde 7/24 tesisat hizmeti.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {avrupaDistricts.map((d) => (
              <Link
                key={d.slug}
                href={d.canonicalPath}
                className={`p-4 rounded-xl border text-center hover-lift transition-all ${
                  d.isHeadquarters
                    ? "bg-primary-container text-on-primary border-secondary/40"
                    : "bg-surface-container-lowest border-outline-variant hover:border-secondary/30"
                }`}
              >
                <span className="font-label-md text-sm font-semibold block">{d.title}</span>
                {d.isHeadquarters && (
                  <span className="text-xs text-secondary-container mt-1 block">Merkez</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-padding bg-surface-container-low px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold mb-3">
              Anadolu Yakası İlçeleri
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Anadolu Yakası&apos;nın tüm ilçelerinde 7/24 tesisat hizmeti.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {anadoluDistricts.map((d) => (
              <Link
                key={d.slug}
                href={d.canonicalPath}
                className="p-4 rounded-xl border text-center hover-lift transition-all bg-surface-container-lowest border-outline-variant hover:border-secondary/30"
              >
                <span className="font-label-md text-sm font-semibold block">{d.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {istanbul && (
        <section className="py-section-padding bg-surface-bright px-margin-mobile md:px-margin-desktop text-center">
          <div className="max-w-container-max mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4 font-bold">
              İstanbul Geneli Tesisat Hizmeti
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 max-w-2xl mx-auto">
              {istanbul.shortDescription}
            </p>
            <Link
              href={istanbul.canonicalPath}
              className="inline-flex items-center gap-2 text-secondary font-label-md hover:text-on-secondary-container transition-colors"
            >
              İstanbul Geneli Detay
              <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
            </Link>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/hizmetler"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-xl font-label-md hover:bg-primary-container transition-colors"
              >
                Tüm Hizmetlerimiz
                <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface text-primary border border-outline-variant rounded-xl font-label-md hover:bg-surface-variant transition-colors"
              >
                Tesisat Blog
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-section-padding bg-surface-container-low px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <ContextualLinks title="Site genelinde gezinin" links={primaryHubLinks} />
        </div>
      </section>
    </SiteLayout>
  );
}
