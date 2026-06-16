import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStateProvider } from "@/contexts/global/provider.tsx";
import App from "@/App.tsx";
import "@/styles/index.css";
import "@/boot";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  </StrictMode>,
);
