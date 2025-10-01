import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { backendUrl, currency } from '../App';
import { useTranslation } from 'react-i18next';
import './Styles/List.css';
import { assets } from '../assets/assets';

const List = ({ token }) => {
  const { t, i18n } = useTranslation();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const DEFAULT_IMAGE = assets.default_image;
  const fetchList = async () => {
    try {
      setLoading(true);
      const response = await axios.get(backendUrl + '/api/product/list');
      if(response.data.success){
        console.log('Products data:', response.data.products);
        console.log('First product:', response.data.products[0]);
        setList(response.data.products || []);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/product/remove',
        { id },
        { headers: { token } }
      );
      if(response.data.success){
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchList();
  }, []);
  const langClass = i18n.language === 'ar' ? 'rtl' : 'ltr';
  if (loading) {
    return (
      <div className={`list-container ${langClass}`}>
        <p className="list-title">{t('listPage.allProducts')}</p>
        <p className="no-products">{t('listPage.loading') || 'Loading...'}</p>
      </div>
    );
  }
  return (
    <div className={`list-container ${langClass}`}>
      <p className="list-title">{t('listPage.allProducts')}</p>

      <div className="list-content">
        <div className="list-header">
          <b>{t('listPage.image')}</b>
          <b>{t('listPage.name')}</b>
          <b>{t('listPage.category')}</b>
          <b>{t('listPage.price')}</b>
          <b className="action-header">{t('listPage.action')}</b>
        </div>
        {list.length > 0 ? (
          list.map((item, index) => {
            if (!item) return null;
            console.log(`Product ${index}:`, {
              name: item.name,
              images: item.images,
              image: item.image,
              firstImage: item.images?.[0] || item.image
            });
            const imageUrl = item.images?.[0] || item.image || DEFAULT_IMAGE;
            return (
              <div className="list-item" key={item._id || index}>
                <img
                  className="product-image"
                  src={imageUrl}
                  alt={item.name || 'Product'}
                  onError={(e) => {
                    console.log('Image failed to load:', e.target.src);
                    if (e.target.src !== DEFAULT_IMAGE) {
                      e.target.src = DEFAULT_IMAGE;
                    }
                  }}
                  onLoad={() => {
                    console.log('Image loaded successfully:', imageUrl);
                  }}
                />
                <p>{item.name || 'N/A'}</p>
                <p>{item.category || 'N/A'}</p>
                <p>{currency}{item.price || 0}</p>
                <p
                  onClick={() => removeProduct(item._id)}
                  className="delete-btn"
                  style={{ cursor: 'pointer' }}
                >
                  {t('listPage.remove') || 'X'}
                </p>
              </div>
            );
          })
        ) : (
          <p className="no-products">{t('listPage.noProducts') || 'No products found'}</p>
        )}
      </div>
    </div>
  );
};

export default List;