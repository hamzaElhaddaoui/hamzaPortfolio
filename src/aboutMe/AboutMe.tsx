import type { FC } from "react";
import "./AboutMe.css";

const AboutMeData = {
  description:
    "Ingénieur DevOps spécialisé dans la modernisation d'infrastructures et l'automatisation à grande échelle. J'orchestre des déploiements GitOps sur Kubernetes, j'optimise des systèmes critiques à forte volumétrie, et je pilote des migrations techniques vers des architectures cloud natives. Ma polyvalence DevOps-Backend me permet d'intervenir sur toute la chaîne, de l'infrastructure au code métier. Les missions ci-dessous montrent comment j'ai réduit les incidents, accéléré les livraisons et sécurisé des environnements de production.",
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
