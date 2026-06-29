import React from "react";
import ExplorerPanel from "@/components/panels/Explorer";
import SkillsPanel from "@/components/panels/SkillsPanel";
import GithubPanel from "@/components/panels/GithubPanel";
import AccountsPanel from "@/components/panels/Accounts";
import SettingsPanel from "@/components/panels/Settings";

export default function SidePanel({ panel, open, setPanel, className }) {
  if (!panel) return null;

  let Content;
  switch (panel) {
    case "explorer":
      Content = <ExplorerPanel open={open} setPanel={setPanel} />;
      break;
    case "skills":
      Content = <SkillsPanel />;
      break;
    case "github":
      Content = <GithubPanel />;
      break;
    case "profil":
      Content = <AccountsPanel />;
      break;
    case "settings":
      Content = <SettingsPanel />;
      break;
    default:
      return null;
  }

  return <div className={className}>{Content}</div>;
}
