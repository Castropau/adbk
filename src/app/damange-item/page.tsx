// import React from "react";
// import { Header } from "./_components/Header";
// import Boxes from "./_components/Boxes";
// // import { ReturnComplete } from "../item-confirm/_components/ReturnComplete";
// import { Hold } from "./_components/Hold";
// import { DetentionDetail } from "./_components/DetentionDetail";
// import { HappenNext } from "./_components/HappenNext";
// import { Footer } from "./_components/Footer";




// const Page: React.FC = () => {
//   return (
//     <main className="min-h-screen bg-gray-50 flex flex-col">
//       <Header />

// <section className="p-6 md:p-12 w-full mx-auto flex-grow">
//         <h2 className="text-center text-2xl md:text-4xl font-extrabold mb-6">
// Book Condition Alert        </h2>
//         <Boxes/>
//         <Hold />
//         <DetentionDetail />
//         <HappenNext />
//       </section>




//       <Footer />
//     </main>
//   );
// };

// export default Page;
import React from "react";
import { Header } from "./_components/Header";
import Boxes from "./_components/Boxes";
import { Hold } from "./_components/Hold";
import { DetentionDetail } from "./_components/DetentionDetail";
import { HappenNext } from "./_components/HappenNext";
import { Footer } from "./_components/Footer";

const Page: React.FC = () => {
  return (
    <main className="w-[1080px] h-[1920px] bg-gray-50 flex flex-col overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main content */}
      <section className="flex-1 flex flex-col items-center px-12 pt-16 overflow-y-auto">
        {/* Title */}
        <h2 className="text-center text-5xl font-extrabold mb-12">
          Book Condition Alert
        </h2>

        {/* Components */}
        <div className="w-full flex flex-col gap-12">
          <Boxes />
          <Hold />
          <DetentionDetail />
          <HappenNext />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Page;
