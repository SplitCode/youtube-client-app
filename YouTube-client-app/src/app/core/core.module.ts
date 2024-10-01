import { CommonModule } from '@angular/common';
import {
  isDevMode, NgModule, Optional, SkipSelf
} from '@angular/core';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ModuleImportGuard } from './guards/module-import.guard';
import { DevLoggerService } from './services/dev-logger.service';
import { LoggerService } from './services/logger.service';
import { ProdLoggerService } from './services/prod-logger.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
  providers: [
    {
      provide: LoggerService,
      useClass: isDevMode() ? DevLoggerService : ProdLoggerService,
    },
  ],
})
export class CoreModule extends ModuleImportGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
