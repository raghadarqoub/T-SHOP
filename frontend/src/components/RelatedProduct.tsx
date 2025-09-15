
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { useTranslation } from "react-i18next";
import "./style/RelatedProduct.css";

const RelatedProduct = ({ category, subCategory }) => {
  const { t } = useTranslation();
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice();
      productCopy = productCopy.filter((item) => category === item.category);
      productCopy = productCopy.filter((item) => subCategory === item.subCategory);
      setRelated(productCopy.slice(0, 5));
    }
  }, [products, category, subCategory]);

  return (
    <div className="related-container">
      <div className="related-title">
        <Title text1={t("Related")} text2={t("products")} />
      </div>
      <div className="related-grid">
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
