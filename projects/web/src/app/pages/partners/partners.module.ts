import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnersRoutingModule } from './partners-routing.module';
import { PartnersComponent } from './partners.component';
import { PageHeaderModule } from '../../components/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [PartnersComponent],
  imports: [
    CommonModule,
    PartnersRoutingModule,
    TranslateModule,
    PageHeaderModule,
  ],
})
export class PartnersModule {}
