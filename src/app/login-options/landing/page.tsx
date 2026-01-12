import React from 'react';
import { LoginHeader } from '../components/loginHeader';
import { LoginInfoBox } from '../components/loginInfo';
import { LoginFooter } from '../components/LoginFooter';

const Page: React.FC = () => {
  return (
    // <div className="w-[1080px] h-[1920px] bg-gray-50 relative overflow-hidden mx-auto my-0">
    //   {/* Header fixed height */}
    //   <header className="h-32">
    //     <LoginHeader />
    //   </header>

    //   {/* Main content */}
    //   <main className="flex flex-col items-center justify-start h-[1856px] p-6 overflow-auto">
    //     <h2 className="text-center text-4xl font-extrabold mb-10">
    //       Would You Like a Receipt?<br />
    //       Please Login
    //     </h2>

    //     <LoginInfoBox />
    //   </main>

    //   {/* Footer fixed height */}
    //   <footer className="h-32 absolute bottom-0 w-full">
    //     <LoginFooter />
    //   </footer>
    // </div>
    <div className="w-[1080px] h-[1920px] bg-gray-50 relative overflow-hidden mx-auto">
  {/* Header */}
  <header className="h-32">
    <LoginHeader />
  </header>

  {/* Main content */}
  <main className="flex flex-col items-center justify-start overflow-auto flex-1 px-[40px] py-[40px] pb-[160px]">
    <h2 className="text-center text-4xl font-extrabold mb-10">
      Would You Like a Receipt?<br />
      Please Login
    </h2>

    <LoginInfoBox />
  </main>

  {/* Footer */}
  <footer className="h-32 absolute bottom-0 w-full">
    <LoginFooter />
  </footer>
</div>

  );
};

export default Page;
