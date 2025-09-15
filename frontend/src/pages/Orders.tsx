import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title.tsx";
import { useTranslation } from "react-i18next";
import "./Style/Orders.css";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  const { t } = useTranslation();

  return (
    <div className="orders-container">
      <div className="orders-title">
        <Title text1={t("My")} text2={t("Orders")} />
      </div>

      <div>
        {products.slice(1, 4).map((item, index) => (
          <div key={index} className="order-card">
            <div className="order-details">
              <img className="order-image" src={item.image[0]} alt={item.name} />
              <div>
                <p className="order-name">{item.name}</p>
                <div className="order-meta">
                  <p className="order-price">
                    {currency} {item.price}
                  </p>
                  <p>
                    {t("Quantity")}: 1 {item.quantity}
                  </p>
                  <p>
                    {t("Size")}: M {item.size}
                  </p>
                </div>
                <p className="order-date">
                  {t("Date")}: <span className="date-value">12.9.2025</span>
                </p>
              </div>
            </div>
            <div className="order-status">
              <span className="status-dot"></span>
              <p className="status-text">{t("ReadyToShip")}</p>
            </div>
            <div className="order-action">
              <button className="track-btn">{t("TrackOrder")}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
