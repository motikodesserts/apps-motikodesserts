import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  topDistance = 0;
  point = 200;
  navOpen = false;
  public pages = [
    { title: 'about us', url: '/', fragment: 'about-us' },
    { title: 'catalogs', url: '/', fragment: 'catalogs' },
    { title: '', url: '/', fragment: 'home' },
    { title: 'for partners', url: '/', fragment: 'partners' },
    { title: 'contact', url: '/', fragment: 'contact' },
  ];

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    const { pageYOffset } = window;
    this.topDistance = pageYOffset;
  }

  constructor() {}

  ngOnInit(): void {}
}
