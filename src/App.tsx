import { ThemeProvider } from "@/contexts/theme-context";
import { THEME } from "@/constants/ui-preferences.contants";

function App() {
  return (
    <ThemeProvider defaultTheme={THEME.DARK}>
      <button>Hello</button>
    </ThemeProvider>
  );
}

export default App;
