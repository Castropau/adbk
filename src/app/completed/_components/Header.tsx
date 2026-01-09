import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="bg-[linear-gradient(135deg,_rgb(46,204,113)_0%,_rgb(39,174,96)_100%)] text-white px-6 py-3 md:px-12 md:py-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="bg-white rounded p-1">📚</div>
          <h1 className="font-bold text-lg md:text-2xl">Transaction Complete</h1>
        </div>
      </div>

      {/* <div className="flex justify-between items-center w-full px-4 py-2 rounded-md bg-[rgba(255,255,255,0.15)]">
        <span className="text-sm md:text-base font-medium text-white">⚠️ Damage Detected</span>
      </div> */}
    </header>
  );
};
