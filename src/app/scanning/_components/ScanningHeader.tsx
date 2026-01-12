import React from "react";

export const ScanningHeader: React.FC = () => {
  return (
    <header
      className="
        text-white px-6 py-3 md:px-12 md:py-4
        bg-[linear-gradient(135deg,_#3498db_0%,_#2980b9_100%)]
      "
    >
      {/* Top row: Logo + Title */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="bg-white rounded p-1">📚</div>
          <h1 className="font-bold text-lg md:text-2xl">Processing Return</h1>
        </div>

        {/* Optional Help button */}
        {/* <button className="...">Help</button> */}
      </div>

      {/* Second row: Guest on left, Status on right */}
      <div className="flex justify-between items-center w-full px-4 py-2 rounded-md bg-[rgba(255,255,255,0.15)]">
        <span className="text-sm md:text-base font-medium text-white">👤 Guest</span>
        <span className="text-sm md:text-base font-medium text-white">📡 Scanning...</span>
      </div>
    </header>
  );
};
