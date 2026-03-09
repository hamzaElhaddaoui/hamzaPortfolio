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
    <div className="container mx-auto mt-20 px-10">
      <div className="md:flex">
        <div className="flex flex-col space-y-15 items-start md:fixed md:top-20 md:left-[18%] md:w-[20%] md:h-[calc(100vh-5rem)] md:justify-between">
          <div>
            <Title />
          </div>
          <div className="hidden md:block">
            <SectionsNav />
          </div>
          <div className="md:mt-auto md:mb-20">
            <SocialIcons />
          </div>
        </div>
        <div className="flex flex-col space-y-15 flex-1 md:ml-[41%] md:mr-[13%] md:pl-7">
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
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default App;
