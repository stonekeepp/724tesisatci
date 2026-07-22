"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { navigation } from "@/data/mock/navigation";
import { isNavActive, isNavChildActive } from "@/lib/utils/navActive";

interface HeaderNavProps {
  activePath?: string;
}

export function HeaderNav({ activePath }: HeaderNavProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const headerItems = navigation.header;

  const closeMenus = useCallback(() => setOpenMenu(null), []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenus();
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") closeMenus();
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeMenus]);

  return (
    <nav ref={navRef} className="hidden lg:flex flex-nowrap items-center justify-center gap-3 xl:gap-5 2xl:gap-7 min-w-0">
      {headerItems.map((item) => {
        const active = isNavActive(item, activePath, headerItems);
        const hasChildren = Boolean(item.children?.length);

        if (!hasChildren) {
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                active
                  ? "shrink-0 whitespace-nowrap text-secondary font-bold border-b-2 border-secondary pb-1 font-label-md text-label-md"
                  : "shrink-0 whitespace-nowrap text-on-surface-variant font-medium hover:text-secondary transition-colors duration-200 font-label-md text-label-md"
              }
            >
              {item.label}
            </Link>
          );
        }

        const isOpen = openMenu === item.href;

        return (
          <div
            key={item.href}
            className="relative shrink-0"
            onMouseEnter={() => setOpenMenu(item.href)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link
              href={item.href}
              aria-expanded={isOpen}
              aria-haspopup="true"
              className={
                active
                  ? "inline-flex items-center gap-0.5 whitespace-nowrap text-secondary font-bold border-b-2 border-secondary pb-1 font-label-md text-label-md"
                  : "inline-flex items-center gap-0.5 whitespace-nowrap text-on-surface-variant font-medium hover:text-secondary transition-colors duration-200 font-label-md text-label-md"
              }
            >
              {item.label}
              <span
                className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              >
                expand_more
              </span>
            </Link>

            {isOpen && (
              <div className="absolute left-0 top-full pt-2 z-[60] min-w-[280px]">
                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-lg py-2 max-h-[70vh] overflow-y-auto">
                  <Link
                    href={item.href}
                    onClick={closeMenus}
                    className="block px-4 py-2.5 font-label-md text-label-md text-secondary font-semibold hover:bg-surface-container transition-colors border-b border-outline-variant/50 mb-1"
                  >
                    Tüm {item.label} →
                  </Link>
                  {item.children!.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={closeMenus}
                      className={
                        isNavChildActive(child.href, activePath)
                          ? "block px-4 py-2 font-body-md text-body-md text-secondary bg-secondary-container/30 font-medium"
                          : "block px-4 py-2 font-body-md text-body-md text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors"
                      }
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
