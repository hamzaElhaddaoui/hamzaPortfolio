import type { FC } from "react";
import "./AboutMe.css";

const AboutMeData = {
  description:
    "I am a software engineer with a passion for building scalable and efficient applications. I have experience in various programming languages and frameworks, and I enjoy learning new technologies to stay up-to-date in the ever-evolving field of software development.",
};

const AboutMe: FC = () => {
  return (
    <div className="about-me">
      <div className="about-me-title">
        <h2 className="md:hidden block bright-text">About</h2>
      </div>
      <div className="about-me-description">
        <p>{AboutMeData.description}</p>
      </div>
    </div>
  );
};

export default AboutMe;
