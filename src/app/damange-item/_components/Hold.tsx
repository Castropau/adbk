import React from "react";

export const Hold: React.FC = () => {
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
        h-32
     bg-[rgb(255,243,224)]

      "
    >
      {/* Left accent line */}
      <div className="absolute left-0 top-0 h-full w-2 bg-orange-500 rounded-l-xl"></div>

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
        🔍
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
    text-[rgb(230,81,0)]
          "
        >
Staff Review Required
        </h4>

        <p
          className="
    text-[rgb(230,81,0)]
            text-xs
            sm:text-sm
            md:text-base
            leading-snug
          "
        >
          Our system detected possible damage to this book. It has been routed to the Damaged Items bin for staff inspection. This is not a charge - just a precaution.

        </p>
      </div>
    </div>
  );
};
