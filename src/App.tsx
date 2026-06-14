import { THEME } from "@/constants/ui-preferences.contants";
import { ConfigProvider, theme } from "antd";
import { GlobalStateProvider, useGlobalState } from "@/contexts/global";

function App() {
  const {
    state: { uiPreferences },
  } = useGlobalState();

  return (
    <GlobalStateProvider>
      <ConfigProvider
        theme={{ algorithm: uiPreferences.theme === THEME.DARK ? theme.darkAlgorithm : theme.defaultAlgorithm }}
      >
        <button>Hello</button>
      </ConfigProvider>
    </GlobalStateProvider>
  );
}

export default App;
