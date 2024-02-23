import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import TanstackProvider from "@utils/providers/TanstackProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <TanstackProvider>
        <App />
      </TanstackProvider>
    </BrowserRouter>
  </React.StrictMode>
);
