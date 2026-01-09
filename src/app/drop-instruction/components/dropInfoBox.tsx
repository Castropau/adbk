import React from "react";

export const DropInfoBox: React.FC = () => {
  return (
    <div
      className="
        mt-12
        w-full
        max-w-xl sm:max-w-2xl lg:max-w-3xl
        mx-auto
        space-y-6
        px-4 sm:px-6 md:px-8
        pb-28 sm:pb-32 md:pb-36 lg:pb-40
      "
    >
      <div
        className="
          bg-blue-100 border border-blue-300
          rounded-lg
          p-4 sm:p-5 md:p-6
          flex items-start gap-3 sm:gap-4
          relative
          shadow-sm
        "
      >
        {/* Accent line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-l-lg" />

        {/* Icon */}
        <span className="text-2xl sm:text-3xl md:text-4xl z-10">
          📖
        </span>

        {/* Content */}
        <div className="z-10">
          <h4
            className="
              font-semibold
              text-blue-900
              text-sm sm:text-base md:text-lg lg:text-xl
              mb-1
            "
          >
            Tips for Best Results
          </h4>

          <p
            className="
              text-blue-800
              text-xs sm:text-sm md:text-base lg:text-lg
              leading-relaxed
            "
          >
            • Remove bookmarks and receipts
            <br />
            • Books should have RFID tags
            <br />
            • One book at a time for accuracy
            <br />
            • Wait 3 seconds between items
          </p>
        </div>
      </div>
    </div>
  );
};
