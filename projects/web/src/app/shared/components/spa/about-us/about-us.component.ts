import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  title = 'about us';
  imgHeader = 'assets/img/about.jpg';
  headerDescription = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas quod
      commodi, nobis sapiente consequatur autem explicabo ipsam. Corporis
      recusandae velit praesentium eligendi, expedita pariatur, commodi aperiam
      repudiandae magnam asperiores voluptas.`;

  constructor() {}

  ngOnInit(): void {}
}
