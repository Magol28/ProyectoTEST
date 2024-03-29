import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
  
})
export class SliderComponent implements OnInit {
  imgags: string[];

  public carouselBannerItems: Array<any> = [];
  public carouselBanner: NgxCarousel;

  constructor() { }

  ngOnInit() {
    this.imgags = [
      'assets/Banner1.png',
      'assets/banner3.png',
      'assets/banner2.png',
    ];
    this.carouselBanner = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 4,
      speed: 500,
      interval: 1000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 20px;
            left: 0;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
              background: white;
              width: 10px;
          }
        `
      },
      load: 2,
      custom: 'banner',
      touch: true,
      loop: false,
      easing: 'cubic-bezier(0, 0, 0.2, 1)'
    };

    this.carouselBannerLoad();
  
  }

  public carouselBannerLoad() {
    const len = this.carouselBannerItems.length;
    if (len <= 3) {
      for (let i = len; i < 3; i++) {
        this.carouselBannerItems.push(
          this.imgags[i]
        );
      }
    }
  }
}
