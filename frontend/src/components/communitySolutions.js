import React from "react";

const solutions = [
  {
    username: "codeMaster92",
    language: "Python",
    code: `def maxProfit(prices):
    min_price = float('inf')
    max_profit = 0
    for price in prices:
        if price < min_price:
            min_price = price
        elif price - min_price > max_profit:
            max_profit = price - min_price
    return max_profit`,
    explanation:
      "This Python code scans through the price list once, keeps track of the lowest price so far, and calculates the maximum possible profit by comparing current prices with that lowest price. It returns the highest profit found.",
  },
  {
    username: "javaQueen",
    language: "Java",
    code: `public int maxProfit(int[] prices) {
    int min = Integer.MAX_VALUE, profit = 0;
    for (int price : prices) {
        if (price < min) min = price;
        else if (price - min > profit) profit = price - min;
    }
    return profit;
}`,
    explanation:
      "This Java method iterates over all prices to find the smallest price seen and updates the maximum profit when a higher profit is possible. It efficiently finds the best buy and sell prices to maximize earnings.",
  },
  {
    username: "cppGuru",
    language: "C++",
    code: `int maxProfit(vector<int>& prices) {
    int minPrice = INT_MAX, maxProfit = 0;
    for (int price : prices) {
        if (price < minPrice) minPrice = price;
        else maxProfit = max(maxProfit, price - minPrice);
    }
    return maxProfit;
}`,
    explanation:
      "This C++ function loops through the prices to track the minimum price and calculates the maximum profit by checking differences between current and minimum prices. It returns the highest profit possible with one buy and one sell.",
  },
];

export default function CommunitySolutions() {
  return (
    <div className="space-y-6 text-white">
      {solutions.map((solution, index) => (
        <div
          key={index}
          className="bg-[#1E1E1E] rounded-lg p-4 shadow hover:bg-gray-700 transition"
        >
          <div className="flex justify-between items-center mb-2">
            <div className="text-sm text-gray-300">
              <span className="font-bold">{solution.username}</span> –{" "}
              <span className="italic">{solution.language}</span>
            </div>
          </div>

          <pre className="bg-[#2A2A2A] p-3 rounded text-sm overflow-auto text-green-300">
            <code>{solution.code}</code>
          </pre>

          <div className="mt-3 text-sm text-gray-200">
            <span className="font-semibold text-white">AI Explanation:</span>{" "}
            {solution.explanation}
          </div>
        </div>
      ))}
    </div>
  );
}
