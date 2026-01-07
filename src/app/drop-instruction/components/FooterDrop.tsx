import React from "react";

export const FooterDrop: React.FC = () => {
  return (
    <footer className="bg-[#2c3e50] text-white flex justify-between items-center px-6 py-3 md:px-12 md:py-4 text-sm md:text-base">
      <div className="flex items-center gap-2">
        {/* <span className="text-green-400 text-lg">🟢</span>
        <span>Available | Capacity: Normal</span> */}
        <button className="bg-[rgb(52,152,219)] hover:bg-[rgb(41,128,185)] text-white px-4 py-2 rounded-md">
          ❌ Cancel
        </button>
      </div>
      <div className="flex items-center gap-2">
        {/* <span className="text-lg">📞</span> */}
        <span>Waiting for books...</span>
      </div>
    </footer>
  );
};
