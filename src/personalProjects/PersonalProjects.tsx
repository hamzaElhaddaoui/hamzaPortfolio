import type { FC } from "react";
import "./PersonalProjects.css";

const PersonalProjectsData = [
  {
    title: "Portfolio Website",
    description:
      "I built a personal portfolio website to showcase my projects and skills. It is built using React and styled with CSS. The website includes sections for my about me, academic background, professional experiences, and personal projects.",
  },
  {
    title: "Task Management App",
    description:
      "I developed a task management application using Node.js and Express for the backend, and React for the frontend. The app allows users to create, update, and delete tasks, as well as organize them into different categories.",
  },
];

const PersonalProjects: FC = () => {
  return (
    <div className="personal-projects">
      <div className="personal-projects-title">
        <h2 className="md:hidden block bright-text">Personal Projects</h2>
      </div>
      <div className="personal-projects-list  space-y-5">
        {PersonalProjectsData.map((project, index) => (
          <div key={index} className="personal-projects-item space-y-2">
            <h3 className="personal-projects-item-title">{project.title}</h3>
            <p className="personal-projects-item-description">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalProjects;
