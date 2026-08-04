export interface TranslationSchema {
  nav: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    cta_about: string;
    cta_contact: string;
  };
  about: {
    title: string;
    titleHighlight: string;
    paragraph1: string;
    paragraph2: string;
  };
  expertise: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    cards: {
      frontend: { title: string; description: string };
      backend: { title: string; description: string };
      database: { title: string; description: string };
      design: { title: string; description: string };
    };
  };
  skills: {
    title: string;
    titleHighlight: string;
  };
  projects: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    viewProject: string;
  };
  contact: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    captchaLabel: string;
    captchaPlaceholder: string;
    captchaRefresh: string;
    sendButton: string;
    sendingButton: string;
    successAlert: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
  };
  footer: {
    copyright: string;
  };
}

export const translations: Record<'en' | 'es', TranslationSchema> = {
  en: {
    nav: {
      about: 'About Me',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      badge: 'Full-Stack Architect',
      title: 'Website Design and',
      titleHighlight: 'Development',
      description:
        'Engineering high-performance digital experiences with a focus on precision, scalability, and cutting-edge visual aesthetics for modern tech ecosystems.',
      cta_about: 'About Me',
      cta_contact: 'Contact Me',
    },
    about: {
      title: 'About',
      titleHighlight: 'Me',
      paragraph1:
        'I am Romario Parra, a dedicated Full-Stack Developer specializing in building robust, high-conversion web applications. With a foundation in engineering and a passion for pixel-perfect design, I bridge the gap between complex backend logic and intuitive frontend interfaces.',
      paragraph2:
        'My expertise lies in crafting scalable architectures using modern frameworks like Next.js and Node.js. I prioritize performance, accessibility, and clean code to ensure every project not only looks stunning but delivers exceptional user results.',
    },
    expertise: {
      title: 'Core',
      titleHighlight: 'Expertise',
      subtitle: 'Specialized skill sets across the entire development lifecycle.',
      cards: {
        frontend: {
          title: 'Frontend',
          description:
            'Building responsive, interactive user interfaces with modern React and Next.js ecosystems.',
        },
        backend: {
          title: 'Backend',
          description:
            'Designing secure, high-performance APIs and microservices using Node.js and TypeScript.',
        },
        database: {
          title: 'Database',
          description:
            'Architecting efficient data structures and optimizing queries with MongoDB, PostgreSQL, and Redis.',
        },
        design: {
          title: 'UI/UX & Web Design',
          description:
            'Crafting clean, modern user interfaces and intuitive web experiences centered on usability and visual elegance.',
        },
      },
    },
    skills: {
      title: 'Technical',
      titleHighlight: 'Toolkit',
    },
    projects: {
      title: 'Selected',
      titleHighlight: 'Projects',
      subtitle:
        'A curated selection of my recent work in web engineering and visual design.',
      viewProject: 'View Project',
    },
    contact: {
      title: 'Ready to',
      titleHighlight: 'Connect?',
      subtitle:
        "Whether you have a specific project in mind or just want to explore the possibilities of web technology, let's build something exceptional together.",
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Your Message',
      captchaLabel: 'Security Verification',
      captchaPlaceholder: 'Answer',
      captchaRefresh: 'Refresh CAPTCHA',
      sendButton: 'Send Message',
      sendingButton: 'Sending...',
      successAlert: 'Your message has been sent successfully! I will reply soon.',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
    },
    footer: {
      copyright: '© 2026 Romario Parra. All rights reserved.',
    },
  },

  es: {
    nav: {
      about: 'Sobre Mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Arquitecto Full-Stack',
      title: 'Diseño y',
      titleHighlight: 'Desarrollo Web',
      description:
        'Creando experiencias digitales de alto rendimiento con enfoque en precisión, escalabilidad y estética visual de vanguardia para ecosistemas tecnológicos modernos.',
      cta_about: 'Sobre Mí',
      cta_contact: 'Contáctame',
    },
    about: {
      title: 'Sobre',
      titleHighlight: 'Mí',
      paragraph1:
        'Soy Romario Parra, un desarrollador Full-Stack dedicado especializado en construir aplicaciones web robustas y de alta conversión. Con base en ingeniería y pasión por el diseño pixel-perfect, conecto la lógica compleja del backend con interfaces frontend intuitivas.',
      paragraph2:
        'Mi expertise está en crear arquitecturas escalables con frameworks modernos como Next.js y Node.js. Priorizo el rendimiento, accesibilidad y código limpio para asegurar que cada proyecto no solo luzca impresionante, sino que entregue resultados excepcionales.',
    },
    expertise: {
      title: 'Áreas de',
      titleHighlight: 'Experiencia',
      subtitle: 'Conjuntos de habilidades especializadas en todo el ciclo de desarrollo.',
      cards: {
        frontend: {
          title: 'Frontend',
          description:
            'Creando interfaces de usuario responsivas e interactivas con los ecosistemas modernos de React and Next.js.',
        },
        backend: {
          title: 'Backend',
          description:
            'Diseñando APIs seguras y de alto rendimiento y microservicios usando Node.js y TypeScript.',
        },
        database: {
          title: 'Base de Datos',
          description:
            'Arquitectando estructuras de datos eficientes y optimizando consultas con MongoDB, PostgreSQL y Redis.',
        },
        design: {
          title: 'Diseño UI/UX & Web',
          description:
            'Diseñando interfaces modernas, limpias y experiencias web intuitivas centradas en la usabilidad y la elegancia visual.',
        },
      },
    },
    skills: {
      title: 'Herramientas',
      titleHighlight: 'Técnicas',
    },
    projects: {
      title: 'Proyectos',
      titleHighlight: 'Destacados',
      subtitle:
        'Una selección curada de mis trabajos recientes en ingeniería web y diseño visual.',
      viewProject: 'Ver Proyecto',
    },
    contact: {
      title: '¿Listo para',
      titleHighlight: 'Conectar?',
      subtitle:
        'Ya sea que tengas un proyecto específico en mente o simplemente quieras explorar las posibilidades de la tecnología web, construyamos algo excepcional juntos.',
      namePlaceholder: 'Tu Nombre',
      emailPlaceholder: 'Tu Correo',
      messagePlaceholder: 'Tu Mensaje',
      captchaLabel: 'Verificación de Seguridad',
      captchaPlaceholder: 'Respuesta',
      captchaRefresh: 'Recargar CAPTCHA',
      sendButton: 'Enviar Mensaje',
      sendingButton: 'Enviando...',
      successAlert: '¡Tu mensaje ha sido enviado con éxito! Te responderé pronto.',
      emailLabel: 'Correo',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
    },
    footer: {
      copyright: '© 2026 Romario Parra. Todos los derechos reservados.',
    },
  },
};

export type Locale = 'en' | 'es';
export type Translations = TranslationSchema;
