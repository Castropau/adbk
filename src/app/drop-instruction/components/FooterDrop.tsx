import React from "react";

export const FooterDrop: React.FC = () => {
  return (
    <footer
      className="
        fixed bottom-0 left-0 w-full z-50
        bg-[#2c3e50] text-white
        flex flex-col sm:flex-row
        justify-between items-center
        gap-3 sm:gap-0

        px-4 sm:px-6 md:px-10 lg:px-12
        py-4 sm:py-5 md:py-6

        text-xs sm:text-sm md:text-base lg:text-lg
        shadow-lg
      "
    >
      {/* Left side */}
      <div className="flex justify-center sm:justify-start items-center w-full sm:w-auto">
        <button
          className="
            bg-[rgb(52,152,219)]
            hover:bg-[rgb(41,128,185)]
            text-white
            px-4 sm:px-5 md:px-6
            py-2 sm:py-2.5 md:py-3
            rounded-md
            font-semibold
            min-w-[120px] sm:min-w-[140px]
          "
        >
          ❌ Cancel
        </button>
      </div>

      {/* Right side */}
      <div className="flex justify-center sm:justify-end items-center w-full sm:w-auto">
        <span className="leading-snug text-center sm:text-right">
          Waiting for books...
        </span>
      </div>
    </footer>
  );
};
