import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18n } from '../../i18n/i18n';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly i18n = inject(I18n);

  protected readonly stats = [
    { key: 'statClass', valueKey: 'statClassVal' },
    { key: 'statLevel', valueKey: 'statLevelVal' },
    { key: 'statExp', valueKey: 'statExpVal' },
  ] as const;
}
