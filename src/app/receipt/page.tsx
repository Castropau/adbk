import React from "react";
import { Header } from "./_components/Header";
import ReceiptOptions from "./_components/ReceiptOptions";
import { ReceiptInclude } from "./_components/ReceiptInclude";
import { Footer } from "./_components/Footer";

const Page: React.FC = () => {
  return (
    <main className="w-[1080px] h-[1920px] bg-gray-50 flex flex-col overflow-hidden">
      {/* Header */}
      <Header />

      {/* Scrollable content */}
      <section className="flex-grow p-6 md:p-12 overflow-y-auto pb-[120px]">
        {/* Page Title */}
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold mb-10">
          How Would You Like
          <br />
          Your Receipt?
        </h2>

        {/* Receipt options — wide */}
        <div className="flex flex-col gap-10 w-full px-4 md:px-0">
          <ReceiptOptions />

          {/* Receipt include section — full width */}
          <ReceiptInclude />
        </div>
      </section>

      {/* Footer pinned at bottom */}
      <Footer />
    </main>
  );
};

export default Page;
