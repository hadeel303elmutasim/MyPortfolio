import React from 'react';

const WhatsAppButton = () => {
  const phone = "971542637446"; 
  const message = "Hello Hadeel, I would like to connect with you regarding your portfolio.";
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center text-3xl shadow-lg shadow-green-500/40 hover:scale-110 transition-transform duration-300"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping"></span>
      <i className="fa-brands fa-whatsapp relative"></i>
    </a> 
  );
};

export default WhatsAppButton;