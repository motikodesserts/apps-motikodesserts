import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  constructor(
    private http: HttpClient,
    private translateService: TranslateService
  ) {}

  getCatalogs() {
    return this.http.get(
      `${environment.API_URL}/${this.translateService.currentLang}/catalogs/`
    );
  }

  getCatalogsByCode(code: string) {
    return this.http.get(
      `${environment.API_URL}/${this.translateService.currentLang}/catalogs/?catalog__code=${code}`
    );
  }
}
