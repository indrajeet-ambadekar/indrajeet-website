import logo from "./logo.svg";
import { AppHeader, Avatar, Text } from "lumina-design";
import { LuminaIcon } from "lumina-design-icons";
import IntroSection from "./views/intro";
import AboutSection from "./views/about";
import SkillSection from "./views/skills";
import JourneySection from "./views/journey";
import ProjectSection from "./views/projects";
import ContactSection from "./views/contact";
function App() {
  return (
    <div className='App'>
      <AppHeader
        className='app-header'
        companyIcon={true}
        secondaryIcon={null}
        onIconClick={() => {
          alert("Header Icon Clicked");
        }}
        profileIcon={null}
      >
        <div className='header-nav-wrapper'>
          <Text type='h3' className='header-title'>
            Indrajeet <em>Ambadekar</em>
          </Text>
        </div>
      </AppHeader>
      <div className='section-wrapper'>
        <IntroSection />
        <AboutSection />
        <JourneySection />
        {/* <ProjectSection /> */}
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
