import React from "react";

export default function SettingsPanel() {
  const date = new Date().toLocaleDateString();
  return (
    <aside className="side-panel settings">
      <h4 className="panel-title">Settings</h4>
      <section>
        <h5>À propos</h5>
        <p>Version 1.0.0 — {date}</p>
      </section>
      <section>
        <h5>Préférences</h5>
        <ul>
          <li>Thème : VS Code Dark</li>
          <li>Police : Cascadia Code</li>
        </ul>
      </section>
      <section>
        <h5>Objectifs</h5>
        <ul>
          <li>Apprendre </li>
        </ul>
      </section>
    </aside>
  );
}
