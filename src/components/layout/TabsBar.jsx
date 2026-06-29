import React from "react";

export default function TabsBar({ tabs, active, setActive, close, setPanel }) {
  const handleTabClick = (id) => {
    setActive(id);
  };

  return (
    <div className="tabs-bar">
      {tabs.map((t) => (
        <div
          key={t.id}
          className={active === t.id ? "tab active" : "tab"}
          onClick={() => handleTabClick(t.id)}
        >
          {t.icon} {t.name}
          <span
            className="close"
            onClick={(e) => {
              e.stopPropagation();
              close(t.id);
            }}
          >
            ×
          </span>
        </div>
      ))}
    </div>
  );
}
