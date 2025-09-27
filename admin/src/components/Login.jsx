import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/Login.css';

const Login = () => {
  const { t, i18n } = useTranslation(); // استخدمنا i18n
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log(email, password);
    } catch (err) {
      console.log(err);
    }
  };

  // دالة لتبديل اللغة
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* زر تبديل اللغة */}
        <button className="lang-btn" onClick={toggleLanguage}>
          {i18n.language === 'en' ? 'عربي' : 'English'}
        </button>

        <h1 className="login-title">{t('admin_panel')}</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="form-group">
            <label>{t('email_address')}</label>
            <input
              type="email"
              placeholder={t('email_placeholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>{t('password')}</label>
            <input
              type="password"
              placeholder={t('password_placeholder')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            {t('login')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
