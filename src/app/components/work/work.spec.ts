import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { Work } from './work';
import { PROJECTS } from '../../data/projects';

describe('Work', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Work],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
  });

  function create() {
    const fixture = TestBed.createComponent(Work);
    fixture.detectChanges();
    return fixture;
  }

  it('renders a dropdown menu per multi-link card and a plain arrow per single-link card', () => {
    const el = create().nativeElement as HTMLElement;
    const expectedMenus = PROJECTS.filter(p => (p.links?.length ?? 0) > 1).length;
    const expectedPlain = PROJECTS.filter(p => (p.links?.length ?? 0) === 1).length;
    expect(el.querySelectorAll('details.play-details').length).toBe(expectedMenus);
    expect(el.querySelectorAll('a.project-link').length).toBe(expectedPlain);
  });

  it('closes an open store menu on outside click', async () => {
    const fixture = create();
    const el = fixture.nativeElement as HTMLElement;
    const details = el.querySelector('details.play-details') as HTMLDetailsElement;
    details.setAttribute('open', '');
    expect(details.hasAttribute('open')).toBe(true);

    (el.querySelector('.project-title') as HTMLElement).click();
    await fixture.whenStable();
    expect(details.hasAttribute('open')).toBe(false);
  });

  it('keeps the menu open when the click lands inside it', async () => {
    const fixture = create();
    const el = fixture.nativeElement as HTMLElement;
    const details = el.querySelector('details.play-details') as HTMLDetailsElement;
    details.setAttribute('open', '');

    (details.querySelector('.play-menu a') as HTMLElement).click();
    await fixture.whenStable();
    expect(details.hasAttribute('open')).toBe(true);
  });

  it('closes open store menus on Escape', async () => {
    const fixture = create();
    const el = fixture.nativeElement as HTMLElement;
    const details = el.querySelector('details.play-details') as HTMLDetailsElement;
    details.setAttribute('open', '');

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await fixture.whenStable();
    expect(details.hasAttribute('open')).toBe(false);
  });
});
