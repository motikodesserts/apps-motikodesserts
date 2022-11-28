import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'en',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'en/about-us',
    loadChildren: () =>
      import('./pages/about-us/about-us.module').then((m) => m.AboutUsModule),
  },
  {
    path: 'en/catalogs',
    loadChildren: () =>
      import('./pages/catalogs/catalogs.module').then((m) => m.CatalogsModule),
  },
  {
    path: 'en/products/:slug',
    loadChildren: () =>
      import('./pages/product/product.module').then((m) => m.ProductModule),
    pathMatch: 'full',
  },
  {
    path: 'en/categories',
    loadChildren: () =>
      import('./pages/categories/categories.module').then(
        (m) => m.CategoriesModule
      ),
  },
  {
    path: 'en/contact',
    loadChildren: () =>
      import('./pages/contacts/contacts.module').then((m) => m.ContactsModule),
    pathMatch: 'full',
  },
  {
    path: 'en/partners',
    loadChildren: () =>
      import('./pages/partners/partners.module').then((m) => m.PartnersModule),
    pathMatch: 'full',
  },
  // es language
  {
    path: 'es',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'es/sobre-nosotros',
    loadChildren: () =>
      import('./pages/about-us/about-us.module').then((m) => m.AboutUsModule),
  },
  {
    path: 'es/catalogos',
    loadChildren: () =>
      import('./pages/catalogs/catalogs.module').then((m) => m.CatalogsModule),
  },
  {
    path: 'es/productos/:slug',
    loadChildren: () =>
      import('./pages/product/product.module').then((m) => m.ProductModule),
    pathMatch: 'full',
  },
  {
    path: 'es/categorias',
    loadChildren: () =>
      import('./pages/categories/categories.module').then(
        (m) => m.CategoriesModule
      ),
  },
  {
    path: 'es/contacto',
    loadChildren: () =>
      import('./pages/contacts/contacts.module').then((m) => m.ContactsModule),
    pathMatch: 'full',
  },
  {
    path: 'es/colaboradores',
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
