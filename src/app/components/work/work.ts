import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PROJECTS } from '../../data/projects';
import { I18n } from '../../i18n/i18n';

@Component({
  selector: 'app-work',
  templateUrl: './work.html',
  styleUrl: './work.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:click)': 'closeOpenMenus($event)',
    '(document:keydown.escape)': 'closeOpenMenus()',
  },
})
export class Work {
  protected readonly i18n = inject(I18n);
  protected readonly projects = PROJECTS;

  private readonly doc = inject(DOCUMENT);

  /**
   * Multi-link cards (Sidney, Excuela: four stores each) render a dropdown
   * menu of labeled destinations; single-link cards skip the menu and
   * render one plain arrow.
   */
  protected hasMenu(project: (typeof PROJECTS)[number]): boolean {
    return (project.links?.length ?? 0) > 1;
  }

  /**
   * Native <details> only closes when its own summary is toggled; a click
   * outside any open store menu (or Escape) must close it. Closed directly
   * via the DOM — attribute toggle, nothing to rerender.
   */
  protected closeOpenMenus(event?: Event): void {
    for (const details of this.doc.querySelectorAll<HTMLDetailsElement>('details.play-details[open]')) {
      if (!event || !details.contains(event.target as Node)) {
        details.removeAttribute('open');
      }
    }
  }
}
