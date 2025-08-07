import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";

export const Product = (): JSX.Element => {
  // Data for the about section
  const aboutContent = {
    title: "Made From Coconut Waste & Other Sources",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
  };

  // Data for the uses section
  const usesContent = {
    title: "Smokeless and Long Burning",
    subtitle: "Wi Yone Charcoal can be used for",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
  };

  // Data for the sizes section
  const sizesContent = {
    title: "Sizes include",
    sizes: "2kg, 5kg, 10kg, 15kg, 25kg, 100kg,"
  };

  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="bg-[#fff8ea] min-h-screen">
      <div className="relative">
        <div className="absolute w-full h-full top-0 left-0 bg-[url('/star-bg1.svg')] bg-[100%_100%] -z-10" />
        
        <div className="relative z-10">
          <div className="w-full h-[500px] bg-[#212c2d] bg-[url('/coalsArtboard.svg')] bg-norepeat bg-cover overflow-hidden">
            <Header title="PRODUCT" />
          </div>
          
          <div className="container mx-auto px-4">
            <Card className="w-full max-w-[1465px] mx-auto -mt-32 bg-[#3D4647] rounded-[20px] shadow-lg border-0 h-auto min-h-[400px] sm:min-h-[450px] md:h-[500px] relative z-20">
              
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
                      <TabsList className="flex bg-transparent p-0 h-[48px] sm:h-[58px] mb-6 sm:mb-8">
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
                            Made From Coconut Waste & <br className="hidden sm:block" /> Other Sources
                          </h2>
                          
                          <p className="font-normal text-sm sm:text-base leading-relaxed">
                            {aboutContent.description}
                          </p>
                        </div>
                      </TabsContent>
                      
                      
                      {/* Uses Tab */}
                      <TabsContent value="uses" className="mt-0">
                        <div className="text-white">  
                          <h2 className="font-bold font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 italic">
                            {usesContent.title}
                          </h2>
                          <h3 className="font-bold font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6">
                            {usesContent.subtitle}
                          </h3>
                          
                          <p className="font-normal text-sm sm:text-base leading-relaxed">
                            {usesContent.description}
                          </p>
                        </div>
                      </TabsContent>
                      

                      {/* Sizes Tab */}
                      <TabsContent value="sizes" className="mt-0">
                        <div className="text-white">
                          <h3 className="font-normal font-sans text-sm sm:text-base mb-4">
                            {sizesContent.title}
                          </h3>
                          
                          <h2 className="font-bold font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                            {sizesContent.sizes}
                          </h2>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                  
                  <div className="md:w-1/3 mt-8 sm:mt-12 md:mt-0 relative z-[100] overflow-hidden">
                    <div className="relative">
                      <div className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[496px] md:h-[496px] top-0 left-0 md:left-[68px] rounded-[247.9px] blur-[64.5px] z-40" />

                      <img
                        className="relative z-[9999] w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] mx-auto -mt-40 sm:-mt-48 md:-mt-60"
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
