import dynamic from "next/dynamic";
import { HeaderNav } from "@/components/layout/HeaderNav";
import { SiteLogo } from "@/components/layout/SiteLogo";
import {
  getPhoneHref,
  getWhatsAppHref,
  siteSettings,
} from "@/data/mock/siteSettings";

const HeaderMobileMenu = dynamic(
  () =>
    import("@/components/layout/HeaderMobileMenu").then(
      (m) => m.HeaderMobileMenu
    ),
  { loading: () => null }
);

interface HeaderProps {
  activePath?: string;
}

export function Header({ activePath }: HeaderProps) {
  return (
    <header className="bg-surface-container-lowest border-b border-outline-variant shadow-sm w-full top-0 sticky z-50">
      <div className="flex lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] justify-between lg:justify-normal items-center gap-3 lg:gap-4 xl:gap-6 h-20 md:h-[5.5rem] px-margin-mobile md:px-margin-desktop max-w-header-max mx-auto w-full">
        <SiteLogo className="shrink-0" imageClassName="h-12 md:h-14 xl:h-16 w-auto" />
        <div className="hidden lg:flex justify-center min-w-0 px-1">
          <HeaderNav activePath={activePath} />
        </div>
        <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
          <a
            href={getWhatsAppHref(
              siteSettings.whatsapp,
              siteSettings.whatsappMessage
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 xl:px-5 py-2.5 xl:py-3 bg-surface-container border border-outline-variant rounded-lg text-primary font-label-md hover:bg-surface-variant transition-colors whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-xl" aria-hidden="true">
              chat
            </span>
            <span className="hidden xl:inline">WhatsApp</span>
          </a>
          <a
            href={getPhoneHref(siteSettings.phone)}
            className="flex items-center gap-2 px-3 xl:px-5 py-2.5 xl:py-3 bg-secondary text-on-secondary rounded-lg font-label-md hover:bg-on-secondary-container transition-colors shadow-md whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-xl" aria-hidden="true">
              call
            </span>
            <span className="hidden xl:inline">Hemen Ara</span>
            <span className="xl:hidden">Ara</span>
          </a>
        </div>
        <div className="lg:hidden shrink-0">
          <HeaderMobileMenu activePath={activePath} />
        </div>
      </div>
    </header>
  );
}
