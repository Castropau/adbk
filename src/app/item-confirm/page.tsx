import React from "react";

import { Box } from "../scanning/_components/Box";
import { FooterBox } from "../scanning/_components/FooterBox";
import { Header } from "./_components/Header";
import Boxes from "./_components/Box";
import { ReturnComplete } from "./_components/ReturnComplete";
import { ReturnDetails } from "./_components/ReturnDetails";
import { Footer } from "./_components/Footer";



const Page: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <section className="p-6 md:p-12 max-w-4xl mx-auto flex-grow">
        <h2 className="text-center text-2xl md:text-4xl font-extrabold mb-6">
          Please Drop Your Books
        </h2>
        <Boxes/>
        <ReturnComplete />
        <ReturnDetails />
      </section>




      <Footer />
    </main>
  );
};

export default Page;
