import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// скорее всего тоже нет смвсла в импортре, так как модуль загружается через роутинг
// import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { YoutubeRoutingModule } from './youtube-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // DetailedPageComponent,
    YoutubeRoutingModule,
  ],
})
export class YoutubeModule {}
