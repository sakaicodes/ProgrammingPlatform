import React from "react";
import { Tooltip, TooltipProvider } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function TerminalPanel() {
  return (
    <TooltipProvider>
      <div className="h-full bg-[#1E1E1E] p-4 text-sm text-gray-200 font-mono overflow-y-auto">
        <div className="mt-3 text-gray-400">{">"} Running tests...</div>
        <hr className="my-3 border-t border-gray-600" />

        {/* Test 1 - Pass */}
        <div className="text-green-400 mb-1">✓ Test 1: Handles basic input correctly</div>

        {/* Test 2 - Pass */}
        <div className="text-green-400 mb-1">✓ Test 2: Handles edge case input correctly</div>

        {/* Test 3 - Fail */}
        <div
          className="text-red-400 mb-1 cursor-help"
          data-tooltip-id="tooltip-1"
        >
          ✗ Test 3: Returns expected output for an array with multiple duplicate elements
        </div>
        <Tooltip id="tooltip-1" place="right" className="max-w-xs">
          The function fails to return the correct output when there are multiple duplicate elements in the array. The issue might lie in the way the algorithm is handling duplicates or sorting. 
          <br />
          <br />
          <strong>Explanation:</strong> The function doesn't properly handle cases where the sorting order of duplicates matters, potentially causing incorrect results when removing duplicates.
        </Tooltip>

        {/* Test 4 - Fail */}
        <div
          className="text-red-400 mb-1 cursor-help"
          data-tooltip-id="tooltip-2"
        >
          ✗ Test 4: Handles input with negative numbers correctly
        </div>
        <Tooltip id="tooltip-2" place="right" className="max-w-xs">
          The function fails to correctly handle arrays with negative numbers. It might be incorrectly handling the sign of the numbers or not considering them during sorting or comparison.
          <br />
          <br />
          <strong>Explanation:</strong> The algorithm should be able to correctly handle negative numbers as they are part of the input domain, but it seems to ignore them or mishandle their position.
        </Tooltip>

        {/* Test 5 - Fail */}
        <div
          className="text-red-400 mb-1 cursor-help"
          data-tooltip-id="tooltip-3"
        >
          ✗ Test 5: Returns incorrect result for large input size
        </div>
        <Tooltip id="tooltip-3" place="right" className="max-w-xs">
          The function does not work efficiently for larger input sizes. This might be due to the time complexity of the solution, which doesn't scale well as the input size grows.
          <br />
          <br />
          <strong>Explanation:</strong> The algorithm might have a time complexity of O(n^2) or higher, making it inefficient for large input sizes. An optimized solution with a time complexity of O(n log n) or better is recommended.
        </Tooltip>

        {/* Test 6 - Pass */}
        <div className="text-green-400 mb-1">✓ Test 6: Handles empty array correctly</div>
      </div>
    </TooltipProvider>
  );
}
