import type { FC } from "react";
import "./AcademicBackground.css";

const AcademicBackground: FC = () => {
  return (
    <div className="academic-background">
      <h2 className="md:hidden block bright-text">Academic Background</h2>
      <div className="academic-background-list">
        <div className="academic-background-item">
          <h3 className="academic-background-title">
            Bachelor of Science in Computer Science
          </h3>
          <p className="academic-background-description">
            Graduated from XYZ University with a focus on software engineering
            and data structures. Completed coursework in algorithms, databases,
            and web development.
          </p>
        </div>
        <div className="academic-background-item">
          <h3 className="academic-background-title">
            Master of Science in Software Engineering
          </h3>
          <p className="academic-background-description">
            Pursued a master's degree at ABC University, specializing in
            software architecture and design patterns. Conducted research on
            scalable software systems and published a thesis on microservices
            architecture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademicBackground;
