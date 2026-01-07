import React from "react";

export const DropBoxs: React.FC = () => {
    return (
        <div className="border-4 border-dashed border-blue-600 rounded-xl p-10 md:p-20 text-center text-white select-none
                bg-[linear-gradient(135deg,_rgb(30,58,95)_0%,_rgb(44,95,158)_100%)]">
            <div className="text-6xl mb-8 animate-bounce">
                ⬇️
            </div>
            <h3 className="text-2xl font-semibold mb-2">Drop Opening Ready</h3>
            <p className="max-w-md mx-auto text-base md:text-lg leading-relaxed">
                Insert books one at a time
                <br />
                Place flat, cover facing up
                <br />
                Wait for confirmation before next book

            </p>
        </div>

    );
};
