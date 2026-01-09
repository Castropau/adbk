import React from "react";
import { Header } from "./_components/Header";
import Boxes from "./_components/Boxes";
import { Readbleble } from "./_components/Readable";
import { YouCanDo } from "./_components/YouCanDo";
import { ErrorDetails } from "./_components/ErrorDetails";
import { Footer } from "./_components/Footer";
// import { Footer } from "../receipt/_components/Footer";





const Page: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

<section className="p-6 md:p-12 w-full mx-auto flex-grow">
        <h2 className="text-center text-2xl md:text-4xl font-extrabold mb-6">
Oops! Something Went Wrong

        </h2>
        <Boxes/>
        <Readbleble />
        {/* <DetentionDetail /> */}
        <YouCanDo />
        {/* <HappenNext /> */}
        <ErrorDetails />
      </section>




      <Footer />
    </main>
  );
};

export default Page;
