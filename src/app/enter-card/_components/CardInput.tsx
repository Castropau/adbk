import React, { useState } from "react";

const CardInput: React.FC = () => {
  const [cardNumber, setCardNumber] = useState("");

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // remove non-digits
    if (value.length > 16) value = value.slice(0, 16);
    const formatted = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(formatted);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <section className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 md:p-12 flex flex-col items-center">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-6">
          Enter Card Number
        </h2>

        <input
          type="text"
          value={cardNumber}
          onChange={handleChange}
          placeholder="XXXX XXXX XXXX XXXX"
          className="w-full text-xl md:text-2xl p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-center"
        />

        <button
          className="mt-6 w-full bg-blue-600 text-white py-3 text-lg md:text-xl rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </section>
    </main>
  );
};

export default CardInput;
