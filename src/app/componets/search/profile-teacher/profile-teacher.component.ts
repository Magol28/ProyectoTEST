import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-profile-teacher',
  templateUrl: './profile-teacher.component.html',
  styleUrls: ['./profile-teacher.component.css']
})
export class ProfileTeacherComponent implements OnInit {
  profesorBuscado ;
  id="";
  img='http://media.caferz.com/thumbnails/users/default-avatar.png';
  private serviceurl="http://10.9.102.146:2096/profeshor/";
  prueba:any;
  pictures 
  constructor(private route: ActivatedRoute,private http:HttpClient,private router: Router) {  }

   sub;
   getData ():Observable<any>
   {

     var ordeJson = this.http.get('http://10.9.102.146:2096/profeshor').map(

          
       (res: Response) => res     
       
    
      )
       .catch(error => {
         return Observable.throw(error.json)
       });
 
 
     return ordeJson;
   }


  ngOnInit() {

  
      this.getData().subscribe(
      
        data=>{
         this.pictures= data.profesores.profesor;          
         console.log(this.pictures)
        },
        err=>{
          console.log(err);
          
        }
        
      );
     
  
  }
  click(id,name,departamento){
    this.id=id;
    console.log(id)
    console.log(name)
    this.router.navigate(['/Subjects', this.id,name,departamento]);
  }



}
