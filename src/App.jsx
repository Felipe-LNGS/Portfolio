import React, { useState } from "react";
import TitleBar from "@/components/layout/TitleBar";
import ActivityBar from "@/components/layout/ActivityBar";
import SidePanel from "@/components/layout/SidePanel";
import TabsBar from "@/components/layout/TabsBar";
import TabContent from "@/components/layout/TabContent";
import StatusBar from "@/components/layout/StatusBar";
import { tabsData } from "@/data/tabs";
import "@/styles/App.css";
import "@/styles/components.css";
import "@/styles/pages/home.css";
import "@vscode/codicons/dist/codicon.css";

export default function App() {
  const homeTab = tabsData.find((t) => t.id === "Home");
  const [tabs, setTabs] = useState([homeTab]);
  const [active, setActive] = useState(homeTab.id);
  const [panel, setPanel] = useState("explorer");

  const openTab = (id) => {
    const tab = tabsData.find((t) => t.id === id);
    if (!tabs.some((t) => t.id === id)) setTabs((prev) => [...prev, tab]);
    setActive(id);
  };

  const closeTab = (id) => {
    if (id === homeTab.id) return;
    const remaining = tabs.filter((t) => t.id !== id);
    if (remaining.length === 0) {
      setTabs([homeTab]);
      setActive(homeTab.id);
    } else {
      setTabs(remaining);
      if (active === id) setActive(remaining[remaining.length - 1].id);
    }
  };

  const currentTab = tabs.find((t) => t.id === active);

  return (
    <div className="vscode-root">
      <TitleBar />

      <div className="vscode-main-content flex flex-col md:flex-row">
        <ActivityBar active={panel} setActive={setPanel} />

        <SidePanel
          panel={panel}
          open={openTab}
          setPanel={setPanel}
          className={`side-panel${panel ? " open" : ""}`}
        />

        <div className="main flex-1">
          <TabsBar
            tabs={tabs}
            active={active}
            setActive={setActive}
            close={closeTab}
            setPanel={setPanel}
          />
          <TabContent tab={currentTab} open={openTab} />
          <StatusBar />
        </div>
      </div>
    </div>
  );
}
