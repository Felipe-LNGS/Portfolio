import React from "react";

export default function SettingsPanel() {
  const date = new Date().toLocaleDateString();

  return (
    <div className="settings-panel-content" style={{ color: "#ccc"}}>
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
          <li>Police : Poppins</li>
        </ul>
      </section>
    </div>
  );
}
