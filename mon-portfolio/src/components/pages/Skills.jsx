// src/pages/Skills.jsx
import React from "react";

const skillsData = [
  { category: "Front-End", items: [
      { name: "React", level: 2 },
      { name: "HTML5", level: 3 },
      { name: "JavaScript", level: 2 },
      { name: "CSS3", level: 3 },
      { name: "Tailwind", level: 3 },
      { name: "Bootstrap", level: 2 },
    ]
  },
  { category: "Back-End", items: [
      { name: "Node.js", level: 2 },
      { name: "Express", level: 2 },
      { name: "MySQL", level: 1 },

    ]
  },
  { category: "Outils", items: [
      { name: "Git & GitHub", level: 4 },
      { name: "Figma", level: 1 },
      { name: "Docker", level: 2 },

    ]
  },
];

function RadarChart({ level }) {
  const wedges = Array.from({ length: 5 }, (_, i) => i < level);
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {wedges.map((filled, i) => (
        <div
          key={i}
          style={{
            width: 12,
            height: 12,
            clipPath: "polygon(50% 0%,100% 50%,50% 100%,0% 50%)",
            background: filled ? "#57a6ff" : "#444",
          }}
        />
      ))}
    </div>
  );
}

export default function Skills({ open }) {
  return (
    <div
      style={{
        padding: 24,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#e7e7e7",
        backgroundColor: "#161616",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
<header style={{ textAlign: "center", marginBottom: 32 }}>
  <h1 style={{ margin: 0, fontSize: 30 }}>Mes Compétences</h1>
  <p style={{ margin: "8px 0 0", color: "#888", fontSize: 14 }}>
    Ces niveaux reflètent mon parcours et mon orientation actuelle.
  </p>
</header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 24,
        }}
      >
        {skillsData.map((cat) => (
          <section
            key={cat.category}
            style={{
              background: "#1f1f1f",
              borderRadius: 12,
              padding: 16,
              boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
            }}
          >
            <h2
              style={{
                fontSize: 18,
                marginBottom: 12,
                borderBottom: "1px solid #333",
                paddingBottom: 6,
                color: "#57a6ff",
              }}
            >
              {cat.category}
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {cat.items.map((skill) => (
                <li
                  key={skill.name}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                >
                  <span style={{ fontSize: 15 }}>{skill.name}</span>
                  <RadarChart level={skill.level} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
<footer style={{ textAlign: "center", marginTop: 40 }}>
        <button
          onClick={() => open("Projects")}
          style={{
            padding: "10px 20px",
            background: "#57a6ff",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Voir mes projets
        </button>
      </footer>
    </div>
  );
}
