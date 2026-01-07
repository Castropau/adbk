import React from "react";
import { HeaderDrop } from "./components/HeaderDrop";
import { DropBoxs } from "./components/DropBoxs";
import { DropInfoBox } from "./components/dropInfoBox";
import { FooterDrop } from "./components/FooterDrop";
// import { FooterDrop } from "../book-return/components/Footer";
// import { Footer } from "./components/Footer";


const BookReturnPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <HeaderDrop />

      <section className="p-6 md:p-12 max-w-4xl mx-auto flex-grow">
        <h2 className="text-center text-2xl md:text-4xl font-extrabold mb-6">
          Please Drop Your Books
        </h2>

        {/* Numbers row */}
        <div className="flex justify-between items-center mt-4 mb-10 px-6 md:px-12">
          <span className="text-xl md:text-2xl font-bold text-green-700">1</span>
          <span className="text-xl md:text-2xl font-bold text-gray-700">2</span>
          <span className="text-xl md:text-2xl font-bold text-gray-700">3</span>
        </div>

        <DropBoxs />
        <DropInfoBox />
      </section>

      <FooterDrop />
    </main>
  );
};

export default BookReturnPage;
