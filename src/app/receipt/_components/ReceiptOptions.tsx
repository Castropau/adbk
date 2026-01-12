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
    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 px-6 md:px-0">
      {options.map(({ icon, title, subtitle, iconColor }, idx) => (
        <div
          key={idx}
          className="border border-gray-300 rounded-xl p-10 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl transition-all min-h-[280px]"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.currentTarget.click();
            }
          }}
        >
          <span
            className={`text-7xl md:text-8xl mb-6 select-none ${iconColor ? iconColor : ""}`}
            aria-hidden="true"
          >
            {icon}
          </span>
          <h3 className="font-semibold text-2xl md:text-3xl">{title}</h3>
          <p className="text-gray-600 text-lg mt-2">{subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default ReceiptOptions;
