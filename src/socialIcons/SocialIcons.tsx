import type { FC } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SocialIcons: FC = () => {
  return (
    <div className="social-icons flex space-x-6">
      <a
        href="https://github.com/hamzaElhaddaoui"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl hover:text-white hover:scale-125 transition-all duration-300"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://fr.linkedin.com/in/hamzaelhaddaoui"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl hover:text-white hover:scale-125 transition-all duration-300"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:hamza.el.haddaoui@gmail.com"
        className="text-2xl hover:text-white hover:scale-125 transition-all duration-300"
        aria-label="Email"
      >
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialIcons;
