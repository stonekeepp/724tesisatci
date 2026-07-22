import type {
  BreadcrumbItem,
  BlogPost,
  FAQItem,
  LocalServiceLanding,
  Service,
  SiteSettings,
} from "@/types";
import { getSiteUrl } from "./seoService";

function buildPostalAddress(settings: SiteSettings) {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: settings.streetAddress,
    addressLocality: settings.addressLocality,
    addressRegion: settings.addressRegion,
    postalCode: settings.postalCode,
    addressCountry: "TR",
  };
}

export function buildBusinessId(siteUrl?: string) {
  return `${siteUrl ?? getSiteUrl()}/#business`;
}

function buildSchemaTelephone(phone: string) {
  return phone.replace(/\s/g, "");
}

function buildOpeningHoursSpecification(settings: SiteSettings) {
  const hours = settings.openingHours || "Mo-Su 00:00-23:59";
  const is247 = /Mo-Su\s+00:00-23:59/i.test(hours);
  if (!is247) {
    return undefined;
  }
  return {
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  };
}

function buildSameAs(settings: SiteSettings): string[] | undefined {
  const links = new Set<string>();
  if (settings.googleBusinessProfileUrl) {
    links.add(settings.googleBusinessProfileUrl);
  }
  for (const url of settings.sameAs ?? []) {
    if (url) links.add(url);
  }
  return links.size > 0 ? [...links] : undefined;
}

export function buildOrganizationSchema(settings: SiteSettings) {
  const siteUrl = getSiteUrl();
  const logoUrl = `${siteUrl}/logo.webp`;
  const sameAs = buildSameAs(settings);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: settings.businessName || settings.siteName,
    url: siteUrl,
    telephone: settings.telephone || settings.phone,
    email: settings.email,
    logo: logoUrl,
    image: logoUrl,
    address: buildPostalAddress(settings),
    ...(sameAs ? { sameAs } : {}),
  };
}

export function buildContactPageSchema(_settings: SiteSettings) {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "İletişim | 724 Tesisatçı",
    description:
      "724 Tesisatçı servis talebi ve iletişim. Telefon, WhatsApp veya form ile 7/24 ulaşın.",
    url: `${siteUrl}/iletisim`,
    mainEntity: {
      "@id": buildBusinessId(siteUrl),
    },
  };
}

export function buildLocalBusinessSchema(settings: SiteSettings, area?: string) {
  const siteUrl = getSiteUrl();
  const logoUrl = `${siteUrl}/logo.webp`;
  const telephone = buildSchemaTelephone(
    settings.telephone || settings.phone
  );
  const openingHours =
    settings.openingHours || "Mo-Su 00:00-23:59";
  const openingHoursSpecification =
    buildOpeningHoursSpecification(settings);

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": buildBusinessId(siteUrl),
    name: settings.businessName || settings.siteName,
    url: siteUrl,
    telephone,
    logo: logoUrl,
    image: logoUrl,
    address: buildPostalAddress(settings),
    openingHours,
    contactPoint: {
      "@type": "ContactPoint",
      telephone,
      contactType: "customer service",
      availableLanguage: ["tr"],
    },
    areaServed: area ?? settings.serviceArea ?? settings.city,
  };

  if (openingHoursSpecification) {
    schema.openingHoursSpecification = openingHoursSpecification;
  }

  if (settings.latitude && settings.longitude) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: settings.latitude,
      longitude: settings.longitude,
    };
  }

  const sameAs = buildSameAs(settings);
  if (sameAs) {
    schema.sameAs = sameAs;
  }

  return schema;
}

export function buildWebSiteSchema(settings: SiteSettings) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: settings.siteName,
    url: siteUrl,
  };
}

export function buildAreaServiceSchema(
  settings: SiteSettings,
  areaName: string,
  description?: string
) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${areaName} Tesisatçı Hizmeti`,
    description:
      description ??
      `${areaName} bölgesinde 7/24 profesyonel tesisat hizmeti.`,
    url: siteUrl,
    provider: {
      "@id": buildBusinessId(siteUrl),
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: areaName,
    },
  };
}

export function buildItemListSchema(
  name: string,
  items: { name: string; url: string }[]
) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url.startsWith("http") ? item.url : `${siteUrl}${item.url}`,
    })),
  };
}

export function buildServiceSchema(service: Service, settings: SiteSettings) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    url: `${siteUrl}${service.canonicalPath}`,
    provider: {
      "@id": buildBusinessId(siteUrl),
    },
    areaServed: "İstanbul",
  };
}

export function buildLocalLandingServiceSchema(
  landing: LocalServiceLanding,
  service: Service,
  settings: SiteSettings
) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: landing.h1,
    serviceType: landing.serviceType,
    description: landing.description,
    url: `${siteUrl}${landing.canonicalPath}`,
    provider: {
      "@id": buildBusinessId(siteUrl),
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Kağıthane, İstanbul",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${landing.h1} hizmet kapsamı`,
      itemListElement: landing.sections.slice(0, 4).map((section) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: section.title,
          description: section.body,
          serviceType: service.title,
        },
      })),
    },
  };
}

export function buildFAQSchema(faqItems: FAQItem[]) {
  if (faqItems.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteUrl}${item.href}`,
    })),
  };
}

export function buildBlogPostingSchema(post: BlogPost, settings: SiteSettings) {
  const siteUrl = getSiteUrl();
  const imageUrl = post.image
    ? post.image.startsWith("http")
      ? post.image
      : `${siteUrl}${post.image}`
    : `${siteUrl}/logo.webp`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    articleSection: post.category,
    ...(post.localFocus
      ? {
          about: {
            "@type": "Place",
            name: post.localFocus,
          },
        }
      : {}),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: settings.siteName,
    },
    publisher: {
      "@type": "Organization",
      name: settings.siteName,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.webp`,
      },
    },
    ...(post.editorialReviewedBy
      ? {
          reviewedBy: {
            "@type": "Organization",
            name: post.editorialReviewedBy,
          },
        }
      : {}),
    url: `${siteUrl}${post.canonicalPath}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}${post.canonicalPath}`,
    },
  };
}

export const buildArticleSchema = buildBlogPostingSchema;
