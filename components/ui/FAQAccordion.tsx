"use client";

import { useState } from "react";

interface FAQAccordionProps {
  items: { question: string; answer: string }[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border-b border-outline-variant pb-4"
        >
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between text-left py-2"
          >
            <span className="font-label-md text-body-lg font-semibold text-on-surface pr-4">
              {item.question}
            </span>
            <span className="material-symbols-outlined text-secondary shrink-0">
              {openIndex === index ? "remove" : "add"}
            </span>
          </button>
          <div
            className={`accordion-content ${openIndex === index ? "open" : ""}`}
          >
            <p className="font-body-md text-body-md text-on-surface-variant pt-2 pb-4">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
