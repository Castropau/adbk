import React from "react";

export const Header: React.FC = () => {
    return (
        <header className="bg-green-600 text-white flex justify-between items-center px-6 py-3 md:px-12 md:py-4">
            <div className="flex items-center gap-2 md:gap-4">

                <div className="bg-white rounded p-1">
                    {/* <img
                        src="/book-icon.png"
                        alt="Book Icon"
                        className="w-8 h-8 md:w-10 md:h-10"
                    /> */}
                    📚
                </div>
                <h1 className="font-bold text-lg md:text-2xl">Login(Optional)</h1>
            </div>

           <div className="flex items-center gap-3 md:gap-6 text-sm md:text-base">
  <button className="flex items-center border-2 border-white px-3 py-1 rounded-md 
                     hover:bg-white hover:text-green-600 transition-all duration-300 ease-in-out">
    <span className=" px-2 py-1 rounded-md mr-2 text-base">❓</span>
    Help
  </button>
</div>

        </header>
    );
};
