// ../receipt/_components/Footer.tsx
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2c3e50] text-white flex flex-col sm:flex-row justify-between items-center px-4 sm:px-12 py-4 gap-3 sm:gap-0 text-sm md:text-base fixed bottom-0 left-0 w-full z-50 shadow-lg">
      {/* Left button */}
      <div className="flex justify-center sm:justify-start w-full sm:w-auto">
        <button className="bg-blue-400 px-4 py-2 rounded-md hover:bg-blue-500 transition text-white font-semibold min-w-[120px]">
          ⬅️ Cancel
        </button>
      </div>

      {/* Right button */}
      <div className="flex justify-center sm:justify-end w-full sm:w-auto">
        <button className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-600 transition text-white font-semibold min-w-[150px]">

Continue Anyway
        </button>
      </div>
    </footer>
  );
};
