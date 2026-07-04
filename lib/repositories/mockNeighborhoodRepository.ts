import {
  neighborhoods,
  getNeighborhoodBySlug,
  getNeighborhoodsByDistrict,
} from "@/data/mock/neighborhoods";
import type { INeighborhoodRepository } from "./interfaces";

export class MockNeighborhoodRepository implements INeighborhoodRepository {
  async findAll() {
    return neighborhoods;
  }

  async findBySlug(slug: string) {
    return getNeighborhoodBySlug(slug) ?? null;
  }

  async findByDistrict(districtSlug: string) {
    return getNeighborhoodsByDistrict(districtSlug);
  }
}

export const mockNeighborhoodRepository = new MockNeighborhoodRepository();
