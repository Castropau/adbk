import React from "react";

export const FooterBox: React.FC = () => {
  return (
    <footer
      className="
        w-full
        bg-[#2c3e50] text-white
        flex flex-col justify-center
        px-4 sm:px-6 md:px-10 lg:px-12
        py-4 sm:py-5 md:py-6 lg:py-7
        text-xs sm:text-sm md:text-base lg:text-lg
        gap-2

        /* Footer positioning */
        fixed bottom-0 left-0 z-50
        shadow-lg
      "
    >
      {/* Status text */}
      <div className="flex items-center gap-2">
        <span className="animate-pulse">🔄</span>
        <span className="leading-snug">
          Processing... Please wait
        </span>
      </div>
    </footer>
  );
};
