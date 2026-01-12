import React from "react";
import { MdCreditCard } from "react-icons/md"; // Material Design credit card icon

const ScanLibraryCard: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 sm:p-12">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8 text-center">
        <MdCreditCard className="mx-auto mb-6 text-blue-600" size={128} />
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">Scan Library Card</h1>
        <p className="text-gray-700 text-base sm:text-lg">
          Place your card on the RFID reader to scan it.
        </p>
      </div>
    </main>
  );
};

export default ScanLibraryCard;
