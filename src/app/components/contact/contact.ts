import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  protected readonly channels = [
    { label: 'TRANSMIT EMAIL', href: 'mailto:vicenteapv1@gmail.com', secondary: false },
    { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/vicinf', secondary: true },
    { label: 'GITHUB', href: 'https://github.com/VicInf', secondary: true },
  ];
}
