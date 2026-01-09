import React from "react";

export const AlternativeOptions: React.FC = () => {
  return (
    <div
      className="
        mt-8
        w-full
        max-w-screen-xl
        2xl:max-w-screen-2xl
        rounded-xl
        px-4 py-4
        sm:px-6 sm:py-5
        md:px-8 md:py-6
        flex flex-col sm:flex-row gap-4
        mx-auto
        shadow-lg
        relative
        bg-[rgb(227,242,253)]
      "
    >
      {/* Left accent line */}
      <div className="absolute left-0 top-0 h-full w-2 bg-blue-500 rounded-l-xl"></div>

      {/* Icon */}
      <span
        className="
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex-shrink-0 z-10
        "
        aria-label="Warning icon"
      >
       ℹ️
      </span>

      {/* Content */}
      <div className="flex flex-col w-full z-10 gap-3">
        <h4
          className="
            font-semibold
            text-lg sm:text-xl md:text-2xl lg:text-3xl
            text-[rgb(21,101,192)]
          "
        >
          Alternative Return Options
        </h4>

        {/* Option 1 */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-1">
          <span className="font-semibold text-[rgb(21,101,192)] sm:min-w-[150px]">
            Circulation Desk:
          </span>
          <p className="text-[rgb(13,71,161)] text-sm sm:text-base md:text-base leading-snug">
            Open Mon-Fri 9AM-9PM, Sat-Sun 10AM-6PM
          </p>
        </div>

        {/* Option 2 */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-1">
          <span className="font-semibold text-[rgb(21,101,192)] sm:min-w-[150px]">
            Outdoor Book Drop:
          </span>
          <p className="text-[rgb(13,71,161)] text-sm sm:text-base md:text-base leading-snug">
            Available on south side of building
          </p>
        </div>

        {/* Option 3 */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-1">
          <span className="font-semibold text-[rgb(21,101,192)] sm:min-w-[150px]">
            Branch Locations:
          </span>
          <p className="text-[rgb(13,71,161)] text-sm sm:text-base md:text-base leading-snug">
            Find your nearest branch at library.org
          </p>
        </div>
      </div>
    </div>
  );
};
