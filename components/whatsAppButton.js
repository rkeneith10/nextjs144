// Importez le style Tailwind pour le bouton WhatsApp
import React from "react";
import { FaWhatsapp } from 'react-icons/fa6'

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=+50938396075"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4  shadow-md hover:bg-green-600 rounded-md"
    >
      <FaWhatsapp color='white' className='w-7 h-7 md:w-10 md:h-10' />
    </a>
  );
};

export default WhatsAppButton;
