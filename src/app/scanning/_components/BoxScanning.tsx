import React from "react";

export const BoxScanning: React.FC = () => {
  return (
    <div
      className="relative border-4 rounded-xl p-10 md:p-20 text-center text-white select-none
                 bg-[linear-gradient(135deg,_rgb(44,62,80)_0%,_rgb(52,73,94)_100%)] overflow-hidden"
    >
      <div className="text-6xl mb-8 animate-bounce">
      📡
      </div>

     

<div className="absolute top-0 left-0 w-full h-1
                bg-gradient-to-r from-transparent via-blue-400/100 to-transparent
                opacity-90 animate-scan
                shadow-[0_0_15px_rgba(0,150,255,0.8)]">
</div>



      <h3 className="text-2xl font-semibold mb-2 z-10 relative">Reading RFID Tag...</h3>
      <p className="max-w-md mx-auto text-base md:text-lg leading-relaxed z-10 relative">
        Insert books one at a time
        <br />
        Place flat, cover facing up
        <br />
        Wait for confirmation before next book
      </p>
    </div>
  );
};
