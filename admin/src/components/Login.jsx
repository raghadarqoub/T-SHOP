import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/Login.css';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
const Login = ( {setToken}) => {
  const { t, i18n } = useTranslation(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    try {
        e.preventDefault();
        const response = await axios.post(backendUrl+ '/api/user/admin',{email,password});
        console.log(response); 
        if(response.data.success){
            // localStorage.setItem("token", response.data.token);
          setToken(response.data.token)
        }else{
          toast.error(response.data.message)
        }
        
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="login-container">
      <div className="login-box">
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
