import React from "react";
import { Header } from "./_components/Header";
import ReceiptOptions from "./_components/ReceiptOptions";
import { ReceiptInclude } from "./_components/ReceiptInclude";
import { Footer } from "./_components/Footer";

// import { Footer } from "../damange-item/_components/Footer";
// import { Footer } from "../book-return/components/Footer";

const Page: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

<section className="p-6 md:p-12 w-full mx-auto flex-grow">
        {/* Page Title */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
         How Would You Like
Your Receipt?
        </h2>

        {/* Step Indicators */}
        {/* <div className="flex flex-col sm:flex-row justify-around md:justify-between items-center gap-4 px-2 sm:px-6 md:px-12">
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-700">
            ✓ 
          </span>
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-700">
            ✓ 
          </span>
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-700">
            ✓ 
          </span>
        </div> */}

        {/* Final Confirmation */}
        {/* <div className="text-center mt-8 flex flex-col items-center gap-2">
          <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-green-700">✅</span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-2 text-green-800">
            All Done!
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mt-1 md:mt-2 max-w-3xl">
            Thank you for using our book return service
          </p>
        </div> */}
<ReceiptOptions />
<ReceiptInclude />
        {/* Session Summary */}
        {/* <SessionSummary />
        <LikeReceipt />
        <div className="flex justify-center mb-50 mt-10">
  <span className="text-5xl md:text-7xl font-extrabold text-blue-500 animate-pop-bounce-subtle">
    3
  </span>
</div> */}
      </section>
      <Footer />
    </main>
  );
};

export default Page;
