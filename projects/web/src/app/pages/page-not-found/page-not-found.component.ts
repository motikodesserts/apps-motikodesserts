import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  constructor(private titleService: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Motiko');
    this.meta.updateTag({
      name: 'Motiko 404',
      content: '',
    });
  }
}
