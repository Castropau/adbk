// import React from "react";

// export const LoginInfoBox: React.FC = () => {
//     return (
//         <div className="mt-12 max-w-xl mx-auto space-y-6">
//             <div className="bg-blue-100 border border-blue-300 border-l-4 border-l-blue-500 rounded-lg p-5 flex items-start gap-3">
//   <span className="text-2xl">ℹ️</span>
//   <div>
//     <h4 className="font-semibold text-blue-900 mb-1">
//       Login is Optional
//     </h4>
//     <p className="text-blue-800 text-sm md:text-base leading-relaxed">
//       You can return books without logging in. Login only if you want a printed receipt or to view your account status.
//     </p>
//   </div>
// </div>




//             <div className="border border-gray-300 rounded-lg p-5 flex gap-4 cursor-pointer 
//                 hover:border-blue-500 hover:translate-x-2 
//                 transform transition-all duration-300 ease-in-out cursor-pointer">
//                 <span className="text-2xl self-start">🚀</span>
//                 <div className="flex flex-col">
//                     <h4 className="font-semibold">Scan your library card</h4>
//                     <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-1">
//                         Drop books without scanning your card
//                     </p>
//                 </div>
//             </div>


//             <div className="border border-gray-300 rounded-lg p-5 flex gap-4 cursor-pointer 
//                 hover:border-blue-500 hover:translate-x-2 
//                 transform transition-all duration-300 ease-in-out cursor-pointer">
//                 <span className="text-2xl self-start">🧾</span>
//                 <div className="flex flex-col">
//                     <h4 className="font-semibold">Login for Receipt</h4>
//                     <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-1">
//                         Scan your card to get a printed receipt
//                     </p>
//                 </div>
//             </div>
//             <div className="border border-gray-300 rounded-lg p-5 flex gap-4 cursor-pointer 
//                 hover:border-blue-500 hover:translate-x-2 
//                 transform transition-all duration-300 ease-in-out cursor-pointer">
//                 <span className="text-2xl self-start">📱</span>
//                 <div className="flex flex-col">
//                     <h4 className="font-semibold">Scan QR Code</h4>
//                     <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-1">
//                         Show your mobile library app
//                     </p>
//                 </div>
//             </div>

//             <div className="border border-gray-300 rounded-lg p-5 flex gap-4 cursor-pointer 
//                 hover:border-blue-500 hover:translate-x-2 
//                 transform transition-all duration-300 ease-in-out cursor-pointer">
//                 <span className="text-2xl self-start">🔢</span>
//                 <div className="flex flex-col">
//                     <h4 className="font-semibold">Enter Card Number</h4>
//                     <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-1">
//                         Type your library card number
//                     </p>
//                 </div>
//             </div>
//             <div className="border border-gray-300 rounded-lg p-5 flex gap-4 cursor-pointer 
//                 hover:border-blue-500 hover:translate-x-2 
//                 transform transition-all duration-300 ease-in-out cursor-pointer">
//                 <span className="text-2xl self-start">⏩</span>
//                 <div className="flex flex-col">
//                     <h4 className="font-semibold">Skip Login</h4>
//                     <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-1">
//                         Continue without receipt
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };
import React from "react";

export const LoginInfoBox: React.FC = () => {
  return (
    <div
      className="
        mt-12
        mx-auto
        px-4 sm:px-6 md:px-8 lg:px-12
        pb-28 sm:pb-32 md:pb-36 lg:pb-40
        max-w-full
        space-y-6
      "
    >
      {/* Info Box */}
      <div className="bg-blue-100 border border-blue-300 border-l-4 border-l-blue-500 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 flex items-start gap-3">
        <span className="text-2xl md:text-3xl">ℹ️</span>
        <div>
          <h4 className="font-semibold text-blue-900 text-sm sm:text-base md:text-lg lg:text-xl mb-1">
            Login is Optional
          </h4>
          <p className="text-blue-800 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            You can return books without logging in. Login only if you want a printed receipt or to view your account status.
          </p>
        </div>
      </div>

      {/* Action Boxes */}
      {[
        {
          icon: "🚀",
          title: "Scan your library card",
          desc: "Drop books without scanning your card",
        },
        {
          icon: "🧾",
          title: "Login for Receipt",
          desc: "Scan your card to get a printed receipt",
        },
        {
          icon: "📱",
          title: "Scan QR Code",
          desc: "Show your mobile library app",
        },
        {
          icon: "🔢",
          title: "Enter Card Number",
          desc: "Type your library card number",
        },
        {
          icon: "⏩",
          title: "Skip Login",
          desc: "Continue without receipt",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="
            border border-gray-300 rounded-lg
            p-4 sm:p-5 md:p-6 lg:p-8
            flex gap-3 sm:gap-4
            cursor-pointer
            hover:border-blue-500
            hover:translate-x-1 sm:hover:translate-x-2
            transform transition-all duration-300 ease-in-out
          "
        >
          <span className="text-2xl md:text-3xl self-start">{item.icon}</span>
          <div className="flex flex-col">
            <h4 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
              {item.title}
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mt-1">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
