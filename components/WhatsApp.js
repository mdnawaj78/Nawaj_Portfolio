import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsApp = () => {
  return (
    <div className='whats_app_float'>
        <a 
      href="https://wa.me/918074122754" 
      target="_blank" 
      rel="noopener noreferrer" 
    >
      <IoLogoWhatsapp  className='whatsapp_logo' />
    </a>
    </div>
  )
}

export default WhatsApp