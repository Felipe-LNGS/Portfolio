import React from "react";

export default function SourceControlPanel() {
  const commits = [
    { hash: "a3f2b1", msg: "Ajout section Contact" },
    { hash: "b7e4c2", msg: "Amélioration Skills" },
    { hash: "c9d5f1", msg: "Setup initial" },
  ];

  return (
    <aside className="side-panel source-control">
      <h4 className="panel-title">Source Control</h4>
      <div className="repo-info">
        <span className="icon">🌿</span>
        <span className="text">main</span>
      </div>
      <ul className="commit-list">
        {commits.map((c) => (
          <li key={c.hash}>
            <code>{c.hash}</code> — {c.msg}
          </li>
        ))}
      </ul>
      <a href="https://github.com/tonpseudo/portfolio" className="btn-link">
        Voir sur GitHub
      </a>
    </aside>
  );
}
