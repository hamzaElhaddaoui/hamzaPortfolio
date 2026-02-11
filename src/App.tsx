import type { FC } from "react";
import Title from "./title/Title";
import SectionsNav from "./sectionsNav/SectionsNav";
import AboutMe from "./aboutMe/AboutMe";
import AcademicBackground from "./academicBackground/academicBackground";
import ProExperiences from "./proExperiences/ProExperiences";
import PersonalProjects from "./personalProjects/PersonalProjects";
import SocialIcons from "./socialIcons/SocialIcons";

const App: FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col space-y-8 p-4 items-start md:h-screen w-full md:w-auto">
          <div>
            <Title />
          </div>
          <div className="hidden md:block">
            <SectionsNav />
          </div>
          <div className="mt-auto">
            <SocialIcons />
          </div>
        </div>

        <div className="flex flex-col space-y-8 p-4 flex-1 overflow-y-auto md:h-screen">
          <div id="section1">
            <AboutMe />
          </div>
          <div id="section2">
            <AcademicBackground />
          </div>
          <div id="section3">
            <ProExperiences />
          </div>
          <div id="section4">
            <PersonalProjects />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
