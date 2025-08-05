import React from "react";
import { tabsData } from "../../data/portfolioData";

export default function ExplorerPanel({ open }) {
    return (
        <aside className="side-panel explorer">
            <h4 className="panel-title">Explorer</h4>
            <ul className="explorer-list">
                {tabsData.map((item) =>
                    item.type === "folder" ? (
                        <li key={item.name} className="folder">
                            <span className="icon">📁</span>
                            <span>{item.name}</span>
                            <ul className="nested">
                                {item.children?.map((f) => (
                                    <li key={f.name} onClick={() => open(f.id)}>
                                        <span className="icon">{f.icon}</span>
                                        <span>{f.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ) : (
                        <li key={item.id} onClick={() => open(item.id)}>
                            <span className="icon">{item.icon}</span>
                            <span>{item.name}</span>
                        </li>
                    )
                )}
            </ul>
        </aside>
    );
}
