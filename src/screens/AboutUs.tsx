import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";

export const AboutUs = (): JSX.Element => {
  return (
    <div className="bg-[#FFF8EA] min-h-screen">
      <div className="relative">
        <div className="absolute w-full h-full top-0 left-0 bg-[url('/star-bg1.svg')] bg-[100%_100%] -z-10" />
        
        <div className="relative z-10">
          <div className="w-full h-[500px] bg-[#212c2d] bg-[url('/coalsArtboard.svg')] bg-no-repeat bg-cover">
            <Header title="ABOUT US" />
          </div>
          
          <div className="container mx-auto px-4">
            <Card className="w-full max-w-[1465px] mx-auto -mt-32 bg-[#3D4647] rounded-[20px] shadow-lg border-0 h-auto min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-[900px] relative z-20">
              <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12 relative">
                <div className="flex flex-col">
                  <div className="w-full">
                    
                    {/* About Us Content */}
                    <div className="text-white space-y-8">
                      
                      {/* Main Heading */}
                      <div className="mb-8">
                        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#F4A261] mb-4">
                          ABOUT US
                        </h1>
                        <p className="text-xl md:text-xl font-semibold">
                          WE PROVIDED HIGH QUALITY CHARCOAL. CHARCOAL MADE FROM RENEWABLE RESOURCES IS THE BEST ALTERNATIVE ENERGY.
                        </p>
                      </div>

                      {/* Company Description */}
                      <div className="mb-8">
                        <p className="text-lg leading-relaxed">
                          ENVIR SOLUTIONS SL LTD product, WIYONE Charcoal, is committed to providing eco-friendly, sustainable and renewable solutions to meet the increasing demand for charcoal products locally and globally. Our manufacturing process is designed to minimize waste and reduce our carbon footprint, ensuring that our products are not only of the best quality but also environmentally friendly. Our products are known for their consistent quality, high heat output, and long burning time, making them ideal for BBQ, Heating, Shisha and Industrial uses.
                        </p>
                      </div>

                      <div className="mb-8">
                        <p className="text-lg leading-relaxed">
                          We are proud to be the number 1 producers of charcoal using organic renewable resources in Sierra Leone. Our commitment to quality has made us a leading exporter of renewable charcoal to many countries worldwide.
                        </p>
                      </div>

                      {/* Mission & Vision */}
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-[#2A3435] p-6 rounded-lg">
                          <h3 className="text-xl font-bold text-[#F4A261] mb-3">Mission Statement</h3>
                          <p className="text-base leading-relaxed">
                            Provide high-quality, sustainable eco-friendly charcoal using renewable resources while empowering local communities and reducing environmental impact.
                          </p>
                        </div>
                        <div className="bg-[#2A3435] p-6 rounded-lg">
                          <h3 className="text-xl font-bold text-[#F4A261] mb-3">Vision Statement</h3>
                          <p className="text-base leading-relaxed">
                            Transforming communities with clean, renewable energy solutions that foster environmental resilience, economic opportunity, and healthier lives for all.
                          </p>
                        </div>
                      </div>

                      {/* Our Values */}
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-[#F4A261] mb-4">Our Values</h2>
                        <p className="text-lg mb-6">
                          It is important to understand the values that guide an organization and its members. ENVIR SOLUTIONS SL LTD is dedicated to achieving excellence in everything they do. This sentiment is reflected in our core values.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                          <div className="bg-[#2A3435] p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-[#F4A261] mb-3">Integrity</h3>
                            <p className="text-base leading-relaxed">
                              Integrity is essential. It is the inner voice, the source of self-control, the basis for the trust that is imperative in ENVIR SOLUTIONS SL LTD. We do what is right even when no one is watching and prioritize our oath to serve the community above all else.
                            </p>
                          </div>
                          
                          <div className="bg-[#2A3435] p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-[#F4A261] mb-3">Excellence</h3>
                            <p className="text-base leading-relaxed">
                              We are the number 1 supplier of barbecue/shisha charcoal briquettes in Sierra Leone, and we must strive to maintain this daily by performing everything we do with excellence.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Renewable Resources */}
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-[#F4A261] mb-4">Renewable Resources Used</h2>
                        <p className="text-lg mb-4">Based off customer request</p>
                        
                        <div className="bg-[#2A3435] p-6 rounded-lg">
                          <h3 className="text-xl font-bold text-[#F4A261] mb-3">100% Organic Waste</h3>
                          <ul className="space-y-2 text-lg">
                            <li>• Coconut Husk</li>
                            <li>• Bamboo</li>
                            <li>• Palm Kernel Shells</li>
                            <li>• Rice Husk</li>
                            <li>• Saw Dust</li>
                          </ul>
                        </div>
                      </div>

                      {/* Quality of Product */}
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-[#F4A261] mb-4">Quality of Product</h2>
                        
                        <div className="bg-[#2A3435] p-6 rounded-lg">
                          <h3 className="text-xl font-bold text-[#F4A261] mb-3">100% Renewable Organic Waste</h3>
                          <p className="text-base leading-relaxed">
                            The production process starting from preparing the organic waste (coconut shells, bamboo, palm kernel shells.. etc) on stockpile, crushing by crusher machine, mixing with organic binder, compressed charcoal on shape, heating by oven machine 48-72 hours and packing into our 2kg, 5kg, and 10kg bags.
                          </p>
                        </div>
                      </div>
                      
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
