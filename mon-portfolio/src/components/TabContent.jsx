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
  console.log("Tab reçu :", tab); // ← Regarde ce qui s'affiche ici
  if (!tab) return null;

  // Cherche d'abord si on a un composant JSX pour cet onglet
  const Component = tabComponents[tab.id]; // ← utilise tab.id, pas tab.type
   console.log("Composant trouvé pour", tab.id, ":", Component); 
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