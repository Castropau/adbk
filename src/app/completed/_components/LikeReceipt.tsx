import React from "react";

export const LikeReceipt: React.FC = () => {
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
        flex items-center gap-4
        mx-auto
        shadow-lg
        relative
        min-h-[128px] sm:min-h-[150px] md:min-h-[180px] lg:min-h-[220px]
        bg-[rgb(232,245,233)]
      "
    >
      {/* Left accent line */}
      <div className="absolute left-0 top-0 h-full w-2 bg-green-500 rounded-l-xl"></div>

      {/* Icon */}
      <span
        className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          flex-shrink-0
          z-10
        "
      >
        📧
      </span>

      {/* Content */}
      <div className="flex flex-col w-full z-10">
        <h4
          className="
            font-semibold
            text-base
            sm:text-lg
            md:text-xl
            lg:text-2xl
            xl:text-3xl
    text-[rgb(46,125,50)]
          "
        >
          Would You Like a Receipt?
        </h4>

        <p
          className="
            text-xs
            sm:text-sm
            md:text-base
            lg:text-lg
            xl:text-xl
            leading-snug
          "
        >
          You can print a receipt or have it emailed to you. Otherwise, this session will end in 30 seconds.
        </p>
      </div>
    </div>
  );
};
