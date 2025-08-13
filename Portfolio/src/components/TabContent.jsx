import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const tabComponents = {
  Home: Home,
  About: About,
  Skills: Skills,
  Projects: Projects,
  Contact: Contact,
};

export default function TabContent({ tab, open }) {
  if (!tab) return null;

  const Component = tabComponents[tab.id]; 
  if (Component) {
    return (
      <div className="tab-content">
        <Component open={open} />
      </div>
    );
  }

  // Fallback si pas de composant trouvé
  return (
    <div className="tab-content">
      <h3>{tab.name}</h3>
      <pre><code>{tab.content || "Contenu indisponible"}</code></pre>
    </div>
  );
}