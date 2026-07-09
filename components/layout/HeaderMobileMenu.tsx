"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { navigation } from "@/data/mock/navigation";
import {
  getPhoneHref,
  getWhatsAppHref,
  siteSettings,
} from "@/data/mock/siteSettings";
import type { NavItem } from "@/types";

interface HeaderMobileMenuProps {
  activePath?: string;
}

function isNavActive(item: NavItem, activePath?: string) {
  if (!activePath) return false;
  if (activePath === item.href) return true;
  return (
    item.children?.some(
      (child) =>
        activePath === child.href || activePath.startsWith(`${child.href}/`)
    ) ?? false
  );
}

function isChildActive(href: string, activePath?: string) {
  if (!activePath) return false;
  return activePath === href || activePath.startsWith(`${href}/`);
}

export function HeaderMobileMenu({ activePath }: HeaderMobileMenuProps) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const close = useCallback(() => {
    setOpen(false);
    setExpanded(null);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [close]);

  useEffect(() => {
    close();
  }, [activePath, close]);

  function toggleExpanded(href: string) {
    setExpanded((prev) => (prev === href ? null : href));
  }

  return (
    <>
      <button
        type="button"
        className="md:hidden text-primary p-1 -mr-1"
        aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="material-symbols-outlined text-3xl" aria-hidden="true">
          {open ? "close" : "menu"}
        </span>
      </button>

      {open && (
        <>
          <button
            type="button"
            className="md:hidden fixed inset-0 top-20 bg-black/40 z-40"
            aria-label="Menüyü kapat"
            onClick={close}
          />
          <div
            className="md:hidden fixed inset-x-0 top-20 bottom-0 z-40 bg-surface-container-lowest border-t border-outline-variant overflow-y-auto overscroll-contain"
            role="dialog"
            aria-modal="true"
            aria-label="Mobil menü"
          >
            <nav className="px-margin-mobile py-4 flex flex-col gap-1">
              {navigation.header.map((item) => {
                const active = isNavActive(item, activePath);
                const hasChildren = Boolean(item.children?.length);
                const isExpanded = expanded === item.href;

                if (!hasChildren) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={close}
                      className={
                        active
                          ? "flex items-center px-4 py-3 rounded-xl font-label-md text-label-md text-secondary bg-secondary-container/30 font-semibold"
                          : "flex items-center px-4 py-3 rounded-xl font-label-md text-label-md text-on-background hover:bg-surface-container transition-colors"
                      }
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div key={item.href} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => toggleExpanded(item.href)}
                      className={
                        active
                          ? "flex items-center justify-between w-full px-4 py-3 rounded-xl font-label-md text-label-md text-secondary bg-secondary-container/30 font-semibold"
                          : "flex items-center justify-between w-full px-4 py-3 rounded-xl font-label-md text-label-md text-on-background hover:bg-surface-container transition-colors"
                      }
                      aria-expanded={isExpanded}
                    >
                      {item.label}
                      <span
                        className={`material-symbols-outlined text-[20px] transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      >
                        expand_more
                      </span>
                    </button>

                    {isExpanded && (
                      <div className="flex flex-col pl-2 pb-2 max-h-[50vh] overflow-y-auto">
                        <Link
                          href={item.href}
                          onClick={close}
                          className="px-4 py-2.5 font-label-md text-label-md text-secondary font-semibold hover:bg-surface-container rounded-lg transition-colors"
                        >
                          Tüm {item.label} →
                        </Link>
                        {item.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={close}
                            className={
                              isChildActive(child.href, activePath)
                                ? "px-4 py-2 font-body-md text-body-md text-secondary bg-secondary-container/20 rounded-lg font-medium"
                                : "px-4 py-2 font-body-md text-body-md text-on-surface-variant hover:bg-surface-container hover:text-primary rounded-lg transition-colors"
                            }
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="px-margin-mobile pb-6 pt-2 flex flex-col gap-3 border-t border-outline-variant mt-2">
              <a
                href={getPhoneHref(siteSettings.phone)}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-on-secondary rounded-xl font-label-md hover:bg-on-secondary-container transition-colors shadow-md"
              >
                <span className="material-symbols-outlined text-xl" aria-hidden="true">
                  call
                </span>
                Hemen Ara
              </a>
              <a
                href={getWhatsAppHref(
                  siteSettings.whatsapp,
                  siteSettings.whatsappMessage
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#075E54] text-white rounded-xl font-label-md hover:bg-[#054A42] transition-colors shadow-md"
              >
                <span className="material-symbols-outlined text-xl" aria-hidden="true">
                  chat
                </span>
                WhatsApp
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
