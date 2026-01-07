import React from "react";

export const LoginFooter: React.FC = () => {
  return (
    <footer className="bg-[#2c3e50] text-white flex justify-between items-center px-6 py-3 md:px-12 md:py-4 text-sm md:text-base">
      <div className="flex items-center gap-2">
       
        <button className="bg-blue-400  px-3 py-1 rounded-md hover:bg-blue-500 transition">
          ⬅️ Help
        </button>
      </div>
      <div className="flex items-center gap-2">
        {/* <span className="text-lg">📞</span> */}
        {/* <span>Need Help? Call: (555) 123-4567</span> */}
         <button className="bg-green-500  px-3 py-1 rounded-md hover:bg-green-600 transition">
          Continue Without Login 
        </button>
      </div>
    </footer>
  );
};
