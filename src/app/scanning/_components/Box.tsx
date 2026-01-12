// import React from "react";

// export const Box: React.FC = () => {
//   return (
//     <div className="mt-12 max-w-xl mx-auto space-y-6 min-h-[800px]">
//       <div className="bg-blue-100 border border-blue-300 rounded-xl p-6 flex items-start gap-4 relative h-full">
//         <div className="absolute left-0 top-0 h-full w-2 bg-blue-500 rounded-l-xl"></div>
//         <span className="text-3xl z-10">⏱️</span>
//         <div className="z-10 flex flex-col justify-center">
//           <h4 className="font-bold text-blue-900 text-xl mb-2">Processing</h4>
//           <p className="text-blue-800 text-lg leading-relaxed">
//             • Detecting RFID tag
//             <br />
//             • Checking in to library system
//             <br />
//             • Verifying book condition
//             <br />
//             • Routing to correct bin
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";

export const Box: React.FC = () => {
  return (
    <div className="mt-12 max-w-2xl mx-auto space-y-8 min-h-[1000px]">
      <div className="bg-blue-100 border border-blue-300 rounded-xl p-10 flex items-start gap-6 relative h-full">
        <div className="absolute left-0 top-0 h-full w-3 bg-blue-500 rounded-l-xl"></div>
        <span className="text-5xl z-10">⏱️</span>
        <div className="z-10 flex flex-col justify-center">
          <h4 className="font-bold text-blue-900 text-3xl mb-4">Processing</h4>
          <p className="text-blue-800 text-2xl leading-relaxed">
            • Detecting RFID tag
            <br />
            • Checking in to library system
            <br />
            • Verifying book condition
            <br />
            • Routing to correct bin
          </p>
        </div>
      </div>
    </div>
  );
};
