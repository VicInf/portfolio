import { PROJECTS } from './projects';

describe('PROJECTS data', () => {
  it('has unique card ids', () => {
    const ids = PROJECTS.map(p => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('provides a non-empty description in every supported language', () => {
    for (const project of PROJECTS) {
      for (const lang of ['en', 'es', 'fr'] as const) {
        const text = project.description[lang];
        expect(text?.trim().length ?? 0, `${project.title}: missing ${lang} description`).toBeGreaterThan(20);
      }
    }
  });

  it('only links to https destinations', () => {
    for (const project of PROJECTS) {
      for (const link of project.links ?? []) {
        expect(link.href.startsWith('https://'), `${project.title}: ${link.href}`).toBe(true);
      }
    }
  });

  it('keeps the showcase honest: no uncorroborated testing claims', () => {
    for (const project of PROJECTS) {
      expect(project.tags).not.toContain('Cypress');
    }
  });
});
