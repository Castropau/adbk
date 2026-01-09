import React from "react";

export const ActionRequired: React.FC = () => {
  return (
    <div className="mt-12 max-w-[900px] w-full mx-auto space-y-6 px-4 sm:px-6 md:px-0 mb-32">
      {/* Extra mb-32 ensures content is not hidden behind fixed footer */}
      <div className="bg-[rgb(227,242,253)] rounded-xl p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row items-start gap-5 relative shadow-lg">
        {/* Left accent line */}
        <div className="absolute left-0 top-0 h-full w-2 bg-blue-500 rounded-l-xl"></div>

        {/* Icon */}
        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl z-10 self-start sm:self-center">
          ✅
        </span>

        {/* Text content */}
        <div className="z-10 flex-1">
          <h4 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 text-[rgb(21,101,192)]">
            No Action Required
          </h4>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-[rgb(25,118,210)]">
            The book has been automatically sorted to the Hold Shelf bin. Library staff will place it on the hold shelf for patron pickup.
          </p>
        </div>
      </div>
    </div>
  );
};
