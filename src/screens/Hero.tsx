import React from "react";
import { Header } from "../components/Header";

export const Hero: React.FC = () => {
  return (
    <div className="bg-[#212c2d] min-h-screen relative overflow-hidden">
      {/* First layer - Background #212C2D with full opacity */}
      <div className="absolute inset-0 bg-[#212c2d] bg-opacity-100 z-0" />
      
      {/* Second layer - star-bg.svg at the right side, edges touch page borders */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full bg-contain bg-right-top bg-no-repeat z-10"
        style={{ backgroundImage: 'url(/star-bg.svg)' }}
      />
      
      {/* Third layer - coalsArtboard.svg with left positioning and slight skew */}
      <div 
        className="absolute inset-0 bg-contain bg-left bg-no-repeat transform -skew-y-1 z-20"
        style={{ backgroundImage: 'url(/coalsArtboard.svg)' }}
      />
      
      {/* Fourth layer - Left and right diagonal bars */}
      <div className="absolute inset-0 z-30">
        {/* Right diagonal */}
        <div className="absolute bottom-0 right-0 w-full h-[100px] sm:h-[170px] md:h-[200px] lg:h-[200px] xl:h-[210px] bg-gradient-to-l from-[#3D4647] to-[#212C2D] transform -skew-y-6" />
        
        {/* Left diagonal */}
        <div className="absolute bottom-0 left-0 w-full h-[100px] sm:h-[170px] md:h-[200px] lg:h-[200px] xl:h-[210px] bg-gradient-to-r from-[#212C2D] to-[#3D4647] transform skew-y-6 -mt-20" />
      </div>
      
      {/* Fifth layer - Header, WiYoneSample.svg, and fireforlonger.svg */}
      <div className="relative z-50">
        <Header />
        
        {/* Main content container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 min-h-[70vh] flex items-center">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Left side - Fire For Longer */}
            <div className="flex-shrink-0 lg:w-1/3">
              <img 
                src="/fireforlonger.svg"
                alt="Fire For Longer" 
                className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] h-auto mx-auto lg:mx-0"
              />
            </div>
            
            {/* Right side - WiYoneSample.svg (always on top and bigger) */}
            <div className="flex-1 lg:w-2/3 flex justify-center lg:justify-end relative">
              <img 
                src="/WiYoneSample.svg" 
                alt="Wi Yone Charcoal Package" 
                className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] 2xl:w-[800px] h-auto relative z-10"
              />
            </div>
          </div>
        </div>
        
        {/* Diagonal sections with text content */}
        <div className="relative mt-20 sm:mt-32 md:mt-40">
          {/* Right diagonal with content */}
          <section className="relative w-full h-[100px] sm:h-[170px] md:h-[200px] lg:h-[200px] xl:h-[210px] bg-gradient-to-l from-[#3D4647] to-[#212C2D] py-8 sm:py-0 transform -skew-y-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 transform skew-y-6">
              <div className="text-center text-white h-12 sm:h-16 md:h-20 flex items-center justify-center">
                {/* Add any content for right diagonal here */}
              </div>
            </div>
          </section>

          {/* Left diagonal with scrolling text */}
          <section className="relative w-full bg-gradient-to-r from-[#212C2D] to-[#3D4647] -mt-0 sm:-mt-8 md:-mt-6 xl:-mt-0 h-[100px] sm:h-[170px] md:h-[200px] lg:h-[200px] xl:h-[210px] py-8 sm:py-10 md:py-14 transform skew-y-6">
            <div className="w-full transform -skew-y-6">
              <div className="text-center text-white h-12 sm:h-16 md:h-28 overflow-hidden relative flex items-center">
                <div className="animate-marquee3 whitespace-nowrap absolute w-full">
                  <span className="text-[#4F5758] text-3xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-8xl font-['BigNoodleTitling']">IGNITING YOUR LIFE WITH THE POWER OF NATURE</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
