import Link from "next/link";
import { navigation } from "@/data/mock/navigation";
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
        <Link
          href="/"
          className="font-headline-md text-headline-md font-bold text-primary"
        >
          724 Tesisatçı
        </Link>
        <nav className="hidden md:flex gap-8">
          {navigation.header.map((link) => {
            const isActive = activePath === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-secondary font-bold border-b-2 border-secondary pb-1 font-label-md text-label-md"
                    : "text-on-surface-variant font-medium hover:text-secondary transition-colors duration-200 font-label-md text-label-md"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
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
        <button className="md:hidden text-primary" aria-label="Menü">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </header>
  );
}
