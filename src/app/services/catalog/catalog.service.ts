import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  constructor(
    private http: HttpClient,
    @Inject(DOCUMENT) private document: Document
  ) {}

  getCatalogs() {
    return this.http.get(
      `${environment.API_URL}/${this.document.documentElement.lang}/catalogs/`
    );
  }

  getCatalogsByCode(code: string) {
    return this.http.get(
      `${environment.API_URL}/${this.document.documentElement.lang}/catalogs/?catalog__code=${code}`
    );
  }
}
