import React from "react";
import ExplorerPanel from "./panels/Explorer";
import DebugPanel from "./panels/Skills";
import ExtensionsPanel from "./panels/Github";
import AccountsPanel from "./panels/Accounts";
import SettingsPanel from "./panels/Settings";

export default function SidePanel({ panel, open }) {
  switch (panel) {
    case "explorer":      return <ExplorerPanel open={open} />;
    case "skills":         return <DebugPanel />;
    case "github":    return <ExtensionsPanel />;
    case "profil":      return <AccountsPanel />;
    case "settings":      return <SettingsPanel />;
    default:              return null;
  }
}
