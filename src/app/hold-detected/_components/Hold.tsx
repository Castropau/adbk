import React from "react";

export const Hold: React.FC = () => {
    return (
        <div className="mt-12 max-w-[900px] w-full mx-auto space-y-6 px-4 md:px-0">
<div className="bg-[rgb(255,243,224)] rounded-xl p-8 md:p-10 flex items-start gap-5 relative shadow-lg">
                {/* Left accent line */}
                <div className="absolute left-0 top-0 h-full w-2 bg-orange-500 rounded-l-xl"></div>

                {/* Icon */}
                <span className="text-4xl md:text-5xl z-10">📚</span>

                {/* Text content */}
                <div className="z-10">
                    <h4 className="font-semibold text-lg md:text-2xl mb-2 text-[rgb(255,140,0)]">
Routed to Hold Shelf
</h4>

                    <p className=" text-base md:text-lg leading-relaxed text-[rgb(191,54,12)]">
This book has been reserved by another patron. It will be automatically routed to the Hold Shelf for pickup. The patron will be notified that their book is ready.                    </p>
                </div>
            </div>
        </div>
    );
};
