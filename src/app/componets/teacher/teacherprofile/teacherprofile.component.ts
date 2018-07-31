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
  departamento;
  img='http://media.caferz.com/thumbnails/users/default-avatar.png';
  private serviceurl="http://127.0.0.1:8000/";
  pictures 
  id

  constructor(private route: ActivatedRoute,private http:HttpClient,private router: Router) {  }
 
  puntuation;
  cn= 'assets/neutralSi.png';
  cf= 'assets/felizSi.png';
  ct ='assets/tristeSi.png';
  img2 ;
  private sub: any;


  getPuntuation(id):Observable<any>{
 
    console.log("10.9.102.146:2096/analisis/profesor/"+id+"/evaluacion");
    var ordeJson = this.http.get("http://10.9.102.146:2096/analisis/profesor/"+id+"/evaluacion").map(

        
      (res: Response) =>{ res; console.log('hola');
       return res;
      }
   
     )
      .catch(error => {    
        console.log('hola2')
        return Observable.throw(error.json)
      });

      console.log('test')
    return ordeJson;
  }
  getData (name:string):Observable<any>
  {
    
    var ordeJson = this.http.get('http://10.9.102.146:2096/profeshor/'+name+'/materias').map(

         
      (res: Response) => res      
    
   
     )
      .catch(error => {
        
        return Observable.throw(error.json)
      });


      console.log(ordeJson)
    return ordeJson;
  }
  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        this.id= params['id'];
      this.profesorBuscado = params['name']; // (+) converts string 'id' to a number
        this.departamento=params['department'];

      this.getData( this.profesorBuscado).subscribe(
      
        data=>{
         this.pictures= data.listaMaterias;          
          this.getPuntuation(this.id).subscribe(dato=>{
          this.setpuntuation(dato.result.promedio_comentario);
        
        }
          
          );
        }
       
        
      )
   });
  }
  comentarios(id,name,department){
    console.log(id);
    console.log(name);
    console.log(department);
    console.log(this.id);
    
    this.router.navigate(['/Comentaries', this.id,this.profesorBuscado,name,id]);
  }
  click(){
    this.router.navigate(['/NewSubject',this.id,this.departamento]);
  }
  

  setpuntuation(point)
  {
    console.log(point)
    if(point!=null){
      
     if(point>=0){
      this.img2 = 'https://i.pinimg.com/originals/a3/b8/48/a3b8486b7f977a0b446a5b248ea16fa0.png';
     }else{
      this.img2 = 'https://es.seaicons.com/wp-content/uploads/2016/09/Emotes-face-sad-icon.png';
     }
    }else{
      this.img2 = 'https://images.emojiterra.com/google/android-oreo/512px/1f636.png';
    }
    
  }
}
