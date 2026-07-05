import { istanbulDistricts } from "./istanbulDistricts";
import { getDistrictNeighborhoods } from "./districtNeighborhoods";

export interface ContactDistrictOption {
  slug: string;
  title: string;
}

export interface ContactNeighborhoodOption {
  value: string;
  label: string;
}

const sortedDistricts = [...istanbulDistricts].sort((a, b) =>
  a.title.localeCompare(b.title, "tr")
);

export const contactDistrictOptions: ContactDistrictOption[] = sortedDistricts.map(
  (d) => ({
    slug: d.slug,
    title: d.title,
  })
);

export function getContactNeighborhoodOptions(
  districtSlug: string
): ContactNeighborhoodOption[] {
  return getDistrictNeighborhoods(districtSlug).map((name) => ({
    value: name,
    label: `${name} Mah.`,
  }));
}

export function formatContactLocation(
  districtSlug: string,
  neighborhood: string
): string {
  const district = contactDistrictOptions.find((d) => d.slug === districtSlug);
  if (!district) return neighborhood;
  if (!neighborhood.trim()) return district.title;
  return `${district.title} — ${neighborhood.trim()}`;
}
