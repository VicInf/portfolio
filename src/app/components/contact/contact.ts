import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { I18n } from '../../i18n/i18n';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  protected readonly i18n = inject(I18n);

  /** The CV channel follows the visitor's language; the rest are fixed. */
  protected readonly channels = computed(() => [
    { key: 'ctaEmail', href: 'mailto:vicenteapv1@gmail.com', secondary: false },
    { key: 'ctaLinkedin', href: 'https://www.linkedin.com/in/vicinf', secondary: true },
    { key: 'ctaGithub', href: 'https://github.com/VicInf', secondary: true },
    { key: 'ctaCv', href: this.i18n.cvHref(), secondary: true },
  ] as const);
}
