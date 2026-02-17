import type { FC } from "react";
import "./AcademicBackground.css";

const academicItems = [
  {
    title: "Bachelor of Science in Computer Science",
    description:
      "Graduated from XYZ University with a focus on software engineering and data structures. Completed coursework in algorithms, databases, and web development.",
  },
  {
    title: "Master of Science in Software Engineering",
    description:
      "Pursued a master's degree at ABC University, specializing in software architecture and design patterns. Conducted research on scalable software systems and published a thesis on microservices architecture.",
  },
];

const AcademicBackground: FC = () => {
  return (
    <div className="academic-background">
      <div className="academic-background-title">
        <h2 className="md:hidden block bright-text">Academic Background</h2>
      </div>
      <div className="academic-background-list space-y-5">
        {academicItems.map((item) => (
          <div className="academic-background-item space-y-2" key={item.title}>
            <h3 className="academic-background-title">{item.title}</h3>
            <p className="academic-background-description">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicBackground;
