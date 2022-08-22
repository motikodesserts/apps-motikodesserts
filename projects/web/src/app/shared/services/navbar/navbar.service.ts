import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  public currentLanguage: string = 'en';
  constructor(
    private http: HttpClient,
    private translateService: TranslateService
  ) {
    this.currentLanguage =
      navigator.language || this.translateService.currentLang;
  }

  getLanguages() {
    return this.http.get(`${environment.API_URL}/languages/`);
  }
}
