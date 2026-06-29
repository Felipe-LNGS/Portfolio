export const projects = [
  {
    id: "proj1",
    title: "Portfolio VS Code",
    image: `${import.meta.env.BASE_URL}projects/portfolio.png`,
    description:
      "Portfolio personnel conçu avec React, mettant en avant mes compétences, projets et parcours. Interface inspirée de VS Code.",
    tech: ["React", "CSS3", "JavaScript", "Vite"],
    link: "https://github.com/Felipe-LNGS/Portfolio",
  },
  {
    id: "proj2",
    title: "Ft_Matcha",
    image: `${import.meta.env.BASE_URL}projects/matcha.png`,
    description:
      "Application web de rencontres Matcha réalisée dans le cadre du projet 42. Profil utilisateur, filtrage avancé, système de match mutuel avec chat en temps réel.",
    tech: ["Vue.js", "Node.js", "MySQL", "Express"],
    link: "https://github.com/ft-Ali/ft_matcha",
  },
  {
    id: "proj3",
    title: "Ft_Transcendance",
    image: `${import.meta.env.BASE_URL}projects/transcendence.png`,
    description:
      "Application web multijoueur (Pong) avec chat en temps réel, gestion des parties, scores et classement. Plateforme sécurisée et responsive avec espace membres dédié.",
    tech: ["React", "Tailwind CSS", "Vite", "Node.js", "Express", "PostgreSQL", "Docker", "Socket.io", "Nginx"],
    link: "https://github.com/Felipe-LNGS/Transcendence",
  },
];
