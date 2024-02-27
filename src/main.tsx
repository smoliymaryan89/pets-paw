import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

import TanstackProvider from "@utils/providers/TanstackProvider.tsx";
import FavouriteProvider from "@context/FavouriteContext.tsx";
import DarkModeProvider from "@context/DarkModeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <TanstackProvider>
        <FavouriteProvider>
          <DarkModeProvider>
            <App />
          </DarkModeProvider>
        </FavouriteProvider>
      </TanstackProvider>
    </BrowserRouter>
  </React.StrictMode>
);
