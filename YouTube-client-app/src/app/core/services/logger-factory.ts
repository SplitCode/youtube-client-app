/* eslint-disable no-console */
import { Injectable, isDevMode } from '@angular/core';

import { LoggerService } from './logger.service';

export const loggerFactory = () => {
  @Injectable()
  class LoggerServiceImplementation extends LoggerService {
    private readonly prefix = isDevMode() ? '[DEV]' : '[PROD]';

    logMessage(message: string): void {
      console.log(`${this.prefix} ${message}`);
    }
  }

  return LoggerServiceImplementation;
};
