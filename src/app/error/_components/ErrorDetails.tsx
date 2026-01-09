import React from "react";

export const ErrorDetails: React.FC = () => {
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
        mb-8
      "
    >
      <h4 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-white mb-4">
        Error Details
      </h4>

      <div className="flex flex-col gap-3 text-white">
        {/* Error Code */}
        <div className="flex flex-col sm:flex-row justify-between border-b border-white py-2">
          <span className="font-medium text-sm sm:text-base md:text-lg">Error Code:</span>
          <span className="text-sm sm:text-base md:text-lg">RF001</span>
        </div>

        {/* Time */}
        <div className="flex flex-col sm:flex-row justify-between border-b border-white py-2">
          <span className="font-medium text-sm sm:text-base md:text-lg">Time:</span>
          <span className="text-sm sm:text-base md:text-lg">3:45 PM</span>
        </div>

        {/* Location */}
        <div className="flex flex-col sm:flex-row justify-between py-2">
          <span className="font-medium text-sm sm:text-base md:text-lg">Location:</span>
          <span className="text-sm sm:text-base md:text-lg">Main Library Drop Box</span>
        </div>
        <div className="border-b border-white"></div>

        {/* Reference */}
        <div className="flex flex-col sm:flex-row justify-between py-2 items-center">
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">Reference:</span>
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">#DB-20260115-0345</span>
        </div>
      </div>
    </div>
  );
};
