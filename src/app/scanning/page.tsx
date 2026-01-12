import React from "react";
import { ScanningHeader } from "./_components/ScanningHeader";
import { BoxScanning } from "./_components/BoxScanning";
import { Box } from "./_components/Box";
import { FooterBox } from "./_components/FooterBox";

const Page: React.FC = () => {
  return (
    <div className="w-[1080px] h-[1920px] mx-auto bg-gray-50 flex flex-col overflow-hidden">
      {/* Header */}
      <ScanningHeader />

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center px-16 pt-12 space-y-12 overflow-y-auto">
        {/* Title */}
        <h2 className="text-center text-6xl font-extrabold mt-6">
          Please Drop Your Books
        </h2>

        {/* Numbers row */}
        <div className="flex justify-between w-full max-w-3xl px-12 text-5xl font-bold">
          <span className="text-green-600">✅</span>
          <span className="text-gray-400">2</span>
          <span className="text-gray-400">3</span>
        </div>

        {/* Box scanning */}
        <div className="w-full max-w-4xl">
          <BoxScanning />
        </div>

        {/* Processing info */}
        <div className="w-full max-w-3xl">
          <Box />
        </div>

        {/* Big step indicator */}
        <div className="flex justify-center mt-8">
          <span className="text-7xl font-extrabold text-blue-500 animate-pop-bounce-subtle">
            3
          </span>
        </div>
      </main>

      {/* Footer */}
      <FooterBox />
    </div>
  );
};

export default Page;
