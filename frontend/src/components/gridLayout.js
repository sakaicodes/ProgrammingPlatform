import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { RxDragHandleDots2 } from "react-icons/rx";
import EditorPanel from "./editorPanel";
import ControlPanel from "./controlPanel";
import TerminalPanel from "./terminalPanel";
import "../styles/output.css";

export default function GridLayout() {
  return (
    <div className="h-screen ">
      <PanelGroup direction="horizontal" className="h-full">
        {/* Left Panel with rounded corners and separation */}
        <Panel defaultSize={30} minSize={30} maxSize={60} className="rounded-lg mb-2 ml-2 mt-2">
          <ControlPanel></ControlPanel>
        </Panel>

        {/* Horizontal Resize Handle with vertical centering and icon */}
        <PanelResizeHandle className="w-4 flex items-center justify-center cursor-col-resize">
            <RxDragHandleDots2 />
        </PanelResizeHandle>

        {/* Right Panel with nested vertical panels */}
        <Panel defaultSize={70} minSize={40} maxSize={80} className="rounded-lg ">
          <PanelGroup direction="vertical" className="h-full">
            {/* Top Right Panel with rounded corners and separation */}
            <Panel defaultSize={70} minSize={40} className="rounded-lg mr-2 mt-2">
              <EditorPanel></EditorPanel>
            </Panel>

            {/* Vertical Resize Handle with correct rotation */}
            <PanelResizeHandle className="h-4 flex items-center justify-center cursor-row-resize">
              <div className="flex items-center justify-center w-full h-full">
                <RxDragHandleDots2 className="rotate-90" />
              </div>
            </PanelResizeHandle>

            {/* Bottom Right Panel with rounded corners and separation */}
            <Panel defaultSize={30} minSize={20} maxSize={50} className="rounded-lg mb-2 mr-2">
              <TerminalPanel></TerminalPanel>
            </Panel>
          </PanelGroup>
        </Panel>
      </PanelGroup>
    </div>
  );
}
