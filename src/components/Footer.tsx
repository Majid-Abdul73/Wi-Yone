import React from "react";

export const Footer = (): JSX.Element => {
  // Social media icons data
  const socialIcons = [
    { icon: <img src="/facebook.svg" alt="Facebook" />, name: "Facebook" },
    { icon: <img src="/instagram.svg" alt="Instagram" />, name: "Instagram" },
    { icon: <img src="/linkedin.svg" alt="LinkedIn" />, name: "LinkedIn" },
  ];

  // Contact information data
  const contactInfo = [
    { 
      title: "Envir Solutions SL Limited,", 
      details: [
        "Prince Alfred Road, No. Nine (9) Village",
        "Songo Area, Koya Rural District", 
        "Waterloo, Sierra Leone"
      ], 
    },
    { title: "Call Us", details: ["+1 914 336 0929", "+232 74748876"], },
    {  title: "Email", details: ["care@wiyonecharcoal.com"], },
  ];

  return (
    <div className="w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto my-4 sm:my-6 md:my-8 lg:my-10 xl:my-12 rounded-lg sm:rounded-xl md:rounded-2xl bg-white shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">

      <div className="flex flex-col space-y-6 sm:space-y-8 md:space-y-0">
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          
          {/* Company Information */}
          <div className="flex-1 md:max-w-xs lg:max-w-sm">
            <p className="font-medium text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-2 sm:mb-3">{contactInfo[0].title}</p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed font-semibold text-gray-800">
              {contactInfo[0].details.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>

          {/* Call Us Information */}
          <div className="flex-1 md:max-w-xs lg:max-w-sm">
            <p className="font-medium text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-2 sm:mb-3">{contactInfo[1].title}</p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed font-semibold text-gray-800">
              {contactInfo[1].details[0]}
            </p>
          </div>

          {/* Email Information */}
          <div className="flex-1 md:max-w-xs lg:max-w-sm">
            <p className="font-medium text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-2 sm:mb-3">{contactInfo[2].title}</p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed font-semibold text-gray-800">
              {contactInfo[2].details[0]}
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-end md:ml-auto items-start mt-2 md:mt-0">
            <div className="flex space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6">
              {socialIcons.map((social, index) => (
                <div
                  key={index}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 hover:scale-110 transition-transform duration-200 cursor-pointer"
                >
                  {social.icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 pt-4 sm:pt-6 md:pt-8 border-t border-gray-200">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium text-gray-600">
            Designed By Euphrates Agency for Envir Solutions, 2025
          </p>
        </div>
      </div>
    </div>
  );
};


