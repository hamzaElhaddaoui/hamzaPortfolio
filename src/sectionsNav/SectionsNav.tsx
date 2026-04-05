import { useEffect, useState } from "react";
import "./SectionsNav.css";

const sections = [
  { id: "section1", label: "À propos" },
  { id: "section2", label: "Formation" },
  { id: "section3", label: "Expériences" },
  { id: "section4", label: "Projets" },
];

const SectionsNav = () => {
  const [activeId, setActiveId] = useState("section1");

  useEffect(() => {
    let ticking = false;
    const sectionElements = sections
      .map(({ id }) => ({ id, el: document.getElementById(id) }))
      .filter(
        (item): item is { id: string; el: HTMLElement } => item.el !== null,
      );

    const updateActiveSection = () => {
      const offset = 140;
      let currentId = sections[0].id;

      for (const { id, el } of sectionElements) {
        if (el.getBoundingClientRect().top <= offset) {
          currentId = id;
        }
      }

      setActiveId(currentId);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="space-y-2 flex flex-col">
      {sections.map(({ id, label }) => (
        <div
          key={id}
          className={`section-link group${activeId === id ? " active" : ""}`}
        >
          <div className="line"></div>
          <a
            className="bright-text"
            href={`#${id}`}
            aria-current={activeId === id ? "true" : undefined}
          >
            {label}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SectionsNav;
