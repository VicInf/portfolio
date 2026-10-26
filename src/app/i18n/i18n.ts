import { Injectable, signal } from '@angular/core';

export type Lang = 'en' | 'es' | 'fr';

export type DictKey = keyof typeof D;

/** Main dictionary: every hardcoded string in the UI, per language. */
const D = {
  docTitle: {
    en: 'Vicente Pérez — Full-Stack Developer',
    es: 'Vicente Pérez — Desarrollador Full-Stack',
    fr: 'Vicente Pérez — Développeur Full-Stack',
  },
  navWork: { en: 'WORK', es: 'TRABAJOS', fr: 'PROJETS' },
  navAbout: { en: 'ABOUT', es: 'PERFIL', fr: 'PROFIL' },
  navContact: { en: 'CONTACT', es: 'CONTACTO', fr: 'CONTACT' },

  eyebrow: {
    en: 'FULL-STACK DEVELOPER',
    es: 'DESARROLLADOR FULL-STACK',
    fr: 'DÉVELOPPEUR FULL-STACK',
  },
  h1a: { en: 'CODE OPERATOR', es: 'OPERADOR DE CÓDIGO', fr: 'OPÉRATEUR DE CODE' },
  h1b: { en: 'ONLINE', es: 'EN LÍNEA', fr: 'EN LIGNE' },
  subtitle: {
    en: 'Specialized in crafting high-performance interfaces with precision timing. Every interaction calculated. Every pixel deliberate. Now building the systems behind them.',
    es: 'Especializado en construir interfaces de alto rendimiento con precisión. Cada interacción calculada. Cada píxel deliberado. Ahora construyendo los sistemas que hay detrás.',
    fr: "Spécialisé dans la création d'interfaces performantes avec une précision millimétrée. Chaque interaction calculée. Chaque pixel délibéré. Aujourd'hui, je construis les systèmes qui les font tourner.",
  },
  statClass: { en: 'CLASS', es: 'CLASE', fr: 'CLASSE' },
  statLevel: { en: 'LEVEL', es: 'NIVEL', fr: 'NIVEAU' },
  statExp: { en: 'EXP', es: 'EXP', fr: 'EXP' },
  statClassVal: { en: 'FLUTTER + ANGULAR', es: 'FLUTTER + ANGULAR', fr: 'FLUTTER + ANGULAR' },
  statLevelVal: { en: 'SENIOR', es: 'SENIOR', fr: 'SENIOR' },
  statExpVal: { en: '3+ YRS', es: '3+ AÑOS', fr: '3+ ANS' },
  ctaPrimary: { en: 'EXECUTE MISSION', es: 'EJECUTAR MISIÓN', fr: 'EXÉCUTER LA MISSION' },
  ctaSecondary: { en: 'LOAD DATA', es: 'CARGAR DATOS', fr: 'CHARGER LES DONNÉES' },

  workTitle: { en: 'COMPLETED MISSIONS', es: 'MISIONES COMPLETADAS', fr: 'MISSIONS ACCOMPLIES' },
  menuAria: { en: 'View apps on Google Play', es: 'Ver apps en Google Play', fr: 'Voir les apps sur Google Play' },

  skillsTitle: { en: 'SKILLS', es: 'HABILIDADES', fr: 'COMPÉTENCES' },
  aboutTitle: { en: 'CHARACTER STATUS', es: 'ESTADO DEL PERSONAJE', fr: 'ÉTAT DU PERSONNAGE' },
  profileTitle: { en: 'PROFILE', es: 'PERFIL', fr: 'PROFIL' },
  profileLead: {
    en: 'Project Lead and senior full-stack developer with over 3 years of experience bridging technical architecture with project execution — currently leading a team of two engineers across mobile, web and backend.',
    es: 'Project Lead y desarrollador full-stack senior con más de 3 años de experiencia uniendo arquitectura técnica con ejecución de proyectos — actualmente dirigiendo un equipo de dos ingenieros en móvil, web y backend.',
    fr: 'Project Lead et développeur full-stack senior avec plus de 3 ans d\'expérience reliant l\'architecture technique à l\'exécution des projets — actuellement à la tête d\'une équipe de deux ingénieurs sur mobile, web et backend.',
  },
  profileLang: {
    en: 'Languages: native Spanish, bilingual English (UNIMET-certified), French B2 (DELF-certified), currently learning Japanese.',
    es: 'Idiomas: español nativo, inglés bilingüe (certificación UNIMET), francés B2 (certificación DELF), aprendiendo japonés.',
    fr: 'Langues : espagnol natif, anglais bilingue (certifié UNIMET), français B2 (certifié DELF), japonais en cours d\'apprentissage.',
  },

  contactTitle: { en: 'COMMUNICATION CHANNEL', es: 'CANAL DE COMUNICACIÓN', fr: 'CANAL DE COMMUNICATION' },
  contactText: {
    en: 'Open to new opportunities — reach out through any channel.',
    es: 'Abierto a nuevas oportunidades — escríbeme por cualquier canal.',
    fr: "Ouvert à de nouvelles opportunités — contactez-moi par n'importe quel canal.",
  },
  ctaEmail: { en: 'TRANSMIT EMAIL', es: 'ENVIAR CORREO', fr: 'TRANSMETTRE UN EMAIL' },
  ctaLinkedin: { en: 'LINKEDIN', es: 'LINKEDIN', fr: 'LINKEDIN' },
  ctaGithub: { en: 'GITHUB', es: 'GITHUB', fr: 'GITHUB' },

  copyright: {
    en: '© 2026 Vicente Pérez — all rights reserved',
    es: '© 2026 Vicente Pérez — todos los derechos reservados',
    fr: '© 2026 Vicente Pérez — tous droits réservés',
  },
};

/**
 * Targeted translations for data strings that come from `data/projects.ts`
 * (tags and link labels). Anything not found here renders as-is (fallback = EN).
 */
const TX: Partial<Record<string, Partial<Record<Lang, string>>>> = {
  'In progress': { es: 'En desarrollo', fr: 'En cours' },
  '10k+ installs': { es: '10k+ instalaciones', fr: '10k+ téléchargements' },
  Mobile: { es: 'Móvil', fr: 'Mobile' },
  'Open RiskyID platform': { es: 'Abrir plataforma RiskyID', fr: 'Ouvrir la plateforme RiskyID' },
  'View on Google Play': { es: 'Ver en Google Play', fr: 'Voir sur Google Play' },
};

/** Per-language display name for skills chips (EN source in About component). */
export const SKILLS_TX: Record<Lang, Record<string, string>> = {
  en: {},
  es: {
    'Frontend development': 'Desarrollo frontend',
    'REST APIs': 'APIs REST',
    'Clean architecture': 'Arquitectura limpia',
    'AI-assisted development': 'Desarrollo asistido por IA',
    'Agent-driven development': 'Desarrollo dirigido por agentes',
  },
  fr: {
    'Frontend development': 'Développement frontend',
    'REST APIs': 'APIs REST',
    'Clean architecture': 'Architecture propre',
    'AI-assisted development': 'Développement assisté par IA',
    'Agent-driven development': 'Développement piloté par agents',
  },
};

@Injectable({ providedIn: 'root' })
export class I18n {
  /** Source strings in data files are EN keys; FR/ES lookups fall back to the source string. */
  readonly lang = signal<Lang>('en');
  readonly langs: readonly Lang[] = ['en', 'es', 'fr'];

  constructor() {
    let L: Lang | null = null;
    try {
      const stored = localStorage.getItem('portfolio-lang');
      if (stored === 'es' || stored === 'fr' || stored === 'en') L = stored;
    } catch { /* storage unavailable — default EN */ }
    if (!L) {
      const nav = typeof navigator !== 'undefined' ? navigator.language.slice(0, 2) : 'en';
      L = nav === 'es' ? 'es' : nav === 'fr' ? 'fr' : 'en';
    }
    this.set(L);
  }

  set(l: Lang) {
    this.lang.set(l);
    try { localStorage.setItem('portfolio-lang', l); } catch { /* ignore */ }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = l;
      document.title = this.t('docTitle');
    }
  }

  /** Dictionary lookup. */
  t(key: DictKey): string {
    return D[key][this.lang()];
  }

  /** Free-form data string lookup with EN fallback. */
  tx(source?: string | null): string {
    if (!source) return '';
    const m = TX[source];
    return (m && m[this.lang()]) || source;
  }

  /** Skills chip display name per language (EN source key). */
  txSkill(source: string): string {
    return SKILLS_TX[this.lang()][source] ?? source;
  }
}