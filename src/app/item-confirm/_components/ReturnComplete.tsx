import React from "react";

export const ReturnComplete: React.FC = () => {
    return (
        <div className="mt-12 max-w-[900px] w-full mx-auto space-y-6 px-4 md:px-0">
<div className="bg-[rgb(232,245,233)]  rounded-xl p-8 md:p-10 flex items-start gap-5 relative shadow-lg">
                {/* Left accent line */}
                <div className="absolute left-0 top-0 h-full w-2 bg-green-500 rounded-l-xl"></div>

                {/* Icon */}
                <span className="text-4xl md:text-5xl z-10">✅</span>

                {/* Text content */}
                <div className="z-10">
                    <h4 className="font-semibold text-lg md:text-2xl mb-2 text-[rgb(46,125,50)]">
  Return Complete
</h4>

                    <p className=" text-base md:text-lg leading-relaxed">
                        Your book has been checked in and routed to the Main Collection bin. Thank you for returning on time!
                    </p>
                </div>
            </div>
        </div>
    );
};
