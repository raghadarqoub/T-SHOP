import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext.jsx";
import i18n from "./locales/i18n";

i18n.on("languageChanged", (lng) => {
  if (lng === "ar") {
    document.documentElement.setAttribute("dir", "rtl");
    document.documentElement.setAttribute("lang", "ar");
  } else {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.setAttribute("lang", "en");
  }
});

if (i18n.language === "ar") {
  document.documentElement.setAttribute("dir", "rtl");
  document.documentElement.setAttribute("lang", "ar");
} else {
  document.documentElement.setAttribute("dir", "ltr");
  document.documentElement.setAttribute("lang", "en");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </BrowserRouter>
  </StrictMode>
);
