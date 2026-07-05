"use client";

import Link from "next/link";
import { useState } from "react";
import { getInternalLinkLabel } from "@/lib/utils/internalLinks";

export interface FAQAccordionItem {
  question: string;
  answer: string;
  relatedPage?: string;
  relatedPageLabel?: string;
}

interface FAQAccordionProps {
  items: FAQAccordionItem[];
  variant?: "default" | "premium";
}

export function FAQAccordion({ items, variant = "default" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    variant === "premium" ? 0 : null
  );
  const isPremium = variant === "premium";

  return (
    <div className={isPremium ? "space-y-3" : "space-y-4"}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={
              isPremium
                ? `rounded-xl border transition-all duration-200 ${
                    isOpen
                      ? "border-secondary/40 bg-surface-container-lowest shadow-sm"
                      : "border-outline-variant/60 bg-surface-container-lowest/80 hover:border-secondary/25"
                  }`
                : "border-b border-outline-variant pb-4"
            }
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={`w-full flex items-center justify-between text-left ${
                isPremium ? "px-5 py-4 gap-4" : "py-2"
              }`}
              aria-expanded={isOpen}
            >
              <span
                className={`font-label-md font-semibold text-on-surface pr-4 ${
                  isPremium ? "text-base leading-snug" : "text-body-lg"
                }`}
              >
                {item.question}
              </span>
              <span
                className={`material-symbols-outlined shrink-0 transition-transform duration-200 ${
                  isPremium
                    ? `w-8 h-8 rounded-full flex items-center justify-center text-lg ${
                        isOpen
                          ? "bg-secondary text-on-secondary rotate-0"
                          : "bg-secondary-container text-secondary"
                      }`
                    : "text-secondary"
                }`}
              >
                {isOpen ? "remove" : "add"}
              </span>
            </button>
            <div className={`accordion-content ${isOpen ? "open" : ""}`}>
              <div
                className={`font-body-md text-body-md text-on-surface-variant leading-relaxed ${
                  isPremium ? "px-5 pb-5 pt-0" : "pt-2 pb-4"
                }`}
              >
                <p>{item.answer}</p>
                {item.relatedPage && (
                  <Link
                    href={item.relatedPage}
                    className="inline-flex items-center gap-1 mt-3 text-secondary font-label-md hover:text-primary transition-colors"
                  >
                    {item.relatedPageLabel ?? getInternalLinkLabel(item.relatedPage)}
                    <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                      arrow_forward
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
