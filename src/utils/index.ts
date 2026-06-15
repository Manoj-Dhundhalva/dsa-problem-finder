import { DateUtils } from "./date.utils";

class Utils {
  private static instance: Utils;

  public date: DateUtils;

  private constructor() {
    this.date = DateUtils.getInstance();
  }

  static getInstance(): Utils {
    if (!Utils.instance) {
      Utils.instance = new Utils();
    }
    return Utils.instance;
  }
}

export const utils = Utils.getInstance();
