/** Merkez nokta: Kağıthane Çeliktepe mahallesi */
export const CELIKTEPE_CENTER = { lat: 41.0784, lng: 28.9927 } as const;

/** İlçe merkez koordinatları (yaklaşık) */
const districtCoordinates: Record<string, { lat: number; lng: number }> = {
  adalar: { lat: 40.8747, lng: 29.0946 },
  arnavutkoy: { lat: 41.1867, lng: 28.7394 },
  atasehir: { lat: 40.9923, lng: 29.1244 },
  avcilar: { lat: 40.979, lng: 28.7214 },
  bagcilar: { lat: 41.039, lng: 28.8567 },
  bahcelievler: { lat: 41.0028, lng: 28.8597 },
  bakirkoy: { lat: 40.978, lng: 28.874 },
  basaksehir: { lat: 41.0931, lng: 28.802 },
  bayrampasa: { lat: 41.0447, lng: 28.9127 },
  besiktas: { lat: 41.0422, lng: 29.008 },
  beykoz: { lat: 41.1324, lng: 29.095 },
  beylikduzu: { lat: 41.002, lng: 28.642 },
  beyoglu: { lat: 41.037, lng: 28.977 },
  buyukcekmece: { lat: 41.02, lng: 28.585 },
  catalca: { lat: 41.145, lng: 28.461 },
  cekmekoy: { lat: 41.031, lng: 29.178 },
  esenler: { lat: 41.043, lng: 28.876 },
  esenyurt: { lat: 41.034, lng: 28.677 },
  eyupsultan: { lat: 41.058, lng: 28.934 },
  fatih: { lat: 41.018, lng: 28.944 },
  gaziosmanpasa: { lat: 41.063, lng: 28.912 },
  gungoren: { lat: 41.024, lng: 28.885 },
  kadikoy: { lat: 40.981, lng: 29.063 },
  kagithane: { lat: 41.081, lng: 28.975 },
  kartal: { lat: 40.906, lng: 29.189 },
  kucukcekmece: { lat: 41.016, lng: 28.779 },
  maltepe: { lat: 40.935, lng: 29.155 },
  pendik: { lat: 40.876, lng: 29.234 },
  sancaktepe: { lat: 41.002, lng: 29.23 },
  sariyer: { lat: 41.167, lng: 29.05 },
  silivri: { lat: 41.073, lng: 28.246 },
  sultanbeyli: { lat: 40.961, lng: 29.264 },
  sultangazi: { lat: 41.106, lng: 28.868 },
  sile: { lat: 41.175, lng: 29.613 },
  sisli: { lat: 41.06, lng: 28.987 },
  tuzla: { lat: 40.817, lng: 29.3 },
  umraniye: { lat: 41.021, lng: 29.124 },
  uskudar: { lat: 41.023, lng: 29.015 },
  zeytinburnu: { lat: 40.994, lng: 28.91 },
};

function haversineKm(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const earthRadiusKm = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;

  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function estimateArrivalRange(distanceKm: number): { min: number; max: number } {
  const roadKm = distanceKm * 1.35;
  const dispatchMinutes = 8;
  const avgSpeedKmh = 80;
  const totalMinutes = dispatchMinutes + (roadKm / avgSpeedKmh) * 60;
  const min = Math.max(10, Math.round((totalMinutes * 0.85) / 5) * 5);
  const max = Math.max(min + 5, Math.round((totalMinutes * 1.15) / 5) * 5);

  return { min, max };
}

function formatArrivalRange(min: number, max: number): string {
  return `${min}–${max} Dk`;
}

const districtArrivalRanges = Object.fromEntries(
  Object.entries(districtCoordinates).map(([slug, coords]) => {
    const distanceKm = haversineKm(
      CELIKTEPE_CENTER.lat,
      CELIKTEPE_CENTER.lng,
      coords.lat,
      coords.lng
    );
    const range = estimateArrivalRange(distanceKm);

    return [slug, { ...range, display: formatArrivalRange(range.min, range.max) }];
  })
) as Record<string, { min: number; max: number; display: string }>;

export function getDistrictArrivalMaxMinutes(slug: string): number {
  return districtArrivalRanges[slug]?.max ?? 60;
}

/** Tahmini yönlendirme aralığı (trafik/ekip ile değişir); kesin vaat değildir. */
export function getDistrictArrivalDisplay(slug: string): string {
  return districtArrivalRanges[slug]?.display ?? "trafik ve ekibe göre";
}

/**
 * Indexable ilçe allowlist.
 * Yeni ilçe eklemek için: özgün yerel içerik, doğrulanabilir hizmet kapsamı
 * ve ilçeye özel kanıt/vaka içeriği gerekir.
 */
export const INDEXABLE_DISTRICT_ALLOWLIST = new Set(["kagithane"]);

export function isDistrictIndexable(slug: string): boolean {
  return INDEXABLE_DISTRICT_ALLOWLIST.has(slug);
}

/** Mahalle koordinatları (yaklaşık) */
const neighborhoodCoordinates: Record<string, { lat: number; lng: number }> = {
  caglayan: { lat: 41.069, lng: 28.978 },
  celiktepe: { lat: 41.0784, lng: 28.9927 },
  "emniyet-evleri": { lat: 41.072, lng: 28.998 },
  gulbag: { lat: 41.085, lng: 28.985 },
  gursel: { lat: 41.088, lng: 28.99 },
  gultepe: { lat: 41.075, lng: 28.965 },
  hamidiye: { lat: 41.082, lng: 28.97 },
  harmantepe: { lat: 41.068, lng: 28.965 },
  hurriyet: { lat: 41.073, lng: 28.975 },
  merkez: { lat: 41.081, lng: 28.975 },
  nurtepe: { lat: 41.07, lng: 28.955 },
  ortabayir: { lat: 41.085, lng: 28.968 },
  sanayi: { lat: 41.076, lng: 28.958 },
  seyrantepe: { lat: 41.079, lng: 28.962 },
  sirintepe: { lat: 41.088, lng: 28.978 },
  talatpasa: { lat: 41.074, lng: 28.988 },
  telsizler: { lat: 41.065, lng: 28.972 },
  "yahya-kemal": { lat: 41.08, lng: 28.952 },
  yesilce: { lat: 41.067, lng: 28.988 },
};

const neighborhoodArrivalRanges = Object.fromEntries(
  Object.entries(neighborhoodCoordinates).map(([slug, coords]) => {
    const distanceKm = haversineKm(
      CELIKTEPE_CENTER.lat,
      CELIKTEPE_CENTER.lng,
      coords.lat,
      coords.lng
    );
    const range = estimateArrivalRange(distanceKm);
    return [slug, { ...range, display: formatArrivalRange(range.min, range.max) }];
  })
) as Record<string, { min: number; max: number; display: string }>;

export function getNeighborhoodArrivalStat(slug: string): string {
  return neighborhoodArrivalRanges[slug]?.display ?? "10–15 Dk";
}

export function isNeighborhoodIndexable(): boolean {
  return true;
}

export function getDistrictArrivalStat(slug: string): string {
  return districtArrivalRanges[slug]?.display ?? "30–45 Dk";
}

export function getIstanbulArrivalStat(): string {
  const ranges = Object.values(districtArrivalRanges);
  const mins = ranges.map((range) => range.min).sort((a, b) => a - b);
  const maxs = ranges.map((range) => range.max).sort((a, b) => a - b);
  const min = mins[0] ?? 15;
  const max = maxs[Math.min(maxs.length - 1, Math.floor(maxs.length * 0.9))] ?? 95;

  return formatArrivalRange(min, max);
}
