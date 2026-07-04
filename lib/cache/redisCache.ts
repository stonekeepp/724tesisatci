import type { CacheAdapter } from "./cache";
import { memoryCache } from "./memoryCache";

/**
 * Redis cache placeholder for production.
 * Set REDIS_URL in production and implement ioredis adapter here.
 * Falls back to memory cache when REDIS_URL is not set.
 */
export class RedisCache implements CacheAdapter {
  private fallback = memoryCache;

  async get<T>(key: string): Promise<T | null> {
    if (!process.env.REDIS_URL) {
      return this.fallback.get<T>(key);
    }
    // TODO: Implement Redis GET when REDIS_URL is configured
    return this.fallback.get<T>(key);
  }

  async set<T>(key: string, value: T, ttlSeconds?: number): Promise<void> {
    if (!process.env.REDIS_URL) {
      return this.fallback.set(key, value, ttlSeconds);
    }
    // TODO: Implement Redis SET when REDIS_URL is configured
    return this.fallback.set(key, value, ttlSeconds);
  }

  async del(key: string): Promise<void> {
    if (!process.env.REDIS_URL) {
      return this.fallback.del(key);
    }
    // TODO: Implement Redis DEL when REDIS_URL is configured
    return this.fallback.del(key);
  }

  async wrap<T>(
    key: string,
    fn: () => Promise<T>,
    ttlSeconds = 300
  ): Promise<T> {
    return this.fallback.wrap(key, fn, ttlSeconds);
  }
}

export const cache = new RedisCache();
