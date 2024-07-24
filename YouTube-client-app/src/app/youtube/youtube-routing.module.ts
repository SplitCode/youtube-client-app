import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardsListComponent } from './pages/cards-list-page/cards-list-page.component';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';

const routes: Routes = [
  {
    path: '',
    component: CardsListComponent,
  },
  {
    path: 'details/:id',
    component: DetailedPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
