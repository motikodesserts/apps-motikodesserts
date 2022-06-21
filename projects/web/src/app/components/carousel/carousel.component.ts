import { Component, Input, OnInit } from '@angular/core';

interface Card {
  imgSrc: string;
  title?: string;
  description?: string;
  url?: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() cards: Card[] = [];

  selectedIndex = 0;

  constructor() {}

  ngOnInit(): void {}
}
