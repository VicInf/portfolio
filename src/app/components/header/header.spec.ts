import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { Header } from './header';

describe('Header', () => {
  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
  });

  function create() {
    const fixture = TestBed.createComponent(Header);
    fixture.detectChanges();
    return fixture;
  }

  it('renders the three nav links', () => {
    const el = create().nativeElement as HTMLElement;
    const links = el.querySelectorAll('.nav-link');
    expect(links.length).toBe(3);
    expect(links[0].textContent).toContain('WORK');
  });

  it('toggles aria-expanded with the open state', async () => {
    const fixture = create();
    const button = (fixture.nativeElement as HTMLElement).querySelector('.nav-toggle') as HTMLButtonElement;
    expect(button.getAttribute('aria-expanded')).toBe('false');

    button.click();
    await fixture.whenStable();
    expect(button.getAttribute('aria-expanded')).toBe('true');

    button.click();
    await fixture.whenStable();
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });

  it('closes the menu on Escape', async () => {
    const fixture = create();
    const button = (fixture.nativeElement as HTMLElement).querySelector('.nav-toggle') as HTMLButtonElement;
    button.click();
    await fixture.whenStable();
    expect(button.getAttribute('aria-expanded')).toBe('true');

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await fixture.whenStable();
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });
});
