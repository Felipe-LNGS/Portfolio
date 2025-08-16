import React, { useState } from "react";
import VsCodeTitleBar from "./components/TitleBar";
import ActivityBar from "./components/ActivityBar";
import SidePanel from "./components/SidePanel";
import TabsBar from "./components/TabsBar";
import TabContent from "./components/TabContent";
import StatusBar from "./components/StatusBar";
import { tabsData } from "./data/portfolioData";
import "./styles/App.css";
import "./styles/components.css";
import "./styles/home.css";
import '@vscode/codicons/dist/codicon.css';

export default function App() {
  const homeTab = tabsData.find(t => t.id === "Home");
  const [tabs, setTabs] = useState([homeTab]);
  const [active, setActive] = useState(homeTab.id);
  const [panel, setPanel] = useState(null); // Ne pas afficher de panel par défaut

  const openTab = id => {
    const tab = tabsData.find(t => t.id === id);
    if (!tabs.some(t => t.id === id)) setTabs(prev => [...prev, tab]);
    setActive(id);
  };

  const closeTab = id => {
    if (id === homeTab.id) return;
    const remaining = tabs.filter(t => t.id !== id);
    if (remaining.length === 0) {
      setTabs([homeTab]);
      setActive(homeTab.id);
    } else {
      setTabs(remaining);
      if (active === id) setActive(remaining[remaining.length - 1].id);
    }
  };

  const currentTab = tabs.find(t => t.id === active);

  return (
    <div className="vscode-root">
      <VsCodeTitleBar />

      <div className="vscode-main-content flex flex-col md:flex-row">
        <ActivityBar active={panel} setActive={setPanel} />

        <SidePanel
          panel={panel}
          open={openTab}
          className={`side-panel${panel ? " open" : ""}`}
        />

        <div className="main flex-1">
          <TabsBar
            tabs={tabs}
            active={active}
            setActive={setActive}
            close={closeTab}
          />
          <TabContent tab={currentTab} open={openTab} />
          <StatusBar />
        </div>
      </div>
    </div>
  );
}
