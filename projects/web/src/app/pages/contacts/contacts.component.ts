import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
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
  errorMsg = false;

  constructor(
    private http: HttpClient,
    private recaptchaV3Service: ReCaptchaV3Service
  ) {}

  ngOnInit(): void {}

  send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        this.errorMsg = true;
        form.controls[control].markAsTouched();
      }
      setTimeout(() => {
        this.errorMsg = false;
      }, 5000);
      return;
    }

    console.log(form);

    this.recaptchaV3Service
      .execute('importantAction')
      .subscribe((token: string) => {
        console.debug(`Token [${token}] generated`);
      });

    try {
      this.successMsg = true;
      this.http
        .post(`${environment.API_URL}/contact/`, form.value)
        .subscribe((data) => {
          setTimeout(() => {
            this.successMsg = false;
          }, 5000);
        });
    } catch (error) {
      console.log(error);
    }
  }
}
