export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
  relatedPage?: string;
  relatedPageLabel?: string;
}

export interface SiteSettings {
  siteName: string;
  phone: string;
  whatsapp: string;
  whatsappMessage: string;
  email: string;
  address: string;
  mapsDestination: string;
  city: string;
  workingHours: string;
  /** Structured NAP — preferred for schema; keep in sync with `address` / `phone`. */
  businessName: string;
  telephone: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  serviceArea: string;
  openingHours: string;
  googleBusinessProfileUrl?: string;
  latitude?: string;
  longitude?: string;
  sameAs?: string[];
}

export interface SEOData {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  noindex?: boolean;
}

export interface LocalLandingSection {
  title: string;
  body: string;
  items?: string[];
}

export interface LocalServiceLanding {
  slug: string;
  serviceSlug: string;
  title: string;
  description: string;
  h1: string;
  heroDescription: string;
  intro: string;
  serviceType: string;
  canonicalPath: string;
  sections: LocalLandingSection[];
  faq: FAQItem[];
  relatedLocalSlugs: string[];
  imageAlt: string;
  indexable?: boolean;
}

export interface ServiceSymptom {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceMethod {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  heroTitle: string;
  heroDescription: string;
  heroImage?: string;
  icon: string;
  symptoms: ServiceSymptom[];
  processSteps: ProcessStep[];
  methods: ServiceMethod[];
  faq: FAQItem[];
  relatedServices: string[];
  relatedLocations: string[];
  seoTitle: string;
  seoDescription: string;
  canonicalPath: string;
  featured?: boolean;
  wideCard?: boolean;
  aboutHighlights?: string[];
}

export interface Neighborhood {
  id: string;
  title: string;
  slug: string;
  districtSlug: string;
  description: string;
  shortDescription: string;
  relatedServices: string[];
  faq: FAQItem[];
  seoTitle: string;
  seoDescription: string;
  canonicalPath: string;
  heroImage?: string;
  indexable?: boolean;
  localIntroduction?: string;
  buildingTypes?: string[];
  commonProblems?: string[];
  realCaseStudy?: string;
  caseStudyDate?: string;
  caseStudyImage?: string;
  serviceNotes?: string;
}

export interface Location {
  id: string;
  title: string;
  slug: string;
  city: string;
  district?: string;
  side?: "avrupa" | "anadolu";
  isHeadquarters?: boolean;
  description: string;
  shortDescription: string;
  neighborhoods: string[];
  relatedServices: string[];
  faq: FAQItem[];
  seoTitle: string;
  seoDescription: string;
  canonicalPath: string;
  heroImage?: string;
  stats?: { label: string; value: string }[];
  indexable?: boolean;
}

export type BlogPostStatus = "draft" | "published";

export interface BlogRelatedLink {
  href: string;
  label: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  seoTitle: string;
  seoDescription: string;
  canonicalPath: string;
  relatedServices: string[];
  faq: FAQItem[];
  status: BlogPostStatus;
  image?: string;
  imageAlt?: string;
  localFocus?: string;
  editorialReviewedBy?: string;
  editorialReviewedAt?: string;
  editorialNote?: string;
  relatedLinks?: BlogRelatedLink[];
}

export interface ContactLead {
  id: string;
  fullName: string;
  phone: string;
  district?: string;
  serviceType?: string;
  description: string;
  createdAt: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavItem extends NavLink {
  children?: NavLink[];
}

export interface Navigation {
  header: NavItem[];
  footer: {
    services: NavLink[];
    company: NavLink[];
    legal: NavLink[];
  };
}

export interface ContactFormInput {
  fullName: string;
  phone: string;
  district?: string;
  serviceType?: string;
  description: string;
}

export interface BlogFormInput {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  status: BlogPostStatus;
  seoTitle: string;
  seoDescription: string;
  relatedServices: string[];
  faq?: FAQItem[];
  image?: string;
  imageAlt?: string;
  localFocus?: string;
  editorialReviewedBy?: string;
  editorialReviewedAt?: string;
  editorialNote?: string;
  relatedLinks?: BlogRelatedLink[];
  publishedAt?: string;
}
