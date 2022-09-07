import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PageHeaderModule } from '../page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    PageHeaderModule,
    TranslateModule,
  ],
  exports: [CategoryComponent],
})
export class CategoryModule {}
