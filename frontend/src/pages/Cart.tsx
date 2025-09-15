import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets.js";
import Title from "../components/Title.tsx";
import CartTotal from "../components/CartTotal.tsx";
import { useTranslation } from "react-i18next";
import "./Style/Cart.css"; // رابط ملف CSS الجديد

const Cart = () => {
  const { t } = useTranslation();
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="cart-container">
      <div className="cart-title">
        <Title text1={t("your")} text2={t("cart")} />
      </div>

      <div className="cart-items">
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);

          return (
            <div key={index} className="cart-item">
              <div className="cart-item-info">
                <img
                  className="cart-item-image"
                  src={productData.image[0]}
                  alt=""
                />
                <div>
                  <p className="cart-item-name">{productData.name}</p>
                  <div className="cart-item-details">
                    <p>
                      {currency} {productData.price}
                    </p>
                    <p className="cart-item-size">{item.size}</p>
                  </div>
                </div>
              </div>

              <input
                type="number"
                className="cart-item-quantity"
                defaultValue={item.quantity}
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(item._id, item.size, Number(e.target.value))
                }
              />

              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="cart-item-delete"
                src={assets.bin_icon}
                alt=""
              />
            </div>
          );
        })}
      </div>

      <div className="cart-total-section">
        <div className="cart-total-wrapper">
          <CartTotal />
          <div className="checkout-button-wrapper">
            <button
              onClick={() => navigate("/place-order")}
              className="checkout-button"
            >
              {t("chackout")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
