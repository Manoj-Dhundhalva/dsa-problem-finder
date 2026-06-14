import { createContext, type Dispatch, type SetStateAction } from "react";
import type { TGlobalState } from "./schema";

export type TGlobalContextValue = {
  state: TGlobalState;
  setState: Dispatch<SetStateAction<TGlobalState>>;
};

export const GlobalStateContext = createContext<TGlobalContextValue | null>(null);
