'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const flags = {
  en: { emoji: '🇺🇸', label: 'EN' },
  es: { emoji: '🇪🇸', label: 'ES' },
} as const;

export const LayoutSection = () => {
  const { t, locale, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
  ];

  return (
    <>
      {/* Atmospheric Glow Blobs */}
      <div className="glow-bg" style={{ top: '-10%', left: '-5%' }} />
      <div className="glow-bg" style={{ bottom: '10%', right: '-5%' }} />

      {/* Navigation */}
      <header
        className={`sticky top-0 z-50 border-b border-white/10 h-20 transition-all duration-300 ${
          scrolled
            ? 'bg-surface/80 backdrop-blur-xl shadow-lg'
            : 'bg-surface/60 backdrop-blur-xl'
        }`}
      >
        <nav className="flex justify-between items-center w-full px-5 md:px-[24px] max-w-[1200px] mx-auto h-full gap-4">
          {/* Logo */}
          <div className="font-hanken font-bold text-[28px] leading-[36px] text-on-surface shrink-0">
            Roma Code
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => smoothScroll(e, href)}
                className="font-geist text-[14px] leading-[20px] tracking-[0.05em] uppercase text-on-surface-variant hover:text-primary transition-colors duration-300"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => smoothScroll(e, '#contact')}
              className="bg-primary text-on-primary font-geist text-[14px] leading-[20px] tracking-[0.1em] uppercase px-6 py-2 rounded-full hover:shadow-[0_0_15px_rgba(165,200,255,0.5)] transition-all active:scale-95"
            >
              {t.nav.contact}
            </a>

            {/* Language switcher */}
            <div className="flex items-center gap-1 border border-white/10 rounded-full px-2 py-1 bg-surface-container/50">
              {(['en', 'es'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLocale(lang)}
                  title={lang === 'en' ? 'English' : 'Español'}
                  aria-label={lang === 'en' ? 'Switch to English' : 'Cambiar a Español'}
                  className={`flex items-center gap-1 px-2 py-1 rounded-full text-[12px] font-geist tracking-wider uppercase transition-all duration-200 ${
                    locale === lang
                      ? 'bg-primary/20 text-primary'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  <span className="text-base leading-none">{flags[lang].emoji}</span>
                  <span className="hidden lg:inline">{flags[lang].label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile right side: lang + burger */}
          <div className="flex md:hidden items-center gap-3">
            {/* Compact language switcher mobile */}
            <div className="flex items-center gap-1 border border-white/10 rounded-full px-1.5 py-1 bg-surface-container/50">
              {(['en', 'es'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLocale(lang)}
                  aria-label={lang === 'en' ? 'English' : 'Español'}
                  className={`text-base px-1.5 py-0.5 rounded-full transition-all duration-200 ${
                    locale === lang ? 'bg-primary/20' : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  {flags[lang].emoji}
                </button>
              ))}
            </div>

            <button
              className="text-primary"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-3xl">
                {menuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden glass-card border-t border-white/10 px-5 py-6 flex flex-col gap-5">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => smoothScroll(e, href)}
                className="font-geist text-[14px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => smoothScroll(e, '#contact')}
              className="font-geist text-[14px] uppercase tracking-widest text-primary"
            >
              {t.nav.contact}
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="max-w-[1200px] mx-auto px-5 md:px-[24px]">
        <section
          id="hero"
          className="min-h-[80vh] flex flex-col justify-center items-center text-center py-[120px] relative reveal visible"
        >
          <span className="font-geist text-[14px] leading-[20px] tracking-[0.3em] uppercase text-tertiary mb-6 block animate-float">
            {t.hero.badge}
          </span>
          <h1 className="font-hanken font-extrabold text-[32px] md:text-[72px] leading-[1.1] tracking-tight text-on-surface mb-8 max-w-4xl">
            {t.hero.title}{' '}
            <span className="text-primary">{t.hero.titleHighlight}</span>
          </h1>
          <p className="font-hanken text-[18px] leading-[28px] text-on-surface-variant max-w-2xl mb-12">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#about"
              onClick={(e) => smoothScroll(e, '#about')}
              className="px-10 py-4 bg-primary text-on-primary font-geist text-[14px] tracking-widest uppercase rounded-lg flex items-center gap-2 hover:shadow-[0_0_20px_rgba(165,200,255,0.4)] transition-all"
            >
              {t.hero.cta_about}
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => smoothScroll(e, '#contact')}
              className="px-10 py-4 bg-white/10 border border-primary/30 text-primary font-geist text-[14px] tracking-widest uppercase rounded-lg hover:bg-primary/10 transition-all"
            >
              {t.hero.cta_contact}
            </a>
          </div>
        </section>
      </main>
    </>
  );
};
