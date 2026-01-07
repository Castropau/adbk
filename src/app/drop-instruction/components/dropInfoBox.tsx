import React from "react";

export const DropInfoBox: React.FC = () => {
    return (
        <div className="mt-12 max-w-xl mx-auto space-y-6">

            <div className="bg-blue-100 border border-blue-300 rounded-lg p-5 flex items-start gap-3 relative">
                <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-l-lg"></div>

                <span className="text-2xl z-10">📖</span>

                <div className="z-10">
                    <h4 className="font-semibold text-blue-900 mb-1">
                        Tips for Best Results
                    </h4>
                    <p className="text-blue-800 text-sm md:text-base leading-relaxed">
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
