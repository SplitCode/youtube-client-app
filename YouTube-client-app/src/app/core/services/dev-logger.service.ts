/* eslint-disable no-console */
import { inject, Injectable } from '@angular/core';

import { devToken } from '../../app.config';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class DevLoggerService extends LoggerService {
  private readonly isDevMode = inject(devToken);
  private prefix = this.isDevMode ? '[DEV]' : '[PROD]';

  logMessage(message: string): void {
    console.log(`${this.prefix} ${message}`);
  }
}
