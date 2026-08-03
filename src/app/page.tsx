'use client';
import { useEffect } from 'react';
import { AboutComponent } from './components/about/AboutComponent';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';
import { LayoutSection } from './components/layoutSection/LayoutSection';
import { ProjectsComponent } from './components/projects/ProjectsComponent';
import { SkillsSection } from './components/skills/SkillsSection';

export default function Home() {
  useEffect(() => {
    // Global scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <LayoutSection />
      <AboutComponent />
      <SkillsSection />
      <ProjectsComponent />
      <ContactSection />
      <Footer />
    </>
  );
}
