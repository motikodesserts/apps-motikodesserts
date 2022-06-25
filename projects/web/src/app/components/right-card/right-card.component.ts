import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-card',
  templateUrl: './right-card.component.html',
  styleUrls: ['./right-card.component.scss'],
})
export class RightCardComponent implements OnInit {
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
