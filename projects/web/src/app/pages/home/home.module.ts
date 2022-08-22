import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, HttpClientModule, TranslateModule],
})
export class HomeModule {}
