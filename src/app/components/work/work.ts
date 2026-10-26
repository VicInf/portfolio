import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROJECTS, Project } from '../../data/projects';

@Component({
  selector: 'app-work',
  templateUrl: './work.html',
  styleUrl: './work.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Work {
  protected readonly projects = PROJECTS;

  /**
   * Every link (Sidney: two) renders a dropdown menu label; single-link
   * cards skip the menu and render one plain arrow.
   */
  protected hasMenu(project: Project): boolean {
    return (project.links?.length ?? 0) > 1;
  }
}
