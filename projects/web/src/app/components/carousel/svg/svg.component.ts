import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss'],
})
export class SvgComponent implements OnInit {
  // @Input() svgName!: string;
  @Input() width?: number;
  @Input() height?: number;
  @Input() size?: number = 24;
  @Input() fill?: string;
  @Input() class?: string;

  ngOnInit(): void {
    if (!this.width || !this.height) {
      this.width = this.size;
      this.height = this.size;
    }
  }
}
