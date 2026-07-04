import { services, getServiceBySlug } from "@/data/mock/services";
import type { IServiceRepository } from "./interfaces";

export class MockServiceRepository implements IServiceRepository {
  async findAll() {
    return services;
  }

  async findBySlug(slug: string) {
    return getServiceBySlug(slug) ?? null;
  }
}

export const mockServiceRepository = new MockServiceRepository();
