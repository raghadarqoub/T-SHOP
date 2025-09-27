import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { useTranslation } from "react-i18next";
import "./styles/Sidebar.css"; 

const Sidebar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(true); // open افتراضي true للشاشات الكبيرة

  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      <div className="sidebar-links">
        <NavLink className="sidebar-link" to="/add">
          <img src={assets.add_icon} alt="" />
          <p>{t("add")}</p>
        </NavLink>

        <NavLink className="sidebar-link" to="/list">
          <img src={assets.order_icon} alt="" />
          <p>{t("list")}</p>
        </NavLink>

        <NavLink className="sidebar-link" to="/orders">
          <img src={assets.order_icon} alt="" />
          <p>{t("orders")}</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
