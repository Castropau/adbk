import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer
      className="
        fixed bottom-0 left-0 w-full
        bg-[#2c3e50] text-white
        flex flex-col sm:flex-row
        justify-between items-center
        px-4 sm:px-6 md:px-12
        py-3 md:py-4
        gap-3 sm:gap-0
        text-xs sm:text-sm md:text-base lg:text-lg
        z-50 shadow-lg
      "
    >
      {/* Left button */}
      <div className="w-full sm:w-auto flex justify-center sm:justify-start">
        <button
          className="
            px-4 md:px-6
            py-2 md:py-3
            rounded-lg
            bg-blue-500 hover:bg-blue-600
            transition font-semibold
            w-full sm:w-auto
          "
        >
          🏠 Done
        </button>
      </div>

      {/* Right button */}
      <div className="w-full sm:w-auto flex justify-center sm:justify-end">
        <button
          className="
            px-4 md:px-6
            py-2 md:py-3
            rounded-lg
            bg-green-500 hover:bg-green-600
            transition font-semibold
            w-full sm:w-auto
          "
        >
          Return More Books
        </button>
      </div>
    </footer>
  );
};
