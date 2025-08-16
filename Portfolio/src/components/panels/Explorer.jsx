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
    case 'md':  return <img src={MdIcon} alt="Md" width={20}/>;

    default:     return   <span style={{ marginRight: 5, fontSize: 15 }}>{"📁"}</span>
  }
}

export default function ExplorerPanel({ open }) {
  return (
    <div className="explorer-panel-content">
      <h4  className="panel-title" style={{ borderBottom: "1px solid #444", paddingBottom: 8 }}>Explorer</h4>
      <ul className="explorer-list">
        {tabsData.map(item =>
          item.name === "portfolio" ? (
            <li key="portfolio" className="folder">
              <span className="codicon codicon-chevron-down"/>
              <span style={{ marginRight: 5, fontSize: 15 }}>{"📁"}</span>
              <span>{item.name}</span>
            </li>
          ) : (
            <li
              key={item.id}
              className="file"
              style={{ display: "flex", alignItems: "center", cursor: "pointer", paddingLeft: "28px" }}
              onClick={() => open(item.id)} 
            >
              {getFileIcon(item.name)}
              <span style={{ marginLeft: 6 }}>{item.name}</span>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
