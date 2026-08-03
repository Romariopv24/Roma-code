'use client';
import { useEffect, useRef } from 'react';

export const ContactSection = () => {
  const email = 'rparradev24@gmail.com';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
      '_blank'
    );
  };

  return (
    <div ref={sectionRef} className="max-w-[1200px] mx-auto px-5 md:px-[24px]">
      <section id="contact" className="py-[120px] mb-24 scroll-mt-24 reveal">
        <div className="glass-card rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none opacity-10 bg-gradient-to-br from-primary/20 via-transparent to-tertiary/20" />

          <h2 className="font-hanken font-bold text-[32px] md:text-[48px] leading-[1.15] mb-8 relative z-10">
            Ready to <span className="text-primary">Connect?</span>
          </h2>
          <p className="font-hanken text-[18px] leading-[28px] text-on-surface-variant max-w-2xl mx-auto mb-12 relative z-10">
            Whether you have a specific project in mind or just want to explore the possibilities
            of web technology, let&apos;s build something exceptional together.
          </p>

          {/* Contact Form */}
          <form
            className="max-w-lg mx-auto space-y-6 relative z-10"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-surface-container/50 border border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-on-surface-variant/50 font-hanken text-on-surface w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-surface-container/50 border border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-on-surface-variant/50 font-hanken text-on-surface w-full"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full bg-surface-container/50 border border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-on-surface-variant/50 font-hanken text-on-surface resize-none"
            />
            <button
              type="submit"
              className="w-full py-4 bg-primary text-on-primary font-geist text-[14px] tracking-widest uppercase rounded-xl hover:shadow-[0_0_30px_rgba(165,200,255,0.4)] transition-all active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="mt-16 flex justify-center gap-10 relative z-10">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-hanken text-[16px]"
            >
              <span className="material-symbols-outlined">mail</span>
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/romario-parra-7865921b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-hanken text-[16px]"
            >
              <span className="material-symbols-outlined">link</span>
              LinkedIn
            </a>
            <a
              href="https://github.com/Romariopv24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-hanken text-[16px]"
            >
              <span className="material-symbols-outlined">code</span>
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};