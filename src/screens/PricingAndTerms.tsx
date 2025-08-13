import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";

export const PricingAndTerms = (): JSX.Element => {
  // Data for the specifications
  const specifications = [
    "Ash Content: 1.8-2%",
    "Burning Time: Over 2 hours",
    "Ignition Time: Approximately 9 minutes",
    "Drop Test: 0/10 (no breakage)",
    "Ash Color: Natural white",
    "Fixed Carbon: 80%",
    "Moisture Content: 5%",
    "Volatile Matter: 15%",
  ];

  // Pricing data
  const pricingOptions = [
    {
      name: "Packaging",
      description: "Lamination with BOPP (Biaxially Oriented Polypropylene) film adds a protective layer that improves the material's resistance to tearing, moisture, and other environmental factors.\n\n  PP woven bag is a type of packaging bag made from polypropylene (PP) that is woven together to create a strong and durable material. These bags are known for their strength, tear resistance, and ability to handle heavy loads, making them suitable for various industrial and agricultural applications. They are also lightweight and designed to be waterproof."
    },
    {
      name: "Bag Specifications",
      description: "2kg & 5kg bags: Bopp Laminated PP Woven, Top Open with Punched Handle, Stitch Bottom | 10kg bags: Bopp Laminated PP Woven, Full Open Top, Stitch Bottom | 15kg & 25kg bags: Coming Soon"
    },
    {
      name: "Premium Shisha Charcoal",
      price: "$1,200-1,500 USD per ton",
      description: "(FOB basis) for 100% Premium Shisha Pure Coconut or Bamboo Charcoal Briquette.",
      note: "Usage: Shisha/Hookah"
    },
    {
      name: "BBQ Charcoal",
      price: "$800-1,000 USD per ton",
      description: "(FOB basis) for BBQ Charcoal Briquette.",
      note: "Usage: BBQ/Grilling/Cooking/Industrial"
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
        <div className="absolute w-full h-full top-0 left-0 bg-[url(https://c.animaapp.com/mdxj06n94eLqh6/img/star-bg.svg)] bg-[100%_100%] -z-10" />
        
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
                          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6">
                            Coconut Shell Charcoal Briquette <br className="hidden sm:block" /> Specifications for Shisha/Hookah:
                          </h2>
                          
                          <ul className="font-normal text-sm sm:text-base space-y-1">
                            {specifications.map((spec, index) => (
                              <li key={index}>{spec}</li>
                            ))}
                          </ul>
                        </div>
                      </TabsContent>
                      
                      
                      {/* Pricing Options */}
                      <TabsContent value="pricing" className="mt-0">
                        <div className="text-white">
                          <h2 className="font-sans font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6">
                            The Price Of Charcoal Depends On <br className="hidden sm:block" /> Specification And Packaging.
                          </h2>
                          
                          <div className="space-y-4 sm:space-y-6">
                            {pricingOptions.map((option, index) => (
                              <div key={index}>
                                <h3 className="font-semibold text-lg sm:text-xl">
                                  {option.name}:
                                </h3>
                                <div className="">
                                  {option.name === "Packaging" && (
                                    <p className="font-sans text-white/90 text-sm sm:text-base">
                                      {option.description}
                                    </p>
                                  )}
                                  {option.name === "Bag Specifications" && (
                                    <div className="font-sans text-white/90 text-sm sm:text-base">
                                      {option.description.split(' | ').map((spec, i) => (
                                        <p key={i} className="mb-1">{spec}</p>
                                      ))}
                                    </div>
                                  )}
                                  {(option.name === "Premium Shisha Charcoal" || option.name === "BBQ Charcoal") && (
                                    <>
                                      <p className="font-sans text-sm sm:text-base">
                                        {option.price} {option.description}
                                      </p>
                                      {option.note && (
                                        <p className="font-sans text-xs sm:text-sm text-white/80 italic">
                                          {option.note}
                                        </p>
                                      )}
                                    </>
                                  )}
                                </div>
                              </div>
                            ))}

                            {/* Note */}
                            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6">
                              <p className="font-sans text-white/90 text-sm sm:text-base">
                                Note: These prices are approximate. Final prices depend on specifications, order volume, and packaging.
                              </p>
                            </div>
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
