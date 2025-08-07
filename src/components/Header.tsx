import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
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
            className="h-[40px] sm:h-[50px] md:h-[60px] lg:h-[65px] xl:h-[70px] w-auto"
            alt="Logo"
            src="/logo.svg"
          />
        </div>
      </Link>

      {/* Center Title */}
      {title && (
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-white font-mikoena font-bold text-lg sm:text-xs md:text-sm lg:text-lg xl:text-lg tracking-wider">
            {title}
          </h1>
        </div>
      )}

      <Button
        variant="outline"
        className="relative w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px] xl:w-[128px] h-[32px] sm:h-[36px] md:h-[40px] lg:h-[44px] xl:h-[48px] bg-white rounded-[71.5px] border-[2px] sm:border-[3px] border-solid border-[#ffe7b6] flex items-center justify-between px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 hover:bg-white hover:text-[#212c2d] transition-all duration-200"
        onClick={toggleMenu}
      >
        <img
          className="w-[20px] sm:w-[28px] md:w-[32px] lg:w-[38px] xl:w-[46px] h-[5px] sm:h-[7px] md:h-[8px] lg:h-[10px] xl:h-[11px]"
          alt="Menu icon" 
          src="/menu.svg"
        />
        <span className="font-sans font-semibold text-[#212c2d] text-[10px] sm:text-xs md:text-sm lg:text-sm xl:text-sm">
          MENU
        </span>
      </Button>

      {menuOpen && <Menu isOpen={menuOpen} onClose={toggleMenu} />}
    </header>
  );
};
