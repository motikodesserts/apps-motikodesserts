import { Component, HostListener, OnInit } from '@angular/core';
import { Catalog } from '../../shared/interfaces/catalog .interface';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  topDistance = 0;
  point = 50;
  navOpen = false;
  public pages = [
    { title: 'about us', url: 'about-us' },
    { title: 'catalogs', url: 'catalogs' },
    { title: '', url: '/' },
    { title: 'for partners', url: 'partners' },
    { title: 'contact', url: 'contact' },
  ];

  catalogs!: Catalog[];

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(e: any) {
    e.stopPropagation();
    const { pageYOffset } = window;
    this.topDistance = pageYOffset;
  }

  constructor(private navbarService: NavbarService) {}

  ngOnInit(): void {
    this.navbarService
      .getCatalogs()
      .subscribe((data) => (this.catalogs = data as any));
  }
}
