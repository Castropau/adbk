import React from "react";

export const YouCanDo: React.FC = () => {
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
        bg-[rgb(227,242,253)]
      "
    >
      {/* Left accent line */}
      <div className="absolute left-0 top-0 h-full w-2 bg-blue-500 rounded-l-xl"></div>

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
        💡
      </span>

      {/* Content */}
      <div className="flex flex-col w-full z-10">
        {/* Heading */}
        <h4
          className="
            font-semibold
            text-base
            sm:text-lg
            md:text-xl
            lg:text-2xl
            xl:text-3xl
            text-[rgb(21,101,192)]
          "
        >
          What You Can Do
        </h4>

        {/* Options */}
        <ul className="mt-2 space-y-1 text-[rgb(13,71,161)] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-snug list-disc list-inside">
          <li>Option 1: Try dropping the book again</li>
          <li>Option 2: Return this book at the circulation desk during business hours</li>
          <li>Option 3: Contact library staff for assistance: (555) 123-4567</li>
        </ul>
      </div>
    </div>
  );
};
