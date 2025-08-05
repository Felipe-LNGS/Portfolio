import React from "react";

export default function ExtensionsPanel() {
  const items = [
    { icon: "⚛️", name: "React", desc: "UI Library" },
    { icon: "🎨", name: "TailwindCSS", desc: "Utility CSS" },
    { icon: "🐳", name: "Docker", desc: "Containers" },
  ];

  return (
    <aside className="side-panel extensions">
      <h4 className="panel-title">Extensions</h4>
      {items.map((e) => (
        <div key={e.name} className="extension-item">
          <span className="icon">{e.icon}</span>
          <div className="info">
            <strong>{e.name}</strong>
            <p className="desc">{e.desc}</p>
          </div>
        </div>
      ))}
    </aside>
  );
}
