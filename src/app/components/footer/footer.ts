import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18n } from '../../i18n/i18n';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly i18n = inject(I18n);
}
