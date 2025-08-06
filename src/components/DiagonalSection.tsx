import React from "react";

interface DiagonalSectionProps {
  bgColor: string;
  textColor: string;
  title: string;
  description: string;
  imageUrl?: string;
  reverse?: boolean;
  children?: React.ReactNode;
}

export const DiagonalSection: React.FC<DiagonalSectionProps> = ({
  bgColor,
  textColor,
  title,
  description,
  imageUrl,
  reverse = false,
  children
}) => {
  return (
    <div 
      className={`relative w-full py-20 ${bgColor}`}
      style={{
        clipPath: reverse 
          ? 'polygon(0 0, 100% 5%, 100% 100%, 0 95%)' 
          : 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)',
        marginTop: reverse ? '-5vw' : '0',
        marginBottom: reverse ? '0' : '-5vw',
        paddingTop: '10vw',
        paddingBottom: '10vw',
        zIndex: reverse ? '1' : '0'
      }}
    >
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}>
          <div className="md:w-1/2">
            <h2 className={`font-['Mikoena-Regular'] text-4xl md:text-5xl ${textColor} mb-6`}>
              {title}
            </h2>
            <p className={`font-sans text-lg ${textColor} mb-8`}>
              {description}
            </p>
            {children}
          </div>
          
          {imageUrl && (
            <div className="md:w-1/2 flex justify-center">
              <img 
                src={imageUrl} 
                alt={title} 
                className="max-w-full md:max-w-[80%] rounded-2xl shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
