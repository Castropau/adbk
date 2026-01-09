import React from "react";

export const LoginFooter: React.FC = () => {
  return (
    <footer
      className="
        fixed bottom-0 left-0
        w-full
        bg-[#2c3e50]
        text-white
        flex flex-col sm:flex-row
        justify-between items-center
        px-4 sm:px-8 md:px-12
        py-3 sm:py-4
        gap-3 sm:gap-0
        text-xs sm:text-sm md:text-base
        z-50
      "
    >
      {/* Left */}
      <div className="flex justify-center sm:justify-start w-full sm:w-auto">
        <button
          className="
            bg-blue-400 hover:bg-blue-500 transition
            px-4 py-2
            rounded-md
            font-semibold
            w-full sm:w-auto
          "
        >
          ⬅️ Back
        </button>
      </div>

      {/* Right */}
      <div className="flex justify-center sm:justify-end w-full sm:w-auto">
        <button
          className="
            bg-green-500 hover:bg-green-600 transition
            px-4 py-2
            rounded-md
            font-semibold
            w-full sm:w-auto
          "
        >
          Continue Without Login
        </button>
      </div>
    </footer>
  );
};
