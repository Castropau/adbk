import React from "react";

export const ItemStatus: React.FC = () => {
  const items = [
    {
      title: "Introduction to AI",
      status: "Returned: On time",
      location: "✓ Main",
      icon: "📗",
    },
    {
      title: "Python Programming",
      status: "Returned: 1 day late ($0.50)",
      location: "✓ Main",
      icon: "📙",
    },
    {
      title: "Machine Learning Basics",
      status: "Reserved for another patron",
      location: "📚 Hold",
      icon: "📕",
    },
    {
      title: "Data Science Guide",
      status: "Returned: On time",
      location: "✓ Main",
      icon: "📘",
    },
  ];

  const getColors = (location: string) => {
    switch (location) {
      case "✓ Main":
        return {
          bg: "bg-[rgba(249,252,250,1)]",
          text: "text-black",
          accent: "bg-green-500",
          locationText: "text-green-500",
        };
      case "📚 Hold":
        return {
          bg: "bg-[rgb(255,248,225)]",
          text: "text-black",
          accent: "bg-orange-500",
          locationText: "text-orange-600",
        };
      default:
        return {
          bg: "bg-[rgb(240,240,240)]",
          text: "text-black",
          accent: "bg-gray-400",
          locationText: "text-gray-600",
        };
    }
  };

  return (
    <div
      className="
        mt-12
        w-full
        flex flex-col items-center gap-6
        px-4 sm:px-6 lg:px-8
        pb-28 sm:pb-32 md:pb-36 xl:pb-40
      "
    >
      {items.map((item, index) => {
        const colors = getColors(item.location);

        return (
          <div
            key={index}
            className={`
              ${colors.bg}
              rounded-xl
              p-4 sm:p-5 md:p-6 lg:p-8
              flex flex-col sm:flex-row sm:items-center
              gap-3 md:gap-4
              relative shadow-lg
              w-full max-w-[900px] 2xl:max-w-[1100px]
            `}
          >
            {/* Left accent line */}
            <div
              className={`absolute left-0 top-0 h-full w-2 ${colors.accent} rounded-l-xl`}
            />

            {/* Number */}
            <div
              className="
                flex-shrink-0 flex items-center justify-center
                w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10
                rounded-full bg-[rgb(52,152,219)]
                text-xs sm:text-sm md:text-base
                text-white font-bold z-10
              "
            >
              {index + 1}
            </div>

            {/* Icon */}
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl z-10">
              {item.icon}
            </span>

            {/* Content */}
            <div className="flex flex-col w-full z-10 gap-1">
              <h4
                className={`font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl ${colors.text}`}
              >
                {item.title}
              </h4>

              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                <p
                  className={`text-xs sm:text-sm md:text-base lg:text-lg ${colors.text}`}
                >
                  {item.status}
                </p>

                <p
                  className={`font-semibold text-xs sm:text-sm md:text-base lg:text-lg ${colors.locationText}`}
                >
                  {item.location}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
