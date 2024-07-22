import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {
  ApplicationConfig, importProvidersFrom, InjectionToken, isDevMode, Provider,
  provideZoneChangeDetection
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
// import { CoreModule } from './core/core.module';
import { LoggerService } from './core/services/logger.service';
import { loggerFactory } from './core/services/logger-factory';

export const devToken = new InjectionToken('fgfg');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    // importProvidersFrom(CoreModule),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: LoggerService,
      useFactory: () => loggerFactory(isDevMode()),
    },
    {
      provide: devToken,
      useValue: isDevMode(),
    }
  ],
};
