import React from "react";

export default function VsCodeTitleBar() {
  // Couleurs proches de VS Code Windows Light, adapte selon ton thème
  return (
    <div
      style={{
        height: 32,
        background: "#232326",
        display: "flex",
        alignItems: "center",
        padding: "0 10px",
        userSelect: "none",
        WebkitAppRegion: "drag",
        borderBottom: "1px solid #1b1b1d",
        position: "relative",
        zIndex: 10
      }}
    >
      {/* Icône VS Code */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
        alt="VSCode"
        width="20"
        style={{ marginRight: 8 }}
      />
      {/* Nom du projet fenêtre */}
      <span style={{ color: "#e7e7e7", fontSize: 15, fontWeight: 500 }}>
        Portfolio - Visual Studio Code
      </span>
      {/* Espace flexible */}
      <div style={{ flex: 1 }} />
      {/* Boutons fenêtre, version Windows */}
      <div style={{ display: "flex", gap: 2 }}>
        {/* Réduire */}
        <button
          style={{
            width: 35,
            height: 28,
            border: "none",
            background: "transparent",
            color: "#e7e7e7",
            fontSize: 14,
            cursor: "default"
          }}
          tabIndex={-1}
          aria-label="Minimize"
        >
          <svg width="10" height="2"><rect width="10" height="2" fill="#e7e7e7"/></svg>
        </button>
        {/* Agrandir */}
        <button
          style={{
            width: 35,
            height: 28,
            border: "none",
            background: "transparent",
            color: "#e7e7e7",
            fontSize: 12,
            cursor: "default"
          }}
          tabIndex={-1}
          aria-label="Maximize"
        >
          <svg width="10" height="10"><rect x="1" y="1" width="8" height="8" fill="none" stroke="#e7e7e7" strokeWidth="1.4"/></svg>
        </button>
        {/* Fermer */}
        <button
          style={{
            width: 35,
            height: 28,
            border: "none",
            background: "transparent",
            color: "#e57373",
            fontSize: 14,
            cursor: "default"
          }}
          tabIndex={-1}
          aria-label="Close"
        >
          <svg width="10" height="10"><line x1="2" y1="2" x2="8" y2="8" stroke="#e57373" strokeWidth="1.7"/><line x1="2" y1="8" x2="8" y2="2" stroke="#e57373" strokeWidth="1.7"/></svg>
        </button>
      </div>
    </div>
  );
}
