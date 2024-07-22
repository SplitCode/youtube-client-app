/* eslint-disable no-console */

import { LoggerService } from './logger.service';

export const loggerFactory = (isDevMode: boolean) => {
  class LoggerServiceImplementation extends LoggerService {
    private readonly prefix = isDevMode ? '[DEV]' : '[PROD]';

    logMessage(message: string): void {
      console.log(`${this.prefix} ${message}`);
    }
  }

  return new LoggerServiceImplementation();
};
