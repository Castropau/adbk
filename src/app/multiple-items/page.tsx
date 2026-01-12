import React from "react";
import { HeaderItems } from "./_components/HeaderItems";
import { ReturnMultiple } from "./_components/ReturnMultiple";
import { ItemStatus } from "./_components/ItemStatus";
import { FooterItem } from "./_components/FooterItem";

const Page: React.FC = () => {
  return (
    <main className="w-[1080px] h-[1920px] bg-gray-50 flex flex-col overflow-hidden">
      {/* Header */}
      <HeaderItems />

      {/* Main content */}
      <section className="flex-1 flex flex-col items-center px-12 pt-16 overflow-y-auto">
        {/* Title */}
        <h2 className="text-center text-5xl font-extrabold mb-12">
          All Items Returned Successfully!
        </h2>

        {/* Return Summary */}
        <ReturnMultiple />

        {/* Item Status List */}
        <ItemStatus />
      </section>

      {/* Footer */}
      <FooterItem />
    </main>
  );
};

export default Page;
