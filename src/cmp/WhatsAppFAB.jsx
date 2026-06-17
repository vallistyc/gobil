import React from "react"
import { FaWhatsapp } from "react-icons/fa"

const WA_URL = "https://api.whatsapp.com/send/?phone=62881027076779&text&type=phone_number&app_absent=0"

const WhatsAppFAB = () => {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat lewat WhatsApp"
      className="fixed bottom-20 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-3 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-[#1DA851] active:scale-95"
    >
      <FaWhatsapp size={20} />
    </a>
  )
}

export default WhatsAppFAB
