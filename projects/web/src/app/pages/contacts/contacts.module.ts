import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { HttpClientModule } from '@angular/common/http';
import { PageHeaderModule } from '../../components/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    HttpClientModule,
    PageHeaderModule,
    TranslateModule,
    FormsModule,
  ],
})
export class ContactsModule {}
