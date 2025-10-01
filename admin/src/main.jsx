import React, { useEffect } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import App from "./App.jsx";
import i18n from "./locales/i18n.js";
import "./index.css";
export const Root = () => {
  useEffect(() => {
    const handleDirection = () => {
      document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    };
    handleDirection();
    i18n.on("languageChanged", handleDirection);
    return () => {
      i18n.off("languageChanged", handleDirection);
    };
  }, []);

  return <App />;
};
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <Root />
      </I18nextProvider>
    </StrictMode>
  </BrowserRouter>
);
