import type { FC } from "react";
import "./Title.css";

const TitleData = {
  name: "Hamza EL HADDAOUI",
  title: "Software Engineer",
  description:
    "I am a software engineer with a passion for building scalable and efficient applications. I have experience in various programming languages and frameworks, and I enjoy learning new technologies to stay up-to-date in the ever-evolving field of software development.",
}

const Title: FC = () => {
  return (
    <div className="space-y-2">
      <h1 className="title big-title">{TitleData.name}</h1>
      <h2 className="subtitle sub-title">{TitleData.title}</h2>
      <p className="description">
        {TitleData.description.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
};

export default Title;
