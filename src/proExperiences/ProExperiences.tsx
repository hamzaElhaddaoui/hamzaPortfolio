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
    contract: "Alternance - Développeur Full Stack",
    company: "SeveUp",
    date: "Septembre 2020 – Septembre 2021",
    description:
      "L'objectif de la mission était de créer l'ensemble des services permettant de relier les bâtiments digitaux BIM à la BI pour extraire des valeurs exploitables. Intégré à l'équipe de développement, j'ai contribué from scratch aux parties backend et frontend.",
    missions: [
      "Analyser, appréhender et définir les besoins client",
      "Comprendre les spécifications et les consignes fonctionnelles",
      "Développer la Plateforme API centrale pour gérer les abonnements clients et filtrer les accès vers les services",
      "Développer le micro-service IFCConverter pour transformer les données BIM vers une base relationnelle dédiée à la BI",
      "Concevoir et développer le micro-service DataTracker avec sa partie IHM",
      "Développer une application en lien avec PostgreSQL",
      "Proposer une architecture technique et réaliser des prototypes de validation métier",
      "Concevoir et développer des tests unitaires, d'intégration et d'acceptation automatiques",
      "Réaliser la maintenance corrective et évolutive",
      "Améliorer la qualité du code et rédiger la documentation technique",
    ],
    technologies: [
      "Java 8",
      "JEE",
      "Spring Boot",
      "JHipster",
      "React",
      "TypeScript",
      "Swagger",
      "JUnit",
      "Oracle",
      "Angular",
      "Angular Material",
      "HTML",
      "CSS",
      "Docker",
      "Microservices",
      "PostgreSQL",
    ],
  },
];

const TechBadge: FC<{ tech: string }> = ({ tech }) => (
  <span className="tech-badge">
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
      className={`mission-block ${
        mission.placeholder
          ? "border-dashed opacity-60"
          : ""
      }`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
        <h4 className="font-semibold text-sm text-slate-100">
          {mission.placeholder
            ? `${mission.client} — (en cours de complétion)`
            : mission.client}
        </h4>
        <span className="text-xs text-slate-500 shrink-0">
          {mission.date}
        </span>
      </div>
      <p className="text-xs text-slate-500 italic mb-3">
        {mission.role}
      </p>

      {!mission.placeholder && mission.context && (
        <p className="text-xs text-slate-400 mb-3">
          {mission.context}
        </p>
      )}

      {!mission.placeholder && mission.actions.length > 0 && (
        <div className="mb-3">
          <p className="text-xs font-medium mb-1 text-slate-200">Actions réalisées :</p>
          <ul className="list-disc list-inside text-xs space-y-0.5 text-slate-400">
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
  <div className="company-block">
    <div className="company-header">
      <div className="company-name">{exp.company}</div>
      <div className="company-contract">{exp.contract}</div>
      <div className="company-date">Depuis {exp.startDate}</div>
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
  <div className="company-block">
    <div className="company-header">
      <div className="company-name">{exp.company}</div>
      <div className="company-contract">{exp.contract}</div>
      <div className="company-date">{exp.date}</div>
    </div>

    <div className="mt-2">
      <p className="text-xs text-slate-400 mb-3">
          {exp.description}
        </p>
        <p className="text-xs font-medium text-slate-200">Missions réalisées :</p>
        <ul className="list-disc list-inside mt-1 text-xs space-y-0.5 text-slate-400">
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
);

const ProExperiences: FC = () => {
  return (
    <div className="pro-experiences">
      <div className="pro-experiences-title">
        <h2 className="lg:hidden block bright-text">Expériences Professionnelles</h2>
      </div>
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
