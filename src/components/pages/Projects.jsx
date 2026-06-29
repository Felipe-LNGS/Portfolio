import React from "react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div
      className="fadeInUp"
      style={{
        padding: 24,
        color: "#e7e7e7",
        background: "linear-gradient(135deg, #161616 0%, #1f1f1f 100%)",
        height: "87vh",
        boxSizing: "border-box",
        overflowY: "auto",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: 32 }}>
        <h1 style={{ margin: 0, fontSize: 30 }}>Mes Projets</h1>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 24,
        }}
      >
        {projects.map(({ id, title, image, description, tech, link }) => (
          <div
            key={id}
            style={{
              background: "#1f1f1f",
              borderRadius: 12,
              boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={image}
              alt={title}
              style={{ width: "100%", height: 180, objectFit: "cover" }}
            />
            <div style={{ padding: 16, flex: 1, display: "flex", flexDirection: "column" }}>
              <h2 style={{ margin: 0, fontSize: 18, color: "#57a6ff" }}>{title}</h2>
              <p style={{ flex: 1, margin: "8px 0", fontSize: 14, color: "#ccc" }}>{description}</p>
              <div style={{ marginBottom: 12 }}>
                {tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      display: "inline-block",
                      background: "#2a2a2a",
                      color: "#ccc",
                      padding: "4px 8px",
                      borderRadius: 4,
                      fontSize: 12,
                      marginRight: 6,
                      marginBottom: 4,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => window.open(link, "_blank")}
                style={{
                  alignSelf: "flex-start",
                  padding: "8px 16px",
                  background: "#57a6ff",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                  fontSize: 14,
                }}
              >
                Voir le projet
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
