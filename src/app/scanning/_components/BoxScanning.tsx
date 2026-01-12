"use client";
import React from "react";

export const BoxScanning: React.FC = () => {
  return (
    <div
      className="relative border-4 rounded-xl p-16 text-center text-white select-none
                 bg-[linear-gradient(135deg,_rgb(44,62,80)_0%,_rgb(52,73,94)_100%)]
                 overflow-hidden min-h-[600px] flex flex-col justify-center"
    >
      {/* Animated icon */}
      <div className="text-7xl mb-8 animate-bounce">📡</div>

      {/* Scan bar */}
      <div className="absolute top-0 left-0 w-full h-1
                      bg-gradient-to-r from-transparent via-blue-400/100 to-transparent
                      opacity-90 animate-scan
                      shadow-[0_0_15px_rgba(0,150,255,0.8)]">
      </div>

      <h3 className="text-3xl font-semibold mb-4 z-10 relative">
        Reading RFID Tag...
      </h3>
      <p className="max-w-md mx-auto text-lg leading-relaxed z-10 relative">
       Please wait while we identify your book

      </p>
    </div>
  );
};

// import React from "react";

// export const BoxScanning: React.FC = () => {
//   return (
//     <div
//       className="
//         relative border-4 rounded-xl p-24 text-center text-white select-none
//         bg-[linear-gradient(135deg,_rgb(44,62,80)_0%,_rgb(52,73,94)_100%)]
//         overflow-hidden min-h-[800px] flex flex-col justify-center
//       "
//     >
//       {/* Animated icon */}
//       {/* <div className="text-9xl mb-12 animate-bounce">📡</div> */}
//       <div
//   className="
//     inline-block
//     text-[180px] 
//     leading-none 
//     mb-12 
//     animate-bounce
//     select-none
//   "
// >
//   📡
// </div>


//       {/* Scan bar */}
//       <div className="
//         absolute top-0 left-0 w-full h-2
//         bg-gradient-to-r from-transparent via-blue-400/100 to-transparent
//         opacity-90 animate-scan
//         shadow-[0_0_20px_rgba(0,150,255,0.8)]
//       "></div>

//       <h3 className="text-5xl font-semibold mb-6 z-10 relative">
//         Reading RFID Tag...
//       </h3>
//       <p className="max-w-2xl mx-auto text-2xl leading-relaxed z-10 relative">
//         Insert books one at a time
//         <br />
//         Place flat, cover facing up
//         <br />
//         Wait for confirmation before next book
//       </p>
//     </div>
//   );
// };
// import React from "react";

// export const BoxScanning: React.FC = () => {
//   return (
//     <div
//       className="
//         relative
//         w-full
//         h-[1080px]     /* height of the scanning box */
//         max-h-[1080px] /* optional limit */
//         border-4 rounded-xl
//         bg-[linear-gradient(135deg,_rgb(44,62,80)_0%,_rgb(52,73,94)_100%)]
//         flex flex-col justify-center items-center
//         overflow-hidden
//         p-8
//       "
//     >
//       {/* Animated icon */}
//       <div
//         className="
//           text-[450px]   /* exact size for huge icon */
//           leading-none
//           animate-bounce
//           select-none
          
//         "
//       >
//         📡
//       </div>

//       {/* Scan bar */}
//       <div className="
//         absolute top-0 left-0 w-full h-3
//         bg-gradient-to-r from-transparent via-blue-400/100 to-transparent
//         opacity-90 animate-scan
//         shadow-[0_0_30px_rgba(0,150,255,0.8)]
//       "></div>

//       <h3 className="text-5xl font-semibold mt-8 text-white z-10 relative">
//         Reading RFID Tag...
//       </h3>
//       <p className="max-w-3xl mx-auto text-2xl leading-relaxed text-white z-10 relative">
//         Insert books one at a time
//         <br />
//         Place flat, cover facing up
//         <br />
//         Wait for confirmation before next book
//       </p>
//     </div>
//   );
// };
// import React from "react";

// export const BoxScanning: React.FC = () => {
//   return (
//     <div
//       className="
//         relative
//         w-full
//         h-fit
//         p-8    /* container height */
//         flex flex-col justify-center items-center
//         bg-[linear-gradient(135deg,_rgb(44,62,80)_0%,_rgb(52,73,94)_100%)]
//         overflow-hidden
//       "
//     >
//       {/* Huge 📡 emoji */}
//       <div
//         style={{ fontSize: "90px", lineHeight: "1" }} // huge exact size
//         className="animate-bounce select-none"
//       >
//         📡
//       </div>

//       {/* Optional scan text */}
//       <h3 className="text-5xl font-semibold mt-8 text-white z-10 relative text-center">
//         Reading RFID Tag...
//       </h3>
//       <p className="max-w-3xl mx-auto text-2xl leading-relaxed text-white z-10 relative text-center">
//         Insert books one at a time
//         <br />
//         Place flat, cover facing up
//         <br />
//         Wait for confirmation before next book
//       </p>
//     </div>
//   );
// };
