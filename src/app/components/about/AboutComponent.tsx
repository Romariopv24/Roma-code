'use client';
import { useEffect, useRef } from 'react';

const expertiseCards = [
  {
    icon: 'developer_mode_tv',
    color: 'text-primary',
    bg: 'bg-primary/10',
    title: 'Frontend',
    description:
      'Building responsive, interactive user interfaces with modern React and Next.js ecosystems.',
  },
  {
    icon: 'terminal',
    color: 'text-tertiary',
    bg: 'bg-tertiary/10',
    title: 'Backend',
    description:
      'Designing secure, high-performance APIs and microservices using Node.js and TypeScript.',
  },
  {
    icon: 'database',
    color: 'text-primary',
    bg: 'bg-primary/10',
    title: 'Database',
    description:
      'Architecting efficient data structures and optimizing queries with MongoDB, PostgreSQL, and Redis.',
  },
  {
    icon: 'grid_view',
    color: 'text-tertiary',
    bg: 'bg-tertiary/10',
    title: 'Design Systems',
    description:
      'Creating consistent, modular design tokens and components for unified brand identities.',
  },
];

export const AboutComponent = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="max-w-[1200px] mx-auto px-5 md:px-[24px]">
      {/* About Me */}
      <section id="about" className="py-[120px] scroll-mt-24 reveal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-hanken font-bold text-[48px] leading-[56px] mb-8 text-on-surface">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="space-y-6 font-hanken text-[18px] leading-[28px] text-on-surface-variant text-center">
            <p>
              I am Romario Parra, a dedicated Full-Stack Developer specializing in building robust,
              high-conversion web applications. With a foundation in engineering and a passion for
              pixel-perfect design, I bridge the gap between complex backend logic and intuitive
              frontend interfaces.
            </p>
            <p>
              My expertise lies in crafting scalable architectures using modern frameworks like
              Next.js and Node.js. I prioritize performance, accessibility, and clean code to ensure
              every project not only looks stunning but delivers exceptional user results.
            </p>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-[120px] reveal">
        <div className="text-center mb-16">
          <h2 className="font-hanken font-bold text-[48px] leading-[56px] text-on-surface mb-4">
            Core <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto font-hanken text-[18px] leading-[28px]">
            Specialized skill sets across the entire development lifecycle.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseCards.map((card) => (
            <div
              key={card.title}
              className="glass-card p-8 rounded-2xl flex flex-col items-start gap-6 transition-transform duration-300 hover:-translate-y-2"
            >
              <div
                className={`w-12 h-12 rounded-lg ${card.bg} flex items-center justify-center ${card.color}`}
              >
                <span className="material-symbols-outlined text-3xl">{card.icon}</span>
              </div>
              <h3 className="font-hanken font-semibold text-[32px] leading-[40px]">
                {card.title}
              </h3>
              <p className="text-on-surface-variant text-sm font-hanken">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
