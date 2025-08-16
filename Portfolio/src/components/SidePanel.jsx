import React from "react";
import ExplorerPanel from "./panels/Explorer";
import SkillsPanel   from "./panels/Skills";
import GithubPanel   from "./panels/Github";
import AccountsPanel from "./panels/Accounts";
import SettingsPanel from "./panels/Settings";

export default function SidePanel({ panel, open, className }) {
  // Si aucun panel sélectionné, on n'affiche rien
  if (!panel) return null;

  // Détermine quel composant rendre
  let Content;
  switch (panel) {
  case "explorer": Content = <ExplorerPanel open={open} />;; break;
  case "skills":   Content = <SkillsPanel />;   break;
  case "github":   Content = <GithubPanel />;   break;
  case "profil":   Content = <AccountsPanel />; break;
  case "settings": Content = <SettingsPanel />; break;
  }

  return (
    // On applique bien la className (incluant "side-panel open")
    <div className={className}>
      {Content}
    </div>
  );
}
