// import React from "react";

// export const SessionSummary: React.FC = () => {
//   return (
//     <div
//       className="
//       mt-8
//         w-full
//         max-w-screen-xl
//         2xl:max-w-screen-2xl
//         rounded-xl
//         px-4 py-4
//         sm:px-6 sm:py-5
//         md:px-8 md:py-6
//         flex flex-col
//         gap-4
//         mx-auto
//         shadow-lg
//         relative
//         bg-[linear-gradient(135deg,_rgb(102,126,234)_0%,_rgb(118,75,162)_100%)]
//       "
//     >
//       <h4 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl mb-4 text-center text-white">
// Session Summary
//       </h4>

//       <div className="flex flex-col gap-2 text-white">
//         <div className="flex justify-between border-b border-white py-2">
//           <span className="font-medium">Items Returned:</span>
//           <span>4 books</span>
//         </div>

//         <div className="flex justify-between border-b border-white py-2">
//           <span className="font-medium">Total Late Fees:</span>
//           <span>$0.50</span>
//         </div>

//         <div className="flex flex-col py-2">
//           <div className="flex justify-between">
//             <span className="font-medium">Returns To Date:</span>
//             <span>23 items</span>
//           </div>
//           <div className="mt-1 border-b border-white"></div>
//           <div className="mt-1 border-b-2 border-white"></div>
//         </div>

//         <div className="flex justify-between py-2 items-center">
//           <span className="text-xl md:text-2xl font-bold">Thank You!</span>
//           <span className="text-xl md:text-2xl font-bold">🎉</span>
//         </div>
//       </div>
//     </div>
//   );
// };
import React from "react";

export const SessionSummary: React.FC = () => {
  return (
    <div
      className="
        mt-12
        w-full max-w-[1000px]
        rounded-2xl
        px-12 py-12
        flex flex-col
        gap-8
        mx-auto
        shadow-2xl
        relative
        bg-[linear-gradient(135deg,_rgb(102,126,234)_0%,_rgb(118,75,162)_100%)]
      "
    >
      {/* Title */}
      <h4 className="font-extrabold text-4xl md:text-5xl mb-8 text-center text-white">
        Session Summary
      </h4>

      {/* Summary items */}
      <div className="flex flex-col gap-6 text-white text-xl md:text-2xl">
        <div className="flex justify-between border-b-2 border-white py-4">
          <span className="font-semibold">Items Returned:</span>
          <span>4 books</span>
        </div>

        <div className="flex justify-between border-b-2 border-white py-4">
          <span className="font-semibold">Total Late Fees:</span>
          <span>$0.50</span>
        </div>

        <div className="flex flex-col py-4 gap-2">
          <div className="flex justify-between">
            <span className="font-semibold">Returns To Date:</span>
            <span>23 items</span>
          </div>
          <div className="border-b-2 border-white"></div>
          <div className="border-b-4 border-white"></div>
        </div>

        <div className="flex justify-between items-center py-4 text-3xl md:text-4xl font-bold">
          <span>Thank You!</span>
          <span>🎉</span>
        </div>
      </div>
    </div>
  );
};
