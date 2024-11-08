import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { AppShell } from "./AppShell";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppShell />
  </StrictMode>,
);
