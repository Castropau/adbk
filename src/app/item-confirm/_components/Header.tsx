import React from "react";

export const Header: React.FC = () => {
  return (
    // <header className="bg-blue-600 text-white px-6 py-3 md:px-12 md:py-4">
    <header
  className="text-white px-6 py-3 md:px-12 md:py-4
             bg-[linear-gradient(135deg,_rgb(39,174,96)_0%,_rgb(34,153,84)_100%)]"
>
      {/* Top row: Logo + Title and Help button */}
      <div className="flex justify-between items-center mb-2">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="bg-white rounded p-1">📚</div>
          <h1 className="font-bold text-lg md:text-2xl">Item Returned</h1>
        </div>

        {/* Right: Help button */}
       
      </div>

      {/* Second row: Guest on left, Time on right, with transparent white bg */}
      <div className="flex justify-between items-center w-full px-4 py-2 rounded-md bg-[rgba(255,255,255,0.15)]">
        <span className="text-sm md:text-base font-medium text-white">✅ Check-in Successful</span>
        {/* <span className="text-sm md:text-base font-medium text-white">📡 Scanning...</span> */}
      </div>
    </header>
  );
};
