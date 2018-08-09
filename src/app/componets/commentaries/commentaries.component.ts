import { Component, OnInit } from '@angular/core';
import {Comentarie} from '../../Class/Comentarie'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import {  Headers,  RequestOptions, RequestMethod } from '@angular/http';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn  } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Validators} from '@angular/forms';
import 'rxjs/add/operator/map';

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-commentaries',
  templateUrl: './commentaries.component.html',
  styleUrls: ['./commentaries.component.css']
})

export class CommentariesComponent implements OnInit {
  form = new FormGroup({
    messageinput: new FormControl('', Validators.minLength(4)),
  });
  profesorBuscado ;
  departamento;
  img='http://media.caferz.com/thumbnails/users/default-avatar.png';
  private serviceurl="http://127.0.0.1:8000/";
  pictures 
  id
  idma

  constructor(private route: ActivatedRoute,private http:HttpClient,private router: Router) {  }
 

  img2 = 'assets/neutralSi.png';

  private sub: any;
  text="";
  

  data;
  ngOnInit() {
    
    this.sub = this.route.params.subscribe(params => {
      this.id= params['id'];
      this.idma=params['idma'];
    this.profesorBuscado = params['name']; // (+) converts string 'id' to a number
      this.departamento=params['department'];
      this.getPuntuation(this.id,this.idma).subscribe(
        
        data=>{
          this.setpuntuation(data.result.promedio_comentario)
         
        }
     
      );
    
 });
  this.getComment().subscribe(
    data=>{
      this.data=data.result.comentarios;
    }
  )
  }
  getPuntuation(id,idm):Observable<any>{
 
    var ordeJson = this.http.get("http://10.9.102.146:2096/analisis/profesor/"+id+"/materias/"+idm+"/evaluacion").map(

         
      (res: Response) =>{ res; 
        return res;
        
        
      }
   
     )
      .catch(error => {    
        return Observable.throw(error.json)
      });

      ordeJson.subscribe(

        (data)=>{
          console.log( data.result.promedio_comentario);
        }
      ),err=>{
        console.log(err);
        
      }
    return ordeJson;
  }
  postData (data:string):Observable<any>
  {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  const options = new RequestOptions({ headers: headers });
    var ordeJson = this.http.post('http://10.9.102.146:2096/profeshor/'+this.id+'/materias/'+this.idma+'/comentarios',data,{ headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).map(

         
      (res: Response) => console.log(res)     
      
   
     )
      .catch(error => {
        return Observable.throw(error.json)
      });


    return ordeJson;
  }
  getComment():Observable<any>{
    var ordeJson = this.http.get('http://10.9.102.146:2096/profeshor/'+this.id+'/materias/'+this.idma+'/comentarios').map(

         
      (res: Response) => res     
      
   
     )
      .catch(error => {
        return Observable.throw(error.json)
      });


    return ordeJson;

  }
  onSubmit():void{
    var uname = new String(this.form.value.messageinput) 
    let flat: boolean =(uname.length==0)
if(!flat){
  
   var obj= new Comentarie();
    obj.comentario=this.form.value.messageinput;
    var date = new Date();
    
    obj.fecha=date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay()+"  "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+"";

    obj.user='user1';

    var  message= JSON.stringify(obj);
    this.postData(message).subscribe(
      data=>{
        this.getComment().subscribe(
          data=>{
            this.data=data.result.comentarios;
            this.getPuntuation(this.id,this.idma).subscribe(
        
              data=>{
                this.setpuntuation(data.result.promedio_comentario)
                this.form.setValue({messageinput: ''});;
              }
           
            );
          }
        )
        
      }
    )
  }
  else{
    alert('No esta permitido cometarios vacios')
  }
  }
  setpuntuation(point)
  {
 
    
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
