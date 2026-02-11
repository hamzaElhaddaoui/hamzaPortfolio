import type { FC } from "react";
import "./Title.css";

const Title: FC = () => {
  return (
    <>
      <h1 className="title bright-text">Hamza EL HADDAOUI</h1>
      <h2 className="subtitle bright-text">Software Engineer</h2>
      <p className="description">
        I am a software engineer with a passion for building scalable and
        efficient applications. I have experience in various programming
        languages and frameworks, and I enjoy learning new technologies to stay
        up-to-date in the ever-evolving field of software development.
      </p>
    </>
  );
};

export default Title;
