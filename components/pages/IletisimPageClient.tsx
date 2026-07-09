"use client";

import Link from "next/link";
import { useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContextualLinks } from "@/components/ui/ContextualLinks";
import { siteSettings, getPhoneHref, getWhatsAppHref, getMapsDirectionsHref } from "@/data/mock/siteSettings";
import { pageImages } from "@/data/mock/images";
import { StitchImage } from "@/components/ui/StitchImage";
import { popularServiceLinks, primaryHubLinks } from "@/lib/utils/internalLinks";
import {
  contactDistrictOptions,
  getContactNeighborhoodOptions,
} from "@/data/mock/contactLocations";
import {
  isValidTurkishMobilePhone,
  sanitizePhoneInput,
} from "@/lib/utils/phone";

const selectClassName =
  "w-full h-12 bg-surface border border-outline-variant rounded-lg px-4 form-input-focus font-body-md text-body-md appearance-none cursor-pointer";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [districtSlug, setDistrictSlug] = useState("");
  const [neighborhood, setNeighborhood] = useState("");

  const neighborhoodOptions = districtSlug
    ? getContactNeighborhoodOptions(districtSlug)
    : [];

  function handleDistrictChange(value: string) {
    setDistrictSlug(value);
    setNeighborhood("");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);
    const phone = (formData.get("phone") as string).trim();
    const serviceType = formData.get("serviceType") as string;

    const clientErrors: Record<string, string[]> = {};

    if (!isValidTurkishMobilePhone(phone)) {
      clientErrors.phone = [
        "Geçerli bir Türkiye cep telefonu numarası giriniz (05XX XXX XX XX)",
      ];
    }
    if (!districtSlug) {
      clientErrors.districtSlug = ["İlçe seçimi zorunludur"];
    }
    if (!neighborhood) {
      clientErrors.neighborhood = ["Mahalle seçimi zorunludur"];
    }
    if (!serviceType) {
      clientErrors.serviceType = ["Hizmet türü seçimi zorunludur"];
    }

    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      setStatus("error");
      return;
    }

    const payload = {
      fullName: formData.get("fullName") as string,
      phone,
      districtSlug,
      neighborhood,
      serviceType,
      description: formData.get("description") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrors(data.errors || { general: [data.error || "Bir hata oluştu"] });
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
      setDistrictSlug("");
      setNeighborhood("");
    } catch {
      setStatus("error");
      setErrors({ general: ["Bağlantı hatası. Lütfen tekrar deneyin."] });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block font-label-md text-label-md text-on-surface mb-2">
          Ad Soyad *
        </label>
        <input
          name="fullName"
          required
          className="w-full h-12 bg-surface border border-outline-variant rounded-lg px-4 form-input-focus font-body-md text-body-md"
          placeholder="Adınız Soyadınız"
        />
        {errors.fullName && (
          <p className="text-error text-sm mt-1">{errors.fullName[0]}</p>
        )}
      </div>
      <div>
        <label className="block font-label-md text-label-md text-on-surface mb-2">
          Telefon *
        </label>
        <input
          name="phone"
          required
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          pattern="[\d+\s()-]+"
          title="Geçerli bir Türkiye cep telefonu numarası giriniz (05XX XXX XX XX)"
          onInput={(e) => {
            e.currentTarget.value = sanitizePhoneInput(e.currentTarget.value);
          }}
          className="w-full h-12 bg-surface border border-outline-variant rounded-lg px-4 form-input-focus font-body-md text-body-md"
          placeholder="05XX XXX XX XX"
        />
        {errors.phone && (
          <p className="text-error text-sm mt-1">{errors.phone[0]}</p>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="district" className="block font-label-md text-label-md text-on-surface mb-2">
            İlçe *
          </label>
          <select
            id="district"
            name="districtSlug"
            value={districtSlug}
            onChange={(e) => handleDistrictChange(e.target.value)}
            required
            className={selectClassName}
          >
            <option value="">Seçiniz</option>
            {contactDistrictOptions.map((district) => (
              <option key={district.slug} value={district.slug}>
                {district.title}
              </option>
            ))}
          </select>
          {errors.districtSlug && (
            <p className="text-error text-sm mt-1">{errors.districtSlug[0]}</p>
          )}
        </div>
        <div>
          <label htmlFor="neighborhood" className="block font-label-md text-label-md text-on-surface mb-2">
            Mahalle *
          </label>
          <select
            id="neighborhood"
            name="neighborhood"
            value={neighborhood}
            onChange={(e) => setNeighborhood(e.target.value)}
            required
            className={selectClassName}
            disabled={!districtSlug}
          >
            <option value="">
              {districtSlug ? "Mahalle seçiniz" : "Önce ilçe seçiniz"}
            </option>
            {neighborhoodOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.neighborhood && (
            <p className="text-error text-sm mt-1">{errors.neighborhood[0]}</p>
          )}
        </div>
      </div>
      <div>
        <label className="block font-label-md text-label-md text-on-surface mb-2">
          Hizmet Türü *
        </label>
        <select
          name="serviceType"
          required
          className="w-full h-12 bg-surface border border-outline-variant rounded-lg px-4 form-input-focus font-body-md text-body-md"
        >
          <option value="">Seçiniz</option>
          <option value="su-kacagi">Su Kaçağı Tespiti</option>
          <option value="tikaniklik">Tıkanıklık Açma</option>
          <option value="petek">Petek Temizleme</option>
          <option value="kombi">Kombi Servisi</option>
          <option value="diger">Diğer</option>
        </select>
        {errors.serviceType && (
          <p className="text-error text-sm mt-1">{errors.serviceType[0]}</p>
        )}
      </div>
      <div>
        <label className="block font-label-md text-label-md text-on-surface mb-2">
          Açıklama *
        </label>
        <textarea
          name="description"
          required
          rows={4}
          className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 form-input-focus font-body-md text-body-md resize-none"
          placeholder="Sorununuzu kısaca açıklayın..."
        />
        {errors.description && (
          <p className="text-error text-sm mt-1">{errors.description[0]}</p>
        )}
      </div>
      {status === "success" && (
        <div className="p-4 bg-secondary-container text-on-secondary-container rounded-lg font-body-md">
          Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.
        </div>
      )}
      {status === "error" && errors.general && (
        <div className="p-4 bg-error-container text-on-error-container rounded-lg font-body-md">
          {errors.general[0]}
        </div>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full h-12 bg-secondary text-on-secondary rounded-lg font-label-md hover:bg-on-secondary-container transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Gönderiliyor..." : "Servis Talebi Gönder"}
      </button>
    </form>
  );
}

export function IletisimPageClient() {
  return (
    <SiteLayout activePath="/iletisim">
      <section className="py-section-padding bg-surface-container-lowest px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-4">
              İletişim
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              Servis talebi oluşturun veya doğrudan arayın. 7/24 acil tesisat desteği.{" "}
              <Link href="/hizmet-bolgeleri/kagithane" className="text-secondary hover:text-primary transition-colors">
                Kağıthane merkez
              </Link>
              {" "}operasyonumuzdan İstanbul geneline yönlendirme yapıyoruz.
            </p>
            <ContactForm />
          </div>
          <div className="flex flex-col gap-stack-lg">
            <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/30 soft-shadow">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-md">
                Merkez Şube
              </h2>
              <div className="flex items-start gap-4 mb-stack-sm">
                <span className="material-symbols-outlined text-secondary mt-1">location_on</span>
                <div>
                  <p className="font-label-md text-label-md text-primary mb-1">Adres</p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {siteSettings.address}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-stack-sm">
                <span className="material-symbols-outlined text-secondary mt-1">call</span>
                <div>
                  <p className="font-label-md text-label-md text-primary mb-1">Telefon</p>
                  <a href={getPhoneHref(siteSettings.phone)} className="font-body-md text-secondary hover:underline">
                    {siteSettings.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-stack-sm">
                <span className="material-symbols-outlined text-secondary mt-1">mail</span>
                <div>
                  <p className="font-label-md text-label-md text-primary mb-1">E-posta</p>
                  <a href={`mailto:${siteSettings.email}`} className="font-body-md text-secondary hover:underline">
                    {siteSettings.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">schedule</span>
                <div>
                  <p className="font-label-md text-label-md text-primary mb-1">Çalışma Saatleri</p>
                  <p className="font-body-md text-body-md text-secondary font-medium">7 Gün 24 Saat Açık</p>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">
                    Acil müdahale ekiplerimiz sürekli sahada hazırdır.
                  </p>
                </div>
              </div>
              <a
                href={getWhatsAppHref(siteSettings.whatsapp, siteSettings.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#075E54] text-white rounded-lg font-label-md mt-6 hover:bg-[#054A42] transition-colors"
              >
                <span className="material-symbols-outlined">chat</span>
                WhatsApp
              </a>
            </div>
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/30 soft-shadow h-64 md:h-full min-h-[300px] relative">
              <StitchImage
                src={pageImages.iletisimMap}
                alt="Kağıthane Emniyet Evleri haritası"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent flex items-end p-6">
                <a
                  href={getMapsDirectionsHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface text-on-surface font-label-md text-label-md px-4 py-2 rounded-lg border border-outline-variant shadow-sm hover:bg-surface-variant flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[20px]">directions</span>
                  Yol Tarifi Al
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-padding bg-surface-container-low px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <ContextualLinks title="Popüler hizmetlerimiz" links={popularServiceLinks} />
          <ContextualLinks
            title="Site genelinde gezinin"
            links={primaryHubLinks}
            className="mt-10 pt-8 border-t border-outline-variant"
          />
        </div>
      </section>
    </SiteLayout>
  );
}
