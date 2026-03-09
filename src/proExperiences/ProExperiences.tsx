import type { FC } from "react";
import "./ProExperiences.css";

const proExperiences = [
  // {
  //   title: "Consultant Technique Comfirmé",
  //   kind: "CDI",
  //   isEsn: true,
  //   company: "Mind7",
  //   date: "2021–Présent",
  //   description: "",
  //   missions: [],
  // },
  {
    title: "Fullstack Développer",
    kind: "Alternance",
    isEsn: false,
    company: "SeveUp",
    date: "2020–2021",
    description: "Conception et développement des services métiers de SeveUp",
    missions: [
      "Développement de la plateforme API (Gateway)",
      "Conception et developpement de l'application IFC Converter",
      "Conception et developpement de l'application DataTracker",
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

const ProExperiences: FC = () => {
  return (
    <div>
      <h2 className="md:hidden block bright-text">Professional Experiences</h2>
      {proExperiences.map((experience, index) => (
        <div
          className="flex w-full p-4 rounded-lg border border-transparent transition-transform duration-200 transform hover:shadow-lg hover:-translate-y-1 hover:border-gray-200 dark:hover:border-gray-700 dark:bg-gray-800/60"
          key={index}
        >
          <div className="md:basis-1/5 text-xs mt-0.5">{experience.date}</div>
          <div className="md:basis-4/5 text-sm">
            <h3 className="">
              {experience.kind} - {experience.title}
            </h3>
            <div> {experience.company}</div>
            <div className="mt-2">{experience.description}</div>
            <div className="mt-2">
              <strong>Missions réalisées :</strong>
              <ul className="list-disc list-inside mt-2">
                {experience.missions.map((mission, missionIndex) => (
                  <li key={missionIndex}>{mission}</li>
                ))}
              </ul>
            </div>
            <div className="mt-2">
              <strong>Technologies utilisées :</strong>
              <div className="mt-2 flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-flex items-center px-2 py-0.5 rounded-full bg-gray-100 text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProExperiences;
