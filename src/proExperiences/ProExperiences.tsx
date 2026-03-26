import type { FC } from "react";
import "./ProExperiences.css";

type Mission = {
  client: string;
  role: string;
  date: string;
  actions: string[];
  technologies: string[];
  placeholder?: boolean;
};

type StandardExperience = {
  kind: "standard";
  title: string;
  contract: string;
  company: string;
  date: string;
  description: string;
  missions: string[];
  technologies: string[];
};

type EsnExperience = {
  kind: "esn";
  company: string;
  contract: string;
  startDate: string;
  missions: Mission[];
};

type Experience = StandardExperience | EsnExperience;

const experiences: Experience[] = [
  {
    kind: "esn",
    company: "Mind7 Consulting",
    contract: "CDI — Consultant Technique Confirmé",
    startDate: "Janvier 2022",
    missions: [
      {
        client: "Unéo",
        role: "Ingénieur DevOps & Industrialisation",
        date: "Novembre 2025 – Mars 2026",
        actions: [
          "Mise en place et optimisation de la livraison continue selon les principes GitOps",
          "Déploiements automatisés via ArgoCD",
          "Industrialisation des applications avec Helm Charts",
          "Exécution parallèle de scénarios de tests end-to-end pour réduire les temps de validation",
          "Optimisation du processus de purge automatique des rapports générés",
          "Livraison continue des nouvelles fonctionnalités de test",
          "Conception d'un script de monitoring pour récupérer l'état des listeners des applications",
          "Création de dashboards Kibana pour la supervision des équipes techniques",
        ],
        technologies: [
          "GitOps",
          "GitLab",
          "ArgoCD",
          "Helm",
          "Kubernetes",
          "Kibana",
          "Bash",
          "Python",
          "Jenkins",
          "Rancher",
          "Cypress",
        ],
      },
      {
        client: "Colissimo",
        role: "À préciser",
        date: "À préciser",
        actions: [],
        technologies: [],
        placeholder: true,
      },
      {
        client: "Fedea",
        role: "Développeur FullStack & DevOps",
        date: "Avril 2025 – Juin 2025",
        actions: [
          "Création du projet sur Azure DevOps Organizations",
          "Mise en place de pipelines CI/CD pour le front (React) et le back (Spring Boot)",
          "Création et configuration des services cloud Azure (ACR, Container Apps, Blob Storage, SQL Database)",
          "Configuration de l'authentification SSO (React, Spring Security, Azure Entra ID)",
          "Sécurisation et gestion des autorisations des APIs exposées",
          "Conception et développement des fonctionnalités de la plateforme",
        ],
        technologies: [
          "Spring Boot",
          "Java",
          "React",
          "TypeScript",
          "Swagger",
          "Git",
          "Docker",
          "Azure",
          "Azure Pipelines",
        ],
      },
      {
        client: "Veille Technologique — DevOps",
        role: "Référent DevOps Interne",
        date: "Janvier 2024 – Aujourd'hui",
        actions: [
          "Déploiement et configuration d'une instance Jenkins locale dans un conteneur Docker",
          "Configuration des stages du pipeline dans le Jenkinsfile",
          "Définition et configuration des étapes du Dockerfile",
        ],
        technologies: [
          "GitHub",
          "Docker",
          "Systemd",
          "Nginx",
          "Jenkins",
          "Docker Hub",
          "DNS dynamique",
        ],
      },
      {
        client: "BNP Paribas",
        role: "Consultant Technique Confirmé",
        date: "Janvier 2022 – Mars 2025",
        actions: [
          "Analyser, appréhender et définir les besoins du client",
          "Contribuer au développement du micro-service de génération d'Excel (Java, Spring Boot)",
          "Migration Scala vers Spring Boot",
          "Migration de Spring Fox vers OpenAPI dans l'application Orchestrateur",
          "Gérer les groupes d'utilisateurs dans l'application Workflow",
          "Développer le notificateur Excel asynchrone et toaster (React, TypeScript)",
          "Contribuer au développement des applications Serveur, Orchestrateur, Batch, Workflow et Client",
          "Proposer et prototyper une architecture technique",
          "Concevoir et développer des tests unitaires et d'intégration",
          "Réaliser la maintenance corrective et évolutive",
          "Améliorer la qualité du code et rédiger la documentation technique",
        ],
        technologies: [
          "Java",
          "Spring Boot",
          "Scala",
          "React",
          "TypeScript",
          "Swagger",
          "JUnit",
          "Oracle",
        ],
      },
    ],
  },
  {
    kind: "standard",
    title: "Développeur Fullstack",
    contract: "Alternance",
    company: "SeveUp",
    date: "2020 – 2021",
    description: "Conception et développement des services métiers de SeveUp",
    missions: [
      "Développement de la plateforme API (Gateway)",
      "Conception et développement de l'application IFC Converter",
      "Conception et développement de l'application DataTracker",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Jhipster",
      "Angular",
      "HTML",
      "CSS",
      "Docker",
      "Microservices",
      "PostgreSQL",
    ],
  },
];

const TechBadge: FC<{ tech: string }> = ({ tech }) => (
  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-gray-100 text-xs text-gray-800 dark:bg-gray-700 dark:text-gray-200">
    {tech}
  </span>
);

const MissionNode: FC<{ mission: Mission; isLast: boolean }> = ({
  mission,
  isLast,
}) => (
  <div className="relative pl-8 mb-0">
    {!isLast && (
      <div
        className="timeline-line absolute left-2 top-4 w-px"
        style={{ height: "calc(100% + 1rem)" }}
      />
    )}
    <div className="timeline-node absolute left-0 top-2 w-4 h-4 rounded-full border-2 bg-white dark:bg-gray-900" />

    <div
      className={`mb-4 p-3 rounded-lg border transition-all duration-200 ${
        mission.placeholder
          ? "border-dashed border-gray-300 dark:border-gray-600 opacity-60"
          : "border-transparent dark:bg-gray-800/60"
      }`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
        <h4 className="font-semibold text-sm">
          {mission.placeholder
            ? `${mission.client} — (en cours de complétion)`
            : mission.client}
        </h4>
        <span className="text-xs text-gray-500 dark:text-gray-400 shrink-0">
          {mission.date}
        </span>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 italic mb-3">
        {mission.role}
      </p>

      {!mission.placeholder && mission.actions.length > 0 && (
        <div className="mb-3">
          <p className="text-xs font-medium mb-1">Actions réalisées :</p>
          <ul className="list-disc list-inside text-xs space-y-0.5 text-gray-700 dark:text-gray-300">
            {mission.actions.map((action, i) => (
              <li key={i}>{action}</li>
            ))}
          </ul>
        </div>
      )}

      {!mission.placeholder && mission.technologies.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {mission.technologies.map((tech, i) => (
            <TechBadge key={i} tech={tech} />
          ))}
        </div>
      )}
    </div>
  </div>
);

const EsnBlock: FC<{ exp: EsnExperience }> = ({ exp }) => (
  <div className="mb-6 p-4 rounded-lg border border-transparent transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-gray-200 dark:hover:border-gray-700 dark:bg-gray-800/60">
    <div className="flex items-center gap-3 mb-4">
      <div className="flex flex-col">
        <span className="font-bold text-sm">{exp.company}</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {exp.contract}
        </span>
        <span className="text-xs text-gray-400 dark:text-gray-500">
          Depuis {exp.startDate}
        </span>
      </div>
    </div>

    <div>
      {exp.missions.map((mission, i) => (
        <MissionNode
          key={i}
          mission={mission}
          isLast={i === exp.missions.length - 1}
        />
      ))}
    </div>
  </div>
);

const StandardBlock: FC<{ exp: StandardExperience }> = ({ exp }) => (
  <div className="flex w-full p-4 rounded-lg border border-transparent transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-gray-200 dark:hover:border-gray-700 dark:bg-gray-800/60 mb-4">
    <div className="md:basis-1/5 text-xs mt-0.5 shrink-0">{exp.date}</div>
    <div className="md:basis-4/5 text-sm">
      <h3 className="font-semibold">
        {exp.contract} – {exp.title}
      </h3>
      <div className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">
        {exp.company}
      </div>
      <div className="mt-2 text-xs text-gray-700 dark:text-gray-300">
        {exp.description}
      </div>
      <div className="mt-2">
        <p className="text-xs font-medium">Missions réalisées :</p>
        <ul className="list-disc list-inside mt-1 text-xs space-y-0.5 text-gray-700 dark:text-gray-300">
          {exp.missions.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      </div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {exp.technologies.map((tech, i) => (
          <TechBadge key={i} tech={tech} />
        ))}
      </div>
    </div>
  </div>
);

const ProExperiences: FC = () => {
  return (
    <div>
      <h2 className="md:hidden block bright-text">Professional Experiences</h2>
      {experiences.map((exp, index) =>
        exp.kind === "esn" ? (
          <EsnBlock key={index} exp={exp} />
        ) : (
          <StandardBlock key={index} exp={exp} />
        ),
      )}
    </div>
  );
};

export default ProExperiences;
