import type { FC } from "react";
import "./Title.css";

const TitleData = {
  name: "Hamza EL HADDAOUI",
  title: "Ingénieur DevOps & Fullstack",
  description:
    "Passionné par le DevOps et l'automatisation pour améliorer la fiabilité et l'efficacité.",
};

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
