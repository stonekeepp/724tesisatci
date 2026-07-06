"use client";

import Link from "next/link";
import { useState } from "react";

export interface FooterNavLink {
  label: string;
  href: string;
}

export interface FooterNavSection {
  id: string;
  title: string;
  links: FooterNavLink[];
  highlightLink?: FooterNavLink;
}

interface FooterNavSectionsProps {
  sections: FooterNavSection[];
}

const footerHeadingClass =
  "text-[11px] text-white uppercase tracking-[0.14em] font-semibold";

const footerLinkClass =
  "text-[15px] leading-relaxed tracking-[0.01em] text-white/80 hover:text-white transition-colors duration-200";

export function FooterNavSections({ sections }: FooterNavSectionsProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  function toggleSection(id: string) {
    setOpenSections((current) => ({
      ...current,
      [id]: !current[id],
    }));
  }

  return (
    <div className="md:contents">
      {sections.map((section) => {
        const isOpen = Boolean(openSections[section.id]);

        return (
          <div
            key={section.id}
            className="border-b border-on-primary/15 md:border-0 pb-4 md:pb-0 last:border-b-0"
          >
            <button
              type="button"
              className="md:hidden w-full flex items-center justify-between gap-4 py-3 text-left"
              onClick={() => toggleSection(section.id)}
              aria-expanded={isOpen}
              aria-controls={`footer-section-${section.id}`}
            >
              <span className={footerHeadingClass}>{section.title}</span>
              <span
                className={`accordion-toggle-icon text-white/80 ${
                  isOpen ? "is-open" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            <h4 className={`hidden md:block ${footerHeadingClass} mb-5`}>
              {section.title}
            </h4>

            <div
              id={`footer-section-${section.id}`}
              className={`accordion-content footer-accordion-content md:max-h-none md:overflow-visible ${
                isOpen ? "open" : ""
              }`}
            >
              <ul className="space-y-2.5 pb-1 md:pb-0">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={footerLinkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
                {section.highlightLink && (
                  <li className="pt-1">
                    <Link
                      href={section.highlightLink.href}
                      className="text-[15px] leading-relaxed tracking-[0.02em] text-white/80 hover:text-white transition-colors duration-200 font-semibold"
                    >
                      {section.highlightLink.label}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
