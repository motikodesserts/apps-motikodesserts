import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogsRoutingModule } from './catalogs-routing.module';
import { CatalogsComponent } from './catalogs.component';
import { PageHeaderModule } from '../../components/page-header/page-header.module';
import { CategoryModule } from '../../components/category/category.module';
import { ProductModule } from '../../components/product/product.module';

@NgModule({
  declarations: [CatalogsComponent],
  imports: [
    CommonModule,
    CatalogsRoutingModule,
    PageHeaderModule,
    CategoryModule,
    ProductModule,
  ],
})
export class CatalogsModule {}
