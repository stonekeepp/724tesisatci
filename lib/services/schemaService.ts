import type { BreadcrumbItem, BlogPost, FAQItem, Service, SiteSettings } from "@/types";
import { getSiteUrl } from "./seoService";

export function buildOrganizationSchema(settings: SiteSettings) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: settings.siteName,
    url: siteUrl,
    telephone: settings.phone,
    email: settings.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: settings.address,
      addressLocality: "Kağıthane",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
  };
}

export function buildLocalBusinessSchema(settings: SiteSettings, area?: string) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: settings.siteName,
    url: siteUrl,
    telephone: settings.phone,
    email: settings.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: settings.address,
      addressLocality: "Kağıthane",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    openingHours: "Mo-Su 00:00-23:59",
    ...(area ? { areaServed: area } : {}),
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

export function buildServiceSchema(service: Service, settings: SiteSettings) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    url: `${siteUrl}${service.canonicalPath}`,
    provider: {
      "@type": "LocalBusiness",
      name: settings.siteName,
      telephone: settings.phone,
    },
    areaServed: "İstanbul",
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

export function buildArticleSchema(post: BlogPost, settings: SiteSettings) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: settings.siteName,
    },
    publisher: {
      "@type": "Organization",
      name: settings.siteName,
    },
    url: `${siteUrl}${post.canonicalPath}`,
  };
}
