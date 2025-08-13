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
    { title: "Envir Solutions SL Limited,", details: ["Koya Rural District", "Waterloo, Sierra Leone"], },
    { title: "Call Us", details: ["+232 74748876"], },
    {  title: "Email", details: ["care@wiyonecharcoal.com"], },
  ];

  return (
    <div className="w-full max-w-[390px] sm:max-w-[700px] md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1400px] mx-auto my-2 sm:my-4 md:my-6 lg:my- rounded-[20px] bg-white shadow-[0px_9px_21.3px_#0000000d] p-3 sm:p-4 md:p-6 lg:p-6 xl:p-8">

      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-0">
          
          {/* Company Information */}
          <div className="w-full md:w-[313px]">
            <p className="font-medium text-xs sm:text-xs md:text-xs lg:text-xs">{contactInfo[0].title}</p>
            <p className="text-base sm:text-base md:text-base lg:text-base leading-tight sm:leading-[28.3px] font-semibold">

              {contactInfo[0].details.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>

          {/* Call Us Information */}
          <div className="w-full md:w-[205px]">
            <p className="font-medium text-xs sm:text-xs md:text-xs lg:text-xs">{contactInfo[1].title}</p>
            <p className="text-base sm:text-base md:text-base lg:text-base leading-tight sm:leading-[28.3px] font-semibold">

              {contactInfo[1].details[0]}
            </p>
          </div>

          {/* Email Information */}
          <div className="w-full md:w-[326px]">
            <p className="font-medium text-xs sm:text-xs md:text-xs lg:text-xs">{contactInfo[2].title}</p>

            <p className="text-base sm:text-base md:text-base lg:text-base leading-tight sm:leading-[28.3px] font-semibold">

              {contactInfo[2].details[0]}
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start md:ml-auto mt-2 sm:mt-4 md:mt-0 lg:mt-0">
            <div className="flex space-x-2">
              {socialIcons.map((social, index) => (
                <div
                  key={index}
                  className="w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] lg:w-[55px] lg:h-[55px]"
                >
                  {social.icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="text-center mt-8 pt-4">
          <p className="text-base sm:text-base md:text-base lg:text-base font-medium">
            Designed By Euphrates Agency for Envir Solutions, 2025
          </p>
        </div>
      </div>
    </div>
  );
};
