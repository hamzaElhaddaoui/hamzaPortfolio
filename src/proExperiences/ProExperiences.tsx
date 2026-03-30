import type { FC } from "react";
import "./ProExperiences.css";

type Mission = {
  client: string;
  role: string;
  date: string;
  context?: string;
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
        context:
          "Intervention sur la livraison de l'ensemble des applications Unéo et amélioration de l'application de tests end-to-end.",
        actions: [
          "Mise en place et optimisation de la livraison continue selon les principes GitOps",
          "Déploiements automatisés via ArgoCD",
          "Industrialisation des applications avec Helm Charts",
          "Exécution parallèle de plusieurs scénarios de tests end-to-end pour réduire les temps de validation",
          "Optimisation du processus de purge automatique des rapports générés",
          "Livraison continue des nouvelles fonctionnalités de test",
          "Conception d'un script de monitoring permettant de récupérer automatiquement l'état des listeners des différentes applications",
          "Création de dashboards Kibana exploitant les données du script de monitoring pour fournir une supervision claire et exploitable par les équipes techniques",
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
          "Monitoring",
          "Rancher",
          "Cypress",
        ],
      },
      {
        client: "Colissimo",
        role: "Ingénieur DevOps / Backend",
        date: "Juillet 2025 – Septembre 2025",
        context:
          "Intervention au sein de l'écosystème Colissimo sur des services distribués à forte volumétrie, avec des enjeux de performance, de disponibilité et de fiabilité.",
        actions: [
          "Mise en œuvre et amélioration des processus de déploiement des applications sur Kubernetes, en assurant la stabilité et la reproductibilité des mises en production",
          "Participation à la mise en place et à l'optimisation de la supervision (logs, métriques, alerting) pour améliorer la visibilité des services et réduire le temps de détection des incidents",
          "Amélioration des performances du service COCON via l'introduction de mécanismes de multithreading et de parallélisme",
          "Implémentation de mécanismes de cache locaux pour limiter les appels redondants et améliorer les temps de réponse",
          "Migration des microservices de Java 8 vers Java 11 avec adaptation du code, gestion de compatibilité et validation en environnement cible",
          "Traitement des vulnérabilités de sécurité (CVE) : identification, correction et mise à jour des dépendances",
          "Uniformisation et optimisation des Dockerfiles : factorisation des bonnes pratiques, réduction de la taille des images et amélioration des temps de build",
          "Contribution à l'amélioration continue des pipelines CI/CD (Jenkins, GitLab CI) pour fiabiliser les processus de build, test et déploiement",
        ],
        technologies: [
          "Kubernetes",
          "Jenkins",
          "GitLab CI",
          "Docker",
          "Kibana",
          "Grafana",
          "Java",
          "Spring Boot",
          "Sonar",
          "Kafka",
          "CI/CD",
        ],
      },
      {
        client: "Fedea",
        role: "Ingénieur DevOps / FullStack",
        date: "Avril 2025 – Juin 2025",
        context:
          "Création d'une plateforme SaaS permettant la collaboration entre plusieurs sociétés d'expertise d'assurance dans le cadre d'une expertise contradictoire.",
        actions: [
          "Création et configuration du projet au sein d'Azure DevOps Organizations",
          "Mise en place des pipelines CI/CD pour les applications Front (React) et Back (Spring Boot), garantissant un cycle de livraison fluide et automatisé",
          "Provisioning et configuration des services Azure : Azure Container Registry, Azure Container Apps, Azure Blob Storage, Azure SQL Database",
          "Implémentation de l'authentification SSO via React, Spring Security et Azure Entra ID",
          "Sécurisation et gestion fine des autorisations des APIs exposées grâce à Spring Security",
          "Participation à la conception technique et au développement des fonctionnalités de la plateforme (React & Spring Boot)",
          "Contribution à l'amélioration continue de l'architecture et des bonnes pratiques de développement",
        ],
        technologies: [
          "CI/CD",
          "Docker",
          "Azure",
          "Azure Pipelines",
          "Spring Boot",
          "Java",
          "React",
          "TypeScript",
          "Swagger",
          "Git",
        ],
      },
      {
        client: "BNP Paribas",
        role: "Consultant Technique Confirmé",
        date: "Janvier 2022 – Mars 2025",
        context:
          "Au sein des équipes ITG (IT Group de BNP Paribas), dédiées à la réalisation de solutions digitales pour les chargés d'affaires entreprise, avec une contribution sur LifeCycle : solution de maintenance des contrats électroniques bancaires sur tout leur cycle de vie.",
        actions: [
          "Analyser, appréhender et définir les besoins du client",
          "Comprendre les spécifications et les consignes",
          "Contribuer au développement du micro-service de génération d'Excel (Java, Spring Boot)",
          "Migration Scala vers Spring Boot",
          "Migration de Spring Fox vers OpenAPI dans l'application Orchestrateur (Java, Swagger)",
          "Gérer les groupes d'utilisateurs dans l'application Workflow (Java, Spring Boot)",
          "Développer le notificateur Excel asynchrone et toaster (React, TypeScript)",
          "Contribuer au développement des applications Serveur, Orchestrateur, Batch, Workflow et Client",
          "Proposer une architecture technique",
          "Réaliser un prototype de la solution technique pour validation par le métier",
          "Concevoir et développer des tests unitaires, des tests d'intégration et des tests d'acceptation automatiques",
          "Réaliser la maintenance corrective et évolutive",
          "Améliorer la qualité du code",
          "Rédiger la documentation technique",
        ],
        technologies: [
          "Jenkins",
          "Kubernetes",
          "Sonar",
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

      {!mission.placeholder && mission.context && (
        <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">
          {mission.context}
        </p>
      )}

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
