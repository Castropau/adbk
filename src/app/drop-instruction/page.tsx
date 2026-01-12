import React from "react";
import { HeaderDrop } from "./components/HeaderDrop";
import { DropBoxs } from "./components/DropBoxs";
import { DropInfoBox } from "./components/dropInfoBox";
import { FooterDrop } from "./components/FooterDrop";
// import { FooterDrop } from "../book-return/components/Footer";
// import { Footer } from "./components/Footer";


// const BookReturnPage: React.FC = () => {
//   return (
//     <main className="min-h-screen bg-gray-50 flex flex-col">
//       <HeaderDrop />

//       <section className="p-6 md:p-12 max-w-4xl mx-auto flex-grow">
//         <h2 className="text-center text-2xl md:text-4xl font-extrabold mb-6">
//           Please Drop Your Books
//         </h2>

//         {/* Numbers row */}
//         <div className="flex justify-between items-center mt-4 mb-10 px-6 md:px-12">
//           <span className="text-xl md:text-2xl font-bold text-green-700">1</span>
//           <span className="text-xl md:text-2xl font-bold text-gray-700">2</span>
//           <span className="text-xl md:text-2xl font-bold text-gray-700">3</span>
//         </div>

//         <DropBoxs />
//         <DropInfoBox />
//       </section>

//       <FooterDrop />
//     </main>
//   );
// };
const BookReturnPage: React.FC = () => {
  return (
    <div className="w-[1080px] h-[1920px] mx-auto bg-gray-100 flex flex-col overflow-hidden">
      <HeaderDrop />

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center px-20 pt-16">
        {/* Title */}
        <h2 className="text-center text-6xl font-extrabold mb-12 mt-10">
          Please Drop Your Books
        </h2>

        {/* Numbers row (kept simple) */}
        <div className="flex justify-between w-full max-w-3xl mb-14 px-16">
          <span className="text-4xl font-bold text-green-600">1</span>
          <span className="text-4xl font-bold text-gray-400">2</span>
          <span className="text-4xl font-bold text-gray-400">3</span>
        </div>

        {/* Drop box */}
        <div className="w-full max-w-4xl mb-16">
          <DropBoxs />
        </div>

        {/* Info */}
        <DropInfoBox />
      </main>

      <FooterDrop />
    </div>
  );
};

// export default BookReturnPage;

export default BookReturnPage;
