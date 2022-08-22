import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ContactsComponent],
  imports: [CommonModule, ContactsRoutingModule, HttpClientModule],
})
export class ContactsModule {}
