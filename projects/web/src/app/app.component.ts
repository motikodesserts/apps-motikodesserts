import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'web';
  reload = false;

  languages = ['es', 'en'];

  constructor(private translateService: TranslateService) {}
  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const lang = window?.navigator.language.includes('-')
        ? window?.navigator.language.split('-')[0]
        : window?.navigator.language;
      if (this.languages.includes(lang)) {
        this.translateService.setDefaultLang(lang);
        this.translateService.use(lang);
      } else {
        this.translateService.setDefaultLang('en');
        this.translateService.use('en');
      }
    } else {
      this.translateService.setDefaultLang('en');
      this.translateService.use('en');
    }

    document
      .querySelector('html')
      ?.setAttribute('lang', this.translateService.currentLang);

    this.translateService.onLangChange.subscribe((event: HashChangeEvent) => {
      this.reload = true;
      setTimeout(() => (this.reload = false), 5000);
    });
  }
}
