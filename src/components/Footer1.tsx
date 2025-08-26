// import React from 'react';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-white mx-16 rounded-2xl">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-">
//         <div className="py-8">
//           <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
//             {/* Section 1: Envir Solutions */}
//             <div className="md:col-span-3 pr-0 md:pr-8 border-r-2 md:border-r border-gray-300">
//               <h3 className="font-sans text-sm font-light text-black">Envir Solutions</h3>
//               <div className="text-base font-semibold text-black">
//                 <p>Prince Alfred Road, No. Nine (9)</p>
//                 <p>Village, Songo Area, Koya Rural</p>
//                 <p>District</p>
//                 <p className="mt-8">Waterloo, Sierra Leone</p>
//               </div>
//             </div>

//             {/* Section 2: Call Us */}
//             <div className="md:col-span-2 pr-0 md:pr-8 border-r-2 md:border-r border-gray-300">
//               <h3 className="font-sans text-sm font-light text-black">Call Us</h3>
//               <div className="text-base font-semibold text-black">
//                 <p className="text-base">+1 914 336 0929</p>
//                 <p className="text-base">+232 74 88 76</p>
//               </div>
//             </div>

//             {/* Section 3: Email */}
//             <div className="md:col-span-2 pr-0 md:pr-8">
//               <h3 className="font-sans text-sm font-light text-black">Email</h3>

//               <div className="text-base font-semibold text-black overflow-hidden">
//                 <a 
//                   href="mailto:care@wiyonecharcoal.com" 
//                   className="transition-colors duration-200"
//                 >
//                   care@wiyonecharcoal.com
//                 </a>
//               </div>
//             </div>

//             {/* Section 4: Social Icons */}
//             <div className="md:col-span-1">
//               <div className="flex justify-end md:justify-end gap-2">
//                 <img src="/facebook.svg" alt="Facebook" className='h-14 w-14' />
//                 <img src="/instagram.svg" alt="Instagram" className='h-14 w-14' />
//                 <img src="/linkedin.svg" alt="LinkedIn" className='h-14 w-14' />
//               </div>
//             </div>
//           </div>

//           {/* Section 5: Bottom Credit */}
//           <div className="mt-8 pt-6 border-t border-gray-300">
//             <p className="text-base font-bold text-black text-center">
//               Designed By Euphrates Agency for Envir Solutions, 2025
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
























import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white mx-16 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-">
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-9 gap-8">
            {/* Section 1: Envir Solutions */}
            <div className="md:col-span-3 pr-0 md:pr-8 border-r-2 md:border-r border-gray-300">
              <h3 className="font-sans text-sm font-light text-black">Envir Solutions</h3>
              <div className="text-base font-semibold text-black">
                <p>Prince Alfred Road, No. Nine (9)</p>
                <p>Village, Songo Area, Koya Rural</p>
                <p>District</p>
                <p className="mt-8">Waterloo, Sierra Leone</p>
              </div>
            </div>

            {/* Section 2: Call Us */}
            <div className="md:col-span-2 pr-0 md:pr-8 border-r-2 md:border-r-2 border-gray-300">
              <h3 className="font-sans text-sm font-light text-black">Call Us</h3>
              <div className="text-base font-semibold text-black">
                <p className="text-base">+1 914 336 0929</p>
                <p className="text-base">+232 74 88 76</p>
              </div>
            </div>

            {/* Section 3: Email */}
            <div className="md:col-span-3 pr-0 md:pr-8">
              <h3 className="font-sans text-sm font-light text-black">Email</h3>

              <div className="text-base font-semibold text-black overflow-hidden">
                <a 
                  href="mailto:care@wiyonecharcoal.com" 
                  className="transition-colors duration-200"
                >
                  care@wiyonecharcoal.com
                </a>
              </div>
            </div>

            {/* Section 4: Social Icons */}
            <div className="md:col-span-1">
              <div className="flex justify-end md:justify-end gap-2">
                <img src="/facebook.svg" alt="Facebook" className='h-14 w-14' />
                <img src="/instagram.svg" alt="Instagram" className='h-14 w-14' />
                <img src="/linkedin.svg" alt="LinkedIn" className='h-14 w-14' />
              </div>
            </div>
          </div>

          {/* Section 5: Bottom Credit */}
          <div className="mt-8 pt-6 border-t-2">
            <p className="text-base font-bold text-black text-center">
              Designed By Euphrates Agency for Envir Solutions, 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;