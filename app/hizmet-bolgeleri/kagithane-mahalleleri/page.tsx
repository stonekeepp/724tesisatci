import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { getNeighborhoodsByDistrict } from "@/lib/services/neighborhoodService";
import { buildMetadata } from "@/lib/services/seoService";
import {
  buildBreadcrumbSchema,
  buildItemListSchema,
} from "@/lib/services/schemaService";

export const metadata = buildMetadata({
  title: "Kağıthane Mahalleleri | 19 Mahalle Tesisat Yönlendirme",
  description:
    "Kağıthane'nin 19 mahallesine 7/24 tesisat yönlendirmesi. Çağlayan, Gültepe, Seyrantepe, Talatpaşa, Emniyet Evleri ve tüm mahalle listesi.",
  canonicalPath: "/hizmet-bolgeleri/kagithane-mahalleleri",
});

export default async function KagithaneMahalleleriPage() {
  const neighborhoods = await getNeighborhoodsByDistrict("kagithane");

  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hizmet Bölgeleri", href: "/hizmet-bolgeleri" },
    { label: "Kağıthane", href: "/hizmet-bolgeleri/kagithane" },
    { label: "Mahalleler", href: "/hizmet-bolgeleri/kagithane-mahalleleri" },
  ];

  const schemas = [
    buildBreadcrumbSchema(breadcrumbs),
    buildItemListSchema(
      "Kağıthane Mahalleleri",
      neighborhoods.map((n) => ({
        name: n.title,
        url: n.canonicalPath,
      }))
    ),
  ];

  return (
    <SiteLayout activePath="/hizmet-bolgeleri">
      <JsonLdScript data={schemas} />
      <Breadcrumb items={breadcrumbs} />
      <section className="py-section-padding bg-surface-container-lowest px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-6 text-center">
            Kağıthane Mahalleleri
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto text-center mb-12">
            Kağıthane&apos;nin 19 mahallesine 7/24 tesisat yönlendirmesi sunuyoruz. Ana yerel hedef için{" "}
            <Link href="/" className="text-secondary hover:text-primary transition-colors">
              Kağıthane tesisatçı ana sayfası
            </Link>
            &apos;na, mahalle/hizmet hub’ı için{" "}
            <Link href="/hizmet-bolgeleri/kagithane" className="text-secondary hover:text-primary transition-colors">
              Kağıthane tesisat hizmet bölgeleri
            </Link>
            &apos;ne bakın.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.map((n) => (
              <Link
                key={n.slug}
                href={n.canonicalPath}
                className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant hover-lift flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4 text-secondary">
                    <span className="material-symbols-outlined fill">
                      location_on
                    </span>
                    <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">
                      {n.title}
                    </h2>
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
        </div>
      </section>
    </SiteLayout>
  );
}
