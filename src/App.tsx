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
    <div className="min-h-screen relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-20 space-y-8 md:space-y-12">
              <div className="animate-fade-in">
                <Title />
              </div>
              <nav className="hidden lg:block animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <SectionsNav />
              </nav>
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <SocialIcons />
              </div>
            </div>
          </aside>

          {/* Mobile Navigation */}
          <div className="lg:hidden col-span-1 animate-slide-down">
            <nav className="flex justify-center mb-8">
              <SectionsNav />
            </nav>
          </div>

          {/* Main Content */}
          <main className="lg:col-span-8 space-y-12 md:space-y-16">
            <section id="about-me" className="animate-fade-in">
              <AboutMe />
            </section>
            <section id="academic-background" className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <AcademicBackground />
            </section>
            <section id="professional-experiences" className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <ProExperiences />
            </section>
            <section id="personal-projects" className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <PersonalProjects />
            </section>
            <div className="pb-20"></div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
