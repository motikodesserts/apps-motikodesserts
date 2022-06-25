import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-card',
  templateUrl: './left-card.component.html',
  styleUrls: ['./left-card.component.scss'],
})
export class LeftCardComponent implements OnInit {
  @Input() color?: string;
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() shortDescription?: string;
  @Input() description?: string;
  @Input() img?: string;
  @Input() index?: number;

  headerDescription = ``;
  showDetails = false;
  constructor() {}

  ngOnInit(): void {}
}
