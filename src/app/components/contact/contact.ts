import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18n } from '../../i18n/i18n';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  protected readonly i18n = inject(I18n);

  protected readonly channels = [
    { key: 'ctaEmail', href: 'mailto:vicenteapv1@gmail.com', secondary: false },
    { key: 'ctaLinkedin', href: 'https://www.linkedin.com/in/vicinf', secondary: true },
    { key: 'ctaGithub', href: 'https://github.com/VicInf', secondary: true },
  ] as const;
}
