import type { FC } from "react";

const SocialIcons: FC = () => {
  return (
    <div className="social-icons flex space-x-4">
      <a
        href="https://www.linkedin.com/in/hamza-el-haddaoui"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/linkedin-icon.png" alt="LinkedIn" className="social-icon" />
      </a>
      <a
        href="https://www.github.com/hamzaelhad"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/github-icon.png" alt="GitHub" className="social-icon" />
      </a>
      {/* Ajouter d'autres icônes de réseaux sociaux si nécessaire */}
    </div>
  );
};

export default SocialIcons;
