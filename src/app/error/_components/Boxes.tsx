import React from "react";

const Boxes = () => {
    return (
        <div
            className="
        w-full
        max-w-screen-xl      
        2xl:max-w-screen-2xl 
        border border-red-300
        rounded-xl
        px-4 py-4            
        sm:px-6 sm:py-5
        md:px-8 md:py-6
        flex items-center gap-4
        mx-auto
        shadow-lg
      "
        >
            <span
                className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          flex-shrink-0
        "
            >
                ❌
            </span>

            <div className="flex flex-col w-full">
                <h4
                    className="
            font-semibold
            text-base
            sm:text-lg
            md:text-xl
            lg:text-2xl
          "
                >
Unable to Process Book
                </h4>

                <p
                    className="
            text-gray-600
            text-xs
            sm:text-sm
            md:text-base
            leading-snug
          "
                >
RFID tag not detected
                </p>

                <p
                    className="
            text-gray-600
            text-xs
            sm:text-sm
            md:text-base
            leading-snug
          "
                >
Condition: Needs Review
                </p>

                <p
                    className="
            text-red-500
            font-bold
            text-lg
            sm:text-xl
            md:text-2xl
            lg:text-3xl
            mt-1 sm:mt-2
          "
                >
⚠️ Error Code: RF001
                </p>
            </div>
        </div>
    );
};

export default Boxes;
