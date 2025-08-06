import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { storeService } from "../services/storeService";
import { Store } from "./admin/AdminDashboard";

export const Home: React.FC = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Load stores from backend
  useEffect(() => {
    const loadStores = async () => {
      try {
        setLoading(true);
        const storesData = await storeService.getStores();
        setStores(storesData);
      } catch (error: any) {
        setError('Failed to load stores');
        console.error('Error loading stores:', error);
      } finally {
        setLoading(false);
      }
    };

    loadStores();

    // Optional: Set up real-time listener for store updates
    const unsubscribe = storeService.subscribeToStores((updatedStores) => {
      setStores(updatedStores);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="bg-[#212c2d] min-h-screen">
      <div className="relative">
        <div className="absolute inset-0 bg-[] bg-repeat opacity-20" />
        
        <div className="relative">
          {/* Header Section */}
          <Header />
          
          {/* Hero Section with Fire for Longer */}

          {/* coalsArtboard.svg bg */}
          <section className="relative w-full min-h-[90vh] bg-contain bg-center bg-no-repeat" style={{ backgroundImage: 'url(/coalsArtboard.svg)' }}>
            <div className="absolute inset-0 bg-opacity-30"></div>
            <div className="relative z-10 container mx-auto px-4 py20">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                {/* Left side - Text content */}
                <div className="-mt-44 ml-12">
                  <img 
                    src="/fireforlonger.svg"
                      alt="Fire For Longer" 
                      className="w-[150px] sm:w-[250px] md:w-[250px]"
                    />
                </div>

                {/* Right side - Product image */}
                <div className="lg:w flex justify-center -mt-24">
                  <img 
                    src="/WiYoneSample.svg" 
                    alt="Wi Yone Charcoal Package" 
                    className="max-w-2xl w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* right diagonal */}
          <section className="relative w-full -mt-32 bg-gradient-to-l from-[#3D4647] to-[#212C2D] py-12 transform -skew-y-6">
            <div className="container mx-auto px-4 transform skew-y-3">
              <div className="text-center text-white h-20">
              
              </div>
            </div>
          </section>

          {/* left diagonal */}
          <section className="relative w-full bg-gradient-to- from[#212C2D] to[#3D4647] bg-[#3D4647] py-12 transform skew-y-6">
            <div className="container mx-auto px-4 transform">
              <div className="text-center text-white h-20 overflow-hidden relative">
                <div className="animate-marquee3 whitespace-nowrap absolute">
                  <span className="text-[#4F5758] text-8xl font-['BigNoodleTitling']">IGNITING YOUR LIFE WITH THE POWER OF NATURE</span>
                </div>
              </div>
            </div>
          </section>


          {/* Orange Diagonal Section */}
          <section className="relative w-full bg-[#e15822] transform -skew-y-6">
            <div className="container mx-auto px-4 py-12 transform skew-y-6">
              <div className="text-center text-white">
                <h2 className="text-2xl font-sans sm:text-3xl md:text-4xl mb-4">
                  <span className="italic">Number 1 </span>
                  Supplier Of Charcoal<br />Briquettes And Shisha In
                </h2>
                <div className="inline-block bg-white rounded-full px-4 py-2 mt-2">
                  <div className="flex items-center">
                    <img src="/SierraLeone.svg" alt="Sierra Leone Flag" className="w-6 h-6 mr-2"
                    />
                    <span className="font-['BigNoodleTitling'] text-[#212c2d] text-xl">SIERRA LEONE</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Grilled Meat Section */}
          <section className="relative w-full bg-[#212c2d] transform -skew-y-6">
            <img src="/meats.svg"  alt="Grilled Meat"  className="w-full h-[400px] sm:h-[400px] object-cover" />
          </section>


             {/* Coconut Waste Section  */}
          <section className="relative w-full bg-[#212c2d] py-12 transform -skew-y-6">
            <div className="container mx-auto px-4 transform skew-y-6">
              <div className="container mx-auto px-4 text-center">
              <img 
                src="/icon1.svg" 
                alt="Coconut Icon" 
                className="w-16 h-16 mx-auto mb-6"
              />
              <h2 className="font-sans text-white text-2xl sm:text-3xl md:text-4xl mb-4">
                Made From Coconut Waste & Other<br />Renewable Sources
              </h2>
              <p className="font-sans text-white/70 text-sm sm:text-base max-w-[600px] mx-auto">
                Made of coconut shell and other sustainable materials. Perfect for grilling, smoking, and cooking.
              </p>
            </div>
              
            </div>
          </section>

          
          {/* Shisha & Briquettes Section */}
          <section className="relative w-full transform -skew-y-6">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 relative">
                <img 
                  src="/shisha.svg" alt="Shisha" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-end justify-center pb-8" style={{ backgroundImage: 'url(/shisha-bg.svg)' }}>
                  <h2 className="font-['BigNoodleTitling'] text-white text-5xl sm:text-6xl md:text-7xl transform skew-y-6">SHISHA</h2>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <img 
                  src="/briquettes.svg" 
                  alt="Briquettes" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat flex items-end justify-center pb-8" style={{ backgroundImage: 'url(/briquettes-bg.svg)' }}>
                  <h2 className="font-['BigNoodleTitling'] text-white text-5xl sm:text-6xl md:text-7xl transform skew-y-6">BRIQUETTES</h2>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Four diagonal colored divs */}
      <div className="relative overflow-hidde -mt-5 sm:-mt-8 md:mt-0 z-0">
        <div className="w-full transform" style={{ transform: 'skewY(-6deg)' }}>

          <div className="w-full h-16 sm:h-20 md:h-28 bg-[#4F5758] flex items-center overflow-hidden relative">
            <div className="animate-marquee3 whitespace-nowrap absolute">
              <span className="text-[#E15822] text-2xl sm:text-4xl md:text-7xl font-['BigNoodleTitling'] mx-4 inline-block">FULL-FLAVORED GRILLING EXPERIENCE</span>
            </div>
          </div>
          
          <div className="w-full h-16 sm:h-20 md:h-28 bg-[#3D4647] flex items-center overflow-hidden relative">
            <div className="animate-marquee2 whitespace-nowrap absolute">
              <span className="text-[#C9C9C9] text-2xl sm:text-4xl md:text-8xl font-['BigNoodleTitling'] mx-4 inline-block">SUSTAINABLE AND ECO-FRIENDLY</span>
            </div>
          </div>
          
          <div className="w-full h-16 sm:h-20 md:h-28 bg-[#4F5758] flex items-center overflow-hidden relative">
            <div className="animate-marquee3 whitespace-nowrap absolute">
              <span className="text-[#61A6D9] text-2xl sm:text-4xl md:text-8xl font-['BigNoodleTitling'] mx-4 inline-block">LONGER AND HOTTER BURN</span>
            </div>
          </div>
          
          <div className="w-full h-16 sm:h-20 md:h-28 bg-[#3D4647] flex items-center overflow-hidden relative">
            <div className="animate-marquee2 whitespace-nowrap absolute">
              <span className="text-[#727272] text-2xl sm:text-4xl md:text-8xl font-['BigNoodleTitling'] mx-4 inline-block">LOW ASH PRODUCTION</span>
            </div>
          </div>

        </div>
      </div>

          
          {/* Our Stores Section */}
          <section className="w-full bg-[#EFE5D5] py-32 -mt-20">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 -mt-32 relative z-10">
                  <img 
                    src="/Display_Tent.svg" 
                    alt="Store Display" 
                    className="w-full max-w-[600px] mx-auto"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-5xl font-sans font-bold sm:text-5xl md:text-7xl mb-8">
                    Our Stores
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {loading ? (
                      // Loading state
                      <div className="col-span-3 text-center text-white">
                        <p>Loading stores...</p>
                      </div>
                    ) : error ? (
                      // Error state
                      <div className="col-span-3 text-center text-red-400">
                        <p>{error}</p>
                      </div>
                    ) : stores.length === 0 ? (
                      // Empty state
                      <div className="col-span-3 text-center text-white">
                        <p>No stores available</p>
                      </div>
                    ) : (
                      // Display stores (limit to first 3 for homepage)
                      stores.slice(0, 3).map((store) => (
                        <div key={store.id} className="bg-white p-10 rounded-xl text-center">
                          <h3 className="font-sans font-bold text-[#212c2d] text-xl">{store.name}</h3>
                          <p className="font-sans text-gray-600 text-sm">{store.city}, {store.country}</p>
                        </div>
                      ))
                    )}
                  </div>
                  
                  <div className="flex justify-end">
                    <Link to="/stores">
                      <Button className="mt-8 bg-[#e15822] hover:bg-[#d14812] text-white px-6 py-2 rounded-full">
                        See All
                        <img src="/Arrow.svg" alt="arrow-right" className="inline-block ml-2 w-12 h-20" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="-mb-20">
              <Footer />
            </div>
            {/* <Footer /> */}
          </section>
        </div>
      </div>
    </div>
  );
};
