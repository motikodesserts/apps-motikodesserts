import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private http: HttpClient,
    private translateService: TranslateService
  ) {}

  getProducts(): Observable<any> {
    return this.http.get(
      `${environment.API_URL}/${this.translateService.currentLang}/products/`
    );
  }

  getProductsByCategoryCode(code: string): Observable<any> {
    return this.http.get(
      `${environment.API_URL}/${this.translateService.currentLang}/products/?product__categories__code=${code}`
    );
  }

  getProductByCode(code: string): Observable<any> {
    return this.http.get(
      `${environment.API_URL}/${this.translateService.currentLang}/products/?product__code=${code}`
    );
  }

  getProductBySlug(slug: string): Observable<any> {
    return this.http.get(
      `${environment.API_URL}/${this.translateService.currentLang}/products/?slug=${slug}`
    );
  }
}
