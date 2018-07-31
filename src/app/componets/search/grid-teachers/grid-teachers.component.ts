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
  selector: 'app-grid-teachers',
  templateUrl: './grid-teachers.component.html',
  styleUrls: ['./grid-teachers.component.css']
})
export class GridTeachersComponent implements OnInit {
  profesorBuscado ;
  id="";
  img='http://media.caferz.com/thumbnails/users/default-avatar.png';
  private serviceurl="http://10.9.102.146:2096/profeshor/";
  prueba:any;
  pictures 
  constructor(private route: ActivatedRoute,private http:HttpClient,private router: Router) {  }

   sub;
   getData (name:string):Observable<any>
   {

     var ordeJson = this.http.get('http://10.9.102.146:2096/profeshor/'+name).map(

          
       (res: Response) => res     
       
    
      )
       .catch(error => {
         return Observable.throw(error.json)
       });
 
 
     return ordeJson;
   }
  click(id,name,department){
    this.id=id;
    console.log(id)
    console.log(name)
    this.router.navigate(['/Subjects', this.id,name,department]);
  }

  ngOnInit() {
    
    this.sub = this.route.params.subscribe(params => {
      this.profesorBuscado = params['profesor']; 
    
      this.getData( this.profesorBuscado).subscribe(
      
        data=>{
          this.pictures=null;
         this.pictures= data.listaProfesores;          
         
        },
        err=>{
          console.log(err);
          
        }
        
      );
    })
  
    
     
  
  }



}
