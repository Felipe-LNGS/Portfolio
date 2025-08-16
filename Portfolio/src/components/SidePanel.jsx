import React from "react";
import ExplorerPanel from "./panels/Explorer";
import SkillsPanel   from "./panels/Skills";
import GithubPanel   from "./panels/Github";
import AccountsPanel from "./panels/Accounts";
import SettingsPanel from "./panels/Settings";

export default function SidePanel({ panel, open, className }) {
  if (!panel) return null;

  let Content;
  switch (panel) {
  case "explorer": Content = <ExplorerPanel open={open} />;; break;
  case "skills":   Content = <SkillsPanel />;   break;
  case "github":   Content = <GithubPanel />;   break;
  case "profil":   Content = <AccountsPanel />; break;
  case "settings": Content = <SettingsPanel />; break;
  }

  return (
    <div className={className}>
      {Content}
    </div>
  );
}
