import React from "react";

export const DetentionDetail: React.FC = () => {
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
        flex flex-col
        gap-4
        mx-auto
        shadow-lg
        relative
        bg-[linear-gradient(135deg,_rgb(102,126,234)_0%,_rgb(118,75,162)_100%)]
      "
    >
      <h4 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl mb-4 text-center text-white">
Detection Details
      </h4>

      <div className="flex flex-col gap-2 text-white">
        <div className="flex justify-between border-b border-white py-2">
          <span className="font-medium">Issue Detected:</span>
          <span>Torn pages</span>
        </div>

        <div className="flex justify-between border-b border-white py-2">
          <span className="font-medium">Severity:</span>
          <span>Moderate</span>
        </div>

        <div className="flex flex-col py-2">
          <div className="flex justify-between">
            <span className="font-medium">Routed To:</span>
            <span>Damaged Items Bin</span>
          </div>
          <div className="mt-1 border-b border-white"></div>
          <div className="mt-1 border-b-2 border-white"></div>
        </div>

        <div className="flex justify-between py-2 items-center">
          <span className="text-xl md:text-2xl font-bold">Next Step:</span>
          <span className="text-xl md:text-2xl font-bold">Staff Inspection</span>
        </div>
      </div>
    </div>
  );
};
