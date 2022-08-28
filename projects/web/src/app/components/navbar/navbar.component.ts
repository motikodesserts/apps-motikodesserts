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
  topDistance = 0;
  point = 50;
  navOpen = false;
  languages!: Language[];

  showSubMenu = false;

  catalogs!: Catalog[];
  public pages = [
    { title: 'about_us', url: 'about-us' },
    {
      title: 'catalogs',
      url: 'catalogs',
      subMenus: true,
    },
    { title: '', url: '/' },
    { title: 'for_partners', url: 'partners' },
    { title: 'contact', url: 'contact' },
  ];

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(e: any) {
    e.stopPropagation();
    const { pageYOffset } = window;
    this.topDistance = pageYOffset;
  }

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
  }

  setLanguage(lang: string) {
    this.translateService.setDefaultLang(lang);
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translateService.use(lang);
  }
}
