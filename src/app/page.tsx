'use client'
import { AboutComponent } from "./components/about/AboutComponent";
import { ContactSection } from "./components/contact/ContactSection";
import { Footer } from "./components/footer/Footer";
import { LayoutSection } from "./components/layoutSection/LayoutSection";
import { ProjectsComponent } from "./components/projects/ProjectsComponent";
import { SkillsSection } from "./components/skills/SkillsSection";
import styles from "./page.module.css";


export default function Home() {
  return (
    <>  
    <div className={styles.container} style={{ scrollBehavior: 'smooth' }}>
      <LayoutSection />
      <div id="about">
        <AboutComponent />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="projects">
        <ProjectsComponent />
      </div>
      <div id="contact">
      <ContactSection />
      <Footer />
      </div>
    </div>
    </>

  );
}
