import React from "react";
import { tabsData } from "../../data/portfolioData";

import HtmlIcon from '../../assets/icons/html.svg';
import CssIcon from '../../assets/icons/css.svg';
import JsIcon from '../../assets/icons/js.svg';
import ReactIcon from '../../assets/icons/react.svg';
import  MdIcon  from '../../assets/icons/md.svg?react';

function getFileIcon(filename) {
  const ext = filename.split('.').pop();
  switch (ext) {
    case 'html': return <img src={HtmlIcon} alt="HTML" width={20} />;
    case 'css':  return <img src={CssIcon} alt="CSS" width={20} />;
    case 'js':   return <img src={JsIcon} alt="JS" width={20} />;
    case 'jsx':  return <img src={ReactIcon} alt="React" width={20} />;
    case 'jsx':  return <img src={ReactIcon} alt="React" width={20} />;
    case 'md':  return <img src={MdIcon} alt="Md" width={20} style={{ color: "green" }}/>;

    // etc.
    default:     return <img src= "📁" />;
  }
}

export default function ExplorerPanel() {
  return (
    <aside className="side-panel explorer">
      <h4 className="panel-title">Explorer</h4>
      <ul className="explorer-list">
        {tabsData.map(item =>
          item.name === "portfolio" ? (
            <li key="portfolio" className="folder" style={{ display: "flex", alignItems: "center", userSelect: "none", padding: "3px 6px", color: "#c0c0c0", fontWeight: "bold" }}>
              <span className="codicon codicon-chevron-down" style={{ color: "#bcbcbc", fontSize: 15, marginRight: 1 }} />
              {/* <img src={FolderIcon} alt="folder" width={18} style={{ marginRight: 6 }} /> */}
              <span style={{ marginRight: 5, fontSize: 15 }}>{"📁"}</span>
              <span>{item.name}</span>
            </li>
          ) : (
            <li key={item.id} className="file" style={{ display: "flex", alignItems: "center", cursor: "pointer", paddingLeft: "28px" }}>
              {getFileIcon(item.name)}
              <span style={{ marginLeft: 6 }}>{item.name}</span>
            </li>
          )
        )}
      </ul>
    </aside>
  );
}
