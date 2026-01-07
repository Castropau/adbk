import React from "react";
import { HeaderItems } from "./_components/HeaderItems";
// import { ReturnDetails } from "../item-confirm/_components/ReturnDetails";
import { ReturnMultiple } from "./_components/ReturnMultiple";
import { ItemStatus } from "./_components/ItemStatus";
import { Footer } from "../book-return/components/Footer";
import { FooterItem } from "./_components/FooterItem";





const Page: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <HeaderItems />

      <section className="p-6 md:p-12 max-w-4xl mx-auto flex-grow">
        <h2 className="text-center text-2xl md:text-4xl font-extrabold mb-6">
         All Items Returned Successfully!

        </h2>
        {/* <Boxes/> */}
        {/* <ReturnComplete /> */}
        <ReturnMultiple />
        <ItemStatus />
      </section>




      <FooterItem />
    </main>
  );
};

export default Page;
