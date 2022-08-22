import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  sendEmail(message: string, subject: string, from: string): void {
    const payload = {
      message,
      subject,
      from,
    };

    // this.http.post(`${environment.BASE_URL}/contact`, payload);
  }
}
