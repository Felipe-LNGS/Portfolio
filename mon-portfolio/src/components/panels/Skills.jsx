import React from "react";

export default function DebugPanel() {
  const sections = [
    {
      title: "Confirmé",
      items: [
        { name: "C/C++", level: 82 },
        { name: "Git", level: 76 },
      ],
    },
    {
      title: "Apprentissage",
      items: [
        { name: "React", level: 45 },
        { name: "Html", level: 62 },
        { name: "Css", level: 58 },
        { name: "Javascript/Node.js", level: 42 },
        { name: "Sql", level: 32 },
      ],
    },
  ];

  return (
    <aside className="side-panel debug">
      <h4  className="panel-title" style={{ borderBottom: "1px solid #444", paddingBottom: 8 }} >Skills </h4>
      {sections.map((sec) => (
        <div key={sec.title} className="skill-section">
          <h4 className="panel-title">{sec.title}</h4>
          {sec.items.map((s) => (
            <div key={s.name} className="skill-item">
              <span className="label">{s.name}</span>
              <div className="bar-bg">
                <div
                  className="bar-fill"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </aside>
  );
}
