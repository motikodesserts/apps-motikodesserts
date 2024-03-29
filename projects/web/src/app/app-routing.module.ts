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
  },
  {
    path: 'catalogs',
    loadChildren: () =>
      import('./pages/catalogs/catalogs.module').then((m) => m.CatalogsModule),
  },
  {
    path: 'products/:slug',
    loadChildren: () =>
      import('./pages/product/product.module').then((m) => m.ProductModule),
    pathMatch: 'full',
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./pages/categories/categories.module').then(
        (m) => m.CategoriesModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contacts/contacts.module').then((m) => m.ContactsModule),
    pathMatch: 'full',
  },
  {
    path: 'partners',
    loadChildren: () =>
      import('./pages/partners/partners.module').then((m) => m.PartnersModule),
    pathMatch: 'full',
  },
  // es language
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'sobre-nosotros',
    loadChildren: () =>
      import('./pages/about-us/about-us.module').then((m) => m.AboutUsModule),
  },
  {
    path: 'catalogos',
    loadChildren: () =>
      import('./pages/catalogs/catalogs.module').then((m) => m.CatalogsModule),
  },
  {
    path: 'productos/:slug',
    loadChildren: () =>
      import('./pages/product/product.module').then((m) => m.ProductModule),
    pathMatch: 'full',
  },
  {
    path: 'categorias',
    loadChildren: () =>
      import('./pages/categories/categories.module').then(
        (m) => m.CategoriesModule
      ),
  },
  {
    path: 'contacto',
    loadChildren: () =>
      import('./pages/contacts/contacts.module').then((m) => m.ContactsModule),
    pathMatch: 'full',
  },
  {
    path: 'colaboradores',
    loadChildren: () =>
      import('./pages/partners/partners.module').then((m) => m.PartnersModule),
    pathMatch: 'full',
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
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
