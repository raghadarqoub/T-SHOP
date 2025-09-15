
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets.js";
import { useTranslation } from "react-i18next";
import RelatedProduct from "../components/RelatedProduct.tsx";
import "./Style/Product.css"; 

const Product = () => {
  const { t } = useTranslation();
  const { productId } = useParams();
  const { products, currency ,  addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    products.forEach((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
      }
    });
  }, [productId, products]);

  if (!productData) return <div className="hidden"></div>;

  return (
    <div className="product-page">
      <div className="product-top">
        <div className="product-images">
          <div className="thumbnails">
            {productData.image.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className={`thumbnail ${img === image ? "active" : ""}`}
                onClick={() => setImage(img)}
              />
            ))}
          </div>
          <div className="main-image">
            <img src={image} alt="" />
          </div>
        </div>

        <div className="product-details">
          <h1 className="title">{productData.name}</h1>
          <div className="rating">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="star" className="star" />
            ))}
            <img src={assets.star_dull_icon} alt="star" className="star" />
            <span className="reviews">(122)</span>
          </div>
          <p className="price">
            {currency} {productData.price}
          </p>
          <p className="description">{productData.description}</p>

          <div className="size-selector">
            <p>{t("selectSize")}</p>
            <div className="sizes">
              {productData.sizes.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setSize(s)}
                  className={`size-btn ${s === size ? "selected" : ""}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button onClick={() => addToCart(productData._id, size)} className="add-cart">{t(" addToCart")}</button>

          <div className="policies">
            <p>{t(" originalProducts")}</p>
            <p>{t("CashOnDelivery")}</p>
            <p>{t("daysReturn")}</p>
          </div>
        </div>
      </div>

      <div className="product-tabs">
        <div className="tabs-header">
          <b className="tab">{t("des")}</b>
          <p className="tab">{t("reviewis")}</p>
        </div>
        <div className="tabs-content">
          <p>{t("productReview1")}</p>
          <p>{t("productReview2")}</p>
        </div>
      </div>
      <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
    </div>
  );
};

export default Product;
