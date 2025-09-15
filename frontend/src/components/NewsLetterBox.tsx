import React from 'react';
import { useTranslation } from 'react-i18next';
import './style/NewsLetterBox.css';

function NewsLetterBox() {
  const { t } = useTranslation();

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className='newsletter-container'>
      <p className='newsletter-title'>{t('title')}</p>
      <p className='newsletter-desc'>{t('desc')}</p>
      <form onSubmit={onSubmitHandler} className='newsletter-form'>
        <input
          type="email"
          placeholder={t('placeholder')}
          className='newsletter-input'
          required
        />
        <button type='submit' className='newsletter-button'>{t('subscribe')}</button>
      </form>
    </div>
  );
}

export default NewsLetterBox;
