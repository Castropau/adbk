// import React from "react";

// export const LikeReceipt: React.FC = () => {
//   return (
//     <div
//       className="
//         mt-8
//         w-full
//         max-w-screen-xl
//         2xl:max-w-screen-2xl
//         rounded-xl
//         px-4 py-4
//         sm:px-6 sm:py-5
//         md:px-8 md:py-6
//         flex items-center gap-4
//         mx-auto
//         shadow-lg
//         relative
//         min-h-[128px] sm:min-h-[150px] md:min-h-[180px] lg:min-h-[220px]
//         bg-[rgb(232,245,233)]
//       "
//     >
//       {/* Left accent line */}
//       <div className="absolute left-0 top-0 h-full w-2 bg-green-500 rounded-l-xl"></div>

//       {/* Icon */}
//       <span
//         className="
//           text-3xl
//           sm:text-4xl
//           md:text-5xl
//           lg:text-6xl
//           flex-shrink-0
//           z-10
//         "
//       >
//         📧
//       </span>

//       {/* Content */}
//       <div className="flex flex-col w-full z-10">
//         <h4
//           className="
//             font-semibold
//             text-base
//             sm:text-lg
//             md:text-xl
//             lg:text-2xl
//             xl:text-3xl
//     text-[rgb(46,125,50)]
//           "
//         >
//           Would You Like a Receipt?
//         </h4>

//         <p
//           className="
//             text-xs
//             sm:text-sm
//             md:text-base
//             lg:text-lg
//             xl:text-xl
//             leading-snug
//           "
//         >
//           You can print a receipt or have it emailed to you. Otherwise, this session will end in 30 seconds.
//         </p>
//       </div>
//     </div>
//   );
// };
import React from "react";

export const LikeReceipt: React.FC = () => {
  return (
    <div
      className="
        mt-12
        w-full max-w-[1000px]
        rounded-2xl
        px-10 py-10
        flex items-center gap-8
        mx-auto
        shadow-2xl
        relative
        min-h-[300px]
        bg-[rgb(232,245,233)]
      "
    >
      {/* Left accent line */}
      <div className="absolute left-0 top-0 h-full w-4 bg-green-500 rounded-l-2xl"></div>

      {/* Icon */}
      <div
        className="
          flex items-center justify-center
          w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px]
          z-10
          
        "
      >
        
        <span className="text-6xl md:text-7xl lg:text-8xl pl-1" aria-label="Email icon">
          📧
          </span>
      </div>

      {/* Content */}
      <div className="flex flex-col w-full z-10 gap-6">
        <h4
          className="
            font-extrabold
            text-3xl md:text-4xl lg:text-5xl
            text-[rgb(46,125,50)]
          "
        >
          Would You Like a Receipt?
        </h4>

        <p
          className="
            text-lg md:text-xl lg:text-2xl
            leading-relaxed
          "
        >
          You can print a receipt or have it emailed to you. Otherwise, this session will end in 30 seconds.
        </p>
      </div>
    </div>
  );
};

