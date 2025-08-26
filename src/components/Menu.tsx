
import React from 'react';
import { Link } from 'react-router-dom';

interface Menu1Props {
  isOpen: boolean;
  onClose: () => void;
}

const Menu: React.FC<Menu1Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const navigationItems = [
    { to: '/', label: 'HOME' },
    { to: '/about', label: 'ABOUT ENVIR' },
    { to: '/product', label: 'PRODUCT' },
    { to: '/pricing', label: 'PRICING & TERMS' },
    { to: '/stores', label: 'STORES' }
  ];

  const navLinkClasses = "block text-4xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-black hover:opacity-70 active:opacity-50 transition-all duration-200 uppercase tracking-tight leading-none";

  return (
    <div className="fixed inset-0 z-[10000] bg-[#FFF8EA] overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-[10001]"></div>
      
      {/* Menu Content */}
      <div className="relative z-[10002] h-full flex flex-col mx-14">
        {/* Close Button */}
        <div className="flex justify-end p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12">
          <button 
            onClick={onClose}
            className="text-black text-xl font-bold flex items-center space-x-2 hover:opacity-70 active:opacity-50 transition-all duration-200 z-[10003] touch-manipulation min-h-[44px] min-w-[44px] justify-center"
            aria-label="Close menu"
          >
            <span className="text-xl sm:text-2xl">×</span>
            <span className="text-xs sm:text-sm font-medium">MENU</span>
          </button>
        </div>
        
        {/* Navigation Items */}
        <div className="flex-1 flex flex-col justify-center px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 min-h-0">
          <nav className="space-y-0 flex flex-col justify-center">
            {navigationItems.map((item) => (
              <Link 
                key={item.to}
                to={item.to} 
                className={`${navLinkClasses} z-[10003] touch-manipulation py-1 sm:py-2`}
                onClick={onClose}
                style={{ fontFamily: 'BigNoodleTitling, sans-serif' }}
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Bottom Section */}
        <div className="p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12 flex justify-end">
          <div className="flex flex-col items-end">
            <div className="mb-1 sm:mb-2 md:mb-3">
              <img 
                src="/Layer_1.svg" 
                alt="Wi Yone Charcoal" 
                className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto" 
              />
            </div>
            <div>
              <span className="text-black text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">
                Contact Us
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
