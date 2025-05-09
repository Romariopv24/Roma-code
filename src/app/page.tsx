import { AboutComponent } from "./components/about/AboutComponent";
import { ContactSection } from "./components/contact/ContactSection";
import { LayoutSection } from "./components/layoutSection/LayoutSection";
import { ProjectsComponent } from "./components/projects/ProjectsComponent";
import { SkillsSection } from "./components/skills/SkillsSection";
import styles from "./page.module.css";


export default function Home() {
  return (
    <>  
    <div className={styles.container}>
   <LayoutSection />
   <AboutComponent />
    <SkillsSection />
    <ProjectsComponent />
    <ContactSection />
   </div>
   </>

  );
}
