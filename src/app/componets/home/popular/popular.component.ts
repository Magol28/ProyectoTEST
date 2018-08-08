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
      'assets/p2.png'
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
  
  names =['Feranano Solis','Kleber Aguilar','Tatiana Noboa','Edison Lascano','Tataina Gualotuña','Mónica Gomez','Joe Garcia']

  public carouselTileTwoLoad() {
    const len = this.carouselTileTwoItems.length;
    if (len <= 30) {
      for (let i = len; i < 7; i++) {
        this.carouselTileTwoItems.push(
          this.imgags[0]
     
        );
      }
    }
  }
}


