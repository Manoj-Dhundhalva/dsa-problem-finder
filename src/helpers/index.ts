import { PromptHelpers } from "./prompt/prompt.service";

class Helpers {
  private static instance: Helpers;

  public prompt: PromptHelpers;

  private constructor() {
    this.prompt = PromptHelpers.getInstance();
  }

  static getInstance(): Helpers {
    if (!Helpers.instance) {
      Helpers.instance = new Helpers();
    }
    return Helpers.instance;
  }
}

export const helpers = Helpers.getInstance();
