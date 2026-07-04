import type { ContactLead } from "@/types";
import type { IContactRepository } from "./interfaces";

const leads: ContactLead[] = [];

export class MockContactRepository implements IContactRepository {
  async create(lead: Omit<ContactLead, "id" | "createdAt">) {
    const entry: ContactLead = {
      ...lead,
      id: `lead-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    leads.push(entry);
    return entry;
  }

  async findAll() {
    return [...leads];
  }
}

export const mockContactRepository = new MockContactRepository();
