// app/page.tsx
// import KioskPortrait from "@/components/KioskPortrait";

import KioskPortrait from "./_components/Kiosk";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <KioskPortrait>
        <div className="text-black text-6xl font-bold text-center mt-[900px]">
          Welcome to the Portrait Kiosk
        </div>
      </KioskPortrait>
    </div>
  );
}
