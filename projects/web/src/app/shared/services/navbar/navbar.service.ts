import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  public currentLanguage!: string;
  constructor(
    private http: HttpClient,
    private translateService: TranslateService
  ) {
    if (typeof window !== 'undefined') {
      this.currentLanguage = window?.navigator.language;
    } else {
      this.currentLanguage = this.translateService.currentLang;
    }
  }

  getLanguages() {
    return this.http.get(`${environment.API_URL}/languages/`);
  }
}
