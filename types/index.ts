/** Shared verification status for business claims and expert/case records. */
export type VerificationStatus =
  | "verified"
  | "needs-verification"
  | "not-applicable";

export type SearchIntent = "informational" | "commercial" | "local";

export type ContentCluster = "su-kacagi" | "tikaniklik" | "isitma";

/**
 * Publication lifecycle for content entities.
 * Legacy blog posts without an explicit status are treated as published
 * via `isPublishedContent()` — do not treat missing status as draft.
 */
export type PublicationStatus = "draft" | "published" | "archived";

export interface SiteSettingsVerification {
  businessName: VerificationStatus;
  phone: VerificationStatus;
  whatsapp: VerificationStatus;
  email: VerificationStatus;
  address: VerificationStatus;
  coordinates: VerificationStatus;
  workingHours: VerificationStatus;
  serviceAreas: VerificationStatus;
  licenses: VerificationStatus;
  certificates: VerificationStatus;
  experienceClaims: VerificationStatus;
  customerCountClaims: VerificationStatus;
}

export interface ExpertCertificate {
  name: string;
  issuer?: string;
  documentNumber?: string;
  verificationUrl?: string;
  verificationStatus: VerificationStatus;
}

/**
 * Separated expert verification dimensions.
 * Do not collapse credentials into a single overall "verified" flag.
 */
export interface ExpertVerification {
  identity: VerificationStatus;
  writtenApproval: VerificationStatus;
  experienceClaim: VerificationStatus;
  credentials: VerificationStatus;
}

export interface ExpertProfile {
  id: string;
  name: string;
  role: string;
  bio?: string;
  experienceYears?: number;
  specialties: string[];
  image?: string;
  verification: ExpertVerification;
  /** Professional certificates — only include independently verified documents. */
  credentials?: ExpertCertificate[];
  /** @deprecated Prefer `credentials`. Kept for compatibility while empty. */
  certificates?: ExpertCertificate[];
  /** Internal audit notes — never expose via public API/schema/UI. */
  internalNotes?: string[];
}

export interface LocalCase {
  slug: string;
  title: string;
  district: string;
  neighborhood?: string;
  problem: string;
  symptoms: string[];
  diagnosis: string;
  equipmentUsed: string[];
  solution: string;
  durationNote?: string;
  beforeImages?: string[];
  afterImages?: string[];
  completedAt?: string;
  privacyApproved: boolean;
  verificationStatus: VerificationStatus;
}

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
  source?: LocationFaqSource;
  needsTechnicalReview?: boolean;
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
  /** Field-level verification metadata — not rendered to end users. */
  verification?: SiteSettingsVerification;
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
  /** Guide article slugs (published + draft OK in data; UI filters published). */
  relatedGuideSlugs?: string[];
  /** Kağıthane (or other) local landing slugs. */
  relatedLocalLandingSlugs?: string[];
  needsTechnicalReview?: boolean;
  seoTitle: string;
  seoDescription: string;
  canonicalPath: string;
  ogImage?: string;
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

export type RegionGroup =
  | "avrupa-merkez"
  | "avrupa-kuzey"
  | "avrupa-bati"
  | "anadolu-merkez"
  | "anadolu-kuzey"
  | "anadolu-dogu"
  | "adalar";

/** Internal audit flag only — never drives robots/noindex. */
export type ServiceAreaIndexStatus = "index" | "review";

export type LocationFaqSource =
  | "district-specific"
  | "region-specific"
  | "generic-service-area";

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
  /** Crawl/index robots flag — independent of internal indexStatus audit. */
  indexable?: boolean;
  /** Navigation / topical grouping (not an official administrative region). */
  regionGroup?: RegionGroup;
  nearbyDistrictSlugs?: string[];
  isPriority?: boolean;
  /** Internal audit only — must not drive noindex/robots. */
  indexStatus?: ServiceAreaIndexStatus;
  relatedLocalLandingSlugs?: string[];
}

/** @deprecated Prefer PublicationStatus — kept for admin form compatibility. */
export type BlogPostStatus = PublicationStatus;

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
  /**
   * Explicit status for new posts. Existing posts set this to "published".
   * If ever omitted, treat as published via `isPublishedContent()`.
   */
  status?: PublicationStatus;
  image?: string;
  imageAlt?: string;
  localFocus?: string;
  editorialReviewedBy?: string;
  editorialReviewedAt?: string;
  editorialNote?: string;
  relatedLinks?: BlogRelatedLink[];
  cluster?: ContentCluster;
  searchIntent?: SearchIntent;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  relatedServiceSlugs?: string[];
  relatedArticleSlugs?: string[];
  needsTechnicalReview?: boolean;
  /** Internal only — never expose via public API/schema/UI. */
  technicalReview?: TechnicalReviewData;
  authorId?: string;
  reviewerId?: string;
}

export type TechnicalReviewItemStatus =
  | "pending"
  | "verified"
  | "revision-required";

export interface TechnicalReviewItem {
  topic: string;
  /**
   * `verified` means the technical explanation was reviewed by an eligible
   * reviewer — NOT that professional credentials/certificates were verified.
   */
  status: TechnicalReviewItemStatus;
  note: string;
}

export interface TechnicalReviewData {
  items: TechnicalReviewItem[];
  reviewedByExpertId?: string;
  reviewedAt?: string;
}

/**
 * Formal technical-review decision recorded by a verified expert.
 * Separate from per-item `TechnicalReviewItemStatus`.
 */
export type TechnicalReviewDecision =
  | "pending"
  | "approved"
  | "changes-required"
  | "rejected";

/**
 * Immutable approval record — never invent entries without a real expert.
 * Internal only; never expose via public API/schema/UI.
 */
export interface TechnicalReviewApproval {
  slug: string;
  reviewerExpertId: string;
  reviewedAt: string;
  decision: TechnicalReviewDecision;
  approvedItemTopics: string[];
  notes: string;
  evidenceReferences?: string[];
}

export interface TechnicalReviewValidationResult {
  valid: boolean;
  blockers: string[];
  warnings: string[];
}

export interface PublicationReadinessResult {
  ready: boolean;
  blockers: string[];
  warnings: string[];
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
