import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
