import React from "react";
import { Card, CardContent } from "./ui/card";

export interface StoreInfo {
  id: string;
  name: string;
  city: string;
  country: string;
  phoneNumber: string;
  emailAddress: string;
  location: string; // Add this field
}

interface StoreCardProps {
  store: StoreInfo;
  onClick: (store: StoreInfo) => void;
}

export const StoreCard: React.FC<StoreCardProps> = ({ store, onClick }) => {
  return (
    <Card className="bg-white rounded-[10px] overflow-hidden h-full flex flex-col cursor-pointer" onClick={() => onClick(store)}>
   
      <CardContent className="p-6 flex flex-col flex-grow">
        <h3 className="font-sans font-semibold text-xl text-[#212c2d] mb-2">{store.name}</h3>
        <p className="font-sans text-gray-700 mb-4">
          {store.city}, {store.country}
        </p>    
        <div className="mt-auto">
       
        </div>
      </CardContent>
    </Card>
  );
};
