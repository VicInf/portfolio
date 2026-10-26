import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
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
