import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutesModule } from './app.routes';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [],
  imports: [BrowserModule, RouterModule, CoreModule, AppRoutesModule],
})
export class AppModule {}
