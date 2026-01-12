// import React from "react";
// import { Header } from "./_components/Header";
// // import Boxes from "../item-confirm/_components/Box";
// // import { ReturnComplete } from "../item-confirm/_components/ReturnComplete";
// // import { ReturnDetails } from "../item-confirm/_components/ReturnDetails";
// import Boxes from "./_components/Boxes";
// import { Hold } from "./_components/Hold";
// import { HoldInformation } from "./HoldInformation";
// import { ActionRequired } from "./_components/Action";
// import { Footer } from "./_components/Footer";






// const Page: React.FC = () => {
//   return (
//     <main className="min-h-screen bg-gray-50 flex flex-col">
//       <Header />

//       <section className="p-6 md:p-12 max-w-4xl mx-auto flex-grow">
//         <h2 className="text-center text-2xl md:text-4xl font-extrabold mb-6">
//         This Book is Reserved!


//         </h2>
//         {/* <Boxes/> */}
//         {/* <ReturnComplete /> */}
//         {/* <ReturnMultiple />
//         <ItemStatus /> */}
//         <Boxes/>
//         <Hold />
//         <HoldInformation />
//         <ActionRequired />
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
import { HoldInformation } from "./HoldInformation";
import { ActionRequired } from "./_components/Action";
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
          This Book is Reserved!
        </h2>

        {/* Boxes / Components */}
        <div className="w-full flex flex-col gap-12">
          <Boxes />
          <Hold />
          <HoldInformation />
          <ActionRequired />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Page;
