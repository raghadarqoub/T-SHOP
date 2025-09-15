
import React from 'react';
import { useTranslation } from 'react-i18next';
import './style/Title.css';

function Title({ text1, text2 }) {
  const { t } = useTranslation();

  return (
    <div className="title-container">
      <p className="title-text1">{t(text1)}</p>
      <p className="title-text2">{t(text2)}</p>
      <p className="title-line"></p>
    </div>
  );
}

export default Title;
