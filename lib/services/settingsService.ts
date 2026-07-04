import { cache } from "@/lib/cache/redisCache";
import { getSettingsRepository } from "@/lib/repositories";

export async function getSiteSettings() {
  return cache.wrap("settings", () => getSettingsRepository().get(), 600);
}
