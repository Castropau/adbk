import React from "react";

// import React from "react";

export const DropInfoBox: React.FC = () => {
  return (
    <div
      className="
        w-full max-w-4xl
        mx-auto
        space-y-6
        px-8
        py-6
      "
    >
      <div
        className="
          bg-blue-100 border border-blue-300
          rounded-xl
          p-6
          flex items-start gap-4
          relative
          shadow-md
        "
      >
        {/* Accent line */}
        <div className="absolute left-0 top-0 h-full w-2 bg-blue-500 rounded-l-xl" />

        {/* Icon */}
        <span className="text-4xl z-10">📖</span>

        {/* Content */}
        <div className="z-10">
          <h4 className="font-bold text-blue-900 text-xl mb-2">
            Tips for Best Results
          </h4>

          <p className="text-blue-800 text-lg leading-relaxed">
            • Remove bookmarks and receipts
            <br />
            • Books should have RFID tags
            <br />
            • One book at a time for accuracy
            <br />
            • Wait 3 seconds between items
          </p>
        </div>
      </div>
    </div>
  );
};

