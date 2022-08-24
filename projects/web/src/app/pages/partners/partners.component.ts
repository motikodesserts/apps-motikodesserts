import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent implements OnInit {
  headerImg = Math.floor(Math.random() * 34);

  constructor() {}

  ngOnInit(): void {}
}
