import { HttpClient } from '@angular/common/http';
import { Component, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  message!: string;
  subject!: string;
  email!: string;
  phone!: string;
  name!: string;
  headerImg = Math.floor(Math.random() * 34);
  successMsg = false;
  errorMsg = false;
  token: string | undefined;

  constructor(private http: HttpClient, private renderer: Renderer2) {
    this.token = undefined;
  }

  ngOnInit(): void {
    // this.renderer.addClass(document.body, 'recaptcha');
  }

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
    /*
    this.recaptchaV3Service
      .execute('importantAction')
      .subscribe((token: string) => {
        console.debug(`Token [${token}] generated`);
        if (token) {
          this.successMsg = true;
          this.http
            .post(`${environment.API_URL}/contact/`, form.value)
            .subscribe((data) => {
              setTimeout(() => {
                this.successMsg = false;
              }, 5000);
            });
        }
      });
      */
  }

  ngOnDestroy() {
    // this.renderer.removeClass(document.body, 'recaptcha');
  }
}
