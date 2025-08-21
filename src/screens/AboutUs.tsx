import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";

export const AboutUs = (): JSX.Element => {
  // Data for the vision section
  const visionContent = {
    description: "Transforming communities with clean, renewable energy solutions that foster environmental resilience, economic opportunity, and healthier lives for all."
  };

  // Data for the mission section
  const missionContent = {
    description: "Provide high-quality, sustainable eco-friendly charcoal using renewable resources while empowering local communities and reducing environmental impact."
  };

  // Data for the values section
  const valuesContent = {
    integrity: {
      title: "Integrity",
      description: "Integrity is essential. It is the inner voice, the source of self-control, the basis for the trust that is imperative in ENVIR SOLUTIONS SL LTD. We do what is right even when no one is watching and prioritise our oath to serve the community above all else."
    },
    excellence: {
      title: "Excellence",
      description: "We are the number 1 supplier of barbecue/shisha charcoal briquettes in Sierra Leone, and we must strive to maintain this daily by performing everything we do with excellence."
    }
  };

  const [activeTab, setActiveTab] = useState("vision");

  return (
    <div className="bg-[#FFF8EA] bg[#fff8ea] min-h-screen">
      <div className="relative">
        <div className="absolute w-full h-full top-0 left-0 bg-[url('/star-bg1.svg')] bg-[100%_100%] -z-10" />
        
        <div className="relative z-10">
          <div className="w-full h-[700px] bg-[#212c2d] bg-no-repeat">
            <Header title="ABOUT US" />
            
            {/* Company Description Section */}
            <div className="container mx-auto pb-16 -pt-16">
              <div className="max-w-7xl mx-auto text-white">
                <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-2 text-[#DDB26C]">
                  We Are Envir Solutions
                </h1>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6">
                  Makers Of Wiyone Charcoal — Premium, High-Quality Charcoal Crafted From Renewable Sources. Our Mission Is To Provide A Sustainable And Eco-Friendly Alternative To Traditional Energy, Delivering Cleaner, Longer-Lasting Fuel For Homes And Businesses Alike.
                </p>
                
                <p className="text-sm sm:text-base md:text-sm leading-relaxed mb-6">
                  ENVIR SOLUTIONS SL LTD product, WIYONE Charcoal, is committed to providing eco-friendly, sustainable and renewable solutions to meet the increasing demand for charcoal products locally and globally. Our manufacturing process is designed to minimize waste and reduce our carbon footprint, ensuring that our products are not only of the best quality but also environmentally friendly. Our products are known for their consistent quality, high heat output, and long burning time, making them ideal for BBQ, Heating, Shisha and Industrial uses.
                </p>
                
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  We are proud to be the number one (1) producers of charcoal using organic renewable resources in Sierra Leone. Our commitment to quality has made us a leading exporter of renewable charcoal to many countries worldwide.
                </p>
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-4">
            <Card className="w-full max-w-[1465px] mx-auto -mt-32 bg-[#3D4647] rounded-[20px] shadow-lg border-0 h-auto min-h-[500px] sm:min-h-[500px] md:min-h-[500px] lg:min-h-[500px] xl:min-h-[500px] relative z-20">
              
              <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12 relative">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/3 pr-0 md:pr-12">
                    
                    {/* Vision, Mission, Values Tabs */}
                    <Tabs 
                      defaultValue="vision" 
                      value={activeTab}
                      onValueChange={setActiveTab}
                      className="w-full"
                    >
                      <TabsList className="flex justify-start bg-transparent p-0 h-[48px] sm:h-[58px] mb-6 sm:mb-8">
                        <TabsTrigger
                          value="vision"
                          className="relative w-[120px] sm:w-[152px] h-[48px] sm:h-[58px] rounded-[71.5px] data-[state=active]:bg-transparent data-[state=active]:text-[#ffe7b6] data-[state=active]:border-2 data-[state=active]:border-[#ffe7b6] data-[state=inactive]:text-white"
                        >
                          <span className="font-sans font-semibold text-xs sm:text-sm text-center">
                            VISION
                          </span>
                        </TabsTrigger>
                        <TabsTrigger
                          value="mission"
                          className="relative w-[120px] sm:w-[152px] h-[48px] sm:h-[58px] rounded-[71.5px] data-[state=active]:bg-transparent data-[state=active]:text-[#ffe7b6] data-[state=active]:border-2 data-[state=active]:border-[#ffe7b6] data-[state=inactive]:text-white"
                        >
                          <span className="font-sans font-semibold text-xs sm:text-sm text-center">
                            MISSION
                          </span>
                        </TabsTrigger>
                        <TabsTrigger
                          value="values"
                          className="relative w-[120px] sm:w-[152px] h-[48px] sm:h-[58px] rounded-[71.5px] data-[state=active]:bg-transparent data-[state=active]:text-[#ffe7b6] data-[state=active]:border-2 data-[state=active]:border-[#ffe7b6] data-[state=inactive]:text-white"
                        >
                          <span className="font-sans font-semibold text-xs sm:text-sm text-center">
                            VALUES
                          </span>
                        </TabsTrigger>
                      </TabsList>
                      
                      {/* Vision Tab */}
                      <TabsContent value="vision" className="mt-0">
                        <div className="text-white">
                          <h2 className="font-bold font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6">
                          </h2>
                          
                          <p className="font-normal text-sm sm:text-base leading-relaxed">
                            {visionContent.description}
                          </p>
                        </div>
                      </TabsContent>
                          
                      {/* Mission Tab */}
                      <TabsContent value="mission" className="mt-0">
                        <div className="text-white">  
                          <h2 className="font-bold font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6">
                          </h2>
                          
                          <p className="font-normal text-sm sm:text-base leading-relaxed">
                            {missionContent.description}
                          </p>
                        </div>
                      </TabsContent>
                      
                      {/* Values Tab */}
                      <TabsContent value="values" className="mt-0">
                        <div className="text-white">
                          <h2 className="font-bold font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6">
                          </h2>
                          
                          <div className="space-y-6">
                            <div>
                              <h3 className="font-bold font-sans text-lg sm:text-xl md:text-2xl mb-3">
                                {valuesContent.integrity.title}
                              </h3>
                              <p className="font-normal text-sm sm:text-base leading-relaxed">
                                {valuesContent.integrity.description}
                              </p>
                            </div>
                            
                            <div>
                              <h3 className="font-bold font-sans text-lg sm:text-xl md:text-2xl mb-3">
                                {valuesContent.excellence.title}
                              </h3>
                              <p className="font-normal text-sm sm:text-base leading-relaxed">
                                {valuesContent.excellence.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                  
                  <div className="md:w-1/3 mt-8 sm:mt-12 md:mt-0 relative z-[100] overflow-hidden">
                    <div className="relative">
                      <div className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[496px] md:h-[496px] top-0 left-0 md:left-[68px] rounded-[247.9px] blur-[64.5px] z-40" />
                   
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
