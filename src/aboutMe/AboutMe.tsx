import type { FC } from "react";
import "./AboutMe.css";

const AboutMeData = {
  description:
    "Lauréat d'une école d'ingénieurs, je cumule 5 ans d'expérience professionnelle. J'ai démarré ma carrière en tant que développeur fullstack, puis j'ai évolué progressivement vers le DevOps, un domaine qui correspond davantage à mes ambitions et à mes centres d'intérêt. Aujourd'hui, je mets en avant mon expertise DevOps pour contribuer à des projets orientés automatisation, fiabilité, déploiement continu et scalabilité, avec l'objectif de décrocher de nouvelles missions dans ce domaine.",
};

const AboutMe: FC = () => {
  return (
    <div className="about-me">
      <div className="about-me-title">
        <h2 className="lg:hidden block bright-text">À propos</h2>
      </div>
      <div className="about-me-description">
        <p>{AboutMeData.description}</p>
      </div>
    </div>
  );
};

export default AboutMe;
