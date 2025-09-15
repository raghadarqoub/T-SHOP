
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';
import Title from './Title.jsx';
import ProductItem from './ProductItem.jsx';
import { useTranslation } from 'react-i18next';
import './style/LatesCollection.css';

const LatesCollection = () => {
  const { products } = useContext(ShopContext);
  const { t } = useTranslation();
  const latestProducts = products.slice(0, 10);

  return (
    <div className="latest-container">
      <div className="latest-header">
        <Title text1={t('latestArrivals')} text2={t('COLLECTION')} />
        <p className="latest-description">
          {t('latestDescription')}
        </p>
      </div>
      <div className="latest-grid">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatesCollection;
