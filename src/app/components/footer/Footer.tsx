import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-surface border-t border-white/10 py-12">
      <div className="max-w-[1200px] mx-auto px-5 md:px-[24px] flex flex-col items-center gap-2">
        {/* Brand */}
        <div className="font-hanken font-semibold text-[32px] leading-[40px] text-on-surface mb-6">
          Roma Code
        </div>

        {/* Nav links */}
        <div className="flex gap-8 mb-8 flex-wrap justify-center">
          {['#about', '#skills', '#projects', '#contact'].map((href) => (
            <a
              key={href}
              href={href}
              className="font-hanken text-[16px] leading-[24px] text-on-surface-variant hover:text-primary transition-colors"
            >
              {href.replace('#', '').charAt(0).toUpperCase() + href.slice(2)}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-hanken text-[16px] leading-[24px] text-on-surface-variant opacity-60">
            Copyright © 2026 Romario Parra. All rights reserved.
          </p>
          <div className="mt-4 flex gap-4 justify-center">
            <a
              href="https://github.com/Romariopv24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-transform hover:scale-110"
              aria-label="GitHub"
            >
              <span className="material-symbols-outlined">code</span>
            </a>
            <a
              href="https://www.linkedin.com/in/romario-parra-7865921b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <span className="material-symbols-outlined">link</span>
            </a>
            <span className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-transform hover:scale-110 cursor-pointer">
              language
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
