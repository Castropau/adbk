import React from "react";
import { Header } from "./book-return/components/Header";
// import { StatusBar } from "./book-return/components/StatusBar";
// import { DropBox } from "./book-return/components/Dropbox";
import { InfoBox } from "./book-return/components/Info";
import { Footer } from "./book-return/components/Footer";
import { DropBox } from "./book-return/components/Dropbox";
import { useTranslations } from "next-intl";


// const BookReturnPage: React.FC = () => {
//     const t = useTranslations("ContactInfo");

//   return (
//     <main className="min-h-screen bg-gray-50">
//       <Header />
//       {/* <StatusBar /> */}

//       {/* <section className="p-6 md:p-12 max-w-4xl mx-auto"> */}
//       <section className="p-6 md:p-12 max-w-6xl mx-auto">

//         <h2 className="text-center text-2xl md:text-4xl font-extrabold mb-10">
//           Welcome! <br />
//           Return Your Books Anytime
//              {/* {t("h1")} */}
//         </h2>

//         <DropBox />

//         <InfoBox />
//       </section>
//       <Footer />
//     </main>
//   );
// };
const BookReturnPage: React.FC = () => {
  return (
    <div className="w-[1080px] h-[1920px] bg-gray-50 mx-auto overflow-hidden flex flex-col">
      <Header />

      {/* Main content */}
      <main className="flex-1 overflow-auto px-16 py-14">
        <div className="">
        <h2 className="text-center text-5xl font-extrabold mb-14">
          Welcome! <br />
          Return Your Books Anytime
        </h2>
</div>
        <DropBox />
        <InfoBox />
      </main>

      <Footer fixed />
    </div>
  );
};


export default BookReturnPage;
