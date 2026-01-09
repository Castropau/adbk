import React from "react";
import { Header } from "./_components/Header";

// import { Footer } from "../receipt/_components/Footer";
import { LimitedCapacity } from "./_components/LimitedCapacity";
import { AlternativeOptions } from "./_components/AlternativeOptions";
import { BinStatus } from "./_components/ProgressCard";
import { Footer } from "./_components/Footer";
// import { Footer } from "../receipt/_components/Footer";





const Page: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col pb-24"> {/* pb-24 adds bottom padding for footer height */}
      <Header />

      <section className="p-6 md:p-12 w-full mx-auto flex-grow">
        <h2 className="text-center text-2xl md:text-4xl font-extrabold mb-6">
          Drop Box Nearly Full
        </h2>
        <LimitedCapacity />
        <BinStatus />
        <AlternativeOptions />
      </section>

      <Footer />
    </main>
  );
};



export default Page;
