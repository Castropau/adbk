import React from "react";
import { MdReceiptLong } from "react-icons/md"; // receipt icon

const LoginReceipt: React.FC = () => {
  return (
    <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-10 text-center
                    flex flex-col items-center justify-center
                    transform scale-100 sm:scale-110 md:scale-125 lg:scale-150
                    mx-auto">
      {/* Icon */}
      <MdReceiptLong className="text-green-600 mb-8" size={160} />

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Login for Receipt</h1>

      {/* Description */}
      <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
        Scan your library card to get a printed receipt for your transaction.
      </p>

      {/* Optional button for login action */}
      <button className="bg-green-600 text-white px-8 py-3 rounded-xl text-lg md:text-xl
                         hover:bg-green-700 transition-colors duration-300">
        Scan Card
      </button>
    </div>
  );
};

export default LoginReceipt;
