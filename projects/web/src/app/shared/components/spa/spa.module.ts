import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PartnersComponent } from './partners/partners.component';
import { PageHeaderModule } from '../../../components/page-header/page-header.module';

@NgModule({
  declarations: [
    ContactComponent,
    CatalogsComponent,
    AboutUsComponent,
    PartnersComponent,
  ],
  imports: [CommonModule, PageHeaderModule],
  exports: [
    ContactComponent,
    CatalogsComponent,
    AboutUsComponent,
    PartnersComponent,
  ],
})
export class SpaModule {}
