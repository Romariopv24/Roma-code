'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';
import { projectInfo } from './projectInfo';

const tagColors: Record<string, string> = {
  React:   'bg-primary/20 text-primary border-primary/30',
  'Next.js': 'bg-primary/20 text-primary border-primary/30',
  'Vue.js':  'bg-tertiary/20 text-tertiary border-tertiary/30',
  Angular:   'bg-primary/20 text-primary border-primary/30',
  'Node.js': 'bg-tertiary/20 text-tertiary border-tertiary/30',
  MongoDB:   'bg-primary/20 text-primary border-primary/30',
  Tailwind:  'bg-tertiary/20 text-tertiary border-tertiary/30',
  default:   'bg-primary/20 text-primary border-primary/30',
};
const getTagClass = (tech: string) => tagColors[tech] || tagColors['default'];

export const ProjectsComponent = () => {
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
      <section id="projects" className="py-[120px] scroll-mt-24 reveal">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-hanken font-bold text-[48px] leading-[56px] text-on-surface mb-4">
              {t.projects.title}{' '}
              <span className="text-primary">{t.projects.titleHighlight}</span>
            </h2>
            <p className="text-on-surface-variant max-w-xl font-hanken text-[18px] leading-[28px]">
              {t.projects.subtitle}
            </p>
          </div>
          <div className="flex gap-4">
            <button
              className="p-3 rounded-full border border-white/10 hover:border-primary transition-colors"
              aria-label="Previous"
            >
              <span className="material-symbols-outlined">west</span>
            </button>
            <button
              className="p-3 rounded-full border border-white/10 hover:border-primary transition-colors"
              aria-label="Next"
            >
              <span className="material-symbols-outlined">east</span>
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projectInfo.map((project, idx) => (
            <div key={idx} className="group">
              <div className="aspect-video rounded-2xl overflow-hidden glass-card mb-6 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 flex gap-2 flex-wrap">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-[10px] font-bold rounded uppercase tracking-widest border ${getTagClass(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="font-hanken font-semibold text-[32px] leading-[40px] mb-2">
                {project.title}
              </h3>
              <p className="text-on-surface-variant font-hanken text-[16px] leading-[24px] mb-6">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-geist text-[14px] tracking-[0.05em] uppercase hover:gap-4 transition-all"
              >
                {t.projects.viewProject}
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
