import type { FC } from "react";
import "./SectionsNav.css";

const SectionsNav: FC = () => {
  return (
    <nav className="sections-nav">
      <ul>
        <li>
          <a className="bright-text" href="#section1">
            About
          </a>
        </li>
        <li>
          <a className="bright-text" href="#section2">
            Academic Background
          </a>
        </li>
        <li>
          <a className="bright-text" href="#section3">
            Professional Experiences
          </a>
        </li>
        <li>
          <a className="bright-text" href="#section4">
            Personal Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SectionsNav;
