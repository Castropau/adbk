import React from "react";

type ProgressCardProps = {
  emoji: string;
  title: string;
  percent: number;
  barColor: string;
};

const ProgressCard: React.FC<ProgressCardProps> = ({ emoji, title, percent, barColor }) => {
  return (
    <div className="bg-white rounded-xl p-4 flex justify-between items-center shadow-md max-w-[350px] w-full">
      <div className="flex items-center gap-3">
        <span className="text-xl">{emoji}</span>
        <h3 className="font-semibold text-gray-800">{title}</h3>
      </div>

      <div className="flex items-center gap-3 min-w-[90px]">
        <span className="text-gray-500 font-medium">{percent}%</span>
        <div className="w-full max-w-[120px] bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="h-3 rounded-full"
            style={{ width: `${percent}%`, backgroundColor: barColor }}
          />
        </div>
      </div>
    </div>
  );
};

export const BinStatus: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto p-4">
      <ProgressCard emoji="📚" title="Hold Bin" percent={85} barColor="#F59E0B" />
      <ProgressCard emoji="📖" title="Main Bin" percent={92} barColor="#EF4444" />
      <ProgressCard emoji="🔍" title="Damaged" percent={45} barColor="#10B981" />
      <ProgressCard emoji="📚" title="Large" percent={60} barColor="#10B981" />
    </div>
  );
};
