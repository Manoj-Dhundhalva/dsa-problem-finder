import { z } from "zod";
import { THEME } from "@/constants/ui-preferences.contants";

export const GlobalStateSchema = z.object({
  uiPreferences: z.object({
    theme: z.enum([THEME.LIGHT, THEME.DARK]),
  }),
});

export type TGlobalState = z.infer<typeof GlobalStateSchema>;
