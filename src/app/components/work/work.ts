import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PROJECTS } from '../../data/projects';
import { I18n } from '../../i18n/i18n';

@Component({
  selector: 'app-work',
  templateUrl: './work.html',
  styleUrl: './work.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Work {
  protected readonly i18n = inject(I18n);
  protected readonly projects = PROJECTS;

  /**
   * Every link (Sidney: two) renders a dropdown menu label; single-link
   * cards skip the menu and render one plain arrow.
   */
  protected hasMenu(project: (typeof PROJECTS)[number]): boolean {
    return (project.links?.length ?? 0) > 1;
  }
}
