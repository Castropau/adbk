import React from "react";
import Link from "next/link";

export const LoginInfoBox: React.FC = () => {
  const actions = [
    { icon: "🚀", title: "Scan your library card", desc: "Drop books without scanning your card", href: "/scan-library" },
    { icon: "🧾", title: "Login for Receipt", desc: "Scan your card to get a printed receipt", href: "/login-receipt" },
    { icon: "📱", title: "Scan QR Code", desc: "Show your mobile library app", href: "/scan-qr" },
    { icon: "🔢", title: "Enter Card Number", desc: "Type your library card number", href: "/enter-card" },
    { icon: "⏩", title: "Skip Login", desc: "Continue without receipt", href: "/skip-login" },
  ];

  return (
    <div className="flex flex-col flex-1 px-[40px] py-[40px] overflow-auto space-y-6 w-full">
      {/* Info Box */}
      <div className="bg-blue-100 border border-blue-300 border-l-4 border-l-blue-500 rounded-lg p-6 flex items-start gap-3">
        <span className="text-3xl">ℹ️</span>
        <div>
          <h4 className="font-semibold text-xl mb-1 text-blue-900">Login is Optional</h4>
          <p className="text-lg text-blue-800 leading-relaxed">
            You can return books without logging in. Login only if you want a printed receipt or to view your account status.
          </p>
        </div>
      </div>

      {/* Action Boxes */}
      {/* {actions.map((item, idx) => (
        <Link
          key={idx}
          href={item.href}
          className="flex gap-4 p-6 border border-gray-300 rounded-lg hover:border-blue-500 transform hover:translate-x-1 transition-all duration-300 cursor-pointer w-full"
        >
          <span className="text-3xl">{item.icon}</span>
          <div className="flex flex-col">
            <h4 className="font-semibold text-xl">{item.title}</h4>
            <p className="text-lg text-gray-600 mt-1">{item.desc}</p>
          </div>
        </Link>
      ))} */}
      <div className="flex flex-col space-y-6 w-full">
  {actions.map((item, idx) => (
    <Link
      key={idx}
      href={item.href}
      className="flex gap-4 p-6 border border-gray-300 rounded-lg hover:border-blue-500 transform hover:translate-x-1 transition-all duration-300 cursor-pointer w-full z-10"
    >
      <span className="text-3xl">{item.icon}</span>
      <div className="flex flex-col">
        <h4 className="font-semibold text-xl">{item.title}</h4>
        <p className="text-lg text-gray-600 mt-1">{item.desc}</p>
      </div>
    </Link>
  ))}
</div>

    </div>
  );
};
