import React from "react";
import { Separator } from "./ui/separator";

export const Footer = (): JSX.Element => {
  // Social media icons data
  const socialIcons = [
    { icon: <img src="/facebook.svg" alt="Facebook" />, name: "Facebook" },
    { icon: <img src="/instagram.svg" alt="Instagram" />, name: "Instagram" },
    { icon: <img src="/linkedin.svg" alt="LinkedIn" />, name: "LinkedIn" },
  ];

  // Contact information data
  const contactInfo = [
    { title: "Envir Solutions", details: ["Koya Rural District", "Waterloo, Sierra Leone"], },
    { title: "Call Us", details: ["+232 00 000 000"], },
    {  title: "Email", details: ["hello@wiyonecharcoal.com"], },
  ];

  return (
    <div className="w-full max-w-[1402px] mx-auto my-4 sm:my-6 md:my-8 rounded-[20px] bg-white shadow-[0px_9px_21.3px_#0000000d] p-4 sm:p-6 md:p-8 lg:p-11">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row gap-6 md:gap-0">
          
          {/* Company Information */}
          <div className="w-full md:w-[313px]">
            <p className="font-medium text-sm sm:text-base">{contactInfo[0].title}</p>
            <p className="text-xl sm:text-2xl leading-[28.3px] font-bold">
              {contactInfo[0].details.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>

          {/* Vertical Separator - Hidden on mobile */}
          <Separator orientation="vertical" className="hidden md:block mx-6 h-20" />

          {/* Call Us Information */}
          <div className="w-full md:w-[205px]">
            <p className="font-medium text-sm sm:text-base">{contactInfo[1].title}</p>
            <p className="text-xl sm:text-2xl leading-[28.3px] font-normal">
              {contactInfo[1].details[0]}
            </p>
          </div>

          {/* Vertical Separator - Hidden on mobile */}
          <Separator orientation="vertical" className="hidden md:block mx-6 h-20" />

          {/* Email Information */}
          <div className="w-full md:w-[326px]">
            <p className="font-medium text-sm sm:text-base">{contactInfo[2].title}</p>
            <p className="text-xl sm:text-2xl leading-[28.3px] font-normal">
              {contactInfo[2].details[0]}
            </p>
          </div>

          {/* Horizontal Separators for mobile view */}
          <Separator className="md:hidden my-4" />

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start md:ml-auto mt-4 md:mt-0">
            <div className="flex space-x-2">
              {socialIcons.map((social, index) => (
                <div
                  key={index}
                  className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] md:w-[62px] md:h-[61px] bg-[#f9f9f9] rounded-[5px] flex items-center justify-center"
                >
                  {social.icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Separator */}
        <Separator className="my-6 md:my-8" />

        {/* Footer Copyright */}
        <div className="text-center">
          <p className="text-sm sm:text-base font-medium">
            Designed By Euphrates Agency for Envir Solutions, 2025
          </p>
        </div>
      </div>
    </div>
  );
};
