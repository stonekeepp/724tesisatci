import type { Location } from "@/types";
import {
  districtLocations,
  istanbulCityLocation,
} from "./locationContent";

export const locations: Location[] = [
  istanbulCityLocation,
  ...districtLocations,
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getDistrictLocations(): Location[] {
  return districtLocations;
}

export function getLocationsBySide(side: "avrupa" | "anadolu"): Location[] {
  return districtLocations.filter((l) => l.side === side);
}
