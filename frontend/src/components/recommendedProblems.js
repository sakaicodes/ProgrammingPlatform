import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const problems = [
  {
    title: "Reverse Linked List",
    synopsis: "Reverse a singly linked list in-place.",
    difficulty: "Easy",
    tags: ["Linked List", "Two Pointers", "Recursion"],
    recommendReason:
      "Recommended based on your success with 'Best Time to Buy and Sell Stock'. Both require mastery of pointer manipulation and traversing structures efficiently.",
    difficultyReason:
      "Classified as 'Easy' because it involves a linear traversal with minimal state management. It’s good for strengthening understanding of pointers.",
  },
  {
    title: "Longest Substring Without Repeating Characters",
    synopsis:
      "Find the length of the longest substring without repeating characters.",
    difficulty: "Medium",
    tags: ["Hash Table", "Sliding Window", "String"],
    recommendReason:
      "You’ve solved array and pointer-based problems previously. This introduces the sliding window technique, an essential pattern for efficient string handling.",
    difficultyReason:
      "Marked as 'Medium' due to the need for optimized state tracking with hash maps and dynamic window adjustment.",
  },
  {
    title: "Merge K Sorted Lists",
    synopsis: "Merge k sorted linked lists and return it as one sorted list.",
    difficulty: "Hard",
    tags: ["Linked List", "Heap", "Divide and Conquer"],
    recommendReason:
      "You've shown proficiency with arrays and lists. This builds on that by introducing advanced merging and heap operations.",
    difficultyReason:
      "Labeled 'Hard' because it requires optimal merging strategy and understanding of heap-based priority queues.",
  },
  {
    title: "Maximum Subarray",
    synopsis: "Find the contiguous subarray with the largest sum.",
    difficulty: "Easy",
    tags: ["Array", "Dynamic Programming"],
    recommendReason:
      "This builds on the greedy concepts used in 'Best Time to Buy and Sell Stock' and improves dynamic thinking with Kadane’s algorithm.",
    difficultyReason:
      "Rated 'Easy' as the core solution is linear with a simple iterative logic once the pattern is recognized.",
  },
  {
    title: "Container With Most Water",
    synopsis:
      "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
    difficulty: "Medium",
    tags: ["Array", "Two Pointers", "Greedy"],
    recommendReason:
      "Based on your recent work with two-pointer strategies in stock problems. This is a visual and spatial two-pointer application.",
    difficultyReason:
      "Marked as 'Medium' because while the logic is straightforward, reasoning about space and movement requires deeper insight.",
  },
];

export default function RecommendedProblems() {
  return (
    <div className="relative font-inter p-4 space-y-4 text-white">
      {problems.map((problem, index) => (
        <div
          key={index}
          className="bg-[#1E1E1E] p-3 rounded-lg shadow space-y-1 hover:bg-gray-600 transition"
        >
          <div className="flex justify-between items-center">
            <h3
              className="text-lg font-semibold cursor-help"
              data-tooltip-id={`recommend-tooltip-${index}`}
            >
              {problem.title}
            </h3>
            <Tooltip
              id={`recommend-tooltip-${index}`}
              place="top"
              className="max-w-xs"
              positionStrategy="absolute"
            >
              {problem.recommendReason}
            </Tooltip>

            <span
              className={`text-xs px-2 py-1 rounded cursor-help`}
              data-tooltip-id={`difficulty-tooltip-${index}`}
              style={{
                backgroundColor:
                  problem.difficulty === "Easy"
                    ? "#16a34a"
                    : problem.difficulty === "Medium"
                    ? "#ca8a04"
                    : "#dc2626",
              }}
            >
              {problem.difficulty}
            </span>
            <Tooltip
              id={`difficulty-tooltip-${index}`}
              place="top"
              className="max-w-xs"
              positionStrategy="absolute"
            >
              {problem.difficultyReason}
            </Tooltip>
          </div>
          <p className="text-sm text-gray-300">{problem.synopsis}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {problem.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-gray-500 text-xs px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
