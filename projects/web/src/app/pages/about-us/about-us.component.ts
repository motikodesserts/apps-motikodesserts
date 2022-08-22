import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AboutUsSection } from '../../shared/interfaces/about-us-section.interface';
import { AboutUsService } from '../../shared/services/about-us/about-us.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  title = '';
  imgHeader = 'assets/img/about.jpg';
  headerDescription = ``;
  colors = ['#f9dde9', '#f1e0f3', '#e6e6e6', '#fdeed7'];
  lightColors = ['#ffe8f2', '#fce9ff', '#f1f1f1', '#ffffff'];
  $data!: Observable<AboutUsSection[]>;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private aboutUsService: AboutUsService,
    private translateService: TranslateService
  ) {
    this.titleService.setTitle('About Us');
    this.meta.updateTag({ name: 'amout us', content: 'motiko' });

    this.$data = this.aboutUsService.getContent();
  }

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe((event: HashChangeEvent) => {
      this.$data = this.aboutUsService.getContent();
    });
  }
}
