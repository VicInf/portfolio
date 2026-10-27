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
      en: 'Real-time fleet operations platform for Chevron — under my lead. Flutter client and driver apps plus the operations backend, delivered with a two-person team across mobile, web and API. Offline-first Hive sync, live Google Maps tracking and OneSignal — mapping API costs down 38%.',
      es: 'Plataforma de operaciones de flota en tiempo real para Chevron — bajo mi dirección. Apps Flutter de clientes y conductores más el backend de operaciones, entregadas con un equipo de dos personas en móvil, web y API. Sincronización offline-first con Hive, seguimiento en vivo con Google Maps y OneSignal — costos de API de mapas reducidos un 38%.',
      fr: 'Plateforme d\'opérations de flotte en temps réel pour Chevron — sous ma direction. Applications Flutter client et chauffeurs plus le backend d\'opérations, livrées par une équipe de deux personnes sur mobile, web et API. Synchronisation offline-first avec Hive, suivi en direct Google Maps et OneSignal — coûts d\'API de cartographie réduits de 38%.',
    },
    tags: ['Flutter', 'Firebase', 'Google Maps', 'Hive'],
    links: [
      { label: 'Sidney Clientes', href: 'https://play.google.com/store/apps/details?id=com.sinergyz.sidney_client' },
      { label: 'Sidney Drivers', href: 'https://play.google.com/store/apps/details?id=com.sinergyz.sidneydriver' },
    ],
  },
  {
    id: '02',
    title: 'RiskyID',
    description: {
      en: 'Identity verification platform — search and validation of individuals and entities. Multi-version Angular migration (13 to 18, today on 21) with standalone components, RxJS state architecture, lazy loading and prerendering: initial load time down 43%. Plus an automated PDF/email reporting engine saving 11 hours weekly.',
      es: 'Plataforma de verificación de identidad: búsqueda y validación de personas y entidades. Migración Angular en múltiples versiones (de la 13 a la 18, hoy en la 21) con componentes standalone, arquitectura de estado RxJS, lazy loading y prerendering: tiempo de carga inicial un 43% más bajo. Además, un motor de reportes en PDF/correo que ahorra 11 horas semanales.',
      fr: 'Plateforme de vérification d\'identité : recherche et validation de personnes et d\'entités. Migration d\'Angular sur plusieurs versions (13 à 18, aujourd\'hui 21) avec composants standalone, architecture d\'état RxJS, lazy loading et prerendering : temps de chargement initial réduit de 43%. Un moteur de rapports PDF/e-mail économisant 11 heures par semaine.',
    },
    tags: ['Angular 21', 'RxJS', 'Firebase', 'Cypress'],
    links: [{ label: 'Open RiskyID platform', href: 'https://platform.riskyid.com' }],
  },
  {
    id: '03',
    title: 'Seguros Los Andes',
    description: {
      en: 'Consumer app for buying and managing vehicle and motorcycle insurance policies (RCV + personal accident coverage). Flutter, published on Google Play with 10k+ installs — and a client happy with the delivery.',
      es: 'App para comprar y gestionar pólizas de seguro vehicular y de motos (RCV + accidentes personales). Flutter, publicada en Google Play con más de 10 mil instalaciones — y un cliente encantado con la entrega.',
      fr: 'Appli pour acheter et gérer des polices d\'assurance véhicule et moto (RCV + accidents personnels). Flutter, publiée sur Google Play avec plus de 10 000 installations — et un client ravi de la livraison.',
    },
    tags: ['Flutter', 'Mobile', '10k+ installs'],
    links: [{ label: 'View on Google Play', href: 'https://play.google.com/store/apps/details?id=com.sinergyz.SLA' }],
  },
  {
    id: '04',
    title: 'Service Core',
    description: {
      en: "The platform's gateway console API — workspaces, payments, subscriptions and quota plans, exchange rates, file storage and permission policies: the services every Myservy product talks to. Prisma + PostgreSQL, role-based access control, OpenAPI documentation and request throttling.",
      es: 'API de consola central de la plataforma — workspaces, pagos, suscripciones y planes de cuotas, tasas de cambio, almacenamiento de archivos y políticas de permisos: los servicios con los que habla cada producto de Myservy. Prisma + PostgreSQL, control de acceso basado en roles, documentación OpenAPI y control de tráfico.',
      fr: 'API de console passerelle de la plateforme — workspaces, paiements, abonnements et quotas, taux de change, stockage de fichiers et politiques de permissions : les services que tout produit Myservy interroge. Prisma + PostgreSQL, contrôle d\'accès basé sur les rôles, documentation OpenAPI et limitation de requêtes.',
    },
    tags: ['Nest.js', 'Prisma', 'PostgreSQL'],
  },
  {
    id: '05',
    title: 'Fluye',
    description: {
      en: 'Leading end-to-end development of Fluye, a commercial transactions platform built as an Angular 22 + NestJS 11 monorepo — OpenAPI-generated type contracts keep front and API in sync by design. Prisma 7 + PostgreSQL, idempotency and transactional outbox patterns.',
      es: 'Dirijo el desarrollo end-to-end de Fluye, plataforma comercial de transacciones construida como monorepositorio Angular 22 + NestJS 11 — contratos de tipos generados por OpenAPI mantienen front y API sincronizados por diseño. Prisma 7 + PostgreSQL, patrones de idempotencia y outbox transaccional.',
      fr: 'Je pilote le développement de Fluye de bout en bout : plateforme de transactions commerciales en monorepo Angular 22 + NestJS 11 — des contrats de types générés par OpenAPI gardent front et API synchronisés par conception. Prisma 7 + PostgreSQL, patterns d\'idempotence et d\'outbox transactionnel.',
    },
    tags: ['Angular 22', 'Nest.js 11', 'Prisma 7', 'In progress'],
  },
  {
    id: '06',
    title: 'Excuela',
    description: {
      en: 'Maintained and scaled a dedicated fork of the Excuela e-learning app (La Calera) — porting features, fixes and core updates from upstream without breaking custom implementations, and driving the state-management migration from Provider to Riverpod.',
      es: 'Mantuve y escalé un fork dedicado de la app de e-learning Excuela (La Calera) — portando features, fixes y actualizaciones del upstream sin romper implementaciones propias, y liderando la migración de manejo de estado de Provider a Riverpod.',
      fr: 'J\'ai maintenu et fait évoluer un fork dédié de l\'appli d\'e-learning Excuela (La Calera) — portage des fonctionnalités et correctifs de l\'amont sans casser les implémentations personnalisées, et migration du state management de Provider vers Riverpod.',
    },
    tags: ['Flutter', 'Riverpod', '10k+ installs'],
    links: [{ label: 'View on Google Play', href: 'https://play.google.com/store/apps/details?id=com.excuela.aprende' }],
  },
];
