import type { Neighborhood } from "@/types";
import { allNeighborhoods } from "./locationContent";

export const neighborhoods: Neighborhood[] = allNeighborhoods;

export function getNeighborhoodBySlug(slug: string): Neighborhood | undefined {
  return neighborhoods.find((n) => n.slug === slug);
}

export function getNeighborhoodsByDistrict(
  districtSlug: string
): Neighborhood[] {
  return neighborhoods.filter((n) => n.districtSlug === districtSlug);
}
