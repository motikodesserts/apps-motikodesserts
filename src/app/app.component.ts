import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'motikodesserts-app';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.setDefaultTranslation();
  }

  private setDefaultTranslation(): void {
    if (
      ['en', 'es'].indexOf(this.translateService.getBrowserLang() as string) >
      -1
    ) {
      this.translateService.setDefaultLang(
        this.translateService.getBrowserLang() as string
      );
    } else {
      this.translateService.setDefaultLang('en');
    }

    this.document.documentElement.lang = this.translateService.getBrowserLang()
      ? (this.translateService.getBrowserLang() as string)
      : 'en';

    this.translateService.setDefaultLang(this.document.documentElement.lang);
    console.log(this.document.documentElement.lang);
  }

  public switchLanguage(lang: string): void {
    this.translateService.setDefaultLang(lang);
    console.log(this.translateService.getDefaultLang());
  }
}
