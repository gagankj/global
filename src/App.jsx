import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import WhatsAppIcon from "./components/WhatsAppIcon"
const App = () => {
  return (
    <>
       
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppIcon />
    </>
    
  );
}

export default App;