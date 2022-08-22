import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryModule } from '../../components/category/category.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    HttpClientModule,
    CategoryModule,
    TranslateModule,
  ],
})
export class CategoriesModule {}
