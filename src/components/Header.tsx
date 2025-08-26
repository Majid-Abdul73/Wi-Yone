import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

interface HeaderProps {
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full flex justify-between items-center py-4 sm:py-8 md:py-6 lg:py-12 xl:py-16 px-3 sm:px-6 md:px-8 lg:px-16 xl:px-32 pt- sm:pt-12 md:pt-8 lg:pt-12 xl:pt-16 bg-[#212c2d] relative">
      <Link to="/">
        <div className="flex items-center">
          <img
            className="h-[50px] sm:h-[50px] md:h-[70px] lg:h-[90px] xl:h-[100px] w-auto"
            alt="Logo"
            src="/logo.svg"
          />
        </div>
      </Link>

      {/* Center Title */}
      {title && (
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-white font-mikoena font-bold text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm">
            {title}
          </h1>
        </div>
      )}

      <button className="flex items-center bg-white rounded-full p-2 sm:p-2 md:p-2 lg:p-2 xl:px-6 lg:px-4 md:px-4 border-solid border-[#ffe7b6] border-2 gap-1 sm:gap-2 lg:gap-3 min-w-[60px] sm:min-w-[70px] md:min-w-[80px] lg:min-w-[90px] hover:bg-gray-50 transition-colors duration-200" 
        onClick={toggleMenu}>
        <img className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" alt="Menu icon" src="/menu.svg" />
        <span className="font-sans font-bold text-xs sm:text-sm md:text-base lg:text-lg text-[#212c2d]">Menu</span>
      </button>
      
      {menuOpen && <Menu isOpen={menuOpen} onClose={toggleMenu} />}
    </header>
  );
};
