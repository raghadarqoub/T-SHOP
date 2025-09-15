import React, { useContext, useState } from "react";
import Title from "../components/Title.tsx";
import { useTranslation } from "react-i18next";
import CartTotal from "../components/CartTotal.tsx";
import { assets } from "../assets/frontend_assets/assets.js";
import { ShopContext } from "../context/ShopContext.jsx";
import "./Style/PlaceOrder.css";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(ShopContext);
  const { t } = useTranslation();

  return (
    <div className="placeorder-page">
      <div className="delivery-section">
        <div className="section-title">
          <Title text1={t("Delivery")} text2={t("Information")} />
        </div>
        <div className="input-row">
          <input type="text" placeholder={t("FirstName")} />
          <input type="text" placeholder={t("LastName")} />
        </div>
        <input type="text" placeholder={t("Phone1")} />
        <input type="text" placeholder={t("Street1")} />
        <input type="text" placeholder={t("City")} />
      </div>
      <div className="payment-section">
        <div className="cart-total">
          <CartTotal />
        </div>
        <div className="section-title">
          <Title text1={t("Payment")} text2={t("Method")} />
        </div>
        <div className="payment-methods">
          <div
            onClick={() => setMethod("stripe")}
            className={`method-box ${method === "stripe" ? "active" : ""}`}
          >
            <span className={`radio ${method === "stripe" ? "selected" : ""}`} />
            <img className="logo" src={assets.stripe_logo} alt="stripe" />
          </div>
          <div
            onClick={() => setMethod("reflect")}
            className={`method-box ${method === "reflect" ? "active" : ""}`}
          >
            <span className={`radio ${method === "reflect" ? "selected" : ""}`} />
            <img className="logoo" src={assets.reflect} alt="reflect" />
          </div>
          <div
            onClick={() => setMethod("cod")}
            className={`method-box ${method === "cod" ? "active" : ""}`}
          >
            <span className={`radio ${method === "cod" ? "selected" : ""}`} />
            <p className="cod-label">{t("CashonDelivery")}</p>
          </div>
        </div>

        <div className="submit-row">
          <button onClick={() => navigate("/orders")}>{t("PlaceOrder")}</button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
