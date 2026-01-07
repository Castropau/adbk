import React from "react";

export const StatusItem: React.FC<{ icon: string; label: string }> = ({ icon, label }) => (
  <div className="flex items-center gap-2 text-white font-semibold">
    <span className="text-xl">{icon}</span>
    <span className="text-sm md:text-base">{label}</span>
  </div>
);
