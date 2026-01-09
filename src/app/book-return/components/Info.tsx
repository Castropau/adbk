import React from "react";

export const InfoBox: React.FC = () => {
  return (
    <div className="mt-12 max-w-xl mx-auto space-y-6 pb-32 sm:pb-36 md:pb-40 px-4 sm:px-6 lg:px-8">
      {/* Info Box */}
      <div className="bg-blue-100 border border-blue-300 rounded-lg p-5 flex items-start gap-3 relative">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-l-lg"></div>

        {/* Emoji */}
        <span className="text-2xl z-10">💡</span>

        {/* Content */}
        <div className="z-10">
          <h4 className="font-semibold text-blue-900 mb-1 text-sm sm:text-base md:text-lg">
            First Time Using Drop Box?
          </h4>
         <p className="text-blue-800 text-xs sm:text-sm md:text-base leading-relaxed">
  Just drop your books into the slot. Our system will automatically scan
  and check them in. You&apos;ll see confirmation on screen!
</p>

        </div>
      </div>

      {/* Quick Return Box */}
      <div className="border border-gray-300 rounded-lg p-5 flex gap-4 cursor-pointer 
                      transform transition-all duration-300 ease-in-out hover:translate-x-2 hover:border-blue-500 hover:bg-gray-100">
        <span className="text-2xl self-start">🚀</span>
        <div className="flex flex-col">
          <h4 className="font-semibold text-sm sm:text-base md:text-lg">Quick Return (No Login)</h4>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mt-1">
            Drop books without scanning your card
          </p>
        </div>
      </div>

      {/* Login for Receipt Box */}
      <div className="border border-gray-300 rounded-lg p-5 flex gap-4 cursor-pointer 
                      transform transition-all duration-300 ease-in-out hover:translate-x-2 hover:border-blue-500 hover:bg-gray-100">
        <span className="text-2xl self-start">🧾</span>
        <div className="flex flex-col">
          <h4 className="font-semibold text-sm sm:text-base md:text-lg">Login for Receipt</h4>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mt-1">
            Scan your card to get a printed receipt
          </p>
        </div>
      </div>
    </div>
  );
};
