import React from "react";
import { XIcon } from "lucide-react";
import { Button } from "./ui/button";
import { StoreInfo } from "./StoreCard";

interface StoreModalProps {
  store: StoreInfo;
  onClose: () => void;
}

export const StoreModal: React.FC<StoreModalProps> = ({ store, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[20px] max-w-[500px] w-full h-[600px] overflow-hidden flex flex-col">
        {/* Header with store info on left and close button with MENU on right */}
        <div className="flex items-center justify-between p-6">
          {/* Store name and location - left side */}
          <div className="flex flex-col">
            <h2 className="font-['Mikoena-Regular'] text-3xl font-bold text-[#212c2d]">{store.name}</h2>
            <p className="font-sans text-gray-700">
              {store.city}, {store.country}
            </p>
          </div>
          
          {/* Close button with MENU text - right side */}
          <div className="flex items-center gap-2">
            <h3 className="font-['BigNoodleTitling'] text-xl text-[#212c2d]">MENU</h3>
            <Button 
              className="bg-white/80 hover:bg-white text-[#212c2d] rounded-full w-10 h-10 p-0"
              onClick={onClose}
            >
              <XIcon size={20} />
            </Button>
          </div>
        </div>
        
        {/* Empty space with background color */}
        <div className="flex-1 bg-[#f5f5f5] mx-6 rounded-[10px] mb-6">
        </div>
        
        {/* Phone number and location at bottom with icons */}
        <div className="flex items-center px-6 pb-6 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <img src="/phone.svg" alt="" />
            </div> 
            <p className="font-sans text-gray-700">{store.phoneNumber}</p>
          </div>
          
          <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <img src="/email.svg" alt="" />
            </div> 
            <p className="font-sans text-gray-700">{store.emailAddress}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
