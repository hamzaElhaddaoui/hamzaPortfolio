import type { FC } from "react";
import "./PersonalProjects.css";

const PersonalProjects: FC = () => {
  return (
    <section className="personal-projects">
      <h2 className="md:hidden block bright-text">Personal Projects</h2>
      <ul>
        <li>
          <h3>Project 1: Portfolio Website</h3>
          <p>
            I built a personal portfolio website to showcase my projects and
            skills. It is built using React and styled with CSS. The website
            includes sections for my about me, academic background, professional
            experiences, and personal projects.
          </p>
        </li>
        <li>
          <h3>Project 2: Task Management App</h3>
          <p>
            I developed a task management application using Node.js and Express
            for the backend, and React for the frontend. The app allows users to
            create, update, and delete tasks, as well as organize them into
            different categories.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default PersonalProjects;
