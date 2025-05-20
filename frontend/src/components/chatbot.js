import React from "react";
import { Chatbot, createChatBotMessage } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

// Configuration for the chatbot

const botName = "Max";
const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Hello I'm ${botName} your AI Virtual Asistant. How can I assist you with your code today?`),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#5533FF",
    },
    chatButton: {
      backgroundColor: "#5533FF",
    },
  },
  customComponents: {
    botAvatar: (props) => (
      <div
        style={{
          backgroundColor: "#5533FF",
          color: "white",
          borderRadius: "50%",
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        M
      </div>
    ),
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
    const botMessage = this.createChatBotMessage(`“I’m sorry, I’m not entirely certain what you’re looking for`);
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  // Help response with explainability and educational tone
  handleCodeHelp() {
    const explanation = this.createChatBotMessage(
      <div>
        <p>Let's break down the common issues in your Java stocks solution:</p>
        <br></br>
        <ul className="list-disc list-inside">
          <li><strong>Array Indexing:</strong> Make sure your loop does not go beyond <code>prices.length - 1</code>, as Java arrays are zero-indexed. Going out of bounds leads to runtime errors.</li>
          <li><strong>Semicolon Misplacement:</strong> Avoid putting a semicolon immediately after an <code>if</code> or <code>else if</code> statement, as it terminates the condition prematurely.</li>
          <li><strong>Return Statement:</strong> Your profit calculation should directly return the maximum profit found without adding extra increments.</li>
        </ul>
        <br></br>
        <p><strong>AI Confidence Score:</strong> 95% ✅</p>
      </div>
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, explanation],
    }));
  }

  // Complexity analysis with educational explanation
  handleComplexityAnalysis() {
    const complexity = this.createChatBotMessage(
      <div>
        <p>Let's analyze the efficiency of your solution:</p>
        <br></br>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Time Complexity:</strong> O(n) — The solution scans the price list once, keeping track of the minimum price and maximum profit.
          </li>
          <li>
            <strong>Space Complexity:</strong> O(1) — It uses only a few variables regardless of input size, so it is memory efficient.
          </li>
        </ul>
        <p className="mt-2">
          This makes your solution both fast and memory-friendly, which is ideal for large datasets.
        </p>
        <br></br>
        <p className="mt-2"><strong>AI Confidence Score:</strong> 90% ✅</p>
      </div>
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, complexity],
    }));
  }

  // Code evaluation with focus on learning and improvement
  handleCodeEvaluation() {
    const evaluation = this.createChatBotMessage(
      <div>
        <p>Here is an evaluation of your code:</p>
        <br></br>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Logic:</strong> The approach of tracking the minimum price and calculating profit is correct and effective.
          </li>
          <li>
            <strong>Syntax:</strong> Watch out for small syntax errors like misplaced semicolons, as they can alter the program flow.
          </li>
          <li>
            <strong>Readability:</strong> Adding comments and using clear variable names will make your code easier to understand and maintain.
          </li>
        </ul>
        <p className="mt-2">
          Learning to write clear and well-structured code is as important as solving the problem correctly.
        </p>
        <br></br>
        <p className="mt-2"><strong>AI Confidence Score:</strong> 93% ✅</p>
      </div>
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, evaluation],
    }));
  }
  

  // New: Explain method for simpler, beginner-friendly explanations
  handleExplain() {
    const simpleExplanation = this.createChatBotMessage(
      <div>
        <p>Let's explain the stocks problem in simple terms:</p>
        <br></br>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Imagine you want to buy and sell a stock once to make the most money.
          </li>
          <li>
            The challenge is to find the lowest price to buy and the highest price to sell after that.
          </li>
          <li>
            We look through the list of prices one by one, keeping track of the cheapest price so far and the biggest profit we could make.
          </li>
          <li>
            This way, you can figure out the best day to buy and the best day to sell to earn the most money.
          </li>
        </ul>
        <p className="mt-2">Does this help clarify the problem? Feel free to ask more questions!</p>
        <br></br>
        <p className="mt-2"><strong>AI Confidence Score:</strong> 99% ✅</p>
      </div>
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
