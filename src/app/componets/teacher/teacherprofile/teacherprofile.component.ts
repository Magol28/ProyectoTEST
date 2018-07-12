import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-teacherprofile',
  templateUrl: './teacherprofile.component.html',
  styleUrls: ['./teacherprofile.component.css']
})
export class TeacherprofileComponent implements OnInit {

  profesorBuscado ;

  img='https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg';
  private serviceurl="http://127.0.0.1:8000/";
  pictures 
  id

  constructor(private route: ActivatedRoute,private http:HttpClient,private router: Router) {  }

  private sub: any;
  getData (name:string):Observable<any>
  {

    var ordeJson = this.http.get('http://10.9.102.146:2096/profeshor/'+name+'/materias').map(

         
      (res: Response) => res     
      
   
     )
      .catch(error => {
        return Observable.throw(error.json)
      });


    return ordeJson;
  }
  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        this.id= params['id'];
      this.profesorBuscado = params['name']; // (+) converts string 'id' to a number
    
      console.log(params['id'])
      this.getData( this.profesorBuscado).subscribe(
      
        data=>{
         this.pictures= data.listaMaterias;          
         
        },
        err=>{
          console.log(err);
          
        }
        
      );
   });
  }
  click(){
    console.log(this.id)
    console.log(this.profesorBuscado)
    this.router.navigate(['/NewSubject', this.id,this.profesorBuscado]);
  }
  
}
