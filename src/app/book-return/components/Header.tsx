import React from "react";
import { StatusItem } from "./StatusBar";
// import { StatusItem } from "./StatusItem";

export const Header: React.FC = () => {
  return (
 <header className="bg-green-600 text-white">
  {/* Top row: logo/title + buttons */}
  <div className="flex justify-between items-center px-6 py-3 md:px-12 md:py-4">
    {/* Left: Logo + Title */}
    <div className="flex items-center gap-2 md:gap-4">
      <div className="bg-white rounded p-1">
        📚
      </div>
      <h1 className="font-bold text-lg md:text-2xl">Book Return</h1>
    </div>

    {/* Right: Buttons */}
    <div className="flex items-center gap-3 md:gap-6 text-sm md:text-base">
      <button className="bg-[rgba(255,255,255,0.2)] border border-white text-white px-3 py-1 rounded-md hover:bg-white hover:text-green-600 transition">
        🌐 English
      </button>
      <button className="bg-[rgba(255,255,255,0.2)] border border-white text-white px-3 py-1 rounded-md hover:bg-white hover:text-red-600 transition">
        ❓ Help
      </button>
    </div>
  </div>

  {/* Second row: Status Items */}
  <div className="flex justify-center items-center py-3 md:py-4">
    {/* Shared background card */}
    <div className="bg-[rgba(255,255,255,0.15)] flex justify-between items-center w-full max-w-6xl px-12 md:px-20 py-4 rounded-md">
      {/* Left item */}
      <div className="flex justify-start">
        <StatusItem icon="🟢" label="System Ready" />
      </div>

      {/* Center item */}
      <div className="flex justify-center">
        <StatusItem icon="⏰" label="24/7 Service" />
      </div>

      {/* Right item */}
      <div className="flex justify-end">
        <StatusItem icon="📍" label="Main Library" />
      </div>
    </div>
  </div>
</header>


  );
};
