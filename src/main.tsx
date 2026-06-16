import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client";
import { GlobalStateProvider } from "@/contexts/global/provider.tsx";
import App from "@/App.tsx";
import "@/styles/index.css";
import "@/boot";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStateProvider>
        <App />
      </GlobalStateProvider>
    </QueryClientProvider>
  </StrictMode>,
);
