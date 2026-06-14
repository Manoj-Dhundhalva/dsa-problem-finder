import { useContext } from "react";
import { GlobalStateContext } from "./context";

export function useGlobalState() {
  const context = useContext(GlobalStateContext);

  if (!context) {
    throw new Error("useGlobalState must be used within GlobalStateProvider");
  }

  return context;
}
