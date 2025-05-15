import React from "react";

export default function ProblemDescription() {
  return (
    <div className="font-inter p-4 space-y-4 text-white">
      <h2 className="text-xl font-bold">Problem: Best Time to Buy and Sell Stock</h2>

      <p>
        You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.
      </p>
      <p>
        You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
      </p>
      <p>
        Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return <code>0</code>.
      </p>

      <div className="space-y-2">
        <h3 className="font-semibold">Examples:</h3>
        <div className="mt-1">
          <pre className="bg-[#1E1E1E] p-3 rounded-lg text-sm whitespace-pre-wrap">
{`Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, and the max profit = 0.`}
          </pre>
        </div>
      </div>

      <div>
        <h3 className="font-semibold">Constraints:</h3>
        <ul className="list-disc list-inside">
          <li>1 ≤ prices.length ≤ 10<sup>5</sup></li>
          <li>0 ≤ prices[i] ≤ 10<sup>4</sup></li>
        </ul>
      </div>
    </div>
  );
}
