import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18n } from '../../i18n/i18n';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly i18n = inject(I18n);

  /** EN source strings — display name resolved per language via i18n.txSkill(). */
  protected readonly skills = [
    'Frontend development',
    'Flutter',
    'Angular',
    'TypeScript',
    'Firebase',
    'REST APIs',
    'Nest.js',
    'PostgreSQL',
    'Prisma',
    'Clean architecture',
    'AI-assisted development',
    'Agent-driven development',
  ];
}
