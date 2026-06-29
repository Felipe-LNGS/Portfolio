import React from "react";
import "@/styles/pages/home.css";
import "@/styles/pages/about.css";
import { masteredSkills, learningSkills } from "@/data/skills";

export default function About() {
  return (
    <div className="about-section">
      <div className="about-profil flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0">
        <img
          src="https://avatars.githubusercontent.com/u/1234567?v=4"
          alt="Profil Philippe Langlois"
        />

        <div className="flex-1">
          <h1 style={{ margin: 0, fontSize: 28 }}>Philippe Langlois</h1>
          <p style={{ margin: "4px 0 0", color: "#888", fontSize: 14 }}>
            Junior Développeur Web – École 42
          </p>
        </div>

        <a
          href={`${import.meta.env.BASE_URL}Cv_Philippe Langlois.pdf`}
          download
          style={{
            display: "inline-block",
            padding: "10px 20px",
            background: "rgb(0 122 204)",
            marginLeft: "auto",
            color: "#fff",
            borderRadius: "6px",
            textDecoration: "none",
          }}
          className="mt-4 sm:mt-0 sm:ml-auto"
        >
          📄 Télécharger mon CV
        </a>
      </div>

      <section>
        <h2>À propos de moi</h2>
        <p style={{ lineHeight: 1.6, fontSize: 15 }}>
          Actuellement en formation à l'école 42 depuis novembre 2023, je découvre et me spécialise dans
          les technologies du web (HTML, CSS, JavaScript et React). En tant que junior passionné, je
          développe mes compétences au fil de projets concrets, avec pour objectif de créer des interfaces
          performantes, accessibles et esthétiques.
        </p>

        <section style={{ marginBottom: 32 }}></section>

        <h2>Mes Compétences</h2>
        <h3 style={{ color: "#ccc", fontSize: 16, margin: "12px 0 6px" }}>✓ Maîtrisées</h3>
        <ul>
          {masteredSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <h3 style={{ color: "#888", fontSize: 16, margin: "20px 0 6px" }}>
          ⏳ En cours d'apprentissage
        </h3>
        <ul>
          {learningSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
