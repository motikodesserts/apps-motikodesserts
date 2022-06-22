import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { SvgComponent } from './svg/svg.component';

@NgModule({
  declarations: [CarouselComponent, SvgComponent],
  imports: [CommonModule],
  exports: [CarouselComponent],
})
export class CarouselModule {}
