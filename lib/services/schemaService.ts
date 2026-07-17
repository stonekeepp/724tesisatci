import type {
  BreadcrumbItem,
  BlogPost,
  FAQItem,
  LocalServiceLanding,
  Service,
  SiteSettings,
} from "@/types";
import { getSiteUrl } from "./seoService";

function buildPostalAddress() {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: "Emniyet Evleri, Semerkant Sk. 14/A",
    addressLocality: "Kağıthane",
    addressRegion: "İstanbul",
    postalCode: "34415",
    addressCountry: "TR",
  };
}

function buildBusinessId(siteUrl: string) {
  return `${siteUrl}/#business`;
}

function buildSchemaTelephone(phone: string) {
  return phone.replace(/\s/g, "");
}

function buildOpeningHoursSpecification() {
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

export function buildOrganizationSchema(settings: SiteSettings) {
  const siteUrl = getSiteUrl();
  const logoUrl = `${siteUrl}/logo.webp`;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: settings.siteName,
    url: siteUrl,
    telephone: settings.phone,
    email: settings.email,
    logo: logoUrl,
    image: logoUrl,
    address: buildPostalAddress(),
  };
}

export function buildLocalBusinessSchema(settings: SiteSettings, area?: string) {
  const siteUrl = getSiteUrl();
  const logoUrl = `${siteUrl}/logo.webp`;

  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": buildBusinessId(siteUrl),
    name: settings.siteName,
    url: siteUrl,
    telephone: buildSchemaTelephone(settings.phone),
    logo: logoUrl,
    image: logoUrl,
    address: buildPostalAddress(),
    openingHours: "Mo-Su 00:00-23:59",
    openingHoursSpecification: buildOpeningHoursSpecification(),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: buildSchemaTelephone(settings.phone),
      contactType: "customer service",
      availableLanguage: ["tr"],
    },
    areaServed: area ?? settings.city,
  };
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
