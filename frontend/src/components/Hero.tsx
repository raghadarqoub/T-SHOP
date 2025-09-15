import React from "react";
import { useTranslation } from "react-i18next";
import { assets } from "../assets/frontend_assets/assets.js";
import "./style/Hero.css";

function Hero() {
  const { t } = useTranslation();

  return (
    <div className="hero">
      <div className="hero-text">
        <div className="hero-line">
          <p className="line"></p>
          <p className="subtitle">{t("bestseller")}</p>
        </div>

        <h1 className="title">{t("latestArrivals")}</h1>

        <div className="hero-line">
          <p className="shop-now">{t("shopNow")}</p>
          <p className="line"></p>
        </div>
      </div>

      <img className="hero-img" src={assets.hero_img} alt="hero" />
    </div>
  );
}

export default Hero;
