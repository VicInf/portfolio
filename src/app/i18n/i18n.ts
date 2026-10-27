import { ApplicationRef, Injectable, inject, signal } from '@angular/core';

export type Lang = 'en' | 'es' | 'fr';

export type DictKey = keyof typeof D;

/** Main dictionary: every hardcoded string in the UI, per language. */
const D = {
  docTitle: {
    en: 'Vicente Pérez — Full-Stack Lead',
    es: 'Vicente Pérez — Líder Full-Stack',
    fr: 'Vicente Pérez — Lead Full-Stack',
  },
  navWork: { en: 'WORK', es: 'TRABAJOS', fr: 'PROJETS' },
  navAbout: { en: 'ABOUT', es: 'PERFIL', fr: 'PROFIL' },
  navContact: { en: 'CONTACT', es: 'CONTACTO', fr: 'CONTACT' },
  navToggle: { en: 'Toggle menu', es: 'Abrir/cerrar menú', fr: 'Ouvrir/fermer le menu' },

  eyebrow: {
    en: 'ENTERPRISE SYSTEMS',
    es: 'SISTEMAS EMPRESARIALES',
    fr: 'SYSTÈMES D\'ENTREPRISE',
  },
  h1a: { en: 'FULL-STACK LEAD', es: 'LÍDER FULL-STACK', fr: 'LEAD FULL-STACK' },
  h1b: { en: 'ONLINE', es: 'EN LÍNEA', fr: 'EN LIGNE' },
  subtitle: {
    en: 'I lead a team of two building the real-time fleet platform for a contractor serving Chevron — Flutter, Angular and NestJS across mobile, web and API.',
    es: 'Lidero un equipo de dos construyendo la plataforma de flota en tiempo real de un contratista que presta servicios a Chevron — Flutter, Angular y NestJS en móvil, web y API.',
    fr: 'Je dirige une équipe de deux sur la plateforme de flotte en temps réel d\'un sous-traitant au service de Chevron — Flutter, Angular et NestJS sur mobile, web et API.',
  },
  statFleet: { en: 'FLEET', es: 'FLOTA', fr: 'FLOTTE' },
  statTrips: { en: 'TRIPS', es: 'VIAJES', fr: 'TRAJETS' },
  statShipped: { en: 'SHIPPED', es: 'PUBLICADAS', fr: 'PUBLIÉES' },
  statFleetVal: { en: '300 VEHICLES', es: '300 VEHÍCULOS', fr: '300 VÉHICULES' },
  statTripsVal: { en: '10K+ / MONTH', es: '10K+ / MES', fr: '10K+ / MOIS' },
  statShippedVal: { en: '4 APPS', es: '4 APPS', fr: '4 APPLIS' },
  statExp: { en: 'EXP', es: 'EXP', fr: 'EXP' },
  statExpVal: { en: '3+ YRS', es: '3+ AÑOS', fr: '3+ ANS' },
  ctaPrimary: { en: 'EXECUTE MISSION', es: 'EJECUTAR MISIÓN', fr: 'EXÉCUTER LA MISSION' },
  ctaCv: { en: 'DOWNLOAD CV', es: 'DESCARGAR CV', fr: 'TÉLÉCHARGER CV' },

  workTitle: { en: 'COMPLETED MISSIONS', es: 'MISIONES COMPLETADAS', fr: 'MISSIONS ACCOMPLIES' },
  menuAria: { en: 'Open app links menu', es: 'Abrir menú de enlaces a las apps', fr: 'Ouvrir le menu des liens vers les apps' },

  skillsTitle: { en: 'SKILLS', es: 'HABILIDADES', fr: 'COMPÉTENCES' },
  aboutTitle: { en: 'CHARACTER STATUS', es: 'ESTADO DEL PERSONAJE', fr: 'ÉTAT DU PERSONNAGE' },
  profileTitle: { en: 'PROFILE', es: 'PERFIL', fr: 'PROFIL' },
  profileLead: {
    en: 'Currently leading a team of two across mobile, web and backend — from a real-time fleet platform to a commercial transactions monorepo — with consumer apps live on Google Play.',
    es: 'Actualmente al frente de un equipo de dos en móvil, web y backend — de una plataforma de flota en tiempo real a un monorepo de transacciones comerciales — con apps de consumo publicadas en Google Play.',
    fr: 'Actuellement à la tête d\'une équipe de deux sur mobile, web et backend — d\'une plateforme de flotte en temps réel à un monorepo de transactions commerciales — avec des applications grand public publiées sur Google Play.',
  },
  profileLang: {
    en: 'Languages: native Spanish, English C2 (UNIMET-certified), French B2 (DELF-certified), currently learning Japanese.',
    es: 'Idiomas: español nativo, inglés C2 (certificación UNIMET), francés B2 (certificación DELF), aprendiendo japonés.',
    fr: 'Langues : espagnol natif, anglais C2 (certifié UNIMET), français B2 (certifié DELF), japonais en cours d\'apprentissage.',
  },

  contactTitle: { en: 'COMMUNICATION CHANNEL', es: 'CANAL DE COMUNICACIÓN', fr: 'CANAL DE COMMUNICATION' },
  contactText: {
    en: 'Available as USD contractor — US Eastern hours. Reach out through any channel.',
    es: 'Disponible como contratista en USD — horario del Este (EE.UU.). Escríbeme por cualquier canal.',
    fr: 'Disponible comme prestataire en USD — fuseau horaire de la côte Est des États-Unis. Contactez-moi par n\'importe quel canal.',
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
    const preferred = this.readPreferred();
    // First render must match the prerendered (EN) DOM or hydration mismatches.
    this.set('en');
    if (preferred !== 'en') {
      // Apply the visitor's language once hydration has completed.
      void inject(ApplicationRef).whenStable().then(() => this.set(preferred));
    }
  }

  /** Stored preference wins over the browser language; server always gets EN. */
  private readPreferred(): Lang {
    try {
      const stored = localStorage.getItem('portfolio-lang');
      if (stored === 'es' || stored === 'fr' || stored === 'en') return stored;
    } catch { /* storage unavailable — fall through to navigator */ }
    const nav = typeof navigator !== 'undefined' ? navigator.language.slice(0, 2) : 'en';
    return nav === 'es' ? 'es' : nav === 'fr' ? 'fr' : 'en';
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

  /** CV download picks the language the visitor is reading. */
  cvHref(): string {
    const file = { en: 'cv-vicente-perez-en.pdf', es: 'cv-vicente-perez-es.pdf', fr: 'cv-vicente-perez-fr.pdf' };
    return file[this.lang()];
  }

  /** Saved filename carries the language too, so the three PDFs don't collide in Downloads. */
  cvDownload(): string {
    return `Vicente-Perez-CV-${this.lang()}.pdf`;
  }
}