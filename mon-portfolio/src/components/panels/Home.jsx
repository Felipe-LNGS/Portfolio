import React from "react";
import "../../styles/home.css";

export default function Home({ open }) {
  return (
    <section className="home-panel">
      <div className="hero-container">
        <div className="hero-left">
          <h1>👋 Salut,</h1>
          <h2>Je suis <span>Développeur Web Junior</span></h2>
          <p>
            Passionné par le développement full-stack, je crée des applications
            modernes et performantes avec React, Django, et plus.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => open("projects")}>
              Voir mes projets
            </button>
            <button className="btn-secondary" onClick={() => open("contact")}>
              Me contacter
            </button>
          </div>
        </div>
        {/* <div className="hero-right">
          <div className="mock-editor">
            <div className="editor-header">
              <span className="circle red" />
              <span className="circle yellow" />
              <span className="circle green" />
              <div className="tabs">
                <span className="tab active">home.jsx</span>
              </div>
            </div>
            <pre className="editor-body">
{`import React from "react";

export default function Home() {
  return (
    <div>Bienvenue sur mon portfolio !</div>
  );
}`}
            </pre>
          </div>
        </div> */}
      </div>
    </section>
  );
}
