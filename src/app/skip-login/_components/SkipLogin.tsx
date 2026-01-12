import React from "react";
import { MdFastForward } from "react-icons/md"; // fast-forward icon

const SkipLogin: React.FC = () => {
  return (
    <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-10 text-center
                    flex flex-col items-center justify-center
                    transform scale-100 sm:scale-110 md:scale-125 lg:scale-150
                    mx-auto">
      {/* Icon */}
      <MdFastForward className="text-gray-700 mb-8" size={160} />

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Skip Login</h1>

      {/* Description */}
      <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
        Continue without logging in. You won’t get a printed receipt, but you can drop off your books quickly.
      </p>

      {/* Optional button */}
      <button className="bg-gray-700 text-white px-8 py-3 rounded-xl text-lg md:text-xl
                         hover:bg-gray-800 transition-colors duration-300">
        Continue
      </button>
    </div>
  );
};

export default SkipLogin;
