'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface CaptchaData {
  token: string;
  question: string;
}

export const ContactSection = () => {
  const { t } = useLanguage();
  const email = 'rparradev24@gmail.com';
  const sectionRef = useRef<HTMLDivElement>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    captchaAnswer: '',
  });

  // CAPTCHA state
  const [captcha, setCaptcha] = useState<CaptchaData | null>(null);
  const [captchaLoading, setCaptchaLoading] = useState(false);

  // Feedback alert state
  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  // IntersectionObserver for reveal animation
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

  // Fetch CAPTCHA from API
  const fetchCaptcha = useCallback(async () => {
    setCaptchaLoading(true);
    try {
      const res = await fetch('/api/contact');
      if (res.ok) {
        const data = await res.json();
        setCaptcha(data);
      }
    } catch (err) {
      console.error('Failed to load CAPTCHA:', err);
    } finally {
      setCaptchaLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCaptcha();
  }, [fetchCaptcha]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captcha) return;

    setStatus({ type: 'loading', message: '' });

    // Abort controller with 8-second timeout to prevent pending requests
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          captchaToken: captcha.token,
          captchaAnswer: formData.captchaAnswer,
        }),
      });

      clearTimeout(timeoutId);
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          type: 'success',
          message: t.contact.successAlert,
        });
        setFormData({ name: '', email: '', message: '', captchaAnswer: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to send message.',
        });
      }
    } catch (err: unknown) {
      clearTimeout(timeoutId);
      console.error('Submit error:', err);
      const isAbort = err instanceof Error && err.name === 'AbortError';
      setStatus({
        type: 'error',
        message: isAbort
          ? 'Request timed out. Please try again.'
          : 'Network error. Please try again.',
      });
    } finally {
      fetchCaptcha(); // Refresh CAPTCHA for next submission
    }
  };

  return (
    <div ref={sectionRef} className="max-w-[1200px] mx-auto px-5 md:px-[24px]">
      <section id="contact" className="py-[120px] mb-24 scroll-mt-24 reveal">
        <div className="glass-card rounded-[40px] p-6 md:p-12 md:p-24 text-center relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none opacity-10 bg-gradient-to-br from-primary/20 via-transparent to-tertiary/20" />

          <h2 className="font-hanken font-bold text-[32px] md:text-[48px] leading-[1.15] mb-8 relative z-10">
            {t.contact.title}{' '}
            <span className="text-primary">{t.contact.titleHighlight}</span>
          </h2>
          <p className="font-hanken text-[18px] leading-[28px] text-on-surface-variant max-w-2xl mx-auto mb-12 relative z-10">
            {t.contact.subtitle}
          </p>

          {/* Form */}
          <form
            className="max-w-lg mx-auto space-y-6 relative z-10 text-left"
            onSubmit={handleSubmit}
          >
            {/* Status Alerts */}
            {status.type === 'success' && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-3 font-hanken text-[15px] animate-fade-in-up">
                <span className="material-symbols-outlined text-emerald-400 text-2xl">
                  check_circle
                </span>
                <span>{status.message}</span>
              </div>
            )}

            {status.type === 'error' && (
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 flex items-center gap-3 font-hanken text-[15px] animate-fade-in-up">
                <span className="material-symbols-outlined text-rose-400 text-2xl">
                  error
                </span>
                <span>{status.message}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t.contact.namePlaceholder}
                className="bg-surface-container/50 border border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-on-surface-variant/50 font-hanken text-on-surface w-full"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t.contact.emailPlaceholder}
                className="bg-surface-container/50 border border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-on-surface-variant/50 font-hanken text-on-surface w-full"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder={t.contact.messagePlaceholder}
              rows={4}
              className="w-full bg-surface-container/50 border border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-on-surface-variant/50 font-hanken text-on-surface resize-none"
            />

            {/* CAPTCHA Box */}
            <div className="bg-surface-container/30 border border-white/10 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-on-surface-variant font-hanken text-[11px] sm:text-[14px]">
                <span className="material-symbols-outlined text-primary text-base sm:text-xl shrink-0">
                  shield
                </span>
                <span className="whitespace-nowrap">
                  {t.contact.captchaLabel}:{' '}
                  <strong className="text-primary font-geist text-[13px] sm:text-[16px]">
                    {captcha ? captcha.question : '...'} = ?
                  </strong>
                </span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <input
                  type="number"
                  name="captchaAnswer"
                  value={formData.captchaAnswer}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.captchaPlaceholder}
                  className="bg-surface-container/70 border border-white/10 rounded-lg px-4 py-2 text-center font-geist text-on-surface focus:ring-2 focus:ring-primary outline-none w-28 text-[15px]"
                />
                <button
                  type="button"
                  onClick={fetchCaptcha}
                  disabled={captchaLoading}
                  title={t.contact.captchaRefresh}
                  className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-lg border border-white/10 hover:border-primary/40"
                >
                  <span
                    className={`material-symbols-outlined text-xl ${captchaLoading ? 'animate-spin' : ''
                      }`}
                  >
                    refresh
                  </span>
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status.type === 'loading'}
              className="w-full py-4 bg-primary text-on-primary font-geist text-[14px] tracking-widest uppercase rounded-xl hover:shadow-[0_0_30px_rgba(165,200,255,0.4)] transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status.type === 'loading' ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-xl">
                    progress_activity
                  </span>
                  <span>{t.contact.sendingButton}</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-xl">send</span>
                  <span>{t.contact.sendButton}</span>
                </>
              )}
            </button>
          </form>

          {/* Social links */}
          <div className="mt-16 flex justify-center gap-10 relative z-10 flex-wrap">
            <a
              href={`mailto:${email}`}
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-hanken text-[16px]"
            >
              <span className="material-symbols-outlined">mail</span>
              {t.contact.emailLabel}
            </a>
            <a
              href="https://www.linkedin.com/in/romario-parra-7865921b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-hanken text-[16px]"
            >
              <span className="material-symbols-outlined">link</span>
              {t.contact.linkedinLabel}
            </a>
            <a
              href="https://github.com/Romariopv24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-hanken text-[16px]"
            >
              <span className="material-symbols-outlined">code</span>
              {t.contact.githubLabel}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};