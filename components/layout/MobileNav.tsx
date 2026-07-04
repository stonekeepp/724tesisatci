import Link from "next/link";
import {
  getPhoneHref,
  getWhatsAppHref,
  siteSettings,
} from "@/data/mock/siteSettings";

interface MobileNavProps {
  activePath?: string;
}

export function MobileNav({ activePath }: MobileNavProps) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface-container-lowest border-t border-outline-variant z-50 px-4 py-2">
      <div className="flex justify-around items-center max-w-container-max mx-auto">
        <a
          href={getPhoneHref(siteSettings.phone)}
          className="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-highest p-2 rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">call</span>
          <span className="font-label-md text-[10px] mt-0.5">Ara</span>
        </a>
        <a
          href={getWhatsAppHref(
            siteSettings.whatsapp,
            siteSettings.whatsappMessage
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-highest p-2 rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">chat</span>
          <span className="font-label-md text-[10px] mt-0.5">WhatsApp</span>
        </a>
        <Link
          href="/iletisim"
          className={
            activePath === "/iletisim"
              ? "flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-xl px-4 py-1 active:scale-98 transition-all"
              : "flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-highest p-2 rounded-lg transition-colors"
          }
        >
          <span className="material-symbols-outlined text-2xl">edit_document</span>
          <span className="font-label-md text-[10px] mt-0.5">Talep</span>
        </Link>
      </div>
    </nav>
  );
}
