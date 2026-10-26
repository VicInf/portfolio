import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { I18n } from '../../i18n/i18n';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown.escape)': 'close()' },
})
export class Header {
  protected readonly i18n = inject(I18n);

  /** Mobile dropdown state — panel is CSS-only on desktop (display: contents). */
  protected readonly open = signal(false);

  protected toggle(): void {
    this.open.update(v => !v);
  }

  protected close(): void {
    this.open.set(false);
  }
}
