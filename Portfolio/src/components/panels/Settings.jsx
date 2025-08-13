import React from "react";

export default function SettingsPanel() {
  const date = new Date().toLocaleDateString();

  return (
    <aside className="side-panel settings" style={{  color: "#ccc", fontFamily: "'Cascadia Code', monospace" }}>
      <h4 className="panel-title" style={{ borderBottom: "1px solid #444", paddingBottom: 8 }}>
        Settings
      </h4>

      <section style={{ marginBottom: 20 }}>
        <h5 style={{ color: "#888", marginBottom: 8 }}>À propos</h5>
        <p style={{ fontSize: 14 }}>Version 1.0.0 — {date}</p>
      </section>

      <section style={{ marginBottom: 20 }}>
        <h5 style={{ color: "#888", marginBottom: 8 }}>Préférences</h5>
        <ul style={{ paddingLeft: 20, fontSize: 14, listStyle: "disc" }}>
          <li>Thème : VS Code Dark</li>
          <li>Police : Cascadia Code</li>
        </ul>
      </section>

      {/* <section>
        <h5 style={{ color: "#888", marginBottom: 8 }}>Objectifs</h5>
        <ul style={{ paddingLeft: 20, fontSize: 14, listStyle: "disc" }}>
          <li>Apprendre</li>
        </ul>
      </section> */}
    </aside>
  );
}
