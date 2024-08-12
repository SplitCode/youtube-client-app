import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CoreModule } from './core/core.module';
import { LoggerService } from './core/services/logger-service/logger.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, CoreModule],
})
export class AppComponent {
  constructor(private logger: LoggerService) {
    this.logger.logMessage('AppComponent initialized');
  }
}
