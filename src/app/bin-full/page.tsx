// import React from "react";
// import { Header } from "./_components/Header";

// // import { Footer } from "../receipt/_components/Footer";
// import { LimitedCapacity } from "./_components/LimitedCapacity";
// import { AlternativeOptions } from "./_components/AlternativeOptions";
// import { BinStatus } from "./_components/ProgressCard";
// import { Footer } from "./_components/Footer";
// // import { Footer } from "../receipt/_components/Footer";





// const Page: React.FC = () => {
//   return (
//     <main className="min-h-screen bg-gray-50 flex flex-col pb-24"> {/* pb-24 adds bottom padding for footer height */}
//       <Header />

//       <section className="p-6 md:p-12 w-full mx-auto flex-grow">
//         <h2 className="text-center text-2xl md:text-4xl font-extrabold mb-6">
//           Drop Box Nearly Full
//         </h2>
//         <LimitedCapacity />
//         <BinStatus />
//         <AlternativeOptions />
//       </section>

//       <Footer />
//     </main>
//   );
// };



// export default Page;
import React from "react";
import { Header } from "./_components/Header";
import { LimitedCapacity } from "./_components/LimitedCapacity";
import { AlternativeOptions } from "./_components/AlternativeOptions";
import { BinStatus } from "./_components/ProgressCard";
import { Footer } from "./_components/Footer";

const Page: React.FC = () => {
  return (
    <main className="w-[1080px] h-[1920px] bg-gray-50 flex flex-col overflow-hidden">
      {/* Header */}
      <Header />

      {/* Scrollable content */}
      <section className="flex-grow p-8 md:p-12 overflow-y-auto pb-[140px]">
        {/* Page Title */}
        <h2 className="text-center text-5xl md:text-6xl font-extrabold mb-8">
          Drop Box Nearly Full
        </h2>

        {/* Components with reduced spacing */}
        <div className="w-full px-6 md:px-0 flex flex-col gap-6">
          <LimitedCapacity />
          <BinStatus />
          <AlternativeOptions />
        </div>
      </section>

      {/* Footer pinned at bottom */}
      <Footer />
    </main>
  );
};

export default Page;
