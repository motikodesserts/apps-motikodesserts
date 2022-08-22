import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/internal/Observable';

import { environment } from '../../../../environments/environment';
import { Category } from '../../interfaces/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(
    private http: HttpClient,
    private translateService: TranslateService
  ) {}

  getCategories(): Observable<any> {
    return this.http.get(
      `${environment.API_URL}/${this.translateService.currentLang}/categories/`
    );
  }

  getCategoryByCode(code: string) {
    return this.http.get(
      `${environment.API_URL}/${this.translateService.currentLang}/categories/?category__code=${code}`
    );
  }
}
