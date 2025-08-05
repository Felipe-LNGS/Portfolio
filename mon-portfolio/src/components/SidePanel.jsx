import React from "react";
import ExplorerPanel from "./panels/Explorer";
import SourceControlPanel from "./panels/SourceControl";
import DebugPanel from "./panels/Debug";
import ExtensionsPanel from "./panels/Extension";
import AccountsPanel from "./panels/Accounts";
import SettingsPanel from "./panels/Settings";

export default function SidePanel({ panel, open }) {
  switch (panel) {
    case "explorer":      return <ExplorerPanel open={open} />;
    case "search":        return <SearchPanel open={open} />;
    case "source":        return <SourceControlPanel />;
    case "debug":         return <DebugPanel />;
    case "extensions":    return <ExtensionsPanel />;
    case "accounts":      return <AccountsPanel />;
    case "settings":      return <SettingsPanel />;
    default:              return null;
  }
}
