import React from "react";

export const HoldInformation: React.FC = () => {
  return (
    <div className="w-full max-w-[900px] border border-gray-300 rounded-xl p-8 md:p-10 mx-auto shadow-lg bg-white mt-8 bg-[linear-gradient(135deg,_rgb(102,126,234)_0%,_rgb(118,75,162)_100%)]">
      <h4 className="font-semibold text-lg md:text-2xl mb-4 text-center text-white">Hold Information</h4>

      <div className="flex flex-col text-gray-700">
        <div className="flex justify-between border-b border-gray-200 py-2 text-white">
          <span className="font-medium">Hold Patron:</span>
          <span>Jane Smith</span>
        </div>
        <div className="flex justify-between border-b border-gray-200 py-2 text-white">
          <span className="font-medium">Pickup Branch:</span>
          <span>Main Library</span>
        </div>
      <div className="flex flex-col py-2">
          <div className="flex justify-between text-white">
            <span className="font-medium">Hold Placed:</span>
            <span>Jan 10, 2026</span>
          </div>
          <div className="mt-1 border-b border-white"></div>
          <div className="mt-1 border-b-2 border-white"></div>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-2xl md:text-3xl font-bold text-white">
            Notification Sent:</span>
          <span className="text-2xl md:text-3xl font-bold text-white">
         Email + SMS
          </span>
        </div>
      </div>
    </div>
  );
};
