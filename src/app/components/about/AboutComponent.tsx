'use client';
import { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const cardKeys = ['frontend', 'backend', 'database', 'design'] as const;

const cardMeta = [
  { key: 'frontend', icon: 'developer_mode_tv', color: 'text-primary', bg: 'bg-primary/10' },
  { key: 'backend',  icon: 'terminal',           color: 'text-tertiary', bg: 'bg-tertiary/10' },
  { key: 'database', icon: 'database',           color: 'text-primary', bg: 'bg-primary/10' },
  { key: 'design',   icon: 'grid_view',          color: 'text-tertiary', bg: 'bg-tertiary/10' },
] as const;

export const AboutComponent = () => {
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
      {/* About Me */}
      <section id="about" className="py-[120px] scroll-mt-24 reveal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-hanken font-bold text-[48px] leading-[56px] mb-8 text-on-surface">
            {t.about.title}{' '}
            <span className="text-primary">{t.about.titleHighlight}</span>
          </h2>
          <div className="space-y-6 font-hanken text-[18px] leading-[28px] text-on-surface-variant text-center">
            <p>{t.about.paragraph1}</p>
            <p>{t.about.paragraph2}</p>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-[120px] reveal">
        <div className="text-center mb-16">
          <h2 className="font-hanken font-bold text-[48px] leading-[56px] text-on-surface mb-4">
            {t.expertise.title}{' '}
            <span className="text-primary">{t.expertise.titleHighlight}</span>
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto font-hanken text-[18px] leading-[28px]">
            {t.expertise.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardMeta.map((card) => (
            <div
              key={card.key}
              className="glass-card p-8 rounded-2xl flex flex-col items-start gap-6 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className={`w-12 h-12 rounded-lg ${card.bg} flex items-center justify-center ${card.color}`}>
                <span className="material-symbols-outlined text-3xl">{card.icon}</span>
              </div>
              <h3 className="font-hanken font-semibold text-[28px] leading-[36px]">
                {t.expertise.cards[card.key].title}
              </h3>
              <p className="text-on-surface-variant text-sm font-hanken">
                {t.expertise.cards[card.key].description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
