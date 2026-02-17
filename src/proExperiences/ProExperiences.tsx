import type { FC } from "react";
import "./ProExperiences.css";

const proExperiences = [
  {
    title: "Software Engineer at XYZ Company",
    description:
      "Worked on developing and maintaining web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
  },
  {
    title: "Frontend Developer at ABC Inc.",
    description:
      "Focused on creating responsive and user-friendly interfaces using HTML, CSS, and JavaScript. Implemented design mockups and optimized performance for better user experience.",
  },
];

const ProExperiences: FC = () => {
  return (
    <div className="pro-experiences">
      <div className="pro-experiences-title">
        <h2 className="md:hidden block bright-text">
          Professional Experiences
        </h2>
      </div>
      <div className="pro-experiences-list space-y-5">
        {proExperiences.map((experience) => (
          <div className="pro-experience-item space-y-2" key={experience.title}>
            <h3 className="pro-experience-title">{experience.title}</h3>
            <p className="pro-experience-description">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProExperiences;
