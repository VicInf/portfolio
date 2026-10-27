import { I18n } from './i18n';

describe('I18n', () => {
  let service: I18n;

  beforeEach(() => {
    localStorage.clear();
    service = new I18n();
  });

  it('defaults to EN when no stored preference and non-ES/FR navigator', () => {
    expect(service.lang()).toBe('en');
    expect(service.t('h1a')).toBe('FULL-STACK LEAD');
  });

  it('resolves dictionary entries for every language', () => {
    service.set('es');
    expect(service.t('h1a')).toBe('LÍDER FULL-STACK');
    expect(document.documentElement.lang).toBe('es');
    expect(document.title).toBe('Vicente Pérez — Líder Full-Stack');

    service.set('fr');
    expect(service.t('subtitle')).toContain('e-learning');
  });

  it('persists the chosen language to storage', () => {
    service.set('fr');
    expect(localStorage.getItem('portfolio-lang')).toBe('fr');
  });

  it('translates known data strings and falls back to the EN source for unknown ones', () => {
    service.set('es');
    expect(service.tx('Mobile')).toBe('Móvil');
    expect(service.tx('NotInDictionary')).toBe('NotInDictionary');
    expect(service.tx(null)).toBe('');
  });

  it('falls back to the source string when a skill has no translation', () => {
    service.set('es');
    expect(service.txSkill('Frontend development')).toBe('Desarrollo frontend');
    expect(service.txSkill('Flutter')).toBe('Flutter');
  });

  it('serves the CV in the language the visitor is reading', () => {
    expect(service.cvHref()).toBe('cv-vicente-perez-en.pdf');
    service.set('es');
    expect(service.cvHref()).toBe('cv-vicente-perez-es.pdf');
    service.set('fr');
    expect(service.cvHref()).toBe('cv-vicente-perez-fr.pdf');
  });
});
