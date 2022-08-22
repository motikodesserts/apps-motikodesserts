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

  constructor(private translateService: TranslateService) {}
  ngOnInit(): void {
    if (window?.navigator.language) {
      this.translateService.setDefaultLang(window?.navigator.language);
      this.translateService.use(window?.navigator.language);
    } else {
      this.translateService.setDefaultLang('en');
      this.translateService.use('en');
    }
    this.translateService.onLangChange.subscribe((event: HashChangeEvent) => {
      this.reload = true;
      setTimeout(() => (this.reload = false), 5000);
    });
  }
}
