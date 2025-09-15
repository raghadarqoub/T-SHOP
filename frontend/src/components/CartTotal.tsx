
import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title.tsx";
import { useTranslation } from "react-i18next";
import "./style/CartTotal.css"; 

const CartTotal = () => {
  const { t } = useTranslation();
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

  return (
    <div className="cart-total-container">
      <div className="cart-total-title">
        <Title text1={t("cart")} text2={t("total")} />
      </div>

      <div className="cart-total-details">
        <div className="cart-total-row">
          <p>{t("subtotal")}</p>
          <p>
            {currency} {subtotal}.00
          </p>
        </div>
        <hr />
        <div className="cart-total-row">
          <p>{t("shippingFee")}</p>
          <p>
            {currency} {delivery_fee}.00
          </p>
        </div>
        <hr />
        <div className="cart-total-row total-row">
          <b>{t("total")}</b>
          <p>
            {currency} {total}.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
