import Link from "next/link";

export const InfoBox: React.FC = () => {
  return (
    <div className="space-y-10 pb-40">
      {/* Info Tip */}
      <div className="relative bg-blue-100 border border-blue-300 rounded-xl p-8 flex items-start gap-6">
        <div className="absolute left-0 top-0 h-full w-2 bg-blue-500 rounded-l-xl" />
        <span className="text-5xl z-10">💡</span>

        <div className="z-10">
          <h4 className="font-semibold text-3xl text-blue-900 mb-2">
            First Time Using Drop Box?
          </h4>
          <p className="text-blue-800 text-2xl leading-relaxed">
            Just drop your books into the slot. Our system will automatically
            scan and check them in. You’ll see confirmation on screen!
          </p>
        </div>
      </div>

      {/* Quick Return */}
      <Link
        href="/drop-instruction"
      >
      <div
        className="
          border-2 border-gray-300 rounded-2xl
          px-12 py-10
          flex gap-8
          cursor-pointer
          transition-all duration-300
          hover:translate-x-2 hover:border-blue-500 hover:bg-gray-100
        "
      >
        <span className="text-6xl">🚀</span>
        <div>
          <h4 className="font-semibold text-3xl">
            Quick Return (No Login)
          </h4>
          <p className="text-2xl text-gray-600 mt-2">
            Drop books without scanning your card
          </p>
        </div>
      </div>
      </Link>

      {/* Login for Receipt */}
      <Link
        href="/login-receipt"
        className="
          border-2 border-gray-300 rounded-2xl
          px-12 py-10
          flex gap-8
          cursor-pointer
          transition-all duration-300
          hover:translate-x-2 hover:border-blue-500 hover:bg-gray-100
        "
      >
        <span className="text-6xl">🧾</span>
        <div>
          <h4 className="font-semibold text-3xl">
            Login for Receipt
          </h4>
          <p className="text-2xl text-gray-600 mt-2">
            Scan your card to get a printed receipt
          </p>
        </div>
      </Link>
    </div>
  );
};
