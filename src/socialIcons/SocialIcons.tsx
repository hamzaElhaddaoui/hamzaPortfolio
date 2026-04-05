import type { FC } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./SocialIcons.css";

const SocialIcons: FC = () => {
  return (
    <div className="social-icons">
      <a
        href="https://github.com/hamzaElhaddaoui"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all duration-300"
        aria-label="GitHub"
        title="Visitez mon GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://fr.linkedin.com/in/hamzaelhaddaoui"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all duration-300"
        aria-label="LinkedIn"
        title="Connectez-vous sur LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:hamza.el.haddaoui@gmail.com"
        className="transition-all duration-300"
        aria-label="Email"
        title="Envoyez-moi un email"
      >
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialIcons;
