import React from "react";

export const LoginInfoBox: React.FC = () => {
    return (
        <div className="mt-12 max-w-xl mx-auto space-y-6">
            <div className="bg-blue-100 border border-blue-300 border-l-4 border-l-blue-500 rounded-lg p-5 flex items-start gap-3">
  <span className="text-2xl">ℹ️</span>
  <div>
    <h4 className="font-semibold text-blue-900 mb-1">
      Login is Optional
    </h4>
    <p className="text-blue-800 text-sm md:text-base leading-relaxed">
      You can return books without logging in. Login only if you want a printed receipt or to view your account status.
    </p>
  </div>
</div>




            <div className="border border-gray-300 rounded-lg p-5 flex gap-4 cursor-pointer 
                hover:border-blue-500 hover:translate-x-2 
                transform transition-all duration-300 ease-in-out cursor-pointer">
                <span className="text-2xl self-start">🚀</span>
                <div className="flex flex-col">
                    <h4 className="font-semibold">Scan your library card</h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-1">
                        Drop books without scanning your card
                    </p>
                </div>
            </div>


            <div className="border border-gray-300 rounded-lg p-5 flex gap-4 cursor-pointer 
                hover:border-blue-500 hover:translate-x-2 
                transform transition-all duration-300 ease-in-out cursor-pointer">
                <span className="text-2xl self-start">🧾</span>
                <div className="flex flex-col">
                    <h4 className="font-semibold">Login for Receipt</h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-1">
                        Scan your card to get a printed receipt
                    </p>
                </div>
            </div>
            <div className="border border-gray-300 rounded-lg p-5 flex gap-4 cursor-pointer 
                hover:border-blue-500 hover:translate-x-2 
                transform transition-all duration-300 ease-in-out cursor-pointer">
                <span className="text-2xl self-start">📱</span>
                <div className="flex flex-col">
                    <h4 className="font-semibold">Scan QR Code</h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-1">
                        Show your mobile library app
                    </p>
                </div>
            </div>

            <div className="border border-gray-300 rounded-lg p-5 flex gap-4 cursor-pointer 
                hover:border-blue-500 hover:translate-x-2 
                transform transition-all duration-300 ease-in-out cursor-pointer">
                <span className="text-2xl self-start">🔢</span>
                <div className="flex flex-col">
                    <h4 className="font-semibold">Enter Card Number</h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-1">
                        Type your library card number
                    </p>
                </div>
            </div>
            <div className="border border-gray-300 rounded-lg p-5 flex gap-4 cursor-pointer 
                hover:border-blue-500 hover:translate-x-2 
                transform transition-all duration-300 ease-in-out cursor-pointer">
                <span className="text-2xl self-start">⏩</span>
                <div className="flex flex-col">
                    <h4 className="font-semibold">Skip Login</h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-1">
                        Continue without receipt
                    </p>
                </div>
            </div>
        </div>
    );
};
