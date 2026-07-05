import Link from "next/link";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { navigation } from "@/data/mock/navigation";
import { siteSettings } from "@/data/mock/siteSettings";

export function Footer() {
  return (
    <footer className="bg-primary-container text-on-primary-container py-section-padding px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <SiteLogo variant="dark" className="mb-4" imageClassName="h-14 md:h-16 w-auto" />
            <p className="font-body-md text-body-md text-on-primary-container opacity-80 mb-4">
              İstanbul genelinde 7/24 profesyonel tesisat hizmeti. Kırmadan,
              cihazla tespit, garantili işçilik.
            </p>
            <p className="font-body-md text-body-md text-on-primary-container opacity-80">
              {siteSettings.address}
            </p>
          </div>
          <div>
            <h4 className="font-label-md text-label-md text-on-primary mb-4 uppercase tracking-wider">
              Hizmetler
            </h4>
            <ul className="space-y-2">
              {navigation.footer.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body-md text-body-md text-on-primary-container opacity-80 hover:text-secondary-container transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/hizmetler"
                  className="font-body-md text-body-md text-secondary-container hover:text-on-secondary-container transition-colors font-semibold"
                >
                  Tüm Hizmetler →
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-md text-label-md text-on-primary mb-4 uppercase tracking-wider">
              Kurumsal
            </h4>
            <ul className="space-y-2">
              {navigation.footer.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body-md text-body-md text-on-primary-container opacity-80 hover:text-secondary-container transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-label-md text-label-md text-on-primary mb-4 uppercase tracking-wider">
              Yasal
            </h4>
            <ul className="space-y-2">
              {navigation.footer.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body-md text-body-md text-on-primary-container opacity-80 hover:text-secondary-container transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-on-primary-container/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body-md text-body-md text-on-primary-container opacity-60">
            © {new Date().getFullYear()} 724 Tesisatçı. Tüm hakları saklıdır.
          </p>
          <p className="font-body-md text-body-md text-on-primary-container opacity-60">
            {siteSettings.workingHours}
          </p>
        </div>
      </div>
    </footer>
  );
}
