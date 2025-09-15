import React from "react";
import Title from "../components/Title.tsx";
import { assets } from "../assets/frontend_assets/assets.js";
import NewsLetterBox from "../components/NewsLetterBox.tsx";
import { useTranslation } from "react-i18next";
import "./Style/Contact.css";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="contact-page">
      <div className="contact-header">
        <Title text1={t("Contact")} text2={t("Us")} />
      </div>
      <div className="contact-content">
        <img
          className="contact-img"
          src={assets.contact_img}
          alt="Contact"
        />
        <div className="contact-info">
          <p className="contact-title">{t("OurStore")}</p>
          <p>{t("Street")}</p>
          <p>{t("District")}</p>
          <p>{t("Phone")}</p>
          <p>{t("Email")}</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
