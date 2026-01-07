import React from "react";

export const FooterBox: React.FC = () => {
  return (
    <footer className="bg-[#2c3e50] text-white flex flex-col items-start px-6 py-6 md:px-12 md:py-8 text-sm md:text-base gap-3">
      {/* Text aligned at start */}
      <div className="flex items-start gap-2">
        <span>🔄 Processing... Please wait</span>
      </div>
    </footer>
  );
};
