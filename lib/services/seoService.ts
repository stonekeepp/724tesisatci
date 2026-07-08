import type { Metadata } from "next";
import type { SEOData } from "@/types";

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}

export function buildMetadata(seo: SEOData): Metadata {
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}${seo.canonicalPath}`;

  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonical,
      siteName: "724 Tesisatçı",
      locale: "tr_TR",
      type: "website",
      ...(seo.ogImage ? { images: [{ url: seo.ogImage }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      ...(seo.ogImage ? { images: [seo.ogImage] } : {}),
    },
    ...(seo.noindex
      ? { robots: { index: false, follow: true } }
      : {}),
  };
}

export function seoFromEntity(entity: {
  seoTitle: string;
  seoDescription: string;
  canonicalPath: string;
  ogImage?: string;
  indexable?: boolean;
}): SEOData {
  return {
    title: entity.seoTitle,
    description: entity.seoDescription,
    canonicalPath: entity.canonicalPath,
    ogImage: entity.ogImage,
    noindex: entity.indexable === false,
  };
}
