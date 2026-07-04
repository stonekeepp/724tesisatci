import type {
  IBlogRepository,
  IContactRepository,
  IFaqRepository,
  ILocationRepository,
  INeighborhoodRepository,
  IServiceRepository,
  ISettingsRepository,
} from "./interfaces";
import { mockBlogRepository } from "./mockBlogRepository";
import { mockContactRepository } from "./mockContactRepository";
import { mockFaqRepository } from "./mockFaqRepository";
import { mockLocationRepository } from "./mockLocationRepository";
import { mockNeighborhoodRepository } from "./mockNeighborhoodRepository";
import { mockServiceRepository } from "./mockServiceRepository";
import { mockSettingsRepository } from "./mockSettingsRepository";

function isPostgresMode(): boolean {
  return process.env.DATA_SOURCE === "postgres";
}

export function getServiceRepository(): IServiceRepository {
  if (isPostgresMode()) {
    // TODO: return postgresServiceRepository when DATA_SOURCE=postgres
  }
  return mockServiceRepository;
}

export function getLocationRepository(): ILocationRepository {
  if (isPostgresMode()) {
    // TODO: return postgresLocationRepository when DATA_SOURCE=postgres
  }
  return mockLocationRepository;
}

export function getNeighborhoodRepository(): INeighborhoodRepository {
  if (isPostgresMode()) {
    // TODO: return postgresNeighborhoodRepository when DATA_SOURCE=postgres
  }
  return mockNeighborhoodRepository;
}

export function getBlogRepository(): IBlogRepository {
  if (isPostgresMode()) {
    // TODO: return postgresBlogRepository when DATA_SOURCE=postgres
  }
  return mockBlogRepository;
}

export function getFaqRepository(): IFaqRepository {
  return mockFaqRepository;
}

export function getSettingsRepository(): ISettingsRepository {
  if (isPostgresMode()) {
    // TODO: return postgresSettingsRepository when DATA_SOURCE=postgres
  }
  return mockSettingsRepository;
}

export function getContactRepository(): IContactRepository {
  if (isPostgresMode()) {
    // TODO: return postgresContactRepository when DATA_SOURCE=postgres
  }
  return mockContactRepository;
}
