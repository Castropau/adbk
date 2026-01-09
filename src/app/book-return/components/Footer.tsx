import React from "react";

export const Footer: React.FC<{ fixed?: boolean }> = ({ fixed = false }) => {
  return (
    <footer
      className={`
        bg-[#2c3e50] text-white flex flex-col sm:flex-row
        justify-between items-center
        px-4 sm:px-6 md:px-8 lg:px-12
        py-3 sm:py-4
        text-xs sm:text-sm md:text-base
        gap-2 sm:gap-0
        ${fixed ? "fixed bottom-0 left-0 w-full z-50" : ""}
      `}
    >
      {/* Left */}
      <div className="flex items-center gap-2 justify-center sm:justify-start w-full sm:w-auto">
        <span className="text-green-400 text-lg">🟢</span>
        <span className="truncate text-center sm:text-left">Available | Capacity: Normal</span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 justify-center sm:justify-end w-full sm:w-auto mt-1 sm:mt-0">
        <span className="text-lg">📞</span>
        <span className="truncate text-center sm:text-left">
          Need Help? Call: (555) 123-4567
        </span>
      </div>
    </footer>
  );
};
