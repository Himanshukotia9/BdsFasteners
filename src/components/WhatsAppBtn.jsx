import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppBtn({ phoneNumber, message }) {

    // Format the phone number to remove any non-numeric characters
    const formattedNumber = phoneNumber?.replace(/\D/g, '') || '';
  
    // Create the WhatsApp URL with the phone number and optional message
    const whatsappUrl = `https://wa.me/${formattedNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-2xl shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  )
}
