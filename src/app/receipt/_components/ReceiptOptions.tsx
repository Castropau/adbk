"use client";

import React from "react";

const ReceiptOptions: React.FC = () => {
  const options = [
    {
      icon: "🖨️",
      title: "Print Receipt",
      subtitle: "Printed immediately",
    },
    {
      icon: "📧",
      title: "Email Receipt",
      subtitle: "Sent to your email",
    },
    {
      icon: "📱",
      title: "SMS Receipt",
      subtitle: "Text message link",
    },
    {
      icon: "❌",
      title: "No Receipt",
      subtitle: "Skip receipt",
      iconColor: "text-red-600",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 md:px-0">
      {options.map(({ icon, title, subtitle, iconColor }, idx) => (
        <div
          key={idx}
          className="border border-gray-300 rounded-lg p-8 flex flex-col items-center text-center cursor-pointer hover:shadow-lg transition min-h-[220px]"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.currentTarget.click();
            }
          }}
        >
          <span
            className={`text-6xl mb-5 select-none ${iconColor ? iconColor : ""}`}
            aria-hidden="true"
          >
            {icon}
          </span>
          <h3 className="font-semibold text-xl md:text-2xl">{title}</h3>
          <p className="text-gray-600 text-base mt-2">{subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default ReceiptOptions;
