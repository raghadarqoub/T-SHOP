import React, { useState } from "react";
import { assets } from "./../assets/assets.js";
import { useTranslation } from "react-i18next";
import axios from "axios";
import {backendUrl} from '../App.jsx';
import "./styles/Add.css";
  const Add = ({token}) => {
  const { t } = useTranslation();
  const [images, setImages] = useState([null, null, null, null]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Hoodies");
  const [subCategory, setSubCategory] = useState("Men");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const handleSubmit = async(e) => {
  e.preventDefault()
  try {
    const formData = new FormData();
    formData.append("image1", images[0]);
    formData.append("image2", images[1]);
    formData.append("image3", images[2]);
    formData.append("image4", images[3]);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("subCategory", subCategory);
    formData.append("bestseller", bestseller);
    formData.append("sizes", JSON.stringify(sizes));
    const response = await axios.post(
      backendUrl + '/api/product/add',
      formData,
      { headers: { token } }
    );
    console.log(response.data);
    if(response.data.success) {
      setImages([null, null, null, null]);
      setName("");
      setDescription("");
      setPrice("");
      setSizes([]);
      setBestseller(false);
      console.log(response.data.message);
    } else {
      console.log( response.data.message);
    }
    
  } catch (error) {
    console.error("Error:", error);
    console.log(error.response?.data?.message || error.message);
  }
};
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div>
        <p className="label">{t("uploadImage")}</p>
        <div className="upload-row">
          {[1, 2, 3, 4].map((num) => (
            <label key={num} htmlFor={`image${num}`}>
              <img
                className="upload-img"
                src={
                  images[num - 1]
                    ? URL.createObjectURL(images[num - 1])
                    : assets.upload_area
                }
                alt=""
              />
              <input
                type="file"
                id={`image${num}`}
                hidden
                onChange={(e) => {
                  const newImages = [...images];
                  newImages[num - 1] = e.target.files[0];
                  setImages(newImages);
                }}
              />
            </label>
          ))}
        </div>
      </div>
      <div>
        <p className="label">{t("productName")}</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t("typeHere")}
          required
        />
      </div>
      <div>
        <p className="label">{t("productDescription")}</p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={t("writeHere")}
          required
        />
      </div>
      <div className="row">
        <div>
          <p>{t("productCategory")}</p>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Hoodies">{t("categories.hoodies")}</option>
            <option value="T-Shirts">{t("categories.tshirts")}</option>
            <option value="Accessories">{t("categories.accessories")}</option>
          </select>
        </div>
        <div>
          <p>{t("subCategory")}</p>
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
          >
            <option value="Men">{t("men")}</option>
            <option value="Women">{t("women")}</option>
          </select>
        </div>
        <div>
          <p>{t("productPrice")}</p>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="00"
            required
          />
        </div>
      </div>
      <div>
        <p>{t("productSize")}</p>
        <div className="sizes">
          {t("sizes", { returnObjects: true }).map((size, i) => (
            <p
              key={i}
              className={`size ${sizes.includes(size) ? "active" : ""}`}
              onClick={() => {
                if (sizes.includes(size)) {
                  setSizes(sizes.filter((s) => s !== size));
                } else {
                  setSizes([...sizes, size]);
                }
              }}
            >
              {size}
            </p>
          ))}
        </div>
      </div>
      <div className="checkbox-row">
        <input
          type="checkbox"
          id="bestseller"
          checked={bestseller}
          onChange={(e) => setBestseller(e.target.checked)}
        />
        <label htmlFor="bestseller">{t("bestseller")}</label>
      </div>
      <button type="submit">{t("addBtn")}</button>
    </form>
  );
};

export default Add;

