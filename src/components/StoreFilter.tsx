import React from "react";
import { Search } from "lucide-react";

interface StoreFilterProps {
  countries: string[];
  selectedCountry: string;
  onCountryChange: (country: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onReset: () => void;
}

export const StoreFilter: React.FC<StoreFilterProps> = ({
  countries,
  selectedCountry,
  onCountryChange,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="bg-white rounded-[20px] p-6 mb-8">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <select 
            className="w-full p-3 border border-gray-300 rounded-[10px] font-sans text-[#212c2d]"
            value={selectedCountry}
            onChange={(e) => onCountryChange(e.target.value)}
          >
            <option value="">All Countries</option>
            {countries.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>
        
        <div className="w-full cols-span-3">

          <div className="relative">
            <input 
              type="text" 
              placeholder="Search Location"
              className="w-full p-3 pl-10 border border-gray-300 rounded-[10px] font-sans text-[#212c2d]"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
        
        <div className="flex items-end">
     
        </div>
      </div>
    </div>
  );
};
