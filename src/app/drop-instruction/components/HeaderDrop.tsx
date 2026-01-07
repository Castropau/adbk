import React from "react";

export const HeaderDrop: React.FC = () => {
  return (
    <header className="bg-green-600 text-white px-6 py-3 md:px-12 md:py-4">
      {/* Top row: Logo + Title and Help button */}
      <div className="flex justify-between items-center mb-2">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="bg-white rounded p-1">📚</div>
          <h1 className="font-bold text-lg md:text-2xl">Ready to Return</h1>
        </div>

        {/* Right: Help button */}
        <button className="cursor-pointer flex items-center border-2 border-white px-3 py-1 rounded-md 
          hover:bg-white hover:text-green-600 transition-all duration-300 ease-in-out">
          <span className="px-2 py-1 rounded-md text-base">❓</span>
          Help
        </button>
      </div>

      {/* Second row: Guest on left, Time on right, with transparent white bg */}
      <div className="flex justify-between items-center w-full px-4 py-2 rounded-md bg-[rgba(255,255,255,0.15)]">
        <span className="text-sm md:text-base font-medium text-white">👤 Guest</span>
        <span className="text-sm md:text-base font-medium text-white">⏰10:45 AM</span>
      </div>
    </header>
  );
};
