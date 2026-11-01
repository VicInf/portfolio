import { Lang } from '../i18n/i18n';

/** External evidence links for plain single-link cards. */
export interface ProjectLink {
  label: string;
  href: string;
}

/**
 * One portfolio project card.
 * - Single-store projects get one plain arrow button (from `links[0].label`).
 * - Projects with several destinations (Sidney: two Play apps) render a
 *   dropdown menu built from the whole `links` list.
 * - No `links` → no link control at all.
 * - `description` is a per-language record (EN is the source of truth).
 */
export interface Project {
  /** Card index shown in VT323 (01…n) and track() key for the @for loop. */
  id: string;
  title: string;
  description: Record<Lang, string>;
  tags: readonly string[];
  links?: readonly ProjectLink[];
}

export const PROJECTS: readonly Project[] = [
  {
    id: '01',
    title: 'Sidney',
    description: {
      en: 'Real-time fleet operations platform for a Venezuelan oil-sector contractor serving Chevron, under my leadership. Flutter client and driver apps (both on Google Play and the App Store) plus the operations backend, delivered with a two-person team across mobile, web and API. Offline-first Hive sync, live Google Maps tracking and OneSignal, with mapping API costs down 38%.',
      es: 'Plataforma de operaciones de flota en tiempo real para un contratista del sector petrolero venezolano que presta servicios a Chevron, bajo mi dirección. Apps Flutter de clientes y conductores (ambas en Google Play y el App Store) más el backend de operaciones, entregadas con un equipo de dos personas en móvil, web y API. Sincronización offline-first con Hive, seguimiento en vivo con Google Maps y OneSignal, con costos de API de mapas reducidos un 38%.',
      fr: 'Plateforme d\'opérations de flotte en temps réel pour un sous-traitant vénézuélien du secteur pétrolier au service de Chevron, sous ma direction. Applications Flutter client et chauffeurs (toutes deux sur Google Play et l\'App Store) plus le back-end d\'opérations, livrées par une équipe de deux personnes sur mobile, web et API. Synchronisation offline-first avec Hive, suivi en direct Google Maps et OneSignal, avec des coûts d\'API de cartographie réduits de 38%.',
    },
    tags: ['Flutter', 'Firebase', 'Google Maps', 'Hive'],
    links: [
      { label: 'Sidney Clientes', href: 'https://play.google.com/store/apps/details?id=com.sinergyz.sidney_client' },
      { label: 'Sidney Drivers', href: 'https://play.google.com/store/apps/details?id=com.sinergyz.sidneydriver' },
      { label: 'Sidney Cliente (iOS)', href: 'https://apps.apple.com/ve/app/sidney-cliente/id6747777856' },
      { label: 'Sidney Drivers (iOS)', href: 'https://apps.apple.com/ve/app/sidney-drivers/id6747687378' },
    ],
  },
  {
    id: '02',
    title: 'RiskyID',
    description: {
      en: 'Identity verification platform: search and validation of individuals and entities. Drove the front-end modernization: multi-version Angular migration (13 to 18, today on 21) with standalone components, RxJS state architecture, lazy loading and prerendering, improving the Lighthouse Performance score by 43%.',
      es: 'Plataforma de verificación de identidad: búsqueda y validación de personas y entidades. Impulsé la modernización del front-end: migración Angular en múltiples versiones (de la 13 a la 18, hoy en la 21) con componentes standalone, arquitectura de estado RxJS, lazy loading y prerendering, mejorando el puntaje Performance de Lighthouse en un 43%.',
      fr: 'Plateforme de vérification d\'identité : recherche et validation de personnes et d\'entités. Modernisation du front-end pilotée : migration d\'Angular sur plusieurs versions (13 à 18, aujourd\'hui 21) avec composants standalone, architecture d\'état RxJS, lazy loading et prerendering, avec un score Performance Lighthouse amélioré de 43%.',
    },
    tags: ['Angular 21', 'RxJS', 'Firebase'],
    links: [{ label: 'Open RiskyID platform', href: 'https://platform.riskyid.com' }],
  },
  {
    id: '03',
    title: 'Seguros Los Andes',
    description: {
      en: 'Consumer app for buying and managing vehicle and motorcycle insurance policies (RCV + personal accident coverage). Flutter, published on Google Play with 10k+ installs, and a client happy with the delivery.',
      es: 'App para comprar y gestionar pólizas de seguro vehicular y de motos (RCV + accidentes personales). Flutter, publicada en Google Play con más de 10 mil instalaciones, y un cliente encantado con la entrega.',
      fr: 'Appli pour acheter et gérer des polices d\'assurance véhicule et moto (RCV + accidents personnels). Flutter, publiée sur Google Play avec plus de 10 000 installations, et un client ravi de la livraison.',
    },
    tags: ['Flutter', 'Mobile', '10k+ installs'],
    links: [{ label: 'View on Google Play', href: 'https://play.google.com/store/apps/details?id=com.sinergyz.SLA' }],
  },
  {
    id: '04',
    title: 'Service Core',
    description: {
      en: "The platform's gateway console API for workspaces, payments, subscriptions and quota plans, exchange rates, file storage and permission policies: the services every Myservy product talks to. Prisma + PostgreSQL, role-based access control, OpenAPI documentation and request throttling.",
      es: 'API de consola central de la plataforma para workspaces, pagos, suscripciones y planes de cuotas, tasas de cambio, almacenamiento de archivos y políticas de permisos: los servicios con los que habla cada producto de Myservy. Prisma + PostgreSQL, control de acceso basado en roles, documentación OpenAPI y control de tráfico.',
      fr: 'API de console passerelle de la plateforme pour workspaces, paiements, abonnements et quotas, taux de change, stockage de fichiers et politiques de permissions : les services que tout produit Myservy interroge. Prisma + PostgreSQL, contrôle d\'accès basé sur les rôles, documentation OpenAPI et limitation de requêtes.',
    },
    tags: ['Nest.js', 'Prisma', 'PostgreSQL'],
  },
  {
    id: '05',
    title: 'Fluye',
    description: {
      en: 'Leading the build of Fluye, a commercial transactions platform (Angular + NestJS monorepo, in active development): designed the system architecture and Service Core, its gateway API for payments, subscriptions and workspace permissions, and authored the technical documentation.',
      es: 'Lidero la construcción de Fluye, plataforma de transacciones comerciales (monorepo Angular + NestJS, en desarrollo activo): diseñé la arquitectura del sistema y Service Core, su API gateway para pagos, suscripciones y permisos de espacios de trabajo, y escribí la documentación técnica.',
      fr: 'Je pilote la construction de Fluye, plateforme de transactions commerciales (monorepo Angular + NestJS, en développement actif) : j\'ai conçu l\'architecture du système et Service Core, son API gateway pour paiements, abonnements et permissions des espaces de travail, et rédigé la documentation technique.',
    },
    tags: ['Angular', 'NestJS', 'In progress'],
  },
  {
    id: '06',
    title: 'Excuela',
    description: {
      en: 'Maintained and scaled Excuela – La Calera, a dedicated fork of the e-learning app (5k+ installs on Google Play), porting features, fixes and core updates from upstream without breaking custom implementations; contributed to the state-management migration from Provider to Riverpod on the main Excuela app (10k+ installs). Both are also available on the App Store.',
      es: 'Mantuve y escalé Excuela – La Calera, un fork dedicado de la app de e-learning (+5 000 instalaciones en Google Play), portando funcionalidades, correcciones y actualizaciones del proyecto original sin romper implementaciones propias, y colaboré en la migración de manejo de estado de Provider a Riverpod en la app principal de Excuela (+10 000 instalaciones). Ambas apps también están en el App Store.',
      fr: 'J\'ai maintenu et fait évoluer Excuela – La Calera, un fork dédié de l\'appli d\'e-learning (plus de 5 000 installations sur Google Play), portage des fonctionnalités et correctifs de l\'amont sans casser les implémentations personnalisées, et contribution à la migration de la gestion d\'état de Provider vers Riverpod sur l\'appli principale Excuela (plus de 10 000 installations). Les deux apps sont aussi disponibles sur l\'App Store.',
    },
    tags: ['Flutter', 'Riverpod', '10k+ installs'],
    links: [{ label: 'Excuela', href: 'https://play.google.com/store/apps/details?id=com.excuela.aprende' }, { label: 'La Calera', href: 'https://play.google.com/store/apps/details?id=com.excuela.calera' }, { label: 'Excuela (iOS)', href: 'https://apps.apple.com/ve/app/excuela/id6443979393' }, { label: 'La Calera (iOS)', href: 'https://apps.apple.com/ve/app/excuela-la-calera/id6745837910' }],
  },
];
