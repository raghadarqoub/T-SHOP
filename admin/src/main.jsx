import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import App from "./App.jsx";
import i18n from "./locales/i18n.js";  
import './index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </StrictMode>
  </BrowserRouter>
)
