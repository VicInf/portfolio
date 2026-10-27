import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { Hero } from './hero';

describe('Hero', () => {
  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [Hero],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
  });

  function create() {
    const fixture = TestBed.createComponent(Hero);
    fixture.detectChanges();
    return fixture;
  }

  it('positions with the CV summary, not designer copy', () => {
    const el = create().nativeElement as HTMLElement;
    expect(el.textContent).toContain('Seeking remote roles with US-based teams');
    expect(el.textContent).not.toContain('Every pixel deliberate');
  });

  it('carries only facts in the stat row — no self-rated level', () => {
    const el = create().nativeElement as HTMLElement;
    const values = [...el.querySelectorAll('.stat-value')].map(n => n.textContent?.trim());
    expect(values).toContain('300 VEHICLES');
    expect(values).toContain('10K+ INSTALLS');
    expect(values).toContain('3+ YRS');
    expect(values).not.toContain('SENIOR');
  });

  it('makes the CV the primary action and drops the redundant scroll CTA', () => {
    const el = create().nativeElement as HTMLElement;
    const cv = el.querySelector('a[download]') as HTMLAnchorElement;
    expect(cv).toBeTruthy();
    expect(cv.getAttribute('href')).toBe('cv-vicente-perez-en.pdf');
    expect(cv.classList.contains('secondary')).toBe(false);
    expect(el.textContent).not.toContain('LOAD DATA');
  });
});
