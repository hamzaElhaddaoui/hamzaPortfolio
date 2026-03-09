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
        <h2 className="md:hidden block bright-text">Academic Background</h2>
      </div>
      <div className="space-y-5">
        {academicItems.map((item, index) => (
          <div className="flex" key={index}>
            <div className="md:basis-1/5 text-xs mt-0.5">{item.date}</div>
            <div className="md:basis-4/5 text-sm">
              <h3 className="uppercase">
                {item.title}, filière {item.field}
              </h3>
              {item.titleNature && (
                <div className="text-xs">{item.titleNature}</div>
              )}
              <div className="text-xs mt-2">
                {item.university}, {item.city}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicBackground;
