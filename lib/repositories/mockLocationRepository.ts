import { locations, getLocationBySlug } from "@/data/mock/locations";
import type { ILocationRepository } from "./interfaces";

export class MockLocationRepository implements ILocationRepository {
  async findAll() {
    return locations;
  }

  async findBySlug(slug: string) {
    return getLocationBySlug(slug) ?? null;
  }
}

export const mockLocationRepository = new MockLocationRepository();
