import { SiteLogo } from "@/components/layout/SiteLogo";
import { FooterNavSections } from "@/components/layout/FooterNavSections";
import { navigation } from "@/data/mock/navigation";
import { localServiceLandingPages } from "@/data/mock/localServiceLandingPages";
import { getPhoneHref, siteSettings } from "@/data/mock/siteSettings";

const footerMetaClass =
  "text-sm leading-[1.7] tracking-[0.015em] text-on-primary/78";

const footerSections = [
  {
    id: "kagithane",
    title: "Kağıthane Hizmetleri",
    links: localServiceLandingPages
      .filter((page) => page.indexable !== false)
      .map((page) => ({
        label: page.h1,
        href: page.canonicalPath,
      })),
    highlightLink: { label: "Kağıthane Tesisat Hizmet Bölgeleri →", href: "/hizmet-bolgeleri/kagithane" },
  },
  {
    id: "services",
    title: "Hizmetler",
    links: navigation.footer.services,
    highlightLink: { label: "Tüm Hizmetler →", href: "/hizmetler" },
  },
  {
    id: "company",
    title: "Kurumsal",
    links: navigation.footer.company,
  },
  {
    id: "legal",
    title: "Yasal",
    links: navigation.footer.legal,
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-primary-container text-on-primary-container pt-10 md:pt-section-padding pb-24 md:pb-section-padding px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 mb-12">
          <div className="md:col-span-1 pb-2 md:pb-0">
            <SiteLogo variant="dark" className="mb-5" imageClassName="h-14 md:h-16 w-auto" />
            <p className={`${footerMetaClass} mb-4 max-w-xs`}>
              İstanbul genelinde 7/24 profesyonel tesisat hizmeti. Kırmadan,
              cihazla tespit, yazılı teklif.
            </p>
            <address
              className={`${footerMetaClass} text-on-primary/62 not-italic flex flex-col items-start gap-1`}
            >
              <span>{siteSettings.address}</span>
              <a
                href={getPhoneHref(siteSettings.phone)}
                className="hover:text-on-primary transition-colors"
              >
                {siteSettings.phone}
              </a>
            </address>
          </div>

          <FooterNavSections sections={[...footerSections]} />
        </div>

        <div className="border-t border-on-primary/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs tracking-[0.04em] text-on-primary/58 text-center md:text-left">
            © {new Date().getFullYear()} 724 Tesisatçı. Tüm hakları saklıdır.
          </p>
          <p className="text-xs tracking-[0.04em] text-on-primary/58 text-center md:text-right">
            {siteSettings.workingHours}
          </p>
        </div>
      </div>
    </footer>
  );
}
