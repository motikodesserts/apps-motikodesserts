import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./pages/about-us/about-us.module').then((m) => m.AboutUsModule),
    pathMatch: 'full',
  },
  {
    path: 'catalogs',
    loadChildren: () =>
      import('./pages/about-us/about-us.module').then((m) => m.AboutUsModule),
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      // useHash: true,
      // scrollPositionRestoration: 'enabled',
      //anchorScrolling: 'enabled',
      // scrollOffset: [0, 64],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
