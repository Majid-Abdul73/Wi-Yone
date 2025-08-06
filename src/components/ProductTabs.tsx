import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Button } from "./ui/button";

export const ProductTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabContent = {
    about: {
      title: "About Our Charcoal",
      description: "Our premium coconut shell charcoal briquettes are crafted from 100% natural coconut shells, providing a superior smoking experience for hookah and shisha enthusiasts. The unique properties of coconut shells result in charcoal that burns longer, produces less ash, and maintains consistent heat.",
      features: [
        "Made from 100% natural coconut shells",
        "No chemicals or additives",
        "Environmentally friendly and sustainable",
        "Sourced and produced in Sierra Leone",
        "Supports local communities and economy"
      ],
      image: "https://c.animaapp.com/mdxj06n94eLqh6/img/wi-yone-sample-100kg-1.png"
    },
    uses: {
      title: "Perfect for Hookah & Shisha",
      description: "Our coconut shell charcoal briquettes are specifically designed for hookah and shisha use, providing the perfect heat source for an enhanced smoking experience. The low ash content and long burning time make them ideal for both personal and commercial use.",
      steps: [
        {
          title: "Prepare",
          description: "Place briquettes on a heat source or electric heater"
        },
        {
          title: "Heat",
          description: "Allow approximately 9 minutes for full ignition"
        },
        {
          title: "Place",
          description: "Transfer hot briquettes to your hookah bowl"
        },
        {
          title: "Enjoy",
          description: "Experience 2+ hours of consistent heat"
        }
      ],
      image: "https://c.animaapp.com/mdxj06n94eLqh6/img/coalsartboard-1-1.png"
    },
    sizes: {
      title: "Available Sizes & Packaging",
      description: "We offer our premium coconut shell charcoal briquettes in various sizes and packaging options to meet different needs, from individual users to commercial establishments.",
      options: [
        {
          name: "Retail Pack",
          weight: "1 kg",
          pieces: "Approx. 72 pieces",
          bestFor: "Individual use"
        },
        {
          name: "Standard Pack",
          weight: "5 kg",
          pieces: "Approx. 360 pieces",
          bestFor: "Small businesses"
        },
        {
          name: "Bulk Pack",
          weight: "25 kg",
          pieces: "Approx. 1800 pieces",
          bestFor: "Commercial establishments"
        }
      ],
      image: "https://c.animaapp.com/mdxj06n94eLqh6/img/wi-yone-sample-100kg-1.png"
    }
  };

  return (
    <Tabs 
      defaultValue="about" 
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full max-w-[1200px] mx-auto"
    >
      <TabsList className="flex justify-center bg-transparent p-0 h-[58px] mb-12">
        <TabsTrigger
          value="about"
          className="relative w-[152px] h-16 rounded-[71.5px] border-[3px] border-solid border-[#e15822] data-[state=active]:bg-[#e15822] data-[state=active]:text-white data-[state=inactive]:text-[#e15822]"
        >
          <span className="font-sans font-semibold text-sm text-center">
            ABOUT
          </span>
        </TabsTrigger>
        <TabsTrigger
          value="uses"
          className="relative w-[152px] h-16 rounded-[71.5px] border-[3px] border-solid border-[#e15822] data-[state=active]:bg-[#e15822] data-[state=active]:text-white data-[state=inactive]:text-[#e15822] mx-4"
        >
          <span className="font-sans font-semibold text-sm text-center">
            USES
          </span>
        </TabsTrigger>
        <TabsTrigger
          value="sizes"
          className="relative w-[152px] h-16 rounded-[71.5px] border-[3px] border-solid border-[#e15822] data-[state=active]:bg-[#e15822] data-[state=active]:text-white data-[state=inactive]:text-[#e15822]"
        >
          <span className="font-sans font-semibold text-sm text-center">
            SIZES
          </span>
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="about" className="mt-0">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="font-['Mikoena-Regular'] text-3xl md:text-4xl text-[#212c2d] mb-6">
              {tabContent.about.title}
            </h2>
            <p className="font-sans text-gray-700 mb-6">
              {tabContent.about.description}
            </p>
            <h3 className="font-sans font-semibold text-xl text-[#212c2d] mb-4">Key Features:</h3>
            <ul className="font-sans text-gray-700 space-y-2 mb-8">
              {tabContent.about.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#e15822] mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="bg-[#e15822] hover:bg-[#d14812] text-white px-8 py-6 rounded-full">
              Learn More
            </Button>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute w-[400px] h-[400px] rounded-full blur-[64.5px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(225,88,34,0.2)_0%,rgba(225,88,34,0)_100%)]" />
              <img
                className="relative z-10 w-full max-w-[500px] mx-auto"
                alt="Coconut Shell Charcoal"
                src={tabContent.about.image}
              />
            </div>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="uses" className="mt-0">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="font-['Mikoena-Regular'] text-3xl md:text-4xl text-[#212c2d] mb-6">
              {tabContent.uses.title}
            </h2>
            <p className="font-sans text-gray-700 mb-8">
              {tabContent.uses.description}
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {tabContent.uses.steps.map((step, index) => (
                <div key={index} className="bg-[#fff8ea] p-4 rounded-[20px]">
                  <div className="bg-[#e15822] w-10 h-10 rounded-full flex items-center justify-center mb-3">
                    <span className="font-['Mikoena-Regular'] text-xl text-white">{index + 1}</span>
                  </div>
                  <h3 className="font-sans font-semibold text-lg text-[#212c2d] mb-2">{step.title}</h3>
                  <p className="font-sans text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>
            <Button className="bg-[#e15822] hover:bg-[#d14812] text-white px-8 py-6 rounded-full">
              View Tutorial
            </Button>
          </div>
          <div className="md:w-1/2">
            <img
              className="w-full max-w-[500px] mx-auto rounded-[20px] shadow-lg"
              alt="Hookah with Charcoal"
              src={tabContent.uses.image}
            />
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="sizes" className="mt-0">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="font-['Mikoena-Regular'] text-3xl md:text-4xl text-[#212c2d] mb-6">
              {tabContent.sizes.title}
            </h2>
            <p className="font-sans text-gray-700 mb-8">
              {tabContent.sizes.description}
            </p>
            <div className="space-y-6 mb-8">
              {tabContent.sizes.options.map((option, index) => (
                <div key={index} className="bg-[#fff8ea] p-6 rounded-[20px]">
                  <h3 className="font-sans font-semibold text-xl text-[#212c2d] mb-3">{option.name}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-sans text-gray-500 text-sm">Weight</p>
                      <p className="font-sans font-medium text-[#212c2d]">{option.weight}</p>
                    </div>
                    <div>
                      <p className="font-sans text-gray-500 text-sm">Pieces</p>
                      <p className="font-sans font-medium text-[#212c2d]">{option.pieces}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="font-sans text-gray-500 text-sm">Best For</p>
                      <p className="font-sans font-medium text-[#212c2d]">{option.bestFor}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button className="bg-[#e15822] hover:bg-[#d14812] text-white px-8 py-6 rounded-full">
              View Pricing
            </Button>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute w-[400px] h-[400px] rounded-full blur-[64.5px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(225,88,34,0.2)_0%,rgba(225,88,34,0)_100%)]" />
              <img
                className="relative z-10 w-full max-w-[500px] mx-auto"
                alt="Charcoal Packaging"
                src={tabContent.sizes.image}
              />
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};
