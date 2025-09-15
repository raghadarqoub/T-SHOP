
import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "./../context/ShopContext.jsx";
import { assets } from "../assets/frontend_assets/assets.js";
import Title from "../components/Title.jsx";
import ProductItem from "./../components/ProductItem.jsx";
import { useTranslation } from "react-i18next";
import "../locales/i18n.js"; 
import "./Style/Collection.css"; 

const Collection = () => {
  const { products , search  ,showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const { t } = useTranslation();

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    if(showSearch && search){
      productsCopy = productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory , search , showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="collection-container">
      {/* Sidebar Filters */}
      <div className="collection-sidebar">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="filter-title"
        >
          {t("filters")}
          <img
            className={`dropdown-icon ${showFilter ? "rotate" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Categories */}
        <div className={`filter-box ${showFilter ? "" : "hidden-box"}`}>
          <p className="filter-subtitle">{t("categories")}</p>
          <div className="filter-options">
            <label>
              <input type="checkbox" value={"Hoodies"} onChange={toggleCategory} /> {t("hoodies")}
            </label>
            <label>
              <input type="checkbox" value={"T-Shirts"} onChange={toggleCategory} /> {t("tshirts")}
            </label>
            <label>
              <input type="checkbox" value={"Accessories"} onChange={toggleCategory} /> {t("accessories")}
            </label>
          </div>
        </div>

        {/* Gender */}
        <div className={`filter-box ${showFilter ? "" : "hidden-box"}`}>
          <p className="filter-subtitle">{t("gender")}</p>
          <div className="filter-options">
            <label>
              <input type="checkbox" value={"Women"} onChange={toggleSubCategory} /> {t("women")}
            </label>
            <label>
              <input type="checkbox" value={"Men"} onChange={toggleSubCategory} /> {t("men")}
            </label>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="collection-products">
        <div className="collection-header">
          <Title text1={t("all")} text2={t("collections")} />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="sort-select"
          >
            <option value="relevant">{t("sort.relevant")}</option>
            <option value="low-high">{t("sort.lowHigh")}</option>
            <option value="high-low">{t("sort.highLow")}</option>
          </select>
        </div>

        <div className="products-grid">
          {filterProducts?.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
