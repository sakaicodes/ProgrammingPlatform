import React from "react";
import { Tooltip, TooltipProvider } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function TerminalPanel() {
  return (
    <TooltipProvider>
      <div className="h-full bg-[#1E1E1E] p-4 text-sm text-gray-200 font-mono overflow-y-auto">
        <div className="mt-3 text-gray-400">{">"} Running tests...</div>
        <div className="mt-3 text-gray-400">{">"} Errors Detected. Hover over failed test for AI reasoning</div>
        <hr className="my-3 border-t border-gray-600" />

        {/* Test 1 - Fail */}
        <div
          className="text-red-400 mb-1 cursor-help font-inter"
          data-tooltip-id="tooltip-1"
        >
          ✗ Test 1: Method signature issue (line 2)
        </div>
        <Tooltip id="tooltip-1" place="right" className="max-w-xs">
          The method parameter is incorrectly typed, causing compilation failure.
        </Tooltip>

        {/* Test 2 - Fail */}
        <div
          className="text-red-400 mb-1 cursor-help font-inter"
          data-tooltip-id="tooltip-2"
        >
          ✗ Test 2: Loop boundary error (line 5)
        </div>
        <Tooltip id="tooltip-2" place="right" className="max-w-xs">
          The loop iterates beyond array bounds, leading to runtime errors.
        </Tooltip>

        {/* Test 3 - Fail */}
        <div
          className="text-red-400 mb-1 cursor-help font-inter"
          data-tooltip-id="tooltip-3"
        >
          ✗ Test 3: Misplaced semicolon in condition (line 8)
        </div>
        <Tooltip id="tooltip-3" place="right" className="max-w-xs">
          A semicolon prematurely ends the conditional, causing logic errors.
        </Tooltip>

        {/* Test 4 - Fail */}
        <div
          className="text-red-400 mb-1 cursor-help font-inter"
          data-tooltip-id="tooltip-4"
        >
          ✗ Test 4: Incorrect return statement (line 12)
        </div>
        <Tooltip id="tooltip-4" place="right" className="max-w-xs">
          The return value includes an unintended increment affecting results.
        </Tooltip>

        {/* Test 5 - Pass */}
        <div className="text-green-400 mb-1 font-inter">✓ Test 5: Handles zero-profit cases correctly</div>

        {/* Test 6 - Pass */}
        <div className="text-green-400 mb-1 font-inter">✓ Test 6: Handles single-element inputs correctly</div>
      </div>
    </TooltipProvider>
  );
}
