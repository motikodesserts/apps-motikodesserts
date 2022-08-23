import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { TranslateModule } from '@ngx-translate/core';
import { PageHeaderModule } from '../../components/page-header/page-header.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    TranslateModule,
    PageHeaderModule,
  ],
})
export class ProductModule {}
