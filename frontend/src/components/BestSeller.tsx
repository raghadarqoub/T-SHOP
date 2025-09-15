import React, { useState, useEffect, useContext } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import Title from "./Title.jsx";
import ProductItem from "./ProductItem.jsx";
import { useTranslation } from "react-i18next";
import "./style/BestSeller.css";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestseller);
    setBestSeller(bestProducts.slice(0, 5));
  }, [products]);

  return (
    <div className="best-seller">
      <div className="best-seller-header">
        <Title text1={t("title1")} text2={t("title2")} />
        <p className="best-seller-description">{t("description")}</p>

      </div>

      <div className="best-seller-grid">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
