import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  ApplicationConfig,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

import { routes } from './app.routes';
import { httpInterceptor } from './core/services/http.interceptor';
import { LoggerService } from './core/services/logger.service';
import { loggerFactory } from './core/services/logger-factory';
import { cardsReducer } from './redux/reducers/reducer';
import { CardEffects } from './redux/effects/card.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([httpInterceptor])),
    {
      provide: LoggerService,
      useFactory: () => loggerFactory(isDevMode()),
    },
    provideStore({ cardState: cardsReducer }),
    provideEffects([CardEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: true,
      traceLimit: 75,
      connectInZone: true,
    }),
  ],
};
