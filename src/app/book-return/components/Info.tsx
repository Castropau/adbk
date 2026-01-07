import React from "react";

export const InfoBox: React.FC = () => {
  return (
    <div className="mt-12 max-w-xl mx-auto space-y-6">
      {/* <div className="bg-blue-100 border border-blue-300 rounded-lg p-5 flex items-start gap-3">
        <span className="text-2xl">💡</span>
        <div>
          <h4 className="font-semibold text-blue-900 mb-1">
            First Time Using Drop Box?
          </h4>
          <p className="text-blue-800 text-sm md:text-base leading-relaxed">
            Just drop your books into the slot. Our system will automatically scan
            and check them in. You'll see confirmation on screen!
          </p>
        </div>
      </div> */}
      <div className="bg-blue-100 border border-blue-300 rounded-lg p-5 flex items-start gap-3 relative">
  {/* Vertical line on the left */}
  <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-l-lg"></div>

  {/* Emoji */}
  <span className="text-2xl z-10">💡</span>

  {/* Content */}
  <div className="z-10">
    <h4 className="font-semibold text-blue-900 mb-1">
      First Time Using Drop Box?
    </h4>
    <p className="text-blue-800 text-sm md:text-base leading-relaxed">
      Just drop your books into the slot. Our system will automatically scan
      and check them in. You'll see confirmation on screen!
    </p>
  </div>
</div>



      {/* <div className="border border-gray-300 rounded-lg p-5 flex items-center gap-4 cursor-pointer hover:bg-gray-100 transition">
        <span className="text-2xl">🚀</span>
        <h4 className="font-semibold">Quick Return (No Login)</h4>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-1">
          Drop books without scanning your card
        </p>
      </div>
      <div className="border border-gray-300 rounded-lg p-5 flex items-center gap-4 cursor-pointer hover:bg-gray-100 transition">
        <span className="text-2xl">🧾</span>
        <h4 className="font-semibold">Login for Receipt</h4>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-1">
          Scan your card to get a printed receipt
        </p>
      </div> */}
      <div className="hover:border-blue-500 hover:translate-x-2 
                transform transition-all duration-300 ease-in-out border border-gray-300 rounded-lg p-5 flex gap-4 cursor-pointer hover:bg-gray-100 transition">
  <span className="text-2xl self-start">🚀</span>
  <div className="flex flex-col">
    <h4 className="font-semibold">Quick Return (No Login)</h4>
    <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-1">
      Drop books without scanning your card
    </p>
  </div>
</div>

<div className=" hover:border-blue-500 hover:translate-x-2 
                transform transition-all duration-300 ease-in-out border border-gray-300 rounded-lg p-5 flex gap-4 cursor-pointer hover:bg-gray-100 transition">
  <span className="text-2xl self-start">🧾</span>
  <div className="flex flex-col">
    <h4 className="font-semibold">Login for Receipt</h4>
    <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-1">
      Scan your card to get a printed receipt
    </p>
  </div>
</div>

      
    </div>
  );
};
