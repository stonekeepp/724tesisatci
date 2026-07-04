import type {
  BlogPost,
  ContactLead,
  FAQItem,
  Service,
  SiteSettings,
  Location,
  Neighborhood,
  BlogFormInput,
} from "@/types";

export interface IServiceRepository {
  findAll(): Promise<Service[]>;
  findBySlug(slug: string): Promise<Service | null>;
}

export interface ILocationRepository {
  findAll(): Promise<Location[]>;
  findBySlug(slug: string): Promise<Location | null>;
}

export interface INeighborhoodRepository {
  findAll(): Promise<Neighborhood[]>;
  findBySlug(slug: string): Promise<Neighborhood | null>;
  findByDistrict(districtSlug: string): Promise<Neighborhood[]>;
}

export interface IBlogRepository {
  findAll(): Promise<BlogPost[]>;
  findPublished(): Promise<BlogPost[]>;
  findBySlug(slug: string): Promise<BlogPost | null>;
  findById(id: string): Promise<BlogPost | null>;
  create(data: BlogFormInput): Promise<BlogPost>;
  update(id: string, data: Partial<BlogFormInput>): Promise<BlogPost | null>;
  delete(id: string): Promise<boolean>;
}

export interface IFaqRepository {
  findAll(): Promise<FAQItem[]>;
  findByCategory(category: string): Promise<FAQItem[]>;
}

export interface ISettingsRepository {
  get(): Promise<SiteSettings>;
}

export interface IContactRepository {
  create(lead: Omit<ContactLead, "id" | "createdAt">): Promise<ContactLead>;
  findAll(): Promise<ContactLead[]>;
}
