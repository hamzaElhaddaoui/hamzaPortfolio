import type { FC } from "react";
import "./ProExperiences.css";

const ProExperiences: FC = () => {
  return (
    <div className="pro-experiences">
      <h2 className="md:hidden block bright-text">Professional Experiences</h2>
      <div className="pro-experiences-list">
        <div className="pro-experience-item">
          <h3 className="pro-experience-title">
            Software Engineer at XYZ Company
          </h3>
          <p className="pro-experience-description">
            Worked on developing and maintaining web applications using React
            and Node.js. Collaborated with cross-functional teams to deliver
            high-quality software solutions.
          </p>
        </div>
        <div className="pro-experience-item">
          <h3 className="pro-experience-title">
            Frontend Developer at ABC Inc.
          </h3>
          <p className="pro-experience-description">
            Focused on creating responsive and user-friendly interfaces using
            HTML, CSS, and JavaScript. Implemented design mockups and optimized
            performance for better user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProExperiences;
