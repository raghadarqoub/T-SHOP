import React from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { useTranslation } from 'react-i18next';
import './style/OurPolicy.css';

function OurPolicy() {
  const { t } = useTranslation();

  return (
    <div className='our-policy-container'>
      <div className='policy-item'>
        <img className='policy-icon' src={assets.exchange_icon} alt="exchange" />
        <p className='policy-title'>{t('easyExchange')}</p>
        <p className='policy-desc'>{t('easyExchangeDesc')}</p>
      </div>

      <div className='policy-item'>
        <img className='policy-icon' src={assets.quality_icon} alt="quality" />
        <p className='policy-title'>{t('sevenDaysReturn')}</p>
        <p className='policy-desc'>{t('sevenDaysReturnDesc')}</p>
      </div>

      <div className='policy-item'>
        <img className='policy-icon' src={assets.support_img} alt="support" />
        <p className='policy-title'>{t('bestSupport')}</p>
        <p className='policy-desc'>{t('bestSupportDesc')}</p>
      </div>
    </div>
  );
}

export default OurPolicy;
