import React from "react";

export const ReceiptInclude: React.FC = () => {
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
        mb-[140px]  /* Increased bottom margin to clear fixed footer */
      "
    >
      {/* Left accent line */}
      <div className="absolute left-0 top-0 h-full w-2 bg-blue-500 rounded-l-xl"></div>

      {/* Icon */}
      <span
        className="
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
          flex-shrink-0 z-10
          self-start sm:self-center
        "
        aria-label="Mail icon"
      >
        📧
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
          Your Receipt Will Include
        </h4>

        <p
          className="
            text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
            leading-snug
            text-[rgb(13,71,161)]
          "
        >
          • List of returned books
          <br />
          • Return date and time
          <br />
          • Late fees (if any)
          <br />
          • Current account balance
          <br />
          • QR code for digital access
        </p>
      </div>
    </div>
  );
};
