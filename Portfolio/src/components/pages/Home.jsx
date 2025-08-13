import React from "react";
import "../../styles/home.css";

export default function Home({ open }) {
  return (
    <section className="Home">
        <div className="hero-left">
          <h2>Développeur Web Junior</h2>
          <p>
            Junior issu de l'École&nbsp;42, je me spécialise dans le
            développement web en découvrant et en pratiquant les technologies
            actuelles comme React, Node.js, et les outils modernes du
            développement front et back-end.
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
    </section>
  );
}
