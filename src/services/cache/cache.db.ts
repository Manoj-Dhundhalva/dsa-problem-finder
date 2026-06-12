import Dexie, { type Table } from "dexie";
import type { TCacheKey, TCacheRecord } from "./cache.types";

class CacheDB extends Dexie {
  cache!: Table<TCacheRecord, TCacheKey>;

  constructor() {
    super("cache");
    this.version(1).stores({ cache: "key" });
  }
}

export const db = new CacheDB();
