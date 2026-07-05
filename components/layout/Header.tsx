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
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <SiteLogo />
        <HeaderNav activePath={activePath} />
        <div className="hidden md:flex items-center gap-4">
          <a
            href={getWhatsAppHref(
              siteSettings.whatsapp,
              siteSettings.whatsappMessage
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-surface-container border border-outline-variant rounded-lg text-primary font-label-md hover:bg-surface-variant transition-colors"
          >
            <span className="material-symbols-outlined text-xl">chat</span>
            WhatsApp
          </a>
          <a
            href={getPhoneHref(siteSettings.phone)}
            className="flex items-center gap-2 px-6 py-3 bg-secondary text-on-secondary rounded-lg font-label-md hover:bg-on-secondary-container transition-colors shadow-md"
          >
            <span className="material-symbols-outlined text-xl">call</span>
            Hemen Ara
          </a>
        </div>
        <HeaderMobileMenu activePath={activePath} />
      </div>
    </header>
  );
}
