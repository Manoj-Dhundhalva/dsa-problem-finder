import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/contexts/theme-context";
import { THEME } from "@/constants/ui-preferences.contants";

function App() {
  return (
    <ThemeProvider defaultTheme={THEME.DARK}>
      <Button>Hello</Button>
    </ThemeProvider>
  );
}

export default App;
