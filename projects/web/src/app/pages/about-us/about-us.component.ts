import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  title = 'about us';
  imgHeader = 'assets/img/about.jpg';

  constructor() {}

  ngOnInit(): void {}
}
