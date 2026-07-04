import { siteSettings } from "@/data/mock/siteSettings";
import type { ISettingsRepository } from "./interfaces";

export class MockSettingsRepository implements ISettingsRepository {
  async get() {
    return siteSettings;
  }
}

export const mockSettingsRepository = new MockSettingsRepository();
