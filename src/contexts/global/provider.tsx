import { useEffect, useMemo, useState, type ReactNode } from "react";
import { STORAGE_KEY } from "@/constants/storage-key.constants";
import { storage } from "@/services/storage";
import { INITIAL_GLOBAL_STATE } from "./constants";
import { GlobalStateContext } from "./context";
import { GlobalStateSchema, type TGlobalState } from "./schema";

type TProps = {
  children: ReactNode;
};

export function GlobalStateProvider({ children }: TProps) {
  const [state, setState] = useState<TGlobalState>(() => {
    const savedState = storage.get<TGlobalState>(STORAGE_KEY.GLOBAL_STATE);
    return GlobalStateSchema.catch(INITIAL_GLOBAL_STATE).parse(savedState);
  });

  useEffect(() => {
    storage.set(STORAGE_KEY.GLOBAL_STATE, state);
  }, [state]);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(state.uiPreferences.theme);
  }, [state.uiPreferences.theme]);

  const value = useMemo(() => ({ state, setState }), [state]);

  return <GlobalStateContext.Provider value={value}>{children}</GlobalStateContext.Provider>;
}
