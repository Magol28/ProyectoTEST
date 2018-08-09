import { Component, OnInit } from '@angular/core';

import { NgxCarousel } from 'ngx-carousel';
import { Router } from '@angular/router';
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {


  imgags: string[];
 
  public carouselTileTwoItems: Array<any> = [];
  public carouselTileTwo: NgxCarousel;
  constructor(private router: Router) { }

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
  
  names =['Diego Marcillo ','Geovanni Ninahualpa','Germán Ñacato','Mario Ron','Klever Aguilar','Mauricio Campaña','Gilma Toaza']
  
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

  click(event){
    this.router.navigate(['/Teacher', event]);
  }
}


