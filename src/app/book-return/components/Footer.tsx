import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2c3e50] text-white flex justify-between items-center px-6 py-3 md:px-12 md:py-4 text-sm md:text-base">
      <div className="flex items-center gap-2">
        <span className="text-green-400 text-lg">🟢</span>
        <span>Available | Capacity: Normal</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-lg">📞</span>
        <span>Need Help? Call: (555) 123-4567</span>
      </div>
    </footer>
  );
};
