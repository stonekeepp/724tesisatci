import { cache } from "@/lib/cache/redisCache";
import { getLocationRepository } from "@/lib/repositories";

export async function getAllLocations() {
  return cache.wrap("locations:list", () => getLocationRepository().findAll());
}

export async function getLocationBySlug(slug: string) {
  return getLocationRepository().findBySlug(slug);
}
