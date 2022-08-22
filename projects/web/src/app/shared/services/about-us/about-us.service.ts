import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { AboutUsSection } from '../../interfaces/about-us-section.interface';

@Injectable({
  providedIn: 'root',
})
export class AboutUsService {
  constructor(
    private http: HttpClient,
    private translateService: TranslateService
  ) {}

  getContent(): Observable<any> {
    return this.http.get(
      `${environment.API_URL}/${this.translateService.currentLang}/cms/about-us/`
    );
  }
}
