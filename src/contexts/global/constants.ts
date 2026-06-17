import { THEME } from "@/constants/ui-preferences.contants";
import type { TGlobalState } from "./schema";

export const INITIAL_GLOBAL_STATE: TGlobalState = {
  uiPreferences: {
    theme: THEME.LIGHT,
  },
};
