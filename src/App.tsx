import { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { THEME } from "@/constants/ui-preferences.contants";
import { useGlobalState } from "@/contexts/global";
import { HomePageLayout } from "@/layout";
import { HomePage } from "@/pages";
import { ErrorFallback, PageNotFound } from "@/components";
import { ConfigProvider, Spin, theme } from "antd";

function App() {
  const {
    state: { uiPreferences },
  } = useGlobalState();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ConfigProvider
        theme={{ algorithm: uiPreferences.theme === THEME.DARK ? theme.darkAlgorithm : theme.defaultAlgorithm }}
      >
        <HashRouter>
          <Suspense fallback={<Spin />}>
            <Routes>
              <Route path="/" element={<HomePageLayout />}>
                <Route index element={<HomePage />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </ConfigProvider>
    </ErrorBoundary>
  );
}

export default App;
