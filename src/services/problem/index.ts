import type { TFilterState } from "@/pages/HomePage/types";
import type { TProblem } from "@/types/problme.types";
import { ApiService } from "../api";

export class ProblemService {
  private static instance: ProblemService;
  private readonly apiService: ApiService;

  private readonly ENDPOINTS = {
    FILTER_PROBLEMS: "/api/problem/filter",
  } as const;

  private constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  static getInstance(): ProblemService {
    if (!ProblemService.instance) {
      ProblemService.instance = new ProblemService(ApiService.getInstance());
    }
    return ProblemService.instance;
  }

  async getFilteredProblems(payload: TFilterState): Promise<TProblem[]> {
    try {
      const { data } = await this.apiService.api.post(this.ENDPOINTS.FILTER_PROBLEMS, payload);
      return data;
    } catch (error) {
      console.error("Failed to fetch filtered problems:", error);
      return [];
    }
  }
}

export const problemService = ProblemService.getInstance();
