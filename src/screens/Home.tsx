import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import  Footer  from "../components/Footer1";
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

    // Real-time listener for store updates
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
          <Header />
          
          {/* coalsArtboard.svg bg with overlaid content */}
          {/* <section className="relative w-full min-h-[30vh] sm:min-h-[40vh] sm:mt-14 md:min-h-[40vh] lg:min-h-[65vh] xl:min-h-[80vh] bg-center bg-no-repeat -skewy-6" style={{ backgroundImage: 'url(/coalsArtboard.svg)' }}> */}
          <section className="relative w-full bg-center bg-no-repeat" style={{ backgroundImage: 'url(/coalsArtboard.svg)' }}>
            <div className="absolute inset-0 bg-opacity-30"></div>
            
            {/* Content positioned on top of coalsArtboard */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 -mt-40 md:mt20">
              <div className="flex flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-12">
                {/* Left side - Fire For Longer */}
                {/* <div className="-mt-16 sm:-mt-24 md:-mt-32 ml-8 sm:ml-10 lg:-mt-64 lg:ml-10 flex-shrink-0"> */}
                <div className="ml-8 sm:ml-10 lg:ml-10 flex-shrink-0">
                  <img 
                    src="/fireforlonger.svg"
                    alt="Fire For Longer" 
                    className="w-[90px] sm:w-[110px] md:w-[200px] lg:w-[250px] xl:w-[280px]"
                  />
                </div>

                {/* Right side - Product image with star background */}
                {/* <div className="flex justify-center mt-16 sm:mt-36 md:-mt-12 lg:-mt-60 xl:-mt-52 2xl:-mt-72 relative z-50"> */}
                <div className="flex justify-center relative z-50">
                  {/* Star background */}
                  <div 
                    className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-30"
                    style={{ backgroundImage: 'url(/star-bg.svg)' }}
                  ></div>
                  <div className="mt-40 sm:mt-40 md:mt-40 lg:-mt-24">
                    <img 
                      src="/WiYoneSample.svg" 
                      alt="Wi Yone Charcoal Package" 
                      className="max-w-full w-[500px] sm:w-[600px] md:w-[600px] lg:w-[700px] xl:w-[800px] xl:max-w-3xl h-auto relative z-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* First - right diagonal */}
          <section className="relative w-full h-[100px] sm:h-[170px] md:h-[200px] lg:h-[200px] xl:h-[210px] -mt-20 sm:-mt-32 md:-mt-40 lg:-mt-52 xl:-mt-[185px] 2xl:-mt-2 bg-gradient-to-l from-[#3D4647] to-[#212C2D] py-8 sm:py-0 transform sm:-skew-y-6 md:-skew-y-6 lg:-skew-y-6 -skew-y-6 z-0">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 transform">
              <div className="text-center text-white h-12 sm:h-16 md:h-20">
              
              </div>
            </div>
          </section>

          {/* left diagonal */}
          <section className="relative w-full bg-gradient-to-r from-[#212C2D] to-[#3D4647] bg-[#3D4647] -mt-0 sm:-mt-8 md:-mt-6 xl:-mt-0 h-[100px] sm:h-[170px] md:h-[200px] lg:h-[200px] xl:h-[210px] py-8 sm:py-10 md:py-14 transform skew-y-6 sm:skew-y-6 md:skew-y-6 lg:skew-y-6">
            <div className="w-full transform">
              <div className="text-center text-white h-12 sm:h-16 md:h-28 overflow-hidden relative">
                <div className="animate-marquee3 whitespace-nowrap absolute w-full">
                  <span className="text-[#4F5758] text-3xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-8xl font-['BigNoodleTitling']">IGNITING YOUR LIFE WITH THE POWER OF NATURE</span>
                </div>
              </div>
            </div>
          </section>

          {/* Orange Diagonal Section */}
          <section className="relative w-full bg-[#e15822] transform -skew-y-6 sm:-skew-y-6 md:-skew-y-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-20 transform skew-y-6 sm:skew-y-6 md:skew-y-6">
              <div className="text-center text-white">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3 sm:mb-4 font-sans leading-tight">
                  <span className="italic">Number 1 </span>
                  Supplier Of Charcoal<br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>Briquettes And Shisha In
                </h2>
                <div className="inline-block bg-white rounded-full px-3 sm:px-4 xl:p-3 xl:px-5 py-1.5 sm:py-2 mt-2">
                  <div className="flex items-center justify-center">
                    <img src="/SierraLeone.svg" alt="Sierra Leone Flag" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1.5 sm:mr-2" />
                    <span className="font-['BigNoodleTitling'] text-[#212c2d] text-sm font-medium sm:text-base md:text-lg lg:text-xl xl:text-2xl">SIERRA LEONE</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Grilled Meat Section */}
          <section className="relative w-full bg-[#212c2d] transform -skew-y-6">
            <img src="/meats.svg"  alt="Grilled Meat"  className="w-full h-[400px] sm:h-[400px] md:h-[450px] xl:h-[500px] object-cover" />
          </section>


             {/* Coconut Waste Section  */}
          <section className="relative w-full bg-[#212c2d] py-16 md:py-20 transform -skew-y-6">
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

        <section className="relative w-full transform -skew-y-6 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Shisha Column */}
            <div className="w-full md:w-1/2 relative">
              <div className="h-[250px] sm:h-[280px] md:h-[450px] lg:h-[450px] xl:h-[500px] relative">
                <img 
                  src="/002.png" 
                  alt="Shisha" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0 bgblack/40 flex items-end justify-center pb-6 sm:pb-8 md:pb-10 lg:pb-12 bg-cover bg-center bg-no-repeat"
                >
                  {/* SVG Background */}
                  <svg 
                    className="absolute inset-0 w-full h-full object-cover skew-y-1 mt-4 sm:mt-4 md:mt-14 lg:mt-12"
                    width="864" 
                    height="867" 
                    viewBox="0 0 864 867" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                  > 
                    <path d="M3.8147e-06 123.5L864 0V743L0 867L3.8147e-06 123.5Z" fill="url(#paint0_linear_286_85)"/> 
                    <defs> 
                      <linearGradient id="paint0_linear_286_85" x1="165.771" y1="-6.37843" x2="165.771" y2="984.5" gradientUnits="userSpaceOnUse"> 
                        <stop offset="0.233455" stopColor="#3D4647" stopOpacity="0"/> 
                        <stop offset="0.65" stopColor="#3D4647"/> 
                      </linearGradient> 
                    </defs> 
                  </svg>
                  
                  <h2 className="font-['BigNoodleTitling'] text-white text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl transform skew-y-6 tracking-wide pb-2 relative z-10">
                    SHISHA
                  </h2>
                </div>
              </div>
            </div>
            
            {/* Briquettes Column */}
            <div className="w-full md:w-1/2 relative">
              <div className="h-[250px] sm:h-[280px] md:h-[450px] lg:h-[450px] xl:h-[500px] relative">
                <img 
                  src="/001.jpg" 
                  alt="Briquettes" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0 bgblack/40 flex items-end justify-center pb-6 sm:pb-8 md:pb-10 lg:pb-12 bg-cover bg-center bg-no-repeat"
                >
                  {/* SVG Background */}
                  <svg 
                    className="absolute inset-0 w-full h-full object-cover skew-y-1 mt-4 sm:mt-4 md:mt-14 lg:mt-12"
                    width="863" 
                    height="867" 
                    viewBox="0 0 863 867" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                  > 
                    <path d="M3.8147e-06 123.5L864 0L864.402 744.5L0 867L3.8147e-06 123.5Z" fill="url(#paint0_linear_289_88)"/> 
                    <defs> 
                      <linearGradient id="paint0_linear_289_88" x1="165.771" y1="-6.37843" x2="165.771" y2="984.5" gradientUnits="userSpaceOnUse"> 
                        <stop offset="0.233455" stopColor="#3D4647" stopOpacity="0"/> 
                        <stop offset="0.65" stopColor="#DDB26C"/> 
                      </linearGradient> 
                    </defs> 
                  </svg>
                  
                  <h2 className="font-['BigNoodleTitling'] text-white text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl transform skew-y-6 tracking-wide pb-2 relative z-10">
                    BRIQUETTES
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Section 7: Four diagonal colored divs */}
        <div className="relative overflow-hidde -mt-5 sm:-mt-8 md:mt-0 z-0">
          <div className="w-full transform" style={{ transform: 'skewY(-6deg)' }}>

            <div className="w-full h-20 sm:h-32 md:h-40 lg:h-32 xl:h-36 bg-[#4F5758] flex items-center overflow-hidden relative">

              <div className="animate-marquee3 whitespace-nowrap absolute">
                <span className="text-[#E15822] text-5xl sm:text-7xl md:text-8xl font-['BigNoodleTitling'] mx-4 inline-block">FULL-FLAVORED GRILLING EXPERIENCE</span>
              </div>
            </div>
            
            <div className="w-full h-20 sm:h-28 md:h-40 lg:h-32 xl:h-36 bg-[#3D4647] flex items-center overflow-hidden relative">
              <div className="animate-marquee2 whitespace-nowrap absolute">
                <span className="text-[#C9C9C9] text-5xl sm:text-7xl md:text-8xl font-['BigNoodleTitling'] mx-4 inline-block">SUSTAINABLE AND ECO-FRIENDLY</span>
              </div>
            </div>
            
            <div className="w-full h-20 sm:h-28 md:h-40 lg:h-32 xl:h-36 bg-[#4F5758] flex items-center overflow-hidden relative">
              <div className="animate-marquee3 whitespace-nowrap absolute">
                <span className="text-[#61A6D9] text-5xl sm:text-7xl md:text-8xl font-['BigNoodleTitling'] mx-4 inline-block">LONGER AND HOTTER BURN</span>
              </div>
            </div>
            
            <div className="w-full h-20 sm:h-28 md:h-40 lg:h-32 xl:h-36 bg-[#3D4647] flex items-center overflow-hidden relative">
              <div className="animate-marquee2 whitespace-nowrap absolute">
                <span className="text-[#727272] text-5xl sm:text-7xl md:text-8xl font-['BigNoodleTitling'] mx-4 inline-block">LOW ASH PRODUCTION</span>
              </div>
            </div>

          </div>
        </div>

          
          {/* Our Stores Section */}
          <section className="w-full bg-[#EFE5D5] py-32 mb- -mt-20">
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
            
            <div className="-mb-20 mt-12">
              <Footer />
            </div>
            {/* <Footer /> */}
          </section>
        </div>
      </div>
    </div>
  );
};
