import i18n from "i18next";
import { initReactI18next } from "react-i18next";


i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        logout: "Logout",
        language: "عربي",
        add: "Add Items",
        list: "List Items",
        orders: "Orders",
        admin_panel: "Admin Panel",
      email_address: "Email Address",
      email_placeholder: "your email@gmail.com",
      password: "Password",
      password_placeholder: "your password",
      login: "Login"
      }
    },
    ar: {
      translation: {
        logout: "تسجيل الخروج",
        language: "English",
        add: "إضافة منتجات",
        list: "قائمة المنتجات",
        orders: "الطلبات",
        admin_panel: "لوحة الإدارة",
      email_address: "البريد الإلكتروني",
      email_placeholder: "بريدك الإلكتروني",
      password: "كلمة المرور",
      password_placeholder: "كلمة المرور الخاصة بك",
      login: "تسجيل الدخول"
        
      }
    }
  },
  lng: "ar", // اللغة الافتراضية
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
