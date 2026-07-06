import Link from "next/link";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { navigation } from "@/data/mock/navigation";
import { siteSettings } from "@/data/mock/siteSettings";

const footerHeadingClass =
  "font-label-md text-[11px] text-on-primary mb-5 uppercase tracking-[0.14em] font-semibold";

const footerLinkClass =
  "text-[15px] leading-relaxed tracking-[0.01em] text-on-primary-container/82 hover:text-secondary-container transition-colors duration-200";

const footerMetaClass =
  "text-sm leading-[1.7] tracking-[0.015em] text-on-primary-container/68";

export function Footer() {
  return (
    <footer className="bg-primary-container text-on-primary-container pt-10 md:pt-section-padding pb-24 md:pb-section-padding px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <SiteLogo variant="dark" className="mb-5" imageClassName="h-14 md:h-16 w-auto" />
            <p className={`${footerMetaClass} mb-4 max-w-xs`}>
              İstanbul genelinde 7/24 profesyonel tesisat hizmeti. Kırmadan,
              cihazla tespit, garantili işçilik.
            </p>
            <p className={`${footerMetaClass} text-on-primary-container/55`}>
              {siteSettings.address}
            </p>
          </div>
          <div>
            <h4 className={footerHeadingClass}>Hizmetler</h4>
            <ul className="space-y-2.5">
              {navigation.footer.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/hizmetler"
                  className="text-[15px] leading-relaxed tracking-[0.02em] text-secondary-container hover:text-on-secondary-container transition-colors duration-200 font-semibold"
                >
                  Tüm Hizmetler →
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={footerHeadingClass}>Kurumsal</h4>
            <ul className="space-y-2.5">
              {navigation.footer.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={footerHeadingClass}>Yasal</h4>
            <ul className="space-y-2.5">
              {navigation.footer.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-on-primary-container/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs tracking-[0.04em] text-on-primary-container/45 text-center md:text-left">
            © {new Date().getFullYear()} 724 Tesisatçı. Tüm hakları saklıdır.
          </p>
          <p className="text-xs tracking-[0.04em] text-on-primary-container/45 text-center md:text-right">
            {siteSettings.workingHours}
          </p>
        </div>
      </div>
    </footer>
  );
}
