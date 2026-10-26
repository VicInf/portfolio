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
 */
export interface Project {
  /** Card index shown in VT323 (01…n) and track() key for the @for loop. */
  id: string;
  title: string;
  description: string;
  tags: readonly string[];
  links?: readonly ProjectLink[];
}

export const PROJECTS: readonly Project[] = [
  {
    id: '01',
    title: 'Sidney',
    description:
      'Real-time fleet operations platform for a major oil & gas client — under my lead. Flutter client and driver apps plus the operations backend, delivered with a two-person team across mobile, web and API. Offline-first Hive sync, live Google Maps tracking and OneSignal — mapping API costs down 38%.',
    tags: ['Flutter', 'Firebase', 'Google Maps', 'Hive'],
    links: [
      { label: 'Sidney Clientes', href: 'https://play.google.com/store/apps/details?id=com.sinergyz.sidney_client' },
      { label: 'Sidney Drivers', href: 'https://play.google.com/store/apps/details?id=com.sinergyz.sidneydriver' },
    ],
  },
  {
    id: '02',
    title: 'RiskyID',
    description:
      'Identity verification platform — search and validation of individuals and entities. Multi-version Angular migration (13 to 18, today on 21) with standalone components, RxJS state architecture, lazy loading and prerendering: initial load time down 43%. Plus an automated PDF/email reporting engine saving 11 hours weekly.',
    tags: ['Angular 21', 'RxJS', 'Firebase', 'Cypress'],
    links: [{ label: 'Open RiskyID platform', href: 'https://platform.riskyid.com' }],
  },
  {
    id: '03',
    title: 'Seguros Los Andes',
    description:
      'Consumer app for buying and managing vehicle and motorcycle insurance policies (RCV + personal accident coverage). Flutter, published on Google Play with 10k+ installs — and a client happy with the delivery.',
    tags: ['Flutter', 'Mobile', '10k+ installs'],
    links: [{ label: 'View on Google Play', href: 'https://play.google.com/store/apps/details?id=com.sinergyz.SLA' }],
  },
  {
    id: '04',
    title: 'Service Core',
    description:
      "The platform's gateway console API — workspaces, payments, subscriptions and quota plans, exchange rates, file storage and permission policies: the services every Myservy product talks to. Prisma + PostgreSQL, role-based access control, OpenAPI documentation and request throttling.",
    tags: ['Nest.js', 'Prisma', 'PostgreSQL'],
  },
  {
    id: '05',
    title: 'Fluye',
    description:
      'Leading end-to-end development of Fluye, a commercial transactions platform built as an Angular 22 + NestJS 11 monorepo — OpenAPI-generated type contracts keep front and API in sync by design. Prisma 7 + PostgreSQL, idempotency and transactional outbox patterns.',
    tags: ['Angular 22', 'Nest.js 11', 'Prisma 7', 'In progress'],
  },
  {
    id: '06',
    title: 'Excuela',
    description:
      'Maintained and scaled a dedicated fork of the Excuela e-learning app (La Calera) — porting features, fixes and core updates from upstream without breaking custom implementations, and driving the state-management migration from Provider to Riverpod.',
    tags: ['Flutter', 'Riverpod', '10k+ installs'],
    links: [{ label: 'View on Google Play', href: 'https://play.google.com/store/apps/details?id=com.excuela.aprende' }],
  },
];
