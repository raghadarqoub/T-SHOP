import React, { useState , useEffect} from "react";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add.jsx";
import List from "./pages/List.jsx";
import Orders from "./pages/Orders.jsx";
import Login from "./components/Login.jsx";
import "./App.css";
export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = '₪'
const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token")?localStorage.getItem("token"):'');
  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);
  return (
    <div className="app">
      <ToastContainer />
      {!token ? (
        <Login  setToken={setToken}/>
      ) : (
        <>
          <Navbar setToken={setToken} />
          <div className="app-container">
            <Sidebar />
            <div className="main-content">
      <Routes>
        {!token ? (
      <Route path="*" element={<Login setToken={setToken} />} />
        ) : (
      <>
      <Route path="/" element={<Add token={token} />} />
      <Route path="/add" element={<Add token={token} />} />
      <Route path="/list" element={<List token={token} />} />
      <Route path="/orders" element={<Orders token={token} />} />
    </>
  )}
</Routes>
            </div>
            
          </div>
        </>
      )}
    </div>
  );
};

export default App;
