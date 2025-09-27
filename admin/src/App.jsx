import React , { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/sidebar.jsx'
import { Route , Routes } from 'react-router-dom'
import  Add from './pages/Add.jsx'
import List from './pages/List.jsx'
import Orders from './pages/Orders.jsx'
import Login from './components/Login.jsx'
import "./App.css";



const App = () => {
  const [token , setToken] = useState(" ");
  return (
    <div className="app" >
      { token ===  " " 
      ? <Login />
      : <>
      <Navbar />
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </>
      }
    </div>
  )
}

export default App
