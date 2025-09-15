import React, { useState , useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets.js";
import { useTranslation } from "react-i18next"; 
import { ShopContext } from "../context/ShopContext.jsx";
import "../locales/i18n.js"; 
import "./style/Navbar.css";
const Navbar =()=> {
    const [visible  , setVisible] = useState(false);
    const {setShowSearch , getCartCount} = useContext(ShopContext);
    const { t, i18n } = useTranslation();
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} className="logo" alt="logo" /></Link>
      <ul className="nav-links">
        <NavLink className="nav-item" to="/">
          <p>{t("HOME")}</p>
          <hr />
        </NavLink>
        <NavLink className="nav-item" to="/collection">
          <p>{t("COLLECTION")}</p>
          <hr />
        </NavLink>
        <NavLink className="nav-item" to="/about">
          <p>{t("ABOUT")}</p>
          <hr />
        </NavLink>
        <NavLink className="nav-item" to="/contect">
          <p>{t("CONTACT")}</p>
          <hr />
        </NavLink>
      </ul>

      
      <div className="nav-right">
        
        <select className="lang-switch" onChange={changeLanguage}>
          <option value="ar">AR</option>
          <option value="en">EN</option>
        </select>

        <img onClick={() => setShowSearch(true)} src={assets.search_icon} alt="search" className="icon" />
        <div className="profile-menu">
          <Link to="/login"><img src={assets.profile_icon} alt="profile" className="icon" /></Link>
          <div className="dropdown">
            <p>{t("PROFILE")}</p>
            <Link to="/orders">  <p>{t("ORDERS")}</p></Link>
            <p>{t("LOGOUT")}</p>
          </div>
        </div>
        <Link to="/cart" className="cart-link">
          <img src={assets.cart_icon} alt="cart" className="icon" />
          <p className="cart-count">{getCartCount()}</p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="menu"
          className="icon menu-icon"
        />
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${visible ? "show" : ""}`}>
        <div className="mobile-header" onClick={() => setVisible(false)}>
          <img src={assets.dropdown_icon} alt="back" className="back-icon" />
          <p>Back</p>
        </div>
        <NavLink onClick={() => setVisible(false)} to="/">
          {t("HOME")}
        </NavLink>
        <NavLink onClick={() => setVisible(false)} to="/collection">
          {t("COLLECTION")}
        </NavLink>
        <NavLink onClick={() => setVisible(false)} to="/about">
          {t("ABOUT")}
        </NavLink>
        <NavLink onClick={() => setVisible(false)} to="/contect">
          {t("CONTACT")}
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
