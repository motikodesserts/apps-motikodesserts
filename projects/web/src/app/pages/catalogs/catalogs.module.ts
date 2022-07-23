import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogsRoutingModule } from './catalogs-routing.module';
import { CatalogsComponent } from './catalogs.component';
import { PageHeaderModule } from '../../components/page-header/page-header.module';

@NgModule({
  declarations: [CatalogsComponent],
  imports: [CommonModule, CatalogsRoutingModule, PageHeaderModule],
})
export class CatalogsModule {}
