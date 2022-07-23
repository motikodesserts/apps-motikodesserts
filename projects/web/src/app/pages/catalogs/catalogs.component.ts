import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.scss'],
})
export class CatalogsComponent implements OnInit {
  title = '';
  imgHeader = 'assets/img/about.jpg';
  headerDescription = ``;

  constructor() {}

  ngOnInit(): void {}
}
