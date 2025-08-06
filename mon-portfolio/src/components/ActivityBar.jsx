import React from "react";

const items = [
  { id: "explorer",  iconClass: "codicon-folder" },
  { id: "skills",    iconClass: "codicon-bug" },
  { id: "github",    iconClass: "codicon-github" },
  { id: "profil",    iconClass: "codicon-account" },
  { id: "settings",  iconClass: "codicon-gear" },
];

export default function ActivityBar({ active, setActive }) {
  return (
    <nav className="activity-bar">
      {items.map(item => (
        <button
          key={item.id}
          className={active === item.id ? "active" : ""}
          onClick={() => setActive(item.id)}
          title={item.id}
        >
          <span className={`codicon ${item.iconClass}`} />
        </button>
      ))}
    </nav>
  );
}
