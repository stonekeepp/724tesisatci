import type { Metadata } from "next";
import type { SEOData } from "@/types";

const DEFAULT_OG_IMAGE = "/logo.webp";
const LOCAL_SITE_URL = "http://localhost:3000";

export function getSiteUrl(): string {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || LOCAL_SITE_URL;
  const isProduction = process.env.NODE_ENV === "production";
  const isLocalhost = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/?$/i.test(
    siteUrl
  );

  if (isProduction && (!process.env.NEXT_PUBLIC_SITE_URL || isLocalhost)) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be set to the production domain for SEO metadata."
    );
  }

  return siteUrl.replace(/\/$/, "");
}

export function buildMetadata(seo: SEOData): Metadata {
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}${seo.canonicalPath}`;
  const ogImagePath = seo.ogImage || DEFAULT_OG_IMAGE;
  const ogImageUrl = ogImagePath.startsWith("http")
    ? ogImagePath
    : `${siteUrl}${ogImagePath}`;

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
      images: [{ url: ogImageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [ogImageUrl],
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
