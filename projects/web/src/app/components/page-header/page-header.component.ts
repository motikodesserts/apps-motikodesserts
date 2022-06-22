import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {
  @Input() title: string = '';
  @Input() img: string = 'assets/img/about.jpg';
  @Input() description?: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.img);
    console.log(this.title);
  }
}
