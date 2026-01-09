import React from "react";

export const HappenNext: React.FC = () => {
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
        flex flex-col sm:flex-row sm:items-center gap-4
        mx-auto
        shadow-lg
        relative
        bg-[rgb(227,242,253)]
        min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[220px] xl:min-h-[240px]
        mb-32  /* extra bottom margin to account for fixed footer */
      "
    >
      {/* Left accent line */}
      <div className="absolute left-0 top-0 h-full w-2 bg-blue-500 rounded-l-xl"></div>

      {/* Icon */}
      <span
        className="
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex-shrink-0 z-10
          self-start sm:self-center
        "
        aria-label="Idea icon"
      >
        💡
      </span>

      {/* Content */}
      <div className="flex flex-col w-full z-10 gap-2">
        <h4
          className="
            font-semibold
            text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
            text-[rgb(21,101,192)]
          "
        >
          What Happens Next?
        </h4>

        <p
          className="
            text-[rgb(21,101,192)]
            text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
            leading-snug
          "
        >
          • Library staff will inspect the book
          <br />
          • If damage pre-existed, no charge
          <br />
          • If damage is new, patron may be contacted
          <br />
          • Book will be repaired or replaced
        </p>
      </div>
    </div>
  );
};
