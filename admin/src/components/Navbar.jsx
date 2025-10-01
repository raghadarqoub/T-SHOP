import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/Navbar.css";
import { assets } from "../assets/assets.js";

const Navbar = ({ setToken }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="Logo" />

      <div className="buttons">
        <button onClick={() => setToken("") } className="logout-btn">{t("logout")}</button>
        <button  className="lang-btn" onClick={toggleLanguage}>
          {t("language")}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
