import type { FC } from "react";
import "./SectionsNav.css";

const SectionsNav: FC = () => {
  return (
    <div className="space-y-2 flex flex-col">
      <div className="section-link group">
        <div className="line"></div>
        <a className="bright-text" href="#section1">
          About
        </a>
      </div>
      <div className="section-link group">
        <div className="line"></div>
        <a className="bright-text" href="#section2">
          Academic Background
        </a>
      </div>
      <div className="section-link group">
        <div className="line"></div>
        <a className="bright-text" href="#section3">
          Professional Experiences
        </a>
      </div>
      <div className="section-link group">
        <div className="line"></div>
        <a className="bright-text" href="#section4">
          Personal Projects
        </a>
      </div>
    </div>
  );
};

export default SectionsNav;
