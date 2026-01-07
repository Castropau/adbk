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
          bg: "bg-[rgba(249, 252, 250, 1)]", // light green
          text: "text-black",
          accent: "bg-green-500",
          locationText: "text-green-500",
        };
      case "📚 Hold":
        return {
          bg: "bg-[rgb(255,248,225)]", // light orange/yellow
          text: "text-black",
          accent: "bg-orange-500",
          locationText: "text-orange-600",
        };
      default:
        return {
          bg: "bg-[rgb(240,240,240)]", // default gray
          text: "text-black",
          accent: "bg-gray-400",
          locationText: "text-gray-600",
        };
    }
  };

  return (
    <div className="mt-12 w-full mx-auto flex flex-col items-center gap-4 px-4 md:px-0">
      {items.map((item, index) => {
        const colors = getColors(item.location);

        return (
          <div
            key={index}
            className={`${colors.bg} rounded-xl p-4 md:p-6 flex items-start gap-3 relative shadow-lg w-full max-w-[700px]`}
          >
            {/* Left accent line */}
            <div
              className={`absolute left-0 top-0 h-full w-2 ${colors.accent} rounded-l-xl`}
            ></div>

            {/* Number circle */}
         <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[rgb(52,152,219)] text-white font-bold z-10">
  {index + 1}
</div>


            {/* Icon */}
            <span className="text-2xl md:text-3xl z-10">{item.icon}</span>

            {/* Text content */}
            <div className="z-10 flex flex-col w-full">
              <h4 className={`font-semibold text-lg md:text-xl mb-1 ${colors.text}`}>
                {item.title}
              </h4>

              {/* Status and location in one row */}
              <div className="flex justify-between items-center">
                <p className={`text-sm md:text-base leading-snug ${colors.text}`}>
                  {item.status}
                </p>
                {item.location && (
                  <p className={`font-semibold ml-4 ${colors.locationText}`}>
                    {item.location}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
