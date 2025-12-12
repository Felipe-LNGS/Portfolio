import React from "react";
import LinkIcon from '../../assets/icons/linkedin.svg';

export default function AccountsPanel() {
  return (
    <div className="account-panel-content">
      <h4  className="panel-title" style={{ borderBottom: "1px solid #444", paddingBottom: 8 }}>Accounts</h4>
      <div className="profile" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 24 }}>
        <span className="avatar" style={{ fontSize: 56, marginBottom: 8 }}>👨‍💻</span>
        <strong style={{ fontSize: 18, marginBottom: 1 }}>Philippe Langlois</strong>
        <span className="status" style={{ fontSize: 15, marginBottom: 8, color: "#27d158" }}>🟢 Disponible</span>
      </div>
      <hr style={{ borderTop: "1.2px solid #343a40", width: "80%", margin: "0 auto 18px auto" }} />
      <ul className="contact-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li style={{ display: "flex", alignItems: "center", marginBottom: 7 }}>
        <span style={{ fontSize: 15, marginLeft: 1 }} className="codicon codicon-mail" /* ... */ />   
        <span style={{ fontSize: 15, marginLeft: 5 }}> philippe91080@live.fr</span>
        </li>
        <li style={{ display: "flex", alignItems: "center", marginBottom: 7 }}>
          <span style={{ fontSize: 20, marginRight: 10 }}className="codicon codicon-location"/>
          <span>Paris, France</span>
        </li>
      </ul>
      <hr style={{ borderTop: "1.2px solid #343a40", width: "80%", margin: "20px auto" }} />
      <div className="links" style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 8 }}>
          

        <a href="https://github.com/Felipe-LNGS" target="_blank" rel="noopener noreferrer" title="GitHub" ><span style={{ fontSize: 20, marginRight: 10, color: "white" }}className="codicon codicon-github"/></a>
        <a href="mailto:philippe91080@live.fr" title="Envoyer un mail" style={{ fontSize: 23 }}><span style={{ fontSize: 20, marginRight: 10, color: "white" }}className="codicon codicon-mail"/></a>
        <a href="https://www.linkedin.com/in/42-langlois-philippe" target="_blank" rel="noopener noreferrer" title="LinkedIn" > <img
                  src={LinkIcon}
                  alt="LinkIcon"
                  style={{ width: 20, height: 20}}
                /></a>
      </div>
    </div>
  );
}
