import React from "react";
import { ScanningHeader } from "./_components/ScanningHeader";
import { BoxScanning } from "./_components/BoxScanning";
// import { DropInfoBox } from "../drop-instruction/components/dropInfoBox";
// import { FooterDrop } from "../drop-instruction/components/FooterDrop";
import { Box } from "./_components/Box";
import { FooterBox } from "./_components/FooterBox";
// import { DropBoxs } from "../drop-instruction/components/DropBoxs";

// import { FooterDrop } from "../book-return/components/Footer";
// import { Footer } from "./components/Footer";


const Page: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <ScanningHeader />

      <section className="p-6 md:p-12 max-w-4xl mx-auto flex-grow">
        <h2 className="text-center text-2xl md:text-4xl font-extrabold mb-6">
          Please Drop Your Books
        </h2>

        {/* Numbers row */}
        <div className="flex justify-between items-center mt-4 mb-10 px-6 md:px-12">
          {/* <span className="text-xl md:text-2xl font-bold text-green-700">1</span> */}
          <span className="text-xl md:text-2xl font-bold text-green-700">✅</span>

          <span className="text-xl md:text-2xl font-bold text-gray-700">2</span>
          <span className="text-xl md:text-2xl font-bold text-gray-700">3</span>
        </div>

        <BoxScanning />
        <Box />
      </section>
<div className="flex justify-center mb-50">
  <span className="text-5xl md:text-7xl font-extrabold text-blue-500 animate-pop-bounce-subtle">
    3
  </span>
</div>



      <FooterBox />
    </main>
  );
};

export default Page;
