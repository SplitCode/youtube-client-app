import { Component } from '@angular/core';

import { ButtonComponent } from '../../../../shared/button/button.component';

@Component({
  selector: 'app-login-info',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './login-info.component.html',
  styleUrl: './login-info.component.scss',
})
export class LoginInfoComponent {
  title = 'Your Name';
}
