import { cache } from "@/lib/cache/redisCache";
import { getServiceRepository } from "@/lib/repositories";

export async function getAllServices() {
  return cache.wrap("services:list", () => getServiceRepository().findAll());
}

export async function getServiceBySlug(slug: string) {
  return getServiceRepository().findBySlug(slug);
}
