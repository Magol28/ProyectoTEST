import { Component, OnInit } from '@angular/core';

import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {


  imgags: string[];
 
  public carouselTileTwoItems: Array<any> = [];
  public carouselTileTwo: NgxCarousel;
  constructor() { }

  ngOnInit() {
    this.imgags = [
      'assets/bg.jpg',
      'assets/car.png',
      'assets/canberra.jpg',
      'assets/holi.jpg'
    ];


    this.carouselTileTwo = {
      grid: { xs: 1, sm: 3, md: 4, lg: 6, all: 250 },
      speed: 600,
      interval: 3000,
      point: {
        visible: true
      },
      load: 2,
      touch: true
    };

    this.carouselTileTwoLoad();
  }
  
  
  

  public carouselTileTwoLoad() {
    const len = this.carouselTileTwoItems.length;
    if (len <= 30) {
      for (let i = len; i < 10; i++) {
        this.carouselTileTwoItems.push(
          this.imgags[Math.floor(Math.random() * this.imgags.length)]
        );
      }
    }
  }
}


