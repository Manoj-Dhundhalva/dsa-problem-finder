import axios, { type AxiosInstance } from "axios";
import { env } from "@/config/env";

export class ApiService {
  private static instance: ApiService;

  public readonly api: AxiosInstance;

  private constructor() {
    this.api = axios.create({
      baseURL: env.VITE_API_BASE_URL,
      timeout: env.VITE_API_TIMEOUT,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }
}

export const apiService = ApiService.getInstance();
