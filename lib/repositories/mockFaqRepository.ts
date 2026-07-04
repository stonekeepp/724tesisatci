import { faqs, getFaqsByCategory } from "@/data/mock/faqs";
import type { IFaqRepository } from "./interfaces";

export class MockFaqRepository implements IFaqRepository {
  async findAll() {
    return faqs;
  }

  async findByCategory(category: string) {
    return getFaqsByCategory(category);
  }
}

export const mockFaqRepository = new MockFaqRepository();
