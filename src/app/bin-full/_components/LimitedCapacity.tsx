import React from "react";

export const LimitedCapacity: React.FC = () => {
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
        bg-[rgb(255,235,238)]
      "
    >
      {/* Left accent line */}
      <div className="absolute left-0 top-0 h-full w-2 bg-orange-500 rounded-l-xl"></div>

      {/* Icon */}
      <span
        className="
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex-shrink-0 z-10
        "
        aria-label="Warning icon"
      >
        ⚠️
      </span>

      {/* Content */}
      <div className="flex flex-col w-full z-10 gap-3">
        <h4
          className="
            font-semibold
            text-lg sm:text-xl md:text-2xl lg:text-3xl
            text-[rgb(198,40,40)]
          "
        >
          Limited Capacity Remaining
        </h4>

        <p
          className="
            text-[rgb(183,28,28)]
            text-sm sm:text-base md:text-base lg:text-lg
            leading-snug
          "
        >
          Our drop box is nearly full. You can still return a few more items, but we recommend using the circulation desk if you have many books.
        </p>
      </div>
    </div>
  );
};
