import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-teacherprofile',
  templateUrl: './teacherprofile.component.html',
  styleUrls: ['./teacherprofile.component.css']
})
export class TeacherprofileComponent implements OnInit {

  profesorBuscado ;

  private serviceurl="http://127.0.0.1:8000/";
  pictures :any= [
    {
      id: 1,
      title: 'A natural view',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg'
    },
    {
      id: 2,
      title: 'Newspaper',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg'
    },
    {
      id: 3,
      title: 'Favourite pizza',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg'
    },
    {
      id: 4,
      title: 'Abstract design',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg'
    },
    {
      id: 5,
      title: 'Tech',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/NO9CN3QYR3.jpg'
    },
    {
      id: 6,
      title: 'Nightlife',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg'
    },
];
  constructor(private route: ActivatedRoute,private http:HttpClient) {  }

  private sub: any;
  getData(){
   
    return this.http.get(this.serviceurl).subscribe(data => {
     // console.log(data);
    });
  
}
  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
      this.profesorBuscado = params['profesor']; // (+) converts string 'id' to a number
     // this.pictures=this.getData();
      // In a real app: dispatch action to load the details here.
   });
  }
}
