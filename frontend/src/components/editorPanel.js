import { useState } from "react";
import { VscTerminal, VscDebugRestart, VscSettings, VscRobot, VscRunAll } from "react-icons/vsc";
import Editor from "@monaco-editor/react";
import { Switch } from "@headlessui/react";
import ChatbotComponent from "./chatbot";

export default function EditorPanel() {
  const [language, setLanguage] = useState("python");
  const [editorValue, setEditorValue] = useState("");
  const [isAiEnabled, setIsAiEnabled] = useState(false);
  const [theme, setTheme] = useState("vs-dark");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Handle editor content change
  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  // Handle theme change from the dropdown
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setIsSettingsOpen(false); // Close the settings dropdown after selecting a theme
  };

  // Handle refresh (clear editor)
  const handleRefresh = () => {
    setEditorValue("");
  };

  // Toggle chatbot visibility
  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="h-full flex flex-col bg-[#48434B] rounded-lg">
      {/* Navbar */}
      <div className="p-2 flex justify-between items-center relative">
        {/* Left Section with Icons */}
        <div className="flex items-center space-x-4">
          <VscTerminal className="text-xl text-white" />
          <label htmlFor="language" className="text-sm font-medium text-white font-inter">
            Language:
          </label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border rounded px-2 py-1 text-sm text-white font-inter"
          >
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
          </select>

          {/* AI Assistant Switch */}
          <div className="flex items-center space-x-2">
            <label htmlFor="ai-switch" className="text-sm font-medium text-white font-inter"
              title="AI-powered training in code correctness and structure. Mode: Context-aware assistant. Avg Confidence: 92%."
            >
              AI Assistant
            </label>
            <Switch
              checked={isAiEnabled}
              onChange={setIsAiEnabled}
              className={`${isAiEnabled ? "bg-[#5533FF]" : "bg-gray-300"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${isAiEnabled ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <VscRobot
            title="Max, your AI-powered virtual assistant for programming help"
            className={`text-xl text-white ${isAiEnabled ? "cursor-pointer" : "cursor-not-allowed"}`}
            onClick={isAiEnabled ? handleToggleChat : null} // Only allow click when AI is enabled
          />
          <VscRunAll
            title="Run Code"
            className="text-xl text-white cursor-pointer"
          />
          <VscDebugRestart
            title="Clear editor"
            onClick={handleRefresh}
            className="text-xl text-white cursor-pointer"
          />
          <VscSettings
            title="Change editor theme"
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            className="text-xl text-white cursor-pointer"
          />
          {isSettingsOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-32 border border-gray-200 z-10">
              <div
                onClick={() => handleThemeChange("vs-dark")}
                className="p-2 cursor-pointer hover:bg-gray-100"
              >
                Dark
              </div>
              <div
                onClick={() => handleThemeChange("light")}
                className="p-2 cursor-pointer hover:bg-gray-100"
              >
                Light
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Monaco Editor */}
      <div className="flex-grow">
        <Editor
          height="100%"
          language={language}
          value={editorValue}
          onChange={handleEditorChange}
          theme={theme} // Apply the selected theme
          options={{
            fontSize: 14,
            fontFamily: '"Fira Code", monospace',
            minimap: { enabled: false },
            automaticLayout: true,
          }}
        />
      </div>

      {/* Chatbot (conditionally rendered) */}
      {isChatOpen && <ChatbotComponent />}
    </div>
  );
}
