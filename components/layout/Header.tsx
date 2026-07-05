import { HeaderNav } from "@/components/layout/HeaderNav";
import { HeaderMobileMenu } from "@/components/layout/HeaderMobileMenu";
import { SiteLogo } from "@/components/layout/SiteLogo";
import {
  getPhoneHref,
  getWhatsAppHref,
  siteSettings,
} from "@/data/mock/siteSettings";

interface HeaderProps {
  activePath?: string;
}

export function Header({ activePath }: HeaderProps) {
  return (
    <header className="bg-surface-container-lowest border-b border-outline-variant shadow-sm w-full top-0 sticky z-50">
      <div className="flex md:grid md:grid-cols-[auto_1fr_auto] justify-between md:justify-normal items-center gap-4 md:gap-8 lg:gap-12 h-20 md:h-[5.5rem] px-margin-mobile md:px-margin-desktop max-w-header-max mx-auto w-full">
        <SiteLogo className="shrink-0" />
        <div className="hidden md:flex justify-center min-w-0">
          <HeaderNav activePath={activePath} />
        </div>
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href={getWhatsAppHref(
              siteSettings.whatsapp,
              siteSettings.whatsappMessage
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-surface-container border border-outline-variant rounded-lg text-primary font-label-md hover:bg-surface-variant transition-colors whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-xl" aria-hidden="true">
              chat
            </span>
            WhatsApp
          </a>
          <a
            href={getPhoneHref(siteSettings.phone)}
            className="flex items-center gap-2 px-6 py-3 bg-secondary text-on-secondary rounded-lg font-label-md hover:bg-on-secondary-container transition-colors shadow-md whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-xl" aria-hidden="true">
              call
            </span>
            Hemen Ara
          </a>
        </div>
        <div className="md:hidden shrink-0">
          <HeaderMobileMenu activePath={activePath} />
        </div>
      </div>
    </header>
  );
}
