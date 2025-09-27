// import React from 'react'
// import { assets } from '../assets/assets';
// const Navbar = () => {
//   return (
//     <div>
//       <img className='flex items-center py-2 px-[4%] justify-between' src={assets.logo} alt="" />
//       <button className='bg-gray-600 text-white py-2 px-5 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
//     </div>
//   )
// }

// export default Navbar
import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/Navbar.css";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="Logo" />

      <div className="buttons">
        <button className="logout-btn">{t("logout")}</button>
        <button className="lang-btn" onClick={toggleLanguage}>
          {t("language")}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
