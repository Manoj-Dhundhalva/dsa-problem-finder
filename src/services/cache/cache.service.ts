import { db } from "./cache.db";

class CacheService {
  async set<T>(key: string, value: T, ttl?: number) {
    const expiry = ttl ? Date.now() + ttl : undefined;

    await db.cache.put({ key, value, expiry });
  }

  async get<T>(key: string): Promise<T | null> {
    const record = await db.cache.get(key);

    if (!record) return null;

    if (record.expiry && Date.now() > record.expiry) {
      await db.cache.delete(key);
      return null;
    }

    return record.value as T;
  }

  async delete(key: string) {
    await db.cache.delete(key);
  }
}

export const cache = new CacheService();
