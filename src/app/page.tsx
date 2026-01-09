import React from "react";
import { Header } from "./book-return/components/Header";
// import { StatusBar } from "./book-return/components/StatusBar";
// import { DropBox } from "./book-return/components/Dropbox";
import { InfoBox } from "./book-return/components/Info";
import { Footer } from "./book-return/components/Footer";
import { DropBox } from "./book-return/components/Dropbox";


const BookReturnPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      {/* <StatusBar /> */}

      {/* <section className="p-6 md:p-12 max-w-4xl mx-auto"> */}
      <section className="p-6 md:p-12 max-w-6xl mx-auto">

        <h2 className="text-center text-2xl md:text-4xl font-extrabold mb-10">
          Welcome! <br />
          Return Your Books Anytime
        </h2>

        <DropBox />

        <InfoBox />
      </section>
      <Footer />
    </main>
  );
};

export default BookReturnPage;
