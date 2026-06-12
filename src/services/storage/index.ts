class StorageService {
  private static instance: StorageService;

  private constructor() {}

  static getInstance(): StorageService {
    if (!StorageService.instance) {
      StorageService.instance = new StorageService();
    }
    return StorageService.instance;
  }

  get<T>(key: string): T | null {
    try {
      const value = localStorage.getItem(key);

      if (value === null) return null;

      return JSON.parse(value) as T;
    } catch (error) {
      console.error(`Failed to read localStorage key "${key}"`, error);
      return null;
    }
  }

  set<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Failed to write localStorage key "${key}"`, error);
    }
  }

  remove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Failed to remove localStorage key "${key}"`, error);
    }
  }

  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Failed to clear localStorage", error);
    }
  }

  has(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }
}

export const storage = StorageService.getInstance();
