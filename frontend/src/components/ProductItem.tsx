
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';
import { Link } from 'react-router-dom';
import './style/ProductItem.css';

function ProductItem({ id, name, price, image }) {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className="product-link">
      <div className="product-image-container">
        <img
          className="product-image"
          src={image[0]}
          alt="product"
        />
      </div>
      <p className="product-name">{name}</p>
      <p className="product-price">
        {currency} {price}
      </p>
    </Link>
  );
}

export default ProductItem;
