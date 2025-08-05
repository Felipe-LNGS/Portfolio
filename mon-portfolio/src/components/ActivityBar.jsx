import React from "react";
const items = [
  { id: "explorer", label: "📁" },
  { id: "source", label: "🌿" },
  { id: "debug", label: "🐛" },
  { id: "extensions", label: "📦" },
  { id: "accounts", label: "👤" },
  { id: "settings", label: "⚙️" },
];

export default function ActivityBar({ active, setActive }) {
  return (
    <nav className="activity-bar">
      {items.map((it) => (
        <button
          key={it.id}
          className={active === it.id ? "active" : ""}
          onClick={() => setActive(it.id)}
          title={it.id}
        >
          {it.label}
        </button>
      ))}
    </nav>
  );
}
