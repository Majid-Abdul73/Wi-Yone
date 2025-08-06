import React from 'react';
import { Link } from 'react-router-dom';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const navigationItems = [
    { to: '/', label: 'HOME' },
    { to: '/product', label: 'PRODUCT' },
    { to: '/pricing', label: 'PRICING & TERMS' },
    { to: '/stores', label: 'STORES' }
  ];

  const navLinkClasses = "block text-4xl md:text-7xl font-light text-black hover:opacity-70 transition-opacity uppercase tracking-tight";
   
  return (
    <div className="fixed inset-0 z-[10000] bg-[#FFF8EA] bg-cover bg-center bg-no-repeat" >  
    
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      {/* Menu Content */}
      <div className="relative px-10 z-10 h-full flex flex-col">
        {/* Close Button */}
        <div className="flex justify-end p-16 md:p-16 lg:p24">
          <button 
            onClick={onClose}
            className="text-black text-xl font-bold flex items-center space-x-2 hover:opacity-70 transition-opacity"
          >
            <span className="text-2xl">×</span>
            <span className="text-sm font-medium">MENU</span>
          </button>
        </div>
        
        {/* Navigation Items */}
        <div className="flex-1 flex flex-col justify-center md:px-16 lg:px-24">
          <nav className="space-y-8">
            {navigationItems.map((item) => (
              <Link 
                key={item.to}
                to={item.to} 
                className={navLinkClasses}
                onClick={onClose}
                style={{ fontFamily: 'BigNoodleTitling, sans-serif' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Bottom Section */}
        <div className="relative bottom-24 p-8 md:p-16 flex justify-end">
          <div className="flex flex-col items-end">
            <div className="mb-4">
              <img src="/Layer_1.svg" alt="Wi Yone Charcoal" className="h-24 w-auto" />
            </div>
            <div>
              <span className="text-black text-xl font-semibold">
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
