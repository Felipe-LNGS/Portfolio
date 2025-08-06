import React, { useState } from "react";
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

  // On récupère les configs
  const homeTab = tabsData.find(t => t.id === "home");

  // Home ouvert par défaut
  const [tabs, setTabs]     = useState([homeTab]);
  const [active, setActive] = useState(homeTab.id);
  const [panel, setPanel]   = useState("explorer");

  const openTab = id => {
    const tab = tabsData.find(t => t.id === id);
    if (!tabs.some(t => t.id === id)) {
      setTabs(prev => [...prev, tab]);
    }
    setActive(id);
  };

  const closeTab = id => {
    // On n'autorise pas la fermeture de home
    if (id === homeTab.id) return;

    const remaining = tabs.filter(t => t.id !== id);
    // Si plus d'onglets restants, on ré-ouvre home
    if (remaining.length === 0) {
      setTabs([homeTab]);
      setActive(homeTab.id);
    } else {
      setTabs(remaining);
      // Si l'onglet actif a été fermé, on active le dernier de la liste
      if (active === id) {
        setActive(remaining[remaining.length - 1].id);
      }
    }
  };

  const currentTab = tabs.find(t => t.id === active);

  return (
    <div className="vscode-root">
      <ActivityBar active={panel} setActive={setPanel} />
      <SidePanel   panel={panel} open={openTab} />

      <div className="main">
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
  );
}
