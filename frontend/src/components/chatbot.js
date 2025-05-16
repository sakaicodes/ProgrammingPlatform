import React from "react";
import { Chatbot, createChatBotMessage } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

// Configuration for the chatbot
const config = {
  botName: "AI Assistant",
  initialMessages: [
    createChatBotMessage("Hello! How can I assist you with your code today?"),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#5533FF",
    },
    chatButton: {
      backgroundColor: "#5533FF",
    },
  },
};

// ActionProvider to handle the messages from the user
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // Original "You said..." fallback
  handleChatBotMessage(message) {
    const botMessage = this.createChatBotMessage(`You said: ${message}`);
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  // Help response with explainability and educational tone
  handleCodeHelp() {
    const explanation = this.createChatBotMessage(
      `Let's break down the common issues in your Java stocks solution:\n\n` +

      `1. Array Indexing:\n` +
      `Make sure your loop does not go beyond 'prices.length - 1', as Java arrays are zero-indexed.\n` +
      `Going out of bounds leads to runtime errors.\n\n` +

      `2. Semicolon Misplacement:\n` +
      `Avoid putting a semicolon immediately after an 'if' or 'else if' statement, as it terminates the condition prematurely.\n\n` +

      `3. Return Statement:\n` +
      `Your profit calculation should directly return the maximum profit found without adding extra increments.\n\n` +

      `Understanding these details helps prevent common logical errors and improves your code correctness.`
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, explanation],
    }));
  }

  // Complexity analysis with educational explanation
  handleComplexityAnalysis() {
    const complexity = this.createChatBotMessage(
      `Let's analyze the efficiency of your solution:\n\n` +

      `- Time Complexity: O(n)\n` +
      `  The solution scans the price list once, keeping track of the minimum price and maximum profit.\n\n` +

      `- Space Complexity: O(1)\n` +
      `  It uses only a few variables regardless of input size, so it is memory efficient.\n\n` +

      `This makes your solution both fast and memory-friendly, which is ideal for large datasets.`
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, complexity],
    }));
  }

  // Code evaluation with focus on learning and improvement
  handleCodeEvaluation() {
    const evaluation = this.createChatBotMessage(
      `Here is an evaluation of your code:\n\n` +

      `- Logic: The approach of tracking the minimum price and calculating profit is correct and effective.\n\n` +

      `- Syntax: Watch out for small syntax errors like misplaced semicolons, as they can alter the program flow.\n\n` +

      `- Readability: Adding comments and using clear variable names will make your code easier to understand and maintain.\n\n` +

      `Learning to write clear and well-structured code is as important as solving the problem correctly.`
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, evaluation],
    }));
  }

  // New: Explain method for simpler, beginner-friendly explanations
  handleExplain() {
    const simpleExplanation = this.createChatBotMessage(
      `Let's explain the stocks problem in simple terms:\n\n` +

      `Imagine you want to buy and sell a stock once to make the most money.\n\n` +

      `The challenge is to find the lowest price to buy and the highest price to sell after that.\n\n` +

      `We look through the list of prices one by one, keeping track of the cheapest price so far and the biggest profit we could make.\n\n` +

      `This way, you can figure out the best day to buy and the best day to sell to earn the most money.\n\n` +

      `Does this help clarify the problem? Feel free to ask more questions!`
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, simpleExplanation],
    }));
  }
}

// MessageParser to handle parsing of user input
class MessageParser {
  constructor(actionProvider, createChatBotMessage) {
    this.actionProvider = actionProvider;
    this.createChatBotMessage = createChatBotMessage;
  }

  parse(message) {
    const lower = message.toLowerCase();

    if (lower.includes("help")) {
      this.actionProvider.handleCodeHelp();
    } else if (lower.includes("complexity")) {
      this.actionProvider.handleComplexityAnalysis();
    } else if (lower.includes("evaluate") || lower.includes("analyse") || lower.includes("analyze")) {
      this.actionProvider.handleCodeEvaluation();
    } else if (lower.includes("explain")) {
      this.actionProvider.handleExplain();
    } else {
      this.actionProvider.handleChatBotMessage(message);
    }
  }
}

export default function ChatbotComponent() {
  return (
    <div className="fixed bottom-0 right-0 m-4 w-80 bg-white shadow-lg rounded-lg p-4 border">
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </div>
  );
}
