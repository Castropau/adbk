"use client";
import React from "react";
import CardInput from "./_components/CardInput";
// import { Header } from "../book-return/components/Header";
// import { Footer } from "../book-return/components/Footer";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";






const Page: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

<section className="p-6 md:p-12 w-full mx-auto flex-grow">
        {/* <h2 className="text-center text-2xl md:text-4xl font-extrabold mb-6">
Oops! Something Went Wrong

        </h2> */}
      <CardInput />
      </section>




      <Footer />
    </main>
  );
};

export default Page;
