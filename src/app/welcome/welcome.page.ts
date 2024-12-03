import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage {
  @ViewChild('swiper') swiper: any;
  
  nextSlide() {
    if (this.swiper) {
      this.swiper.swiperRef.slideNext();
    }
  }

}
