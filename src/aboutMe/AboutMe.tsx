import type { FC } from "react";
import "./AboutMe.css";

const AboutMe: FC = () => {
  return (
    <section className="about-me">
      <h2 className="md:hidden block bright-text">About</h2>
      <p>
        I am a software engineer with a passion for building scalable and
        efficient applications. I have experience in various programming
        languages and frameworks, and I enjoy learning new technologies to stay
        up-to-date in the ever-evolving field of software development.
      </p>
    </section>
  );
};

export default AboutMe;
