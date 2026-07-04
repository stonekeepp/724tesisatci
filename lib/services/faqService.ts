import { getFaqRepository } from "@/lib/repositories";

export async function getAllFaqs() {
  return getFaqRepository().findAll();
}

export async function getFaqsByCategory(category: string) {
  return getFaqRepository().findByCategory(category);
}
