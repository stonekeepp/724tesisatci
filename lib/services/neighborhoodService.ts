import { getNeighborhoodRepository } from "@/lib/repositories";

export async function getAllNeighborhoods() {
  return getNeighborhoodRepository().findAll();
}

export async function getNeighborhoodBySlug(slug: string) {
  return getNeighborhoodRepository().findBySlug(slug);
}

export async function getNeighborhoodsByDistrict(districtSlug: string) {
  return getNeighborhoodRepository().findByDistrict(districtSlug);
}
