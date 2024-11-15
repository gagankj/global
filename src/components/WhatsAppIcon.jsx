// src/components/WhatsAppIcon.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from react-icons

const WhatsAppIcon = () => {
  const handleClick = () => {
    const phoneNumber = "1234567890"; // Your WhatsApp number
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div
      className="fixed bottom-5 right-5 cursor-pointer z-50 p-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      onClick={handleClick}
    >
      <FaWhatsapp className="text-white w-8 h-8" />
    </div>
  );
};

export default WhatsAppIcon;