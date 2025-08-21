import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";

export const Product = (): JSX.Element => {
  // Data for the about section
  const aboutContent = {
    title: "Renewable Resources Used",
    description: "Based off customer request\n\n100% Organic Waste\n• Coconut Husk: disposed in landfill, contributes the environmental issues\n• Bamboo: leftover from construction materials; known for incredible fast growth rate; average growth rate of 1-4 inches per day\n• Palm Kernel Shells: byproduct of palm oil production\n• Rice Husk: byproduct of rice product\n• Saw Dust: byproduct of wood working process – Use Coming Soon\n\nQuality of Product\n• 100% Renewable Organic Waste\n\nThe production process starting from preparing the organic waste on stockpile, crushing by crusher machine, mixing with organic binder, compressed charcoal on shape, heating by oven machine 48-72 hours and packing into our 2kg, 5kg, and 10kg bags."
  };

  // Data for the uses section
  const usesContent = {
    title: "Uses",
    subtitle: "Coconut & Bamboo charcoal is used in a wide range of applications:",
    description: "• BBQ and Grilling: The briquettes are popular in both household and commercial grills, providing long heat and clean flavor.\n• Hookah | Shisha: The cube briquettes are also widely used in global hookah markets for their steady burn and clean smoke.\n• Industrial: Some industries utilize in furnaces and kilns.\n  o Metallurgy: process to extract and refine metals, including iron from their ores\n• Air Purifiers & Filters: Powdered coconut and bamboo charcoal is also used for detoxifying air, water, and even in cosmetics."
  };

  // Data for the sizes section
  const sizesContent = {
    title: "Sizes",
    sizes: "2kg & 5kg bags: Bopp Laminated PP Woven, Top Open with Punched Handle, Stitch Bottom\n10kg bags: Bopp Laminated PP Woven, Full Open Top, Stitch Bottom\n15kg & 25kg bags: Coming Soon"
  };

  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="bg-[#FFF8EA] bg[#fff8ea] min-h-screen">
      <div className="relative">
        <div className="absolute w-full h-full top-0 left-0 bg-[url('/star-bg1.svg')] bg-[100%_100%] -z-10" />
        
        <div className="relative z-10">
          <div className="w-full h-[500px] bg-[#212c2d] bg-[url('/coalsArtboard.svg')] bg-no-repeat">
            <Header title="PRODUCT" />
          </div>
          
          <div className="container mx-auto px-4">
            <Card className="w-full max-w-[1465px] mx-auto -mt-32 bg-[#3D4647] rounded-[20px] shadow-lg border-0 h-auto min-h-[500px] sm:min-h-[500px] md:min-h-[500px] lg:min-h-[500px] xl:min-h-[500px] relative z-20">
              
              <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12 relative">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/3 pr-0 md:pr-12">
                    
                    {/* Product Tabs */}
                    <Tabs 
                      defaultValue="about" 
                      value={activeTab}
                      onValueChange={setActiveTab}
                      className="w-full"
                    >
                      <TabsList className="flex justify-start bg-transparent p-0 h-[48px] sm:h-[58px] mb-6 sm:mb-8">
                        <TabsTrigger
                          value="about"
                          className="relative w-[120px] sm:w-[152px] h-[48px] sm:h-[58px] rounded-[71.5px] data-[state=active]:bg-transparent data-[state=active]:text-[#ffe7b6] data-[state=active]:border-2 data-[state=active]:border-[#ffe7b6] data-[state=inactive]:text-white"
                        >
                          <span className="font-sans font-semibold text-xs sm:text-sm text-center">
                            ABOUT
                          </span>
                        </TabsTrigger>
                        <TabsTrigger
                          value="uses"
                          className="relative w-[120px] sm:w-[152px] h-[48px] sm:h-[58px] rounded-[71.5px] data-[state=active]:bg-transparent data-[state=active]:text-[#ffe7b6] data-[state=active]:border-2 data-[state=active]:border-[#ffe7b6] data-[state=inactive]:text-white"
                        >
                          <span className="font-sans font-semibold text-xs sm:text-sm text-center">
                            USES
                          </span>
                        </TabsTrigger>
                        <TabsTrigger
                          value="sizes"
                          className="relative w-[120px] sm:w-[152px] h-[48px] sm:h-[58px] rounded-[71.5px] data-[state=active]:bg-transparent data-[state=active]:text-[#ffe7b6] data-[state=active]:border-2 data-[state=active]:border-[#ffe7b6] data-[state=inactive]:text-white"
                        >
                          <span className="font-sans font-semibold text-xs sm:text-sm text-center">
                            SIZES
                          </span>
                        </TabsTrigger>
                      </TabsList>
                      

                      {/* About Tab */}
                      <TabsContent value="about" className="mt-0">
                        <div className="text-white">
                          <h2 className="font-bold font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6">
                            {aboutContent.title}
                          </h2>
                          
                          <p className="font-normal text-sm sm:text-base leading-relaxed whitespace-pre-line">
                            {aboutContent.description}
                          </p>
                        </div>
                      </TabsContent>
                      
                      
                      {/* Uses Tab */}
                      <TabsContent value="uses" className="mt-0">
                        <div className="text-white">  
                          <h2 className="font-bold font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6">
                            {usesContent.title}
                          </h2>
                          <h3 className="font-semibold font-sans text-lg sm:text-xl mb-4">
                            {usesContent.subtitle}
                          </h3>
                          
                          <p className="font-normal text-sm sm:text-base leading-relaxed whitespace-pre-line">
                            {usesContent.description}
                          </p>
                        </div>
                      </TabsContent>
                      

                      {/* Sizes Tab */}
                      <TabsContent value="sizes" className="mt-0">
                        <div className="text-white">
                          <h2 className="font-bold font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6">
                            {sizesContent.title}
                          </h2>
                          
                          <p className="font-normal text-sm sm:text-base leading-relaxed whitespace-pre-line">
                            {sizesContent.sizes}
                          </p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                  
                  <div className="md:w-1/3 mt-8 sm:mt-12 md:mt-0 relative z-[100] overflow-hidden">
                    <div className="relative">
                      <div className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[496px] md:h-[496px] top-0 left-0 md:left-[68px] rounded-[247.9px] blur-[64.5px] z-40" />

                      <img
                        className="relative z-[9999] w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] mx-auto -mt20 sm:-mt24 md:-mt44 lg:-mt52 xl:mt72"
                        alt="Wi yone sample"
                        src="/WiYoneSample.svg"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>            
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  );
};
