import React, { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import Logo from '../assets/Logo.png';
import DownloadButton from "./DownloadButton";

const APK_URL = "https://download.gobil.my.id/gobil.apk"

const ayoDownload = () => {
  const link = document.createElement("a")
  link.href = APK_URL
  link.download = "Go-Bil.apk"
  link.click()
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { label: "Beranda", href: "#beranda" },
    { label: "Mitra", href: "#profil" },
    { label: "Jadi Driver", href: "#mitra" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 bg-white shadow-md z-50" aria-label="Primary navigation">
      <div className="mx-auto px-4 sm:px-6 lg:px-10 py-2 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#home" aria-label="Elsa home">
          <img src={Logo} alt="Gobil Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Menu */}
        <ul className="text-sm hidden md:flex gap-8 text-gray-700 font-medium">
          {menu.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="transition hover:text-[#FF6200]">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <DownloadButton size="sm" className="hidden md:inline-flex"/>

        {/* Mobile Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={ayoDownload}>
            < Download color="#FFA500"/>
          </button>
          
          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        className={`md:hidden bg-white px-4 transition-all duration-300 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col justify-center items-center pb-4 gap-4 text-gray-700 font-medium">
          {menu.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="block transition hover:text-[#22C872]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
