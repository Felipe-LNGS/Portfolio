import React from "react";

export default function DebugPanel() {
  const sections = [
    {
      title: "Maîtrisé",
      items: [
        { name: "C/C++", level: 90 },
        { name: "Git", level: 80 },
      ],
    },
    {
      title: "Apprentissage",
      items: [
        { name: "React", level: 55 },
        { name: "Django", level: 45 },
      ],
    },
  ];

  return (
    <aside className="side-panel debug">
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
