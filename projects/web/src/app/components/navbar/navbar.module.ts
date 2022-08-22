import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    TranslateModule,
    FormsModule,
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}
