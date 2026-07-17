"use client";

import Link from "next/link";
import { useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ContextualLinks } from "@/components/ui/ContextualLinks";
import { StitchImage } from "@/components/ui/StitchImage";
import { faqCategories } from "@/data/mock/faqs";
import { pageImages } from "@/data/mock/images";
import { getPhoneHref, getWhatsAppHref, siteSettings } from "@/data/mock/siteSettings";
import { getInternalLinkLabel, popularServiceLinks, primaryHubLinks } from "@/lib/utils/internalLinks";
import type { FAQItem } from "@/types";

interface SSSPageClientProps {
  faqs: FAQItem[];
}

export function SSSPageClient({ faqs }: SSSPageClientProps) {
  const [activeCategory, setActiveCategory] = useState("genel");

  const categoryFaqs = faqs.filter((f) => f.category === activeCategory);

  return (
    <SiteLayout activePath="/sss">
      <section className="py-section-padding bg-surface-container-lowest px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md mb-4">
              Destek Merkezi
            </span>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-4">
              Sıkça Sorulan Sorular
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              İstanbul genelinde su kaçağı tespiti, tıkanıklık açma, petek temizleme, kombi servisi, fiyatlandırma, garanti ve acil müdahale konularında en çok merak edilen soruların yanıtları.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <nav className="lg:col-span-1 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={
                    activeCategory === cat.id
                      ? "cat-link active flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md whitespace-nowrap lg:whitespace-normal"
                      : "cat-link flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors font-label-md text-label-md whitespace-nowrap lg:whitespace-normal"
                  }
                >
                  <span className="material-symbols-outlined text-xl">{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </nav>

            <div className="lg:col-span-3">
              {faqCategories.map((cat) => (
                <div
                  key={cat.id}
                  id={cat.id}
                  className={activeCategory === cat.id ? "block" : "hidden"}
                  aria-hidden={activeCategory !== cat.id}
                >
                  <FAQAccordion items={faqs.filter((f) => f.category === cat.id)} />
                </div>
              ))}
              {categoryFaqs.some((f) => f.relatedPage) && (
                <div className="mt-8 pt-8 border-t border-outline-variant">
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                    Daha fazla bilgi için ilgili sayfalarımızı ziyaret edin:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      ...new Set(
                        categoryFaqs
                          .filter((f) => f.relatedPage)
                          .map((f) => f.relatedPage!)
                      ),
                    ].map((href) => (
                      <Link
                        key={href}
                        href={href}
                        className="px-4 py-2 rounded-full bg-secondary-container/30 text-secondary font-label-md hover:bg-secondary-container transition-colors"
                      >
                        {getInternalLinkLabel(href)}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              <ContextualLinks
                title="Popüler hizmetler"
                links={popularServiceLinks}
                className="mt-8 pt-8 border-t border-outline-variant"
              />
              <ContextualLinks
                title="Diğer sayfalar"
                links={primaryHubLinks}
                className="mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto bg-primary-container rounded-2xl md:rounded-[2rem] overflow-hidden soft-shadow border border-surface-dim relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            <div className="p-8 md:p-12 lg:col-span-2 flex flex-col justify-center relative z-10">
              <span className="text-secondary-container font-label-md text-label-md mb-2 block">
                Daha Fazla Yardıma Mı İhtiyacınız Var?
              </span>
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-primary mb-4">
                Sorunuzun cevabını bulamadınız mı?
              </h3>
              <p className="font-body-md text-body-md text-on-primary-container mb-8 max-w-lg">
                Uzman teknisyenlerimiz tesisat problemlerinizle ilgili tüm sorularınızı yanıtlamak ve size en doğru çözümü sunmak için hazırdır.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={getPhoneHref(siteSettings.phone)}
                  className="inline-flex items-center justify-center gap-2 bg-secondary text-on-secondary px-6 py-3 rounded-xl font-label-md text-label-md hover:bg-on-secondary-container transition-colors shadow-sm"
                >
                  <span className="material-symbols-outlined fill text-[20px]">
                    call
                  </span>
                  Hemen Arayın
                </a>
                <a
                  href={getWhatsAppHref(siteSettings.whatsapp, siteSettings.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-surface-container-lowest/10 text-on-primary border border-surface-container-lowest/20 px-6 py-3 rounded-xl font-label-md text-label-md hover:bg-surface-container-lowest/20 transition-colors backdrop-blur-sm"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  WhatsApp&apos;tan Yazın
                </a>
              </div>
            </div>
            <div className="relative h-64 md:h-auto min-h-[280px] hidden md:block">
              <StitchImage src={pageImages.sssCta} alt="Profesyonel tesisat teknisyeni" fill />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-container to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
