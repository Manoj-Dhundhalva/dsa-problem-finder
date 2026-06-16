import type { TFilterState } from "@/pages/HomePage/types";
import { ProblemService } from "@/services/problem";
import promptPart1 from "./prompt.part1.md?raw";
import promptPart2 from "./prompt.part2.md?raw";

export class PromptHelpers {
  private static instance: PromptHelpers;
  private readonly problemService: ProblemService;

  private constructor(problemService: ProblemService) {
    this.problemService = problemService;
  }

  static getInstance(): PromptHelpers {
    if (!PromptHelpers.instance) {
      PromptHelpers.instance = new PromptHelpers(ProblemService.getInstance());
    }
    return PromptHelpers.instance;
  }

  async getPrompt(payload: TFilterState) {
    const problems = await this.problemService.getFilteredProblems(payload);
    return `${promptPart1}${JSON.stringify(problems, null, 2)}${promptPart2}`;
  }
}
