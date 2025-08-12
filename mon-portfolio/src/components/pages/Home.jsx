import React from "react";
import "../../styles/home.css";

export default function Home({ open }) {
  return (
    <section className="Home">
      <div className="hero-container">
        <div className="hero-left">
          <h1>👋 Salut,</h1>
          <h2>Je suis <span>Développeur Web Junior</span></h2>
          <p>
            Passionné par le développement full-stack, je crée des applications
            modernes et performantes avec React, Django, et plus.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => open("Projects")}>
              Voir mes projets
            </button>
            <button className="btn-secondary" onClick={() => open("Contact")}>
              Me contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
