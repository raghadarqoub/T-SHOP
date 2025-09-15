import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Style/Login.css";

const Login = () => {
  const [currentState, setCurrentState] = useState("SignUp");
  const { t } = useTranslation();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler} className="login-form">
      <div className="login-header">
        <p className="login-title">
          {currentState === "Login" ? t("Login") : t("SignUp")}
        </p>
        <hr className="login-line" />
      </div>

      {/* اسم المستخدم يظهر فقط عند التسجيل */}
      {currentState === "Login" ? null : (
        <input
          type="text"
          className="login-input"
          placeholder={t("Name")}
        />
      )}
      <input
        type="email"
        className="login-input"
        placeholder={t("Email")}
      />
      <input
        type="password"
        className="login-input"
        placeholder={t("Password")}
      />
      <div className="login-links">
        <p className="link">{t("ForgotPassword")}</p>
        {currentState === "Login" ? (
          <p className="link" onClick={() => setCurrentState("SignUp")}>
            {t("CreateAccount")}
          </p>
        ) : (
          <p className="link" onClick={() => setCurrentState("Login")}>
            {t("LoginHere")}
          </p>
        )}
      </div>
      <button type="submit" className="login-btn">
        {currentState === "Login" ? t("Login") : t("SignUp")}
      </button>
    </form>
  );
};

export default Login;
