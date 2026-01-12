// components/KioskPortrait.tsx
"use client";

import React from "react";

interface KioskPortraitProps {
  children: React.ReactNode;
}

const KioskPortrait: React.FC<KioskPortraitProps> = ({ children }) => {
  return (
    <div className="w-[1080px] h-[1920px] bg-black overflow-hidden relative">
      {children}
    </div>
  );
};

export default KioskPortrait;
