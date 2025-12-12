import React from "react";
import Home     from "./pages/Home";
import About    from "./pages/About";
import Skills   from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact  from "./pages/Contact";

const tabComponents = { Home, About, Skills, Projects, Contact };

export default function TabContent({ tab, open }) {
  if (!tab) {
    return (
      <div className="tab-content flex items-center justify-center">
        <div className="text-center text-[#888]">
          <i className="codicon-file text-4xl mb-4 block"></i>
          <p>Sélectionnez un onglet pour commencer</p>
        </div>
      </div>
    );
  }

  const Component = tabComponents[tab.id];
  if (!Component) {
    return (
      <div className="tab-content flex items-center justify-center">
        <div className="text-center text-[#888]">
          <i className="codicon-error text-4xl mb-4 block"></i>
          <p>Contenu indisponible</p>
        </div>
      </div>
    );
  }

  return (
    <div className="tab-content">
      <div className="content-wrapper h-full overflow-y-auto">
        <div className="md:hidden bg-[#2d2d30] p-2 border-b border-[#333] sticky top-0 z-10">
          <div className="flex items-center text-sm text-[#ccc]">
            {tab.icon && <i className={`${tab.icon} mr-2`}></i>}
            <span>{tab.title}</span>
          </div>
        </div>
        <div className="component-content">
          <Component open={open} />
        </div>
      </div>
    </div>
  );
}
