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

  constructor() {
    setTimeout(() => {
      if (this.selectedIndex === 4) {
        this.selectedIndex = 0;
      } else {
        this.selectedIndex += 1;
      }
    }, 5000);
  }

  ngOnInit(): void {}
}
