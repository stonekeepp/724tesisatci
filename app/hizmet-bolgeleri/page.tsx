import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { getAllLocations } from "@/lib/services/locationService";
import { getNeighborhoodsByDistrict } from "@/lib/services/neighborhoodService";
import { buildMetadata } from "@/lib/services/seoService";
import { staticPageSeo } from "@/data/mock/seo";
import { pageImages } from "@/data/mock/images";
import { StitchImage } from "@/components/ui/StitchImage";

export const metadata = buildMetadata(staticPageSeo["hizmet-bolgeleri"]);

export default async function HizmetBolgeleriPage() {
  const locations = await getAllLocations();
  const kagithaneNeighborhoods = await getNeighborhoodsByDistrict("kagithane");

  return (
    <SiteLayout activePath="/hizmet-bolgeleri">
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid md:grid-cols-2 gap-gutter items-center">
          <div className="flex flex-col gap-stack-lg">
            <h1 className="font-display-lg text-display-lg text-primary">
              İstanbul Tesisatçı Hizmet Bölgeleri
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Profesyonel sıhhi tesisat çözümlerimizi İstanbul&apos;un dört bir yanına ulaştırıyoruz. Geniş servis ağımız ve stratejik noktalandırılmış mobil ekiplerimiz sayesinde, acil durumlarınıza dakikalar içinde müdahale ediyoruz.
            </p>
            <div className="flex items-center gap-4 mt-4 flex-wrap">
              <span className="flex items-center gap-2 font-label-md text-label-md text-secondary bg-secondary-container px-3 py-1.5 rounded-full">
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
                Tüm İstanbul Geneli
              </span>
              <span className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-full">
                <span className="material-symbols-outlined text-[18px]">timer</span>
                Hızlı Müdahale
              </span>
            </div>
          </div>
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden soft-shadow border border-outline-variant bg-surface-container-low">
            <StitchImage src={pageImages.istanbulMap} alt="İstanbul hizmet bölgeleri haritası" fill className="opacity-90" />
          </div>
        </div>
      </section>

      <section className="py-section-padding bg-surface-container-low px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          {locations.map((location) => (
            <div
              key={location.slug}
              className="bg-primary-container rounded-2xl p-8 md:p-12 mb-8 text-on-primary"
            >
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold mb-2">
                {location.slug === "kagithane"
                  ? "Merkez Operasyon: Kağıthane"
                  : location.title}
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary-container opacity-90 mb-6 max-w-3xl">
                {location.description}
              </p>
              <Link
                href={location.canonicalPath}
                className="inline-flex items-center gap-2 px-6 py-3 bg-on-primary text-primary rounded-lg font-label-md hover:bg-surface-container-lowest transition-colors"
              >
                {location.title} Detay{" "}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          ))}

          <div className="mt-12">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6 text-center">
              Kağıthane Mahalleleri
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kagithaneNeighborhoods.map((n) => (
                <Link
                  key={n.slug}
                  href={n.canonicalPath}
                  className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant hover-lift flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4 text-secondary">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        location_on
                      </span>
                      <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                        {n.title}
                      </h3>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                      {n.shortDescription}
                    </p>
                  </div>
                  <span className="inline-flex items-center text-secondary font-label-md text-label-md">
                    Detaylı İncele{" "}
                    <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                  </span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/hizmet-bolgeleri/kagithane-mahalleleri"
                className="text-secondary font-label-md hover:text-on-secondary-container transition-colors"
              >
                Tüm Kağıthane Mahalleleri →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
