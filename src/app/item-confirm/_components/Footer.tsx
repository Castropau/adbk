import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2c3e50] text-white flex justify-between items-center px-6 py-3 md:px-12 md:py-4 text-sm md:text-base">
      
      {/* Left button */}
      <div className="flex items-center gap-2">
        <button className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition font-semibold">
          🏠  Done
        </button>
      </div>

      {/* Right button */}
      <div className="flex items-center gap-2">
        <button className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 transition font-semibold">
          Return More Books
        </button>
      </div>
      
    </footer>
  );
};
