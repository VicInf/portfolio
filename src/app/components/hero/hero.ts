import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly stats = [
    { label: 'CLASS', value: 'FLUTTER + ANGULAR' },
    { label: 'LEVEL', value: 'SENIOR' },
    { label: 'EXP', value: '3+ YRS' },
  ];
}
