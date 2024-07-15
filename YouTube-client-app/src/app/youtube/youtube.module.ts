import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, MainPageComponent, DetailedPageComponent],
})
export class YoutubeModule {}
