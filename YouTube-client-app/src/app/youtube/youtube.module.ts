import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { YoutubeRoutingModule } from './youtube-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainPageComponent,
    DetailedPageComponent,
    YoutubeRoutingModule,
  ],
})
export class YoutubeModule {}
