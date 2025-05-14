import React from "react";
import { Chatbot, createChatBotMessage } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

// Configuration for the chatbot
const config = {
  botName: "AI Assistant",
  initialMessages: [
    createChatBotMessage("Hello! How can I assist you today?"),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#5533FF",
    },
    chatButton: {
      backgroundColor: "#5C6BC0",
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

  // ✅ Response for "help"
  handleCodeHelp() {
    const explanation = this.createChatBotMessage(
      `🧠 Here's why your code might not be working:\n\n` +
      `🔍 *Variable Scope Issue*: You're possibly using a variable before it's defined.\n\n` +
      `⏳ *Async Timing*: Awaited functions may not be resolved before the next line.\n\n` +
      `🛠️ Try simplifying the logic and using console logs to trace execution.`
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, explanation],
    }));
  }

  // ✅ Response for "complexity"
  handleComplexityAnalysis() {
    const complexity = this.createChatBotMessage(
      `📊 Here's a complexity analysis of your solution:\n\n` +
      `🕒 *Time Complexity*: O(n log n) — based on the nested loop with a binary search.\n` +
      `💾 *Space Complexity*: O(n) — due to extra storage used for the result array.\n\n` +
      `This is a good balance between performance and memory usage!`
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, complexity],
    }));
  }

  // ✅ Response for "evaluate" or "analyse"
  handleCodeEvaluation() {
    const evaluation = this.createChatBotMessage(
      `🧐 Code Evaluation:\n\n` +
      `📐 *Structure*: The function is well-scoped but could be modularized further.\n` +
      `🎨 *Formatting*: Consider consistent indentation and spacing.\n` +
      `📏 *Conventions*: Use meaningful variable names and avoid magic numbers.\n\n` +
      `👍 Overall: Readable with minor improvements possible.`
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, evaluation],
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
