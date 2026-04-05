import type { FC } from "react";
import "./AcademicBackground.css";

const academicItems = [
  {
    title: "Cycle d'ingénieur",
    field: "Génie logiciel",
    date: "2019–2021",
    titleNature: "Double diplôme ENSIAS–ISIMA",
    university:
      "ISIMA — Institut Supérieur d'Informatique, de Modélisation et de leurs Applications",
    city: "Clermont‑Ferrand, France",
  },
  {
    title: "Cycle d'ingénieur",
    field: "Génie logiciel",
    date: "2017–2020",
    university:
      "ENSIAS — École Nationale Supérieure d'Informatique et d'Analyse des Systèmes",
    city: "Rabat, Maroc",
  },
];

const AcademicBackground: FC = () => {
  return (
    <div className="academic-background">
      <div className="academic-background-title">
        <h2 className="lg:hidden block bright-text">Formation</h2>
      </div>
      <div className="space-y-4">
        {academicItems.map((item, index) => (
          <div className="academic-item" key={index}>
            <span className="academic-date">{item.date}</span>
            <div>
              <h3 className="academic-degree">
                {item.title}, filière {item.field}
              </h3>
              {item.titleNature && (
                <div className="academic-degree-nature">{item.titleNature}</div>
              )}
              <div className="academic-university">{item.university}</div>
              <div className="academic-city">{item.city}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicBackground;
