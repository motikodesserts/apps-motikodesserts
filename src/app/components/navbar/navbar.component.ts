import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Catalog } from 'src/app/interfaces/catalog .interface';
import { CatalogService } from 'src/app/services/catalog/catalog.service';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { Language } from 'src/app/interfaces/language.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
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
      { title: 'catalogs', url: '/ catalogs', subMenu: true },
      { title: 'for_partners', url: 'partners' },
      { title: ``, url: '/' },
      { title: 'about_us', url: '/about-us' },
      { title: 'contact', url: '/contact' }
    );
  }

  setLanguage(lang: string) {
    this.translateService.setDefaultLang(lang);
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translateService.use(lang);
  }
}
