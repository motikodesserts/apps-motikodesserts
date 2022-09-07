import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { PageHeaderModule } from '../../components/page-header/page-header.module';
import { FooterModule } from '../../components/footer/footer.module';
import { LeftCardModule } from '../../components/left-card/left-card.module';
import { RightCardModule } from '../../components/right-card/right-card.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgxTranslateRoutesModule } from 'ngx-translate-routes';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    PageHeaderModule,
    FooterModule,
    LeftCardModule,
    RightCardModule,
    TranslateModule,
    NgxTranslateRoutesModule,
  ],
  exports: [AboutUsComponent],
})
export class AboutUsModule {}
