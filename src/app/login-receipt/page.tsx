import React from "react";
import LoginReceipt from "./_components/LoginReceipt";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";



const Page: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center p-6 md:p-12">
        <LoginReceipt />
      </main>   

      {/* Footer fixed at bottom */}
      <Footer />
    </div>
  );
};

export default Page;
