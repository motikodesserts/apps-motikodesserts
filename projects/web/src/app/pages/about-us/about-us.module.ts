import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { PageHeaderModule } from '../../components/page-header/page-header.module';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule, AboutUsRoutingModule, PageHeaderModule],
  exports: [AboutUsComponent],
})
export class AboutUsModule {}
