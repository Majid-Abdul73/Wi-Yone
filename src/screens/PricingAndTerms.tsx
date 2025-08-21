import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";

export const PricingAndTerms = (): JSX.Element => {
  // Data for the specifications
  const specifications = [
    {
      category: "Shisha/Hookah Charcoal",
      details: [
        "Types of Product: (100% PURE COCONUT or BAMBOO CHARCOAL BRIQUETTE)",
        "Usage: Shisha | Hookah",
        "Raw Material: 100% Coconut or 100% Bamboo",
        "Grade: Premium | Shape: Cube",
        "Duration of Burning: 1.5 - 2hrs",
        "No Smell | No Smoke | No Chemical Additive | Strong | No Crack",
        "Ash Color: White Grey | Ash Content: 2.5%-3% | Volatile Matter: Maximum 12% - 15%",
        "Moisture: Maximum 6% | Fixed Carbon: Minimum 75% | Total Sulfur: Maximum 0.03%",
        "Gross Calorific Value: 7200+ kcal/kg | Drop Test: Good (Strong)",
        "Capacity: (20ft = 17 - 19 tons) & (40ft = 26 - 28 tons)",
        "Production: 100+ tons per month"
      ]
    },
    {
      category: "BBQ/Grilling Charcoal",
      details: [
        "Types of Product: (100% PURE COCONUT or BAMBOO CHARCOAL BRIQUETTE)",
        "Usage: BBQ | Grilling | Cooking | Industrial",
        "Raw Material: 100% Coconut or 100% Bamboo",
        "Grade: Premium | Shape: Pillow or Hexagon",
        "Duration of Burning: 3 - 4hrs",
        "No Smell | No Smoke | No Chemical Additive | No Crack | Strong",
        "Ash Color: White Grey / Ash Content: 3% - 7% / Volatile Matter: Maximum 12% - 15%",
        "Moisture: Maximum 6% | Fixed Carbon: Minimum 75% | Total Sulfur: Maximum 0.03%",
        "Gross Calorific Value: 6500+ kcal/kg | Drop Test: Good (Strong)",
        "Capacity: (20ft = 17 - 19 tons) & (40ft = 26 - 28 tons)",
        "Production: 100+ tons per month"
      ]
    }
  ];

  // Pricing data
  const pricingOptions = [
    {
      name: "Packaging",
      description: "Lamination with BOPP (Biaxially Oriented Polypropylene) film adds a protective layer that improves the material's resistance to tearing, moisture, and other environmental factors.\n\nPP woven bag is a type of packaging bag made from polypropylene (PP) that is woven together to create a strong and durable material. These bags are known for their strength, tear resistance, and ability to handle heavy loads, making them suitable for various industrial and agricultural applications. They are also lightweight and designed to be waterproof."
    },
    {
      name: "Premium Shisha Charcoal",
      price: "$1200-1500 per ton (Free On Board)",
      description: "Types of Product: (100% PURE COCONUT or BAMBOO CHARCOAL BRIQUETTE)",
      note: "Usage: Shisha | Hookah"
    },
    {
      name: "BBQ Charcoal",
      price: "USD $800 - $1000 per ton (Free On Board)",
      description: "Types of Product: (100% PURE COCONUT or BAMBOO CHARCOAL BRIQUETTE)",
      note: "Usage: BBQ | Grilling | Cooking | Industrial"
    },
    {
      name: "Contact Information",
      description: "Looking for an experienced and trusted BBQ/Grilling, Shisha, Industrial heating eco-friendly/sustainable/renewable charcoal for your private label brand.\n\nContact us to discuss further!\nWhatsApp: USA +19143360829 or +17209371705 | Sierra Leone +23274748876 or +23299200541\nEmail: care@wiyonecharcoal.com"
    }
  ];

  // Terms data
  const termsCategories = [
    {
      title: "Minimum Order Quantity (MOQ) for Export",
      content: "Shisha/Hookah Charcoal: 17-19 tons (1 x 20ft container, Full Container Load - FCL)\n\nBarbecue Charcoal: 17-19 tons (1 x 20ft container, Full Container Load - FCL)"
    },
    {
      title: "Payment Terms",
      content: "Payments are accepted exclusively via Telegraphic Transfer (Wire Transfer).\nA 50% advance payment is required upon signing the sales contract or submitting the purchase order.\nThe remaining 50% balance must be settled at least five days prior to the container loading schedule."
    },
    {
      title: "Additional Notes",
      content: "Prices are quoted based on FOB (Free on Board)\nThe quoted price includes export documentation, such as the Commercial Invoice, Packing List, and Bill of Lading."
    },
    {
      title: "Productions Lead Time",
      content: "The lead time for production varies based on order volume and packaging:\nCharcoal production time:\n10-15 days for a 20ft container\n15-20 days for a 40ft container\nPacking: 3-6 days\n\nOnce the shipment is dispatched, we will provide all necessary shipping documents, including the Bill of Lading, Commercial Invoice, and Packing List.\n\nWe encourage our future clients to schedule a visit our factory."
    },
  ];

  const [activeTab, setActiveTab] = useState("specifications");

  return (
    <div className="bg-[#fff8ea] min-h-screen">
      <div className="relative">
        <div className="absolute w-full h-full top-0 left-0 bg-[/star-bg.svg)] bg-[100%_100%] -z-10" />
        
        <div className="relative z-10">
          <div className="w-full h-[500px] lg:h-[500px] bg-[#212c2d] bg-[url('/coalsArtboard.svg')] bg-no-repeat">
            <Header title="PRICING AND TERMS" />
          </div>
          
          <div className="container mx-auto px-4">
            <Card className="w-full max-w-[1465px] mx-auto -mt-32 bg-[#e15822] rounded-[20px] shadow-lg border-0 h-auto min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[900px] xl:min-h-[1000px] relative z-20">
              
              <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12 relative">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/3 pr-0 md:pr-12">
                    
                    {/* Pricing and Terms */}
                    <Tabs 
                      defaultValue="specifications" 
                      value={activeTab}
                      onValueChange={setActiveTab}
                      className="w-full"
                    >
                      <TabsList className="flex justify-start bg-transparent p-0 h-[48px] sm:h-[58px] mb-6 sm:mb-8">
                        <TabsTrigger
                          value="specifications"
                          className="relative w-[120px] sm:w-[152px] h-[48px] sm:h-[58px] rounded-[71.5px] data-[state=active]:bg-transparent data-[state=active]:text-[#ffe7b6] data-[state=active]:border-2 data-[state=active]:border-[#ffe7b6] data-[state=inactive]:text-white"
                        >
                          <span className="font-sans font-semibold text-xs sm:text-sm text-center">
                            SPECIFICATIONS
                          </span>
                        </TabsTrigger>
                        <TabsTrigger
                          value="pricing"
                          className="relative w-[120px] sm:w-[152px] h-[48px] sm:h-[58px] rounded-[71.5px] data-[state=active]:bg-transparent data-[state=active]:text-[#ffe7b6] data-[state=active]:border-2 data-[state=active]:border-[#ffe7b6] data-[state=inactive]:text-white"
                        >
                          <span className="font-sans font-semibold text-xs sm:text-sm text-center">
                            PRICING
                          </span>
                        </TabsTrigger>
                        <TabsTrigger
                          value="terms"
                          className="relative w-[120px] sm:w-[152px] h-[48px] sm:h-[58px] rounded-[71.5px] data-[state=active]:bg-transparent data-[state=active]:text-[#ffe7b6] data-[state=active]:border-2 data-[state=active]:border-[#ffe7b6] data-[state=inactive]:text-white"
                        >
                          <span className="font-sans font-semibold text-xs sm:text-sm text-center">
                            TERMS
                          </span>
                        </TabsTrigger>
                      </TabsList>
                      

                      {/* specifications option */}
                      <TabsContent value="specifications" className="mt-0">
                        <div className="text-white">
                          {/* <h2 className="font-bold font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6">
                            PRODUCT SPECIFICATION
                          </h2> */}
                          
                          <div className="space-y-6 sm:space-y-8">
                            {specifications.map((spec, index) => (
                              <div key={index} className="">
                                <h3 className="font-semibold font-sans text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-[#ffe7b6]">
                                  {spec.category}
                                </h3>
                                <ul className="font-normal text-sm sm:text-base space-y-1">
                                  {spec.details.map((detail, detailIndex) => (
                                    <li key={detailIndex} className="leading-relaxed">
                                      {detail}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>
                      
                      
                      {/* Pricing Options */}
                      <TabsContent value="pricing" className="mt-0">
                        <div className="text-white">
                          <h2 className="font-sans font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6">
                            Pricing
                          </h2>
                          <p className="font-sans text-white/90 text-sm sm:text-base mb-6">
                            The price of charcoal depends on specification and packaging.
                          </p>
                          
                          <div className="space-y-4 sm:space-y-6">
                            {pricingOptions.map((option, index) => (
                              <div key={index}>
                                <h3 className="font-semibold font-sans text-lg sm:text-xl mb-2">
                                  {option.name}:
                                </h3>
                                <div className="">
                                  {option.name === "Packaging" && (
                                    <p className="font-sans text-white/90 text-sm sm:text-base whitespace-pre-line">
                                      {option.description}
                                    </p>
                                  )}
                                  {(option.name === "Premium Shisha Charcoal" || option.name === "BBQ Charcoal") && (
                                    <>
                                      <p className="font-sans text-sm sm:text-base font-semibold">
                                        Price: {option.price}
                                      </p>
                                      <p className="font-sans text-sm sm:text-base mt-1">
                                        {option.description}
                                      </p>
                                      {option.note && (
                                        <p className="font-sans text-xs sm:text-sm text-white/80 italic mt-1">
                                          {option.note}
                                        </p>
                                      )}
                                    </>
                                  )}
                                  {option.name === "Contact Information" && (
                                    <p className="font-sans text-white/90 text-sm sm:text-base whitespace-pre-line">
                                      {option.description}
                                    </p>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>
                      

                      {/* Terms & Conditions */}
                      <TabsContent value="terms" className="mt-0">
                        <div className="text-white">
                          <div className="space-y-4 sm:space-y-6">
                            {termsCategories.map((category, index) => (
                              <div key={index} className="">
                                <h3 className="font-sans font-semibold text-lg sm:text-xl md:text-2xl">
                                  {category.title}
                                </h3>
                                <p className="font-sans text-white/90 whitespace-pre-line text-sm sm:text-base">
                                  {category.content}
                                </p>
                              </div>
                            ))}
                          </div>
                          
                          <div className="mt-6 sm:mt-8">
                            <p className="font-sans text-white/80 text-sm sm:text-base">
                              Once the shipment is dispatched, we will provide all necessary shipping documents, 
                              including the Bill of Lading, Commercial Invoice, and Packing List. <br className="hidden sm:block" />
                              We encourage our future clients to schedule a visit our factory.
                            </p>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                  
                  <div className="md:w-1/3 mt-8 sm:mt-12 md:mt-0 relative z-[100] overflow-hidden">
                    <div className="relative">
                      <div className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[496px] md:h-[496px] top-0 left-0 md:left-[68px] rounded-[247.9px] blur-[64.5px] z-40" />

                      <img
                        className="relative z-[9999] w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] mx-auto -mt20 sm:-mt24 md:-mt44 lg:-mt52 xl:-mt72"
                        alt="Wi yone sample"
                        src="/WiYoneSample.svg"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>            
          </div>
          
          <div className="mt-16">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
