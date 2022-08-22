import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { PageHeaderModule } from '../../components/page-header/page-header.module';

@NgModule({
  declarations: [CatalogComponent],
  imports: [CommonModule, CatalogRoutingModule, PageHeaderModule],
})
export class CatalogModule {}
