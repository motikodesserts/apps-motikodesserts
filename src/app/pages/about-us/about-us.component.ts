import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AboutUsSection } from 'src/app/interfaces/about-us-section.interface';
import { AboutUsService } from 'src/app/services/about-us/about-us.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent {
  title = '';

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
}
