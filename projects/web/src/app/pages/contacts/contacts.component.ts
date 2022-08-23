import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  message!: string;
  subject!: string;
  email!: string;
  phone!: string;
  name!: string;
  headerImg = Math.floor(Math.random() * 34);
  successMsg = false;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  sendEmail(): void {
    const payload = {
      message: this.message,
      subject: this.subject,
      emai: this.email,
      phone: this.phone,
      name: this.name,
    };

    this.successMsg = true;
    setTimeout(() => {
      this.successMsg = false;
    }, 5000);

    // this.http.post(`${environment.BASE_URL}/contact`, payload);
  }
}
