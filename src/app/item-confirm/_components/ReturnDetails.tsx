import React from "react";

export const ReturnDetails: React.FC = () => {
  return (
    <div
      className="
        w-full max-w-[900px] 2xl:max-w-[1100px]
        mx-auto mt-6 sm:mt-8
        rounded-xl shadow-lg
        px-4 sm:px-6 md:px-10 lg:px-12
        py-6 sm:py-8 md:py-10
        bg-[linear-gradient(135deg,_rgb(102,126,234)_0%,_rgb(118,75,162)_100%)]

        /* Footer-safe spacing */
        mb-[calc(96px+2vh)]
        sm:mb-[calc(110px+2vh)]
        md:mb-[calc(120px+3vh)]
        lg:mb-[calc(130px+3vh)]
        xl:mb-[calc(150px+4vh)]
      "
    >
      <h4
        className="
          font-semibold
          text-base sm:text-lg md:text-2xl lg:text-3xl
          mb-4 text-center text-white
        "
      >
        Return Details
      </h4>

      <div className="flex flex-col gap-2 text-white">
        <div className="flex justify-between border-b border-white/40 py-2">
          <span className="font-medium text-sm sm:text-base md:text-lg">
            Original Due Date:
          </span>
          <span className="text-sm sm:text-base md:text-lg">
            Jan 14, 2026
          </span>
        </div>

        <div className="flex justify-between border-b border-white/40 py-2">
          <span className="font-medium text-sm sm:text-base md:text-lg">
            Returned:
          </span>
          <span className="text-sm sm:text-base md:text-lg">
            Jan 15, 2026
          </span>
        </div>

        <div className="flex flex-col py-2">
          <div className="flex justify-between">
            <span className="font-medium text-sm sm:text-base md:text-lg">
              Days Late:
            </span>
            <span className="text-sm sm:text-base md:text-lg">
              1 day
            </span>
          </div>
          <div className="mt-1 border-b border-white"></div>
          <div className="mt-1 border-b-2 border-white"></div>
        </div>

        <div className="flex justify-between items-center py-2">
          <span className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Late Fee:
          </span>
          <span className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
            $0.50
          </span>
        </div>
      </div>
    </div>
  );
};
