import React from "react";
import { useTranslation } from "react-i18next";
import { assets } from "../assets/frontend_assets/assets";
import "./style/Footer.css";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer-container">
      <div className="footer-main">
        <div className="footer-about">
          <img src={assets.logo} className="footer-logo" alt="logo" />
          <p className="footer-description">{t("footerDescription")}</p>
        </div>
        <div className="footer-company">
          <p className="footer-title">{t("company")}</p>
          <ul>
            <li>{t("home")}</li>
            <li>{t("aboutUs")}</li>
            <li>{t("delivery")}</li>
            <li>{t("privacyPolicy")}</li>
          </ul>
        </div>
        <div className="footer-contact">
          <p className="footer-title">{t("getInTouch")}</p>
          <ul>
            <li>{t("phone")}</li>
            <li>{t("email")}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p>{t("copyright")}</p>
      </div>
    </footer>
  );
}

export default Footer;
