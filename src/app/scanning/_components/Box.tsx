import React from "react";

export const Box: React.FC = () => {
    return (
        <div className="mt-12 max-w-xl mx-auto space-y-6">

            <div className="bg-blue-100 border border-blue-300 rounded-lg p-5 flex items-start gap-3 relative">
                <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-l-lg"></div>

                <span className="text-2xl z-10">⏱️</span>

                <div className="z-10">
                    <h4 className="font-semibold text-blue-900 mb-1">
                        Processing
                    </h4>
                    <p className="text-blue-800 text-sm md:text-base leading-relaxed">
                        • Detecting RFID tag

                        <br />
                        • Checking in to library system
                        <br />
                        • Verifying book condition
                        <br />
                        • Routing to correct bin
                    </p>
                </div>
            </div>
        </div>
    );
};
