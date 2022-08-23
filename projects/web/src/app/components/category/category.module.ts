import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PageHeaderModule } from '../page-header/page-header.module';

@NgModule({
  declarations: [CategoryComponent],
  imports: [CommonModule, HttpClientModule, RouterModule, PageHeaderModule],
  exports: [CategoryComponent],
})
export class CategoryModule {}
