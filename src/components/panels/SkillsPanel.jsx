import React from "react";
import { panelSkillsSections } from "@/data/panelSkills";

export default function SkillsPanel() {
  return (
    <div className="debug-panel-content">
      <h4 className="panel-title" style={{ borderBottom: "1px solid #444", paddingBottom: 8 }}>
        Skills
      </h4>
      {panelSkillsSections.map((sec) => (
        <div key={sec.title} className="skill-section">
          <h4 className="panel-title">{sec.title}</h4>
          {sec.items.map((s) => (
            <div key={s.name} className="skill-item">
              <span className="label">{s.name}</span>
              <div className="bar-bg">
                <div className="bar-fill" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
