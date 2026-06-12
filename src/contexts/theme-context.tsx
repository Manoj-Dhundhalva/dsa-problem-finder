import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { STORAGE_KEY } from "@/constants/storage-key.constants";
import { THEME, type TTheme } from "@/constants/ui-preferences.contants";
import { storage } from "@/services/storage";

type ThemeContextValue = {
  theme: TTheme;
  setTheme: (theme: TTheme) => void;
};

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: TTheme;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children, defaultTheme = THEME.DARK }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<TTheme>(() => {
    const savedTheme = storage.get<TTheme>(STORAGE_KEY.UI_PREFERENCES.THEME);

    if (savedTheme === THEME.LIGHT || savedTheme === THEME.DARK) {
      return savedTheme;
    }

    return defaultTheme;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(THEME.LIGHT, THEME.DARK);
    root.classList.add(theme);
  }, [theme]);

  const setTheme = (newTheme: TTheme) => {
    storage.set(STORAGE_KEY.UI_PREFERENCES.THEME, newTheme);
    setThemeState(newTheme);
  };

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
