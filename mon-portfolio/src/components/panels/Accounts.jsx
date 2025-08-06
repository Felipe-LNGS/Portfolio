import React from "react";

export default function AccountsPanel() {
  return (
    <aside className="side-panel accounts">
      <h4 className="panel-title">Accounts</h4>
      <div className="profile">
        <span className="avatar">👨‍💻</span>
        <strong>Philippe Langlois</strong>
        <span className="status">🟢 Disponible</span>
      </div>
      <ul className="contact-list">
        <li>📧 dev@mail.com</li>
        <li>📍 Paris, France</li>
      </ul>

    </aside>
  );
}
