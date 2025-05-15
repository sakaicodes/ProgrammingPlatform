import { Tab } from "@headlessui/react";
import ProblemDescription from "./problemDescription";
import RecommendedProblems from "./recommendedProblems";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ControlPanel() {
  return (
    <div className="h-full flex flex-col bg-[#87838B]">
      {/* Tab navigation bar */}
      <div className="px-4 py-2">
        <Tab.Group>
          <Tab.List className="flex space-x-2">
            {["Problem Description", "AI Recommended Problems"].map((tab, index) => (
              
              <Tab
                key={index}
                className={({ selected }) =>
                  classNames(
                    "px-4 py-2 text-sm font-medium rounded-t",
                    selected
                      ? "bg-white text-[#5533FF] shadow"
                      : "text-white hover:bg-gray-500"
                  )
                }
              >
                {tab}
              </Tab>
             
            ))}
          </Tab.List>

          {/* Tab content area */}
          <Tab.Panels className="flex-1 overflow-auto">
            <Tab.Panel>
              <ProblemDescription />
            </Tab.Panel>
            <Tab.Panel>
              <RecommendedProblems />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
