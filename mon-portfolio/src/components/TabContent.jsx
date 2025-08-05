import React from "react";
import HomePanel from "./panels/Home";

export default function TabContent({ tab, open }) {
  // Si c'est la Home (index.html), on affiche HomePanel
  if (tab.type === "home") {
    return <HomePanel open={open} />;
  }

  // Sinon contenu textuel classique
  return (
    <div className="tab-content">
      <h3>{tab.name}</h3>
      <pre><code>{tab.content}</code></pre>
    </div>
  );
}
