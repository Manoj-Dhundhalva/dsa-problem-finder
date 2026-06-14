import { THEME } from "@/constants/ui-preferences.contants";
import { ConfigProvider, theme } from "antd";
import { useGlobalState } from "@/contexts/global";
import ThemeToggle from "@/components/ThemeToggle";

function App() {
  const {
    state: { uiPreferences },
  } = useGlobalState();

  return (
    <ConfigProvider
      theme={{ algorithm: uiPreferences.theme === THEME.DARK ? theme.darkAlgorithm : theme.defaultAlgorithm }}
    >
      <ThemeToggle />
      <button>Hello</button>
    </ConfigProvider>
  );
}

export default App;
