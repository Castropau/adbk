import React from "react";

export const Readbleble: React.FC = () => {
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
        bg-[rgb(255,235,238)]
      "
    >
      {/* Left accent line */}
      <div className="absolute left-0 top-0 h-full w-2 bg-red-500 rounded-l-xl"></div>

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
        ⚠️
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
            text-[rgb(198,40,40)]
          "
        >
          RFID Tag Not Readable
        </h4>

        <p
          className="
            text-[rgb(183,28,28)]
            text-xs
            sm:text-sm
            md:text-base
            leading-snug
          "
        >
          We couldn&apos;t read the RFID tag on this book. This could be due to a damaged tag, missing tag, or interference.
        </p>
      </div>
    </div>
  );
};
