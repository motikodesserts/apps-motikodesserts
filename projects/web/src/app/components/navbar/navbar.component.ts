import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Catalog } from '../../shared/interfaces/catalog .interface';
import { CatalogService } from '../../shared/services/catalog/catalog.service';
import { NavbarService } from '../../shared/services/navbar/navbar.service';

interface Language {
  id: number;
  name: string;
  code: string;
  status: boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navOpen = false;
  languages!: Language[];
  lang!: string;

  showSubMenu = false;

  catalogs!: Catalog[];
  public pages = [] as any;

  constructor(
    public navbarService: NavbarService,
    private translateService: TranslateService,
    private catalogService: CatalogService
  ) {}

  ngOnInit(): void {
    this.catalogService
      .getCatalogs()
      .subscribe((data) => (this.catalogs = data as any));

    this.navbarService.getLanguages().subscribe((data) => {
      this.languages = data as any;
      this.catalogService
        .getCatalogs()
        .subscribe((data) => (this.catalogs = data as any));
    });
    this.lang = this.translateService.currentLang;

    this.pages.push(
      { title: 'catalogs', url: `${this.lang}/catalogs`, subMenus: true },
      { title: 'for_partners', url: `${this.lang}/partners` },
      { title: ``, url: `${this.lang}/` },
      { title: 'about_us', url: `${this.lang}/about-us` },
      { title: 'contact', url: `${this.lang}/contact` }
    );
    console.log(this.lang, '----------------');
  }

  setLanguage(lang: string) {
    this.translateService.setDefaultLang(lang);
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translateService.use(lang);
  }
}
