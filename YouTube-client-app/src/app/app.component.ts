import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CoreModule } from './core/core.module';
import { DevLoggerService } from './core/services/dev-logger.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, CoreModule],
})
export class AppComponent {
  constructor(private logger: DevLoggerService) {
    this.logger.logMessage('AppComponent initialized');
  }
}
