import React from "react";
import { MdQrCodeScanner } from "react-icons/md"; // QR code scanner icon

const ScanQRCode: React.FC = () => {
  return (
    <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-10 text-center
                    flex flex-col items-center justify-center
                    transform scale-100 sm:scale-110 md:scale-125 lg:scale-150
                    mx-auto">
      {/* Icon */}
      <MdQrCodeScanner className="text-purple-600 mb-8" size={160} />

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Scan QR Code</h1>

      {/* Description */}
      <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
        Show your mobile library app or QR code to scan and proceed with your transaction.
      </p>

      {/* Optional button */}
      <button className="bg-purple-600 text-white px-8 py-3 rounded-xl text-lg md:text-xl
                         hover:bg-purple-700 transition-colors duration-300">
        Start Scanning
      </button>
    </div>
  );
};

export default ScanQRCode;
