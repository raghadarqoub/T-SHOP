import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets.js';
import NewsLetterBox from './../components/NewsLetterBox';
import { useTranslation } from 'react-i18next';
import './Style/About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <div className="about-header">
        <Title text1={t('About')} text2={t('Us')} />
      </div>

      <div className="about-content">
        <img className="about-img" src={assets.about_img} alt="About us" />
        <div className="about-text">
          <p>{t('Paragraph1')}</p>
          <p>{t('Paragraph2')}</p>
          <b>{t('Mission')}</b>
          <p>{t('MissionText')}</p>
        </div>
      </div>

      <div className="about-why">
        <Title text1={t('Why')} text2={t('ChooseUs')} />
      </div>

      <div className="about-features">
        <div className="feature-box">
          <b>{t('QualityTitle')}</b>
          <p>{t('QualityText')}</p>
        </div>
        <div className="feature-box">
          <b>{t('EasyTitle')}</b>
          <p>{t('EasyText')}</p>
        </div>
        <div className="feature-box">
          <b>{t('ServiceTitle')}</b>
          <p>{t('ServiceText')}</p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
