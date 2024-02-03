import './App.css';
import { useState } from 'react'
import AllRoutes from './AllRoutes';
import {ToastContainerError,ToastContainerSuccess} from "./ReactToast.js"
import NavBar from './Pages/Navbar/Navbar.jsx';
import React from 'react';



function App() {
  const [navChange, setNavChange] = useState(true);

  const handleNavChange = (data) => {
    setNavChange(data);
  };

  return (
    <div className="App">
      <div style={{position:"relative", zIndex:"2"}}>
        <NavBar onDataChange={handleNavChange}/>
      </div>
      <div style={{filter: navChange ? "blur(0)" : "blur(2px)" }}>
        <AllRoutes />
      </div>
      {ToastContainerError}
      {ToastContainerSuccess}
    </div>
  );
}

export default App
