'use client';
import { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const skills = [
  { icon: 'html',                        label: 'HTML5' },
  { icon: 'css',                         label: 'CSS3' },
  { icon: 'javascript',                  label: 'JavaScript' },
  { icon: 'data_object',                 label: 'TypeScript' },
  { icon: 'deployed_code',              label: 'React' },
  { icon: 'bolt',                        label: 'Next.js' },
  { icon: 'settings_input_component',   label: 'Node.js' },
  { icon: 'palette',                     label: 'Tailwind' },
  { icon: 'storage',                     label: 'MongoDB' },
  { icon: 'draw',                        label: 'Figma' },
  { icon: 'fork_right',                  label: 'Git' },
  { icon: 'api',                         label: 'REST API' },
];

export const SkillsSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="max-w-[1200px] mx-auto px-5 md:px-[24px]">
      <section id="skills" className="py-[120px] scroll-mt-24 reveal">
        <div className="glass-card rounded-3xl p-12 relative overflow-hidden">
          {/* Decorative background icon */}
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none select-none">
            <span className="material-symbols-outlined" style={{ fontSize: '200px' }}>code</span>
          </div>

          <h2 className="font-hanken font-bold text-[48px] leading-[56px] text-on-surface mb-12">
            {t.skills.title}{' '}
            <span className="text-primary">{t.skills.titleHighlight}</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.label}
                className="chip-gradient rounded-xl p-4 flex items-center gap-3 hover:bg-tertiary/10 transition-colors cursor-default"
              >
                <span className="material-symbols-outlined text-tertiary">{skill.icon}</span>
                <span className="font-geist text-[14px] leading-[20px] tracking-[0.05em] font-medium">
                  {skill.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
