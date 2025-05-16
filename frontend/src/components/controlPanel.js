import React, { useState } from "react";
import ProblemDescription from "./problemDescription";
import CommunitySolutions from "./communitySolutions"; // 1. Import the new component
import RecommendedProblems from "./recommendedProblems";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ControlPanel() {
  const [activeTab, setActiveTab] = useState(0);

  // 2. Add the new tab in the correct order
  const tabs = ["Problem Description", "Community Solutions", "AI Recommended Problems"];

  return (
    <div className="h-full flex flex-col bg-[#87838B] font-inter">
      {/* Header with tab bar */}
      <div className="h-14 px-4 flex items-center bg-[#48434B]">
        <div className="flex space-x-2">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={classNames(
                "px-4 py-2 text-sm font-medium rounded-t transition",
                activeTab === index
                  ? "bg-white text-[#5533FF] shadow"
                  : "text-white hover:bg-gray-500"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Render content based on selected tab */}
      <div className="flex-1 overflow-auto p-4">
        {activeTab === 0 && <ProblemDescription />}
        {activeTab === 1 && <CommunitySolutions />}
        {activeTab === 2 && <RecommendedProblems />}
      </div>
    </div>
  );
}
