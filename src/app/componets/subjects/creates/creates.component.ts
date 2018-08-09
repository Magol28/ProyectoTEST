
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Teacher} from '../../../Class/Teacher';

import { HttpHeaders } from '@angular/common/http';
import {  Headers,  RequestOptions, RequestMethod } from '@angular/http';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn  } from '@angular/forms';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-creates',
  templateUrl: './creates.component.html',
  styleUrls: ['./creates.component.css']
})
export class CreateSComponent implements OnInit {
  profesorBuscado ;
  departamento;
  id="";
  img='http://www.uasb.edu.ec/UserFiles/385/Image/cuaderno.png';
  private serviceurl="http://10.9.102.146:2096/profeshor/";
  prueba:any;
  pictures 
  constructor(private route: ActivatedRoute,private http:HttpClient,private router: Router) {  }

   sub;
   getData ():Observable<any>
   {

     var ordeJson = this.http.get('http://10.9.102.146:2096/materias').map(

          
       (res: Response) => res     
       
    
      )
       .catch(error => {
         return Observable.throw(error.json)
       });
 
 
     return ordeJson;
   }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(this.profesorBuscado = params['name']);
    this.profesorBuscado = params['name'];
    this.departamento=params['department'];
    this.id= params['id'];
    this.getData().subscribe(
      
      data=>{
       
       
        this.pictures= data.materias.materia;          
       
      },
      err=>{
        console.log(err);
        
      }
      
    );
   })
  
     
     
  
  }
  click(id,name){

    var obj= new Teacher();
    obj.nombre=name;
    obj.departamento=id;
    
    var  message= JSON.stringify(obj);

    this.postData(message,this.id).subscribe(
      
      data=>{
        
        this.router.navigate(['/Subjects',this.id,this.profesorBuscado ,id]);
    
      },
      err=>{
        console.log(err);
        
      }
    );
    
  }
  postData (data:string,id):Observable<any>
  {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  const options = new RequestOptions({ headers: headers });
    console.log(data);
    console.log(id);
    var ordeJson = this.http.post('http://10.9.102.146:2096/profeshor/'+id+"/materias",data,{ headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).map(

         
      (res: Response) => console.log(res)     
      
   
     )
      .catch(error => {
        return Observable.throw(error.json)
      });


    return ordeJson;
  }


  getDatafilter (name:string, subject:string):Observable<any>
  {
    
    var ordeJson = this.http.get('http://10.9.102.146:2096/materias/'+subject).map(

         
      (res: Response) => res      
    
   
     )
      .catch(error => {
        
        return Observable.throw(error.json)
      });


    return ordeJson;
  }
  onKey(event: any) { 
    let subject=event.target.value;
    console.log(subject)
    this.getDatafilter( this.profesorBuscado,subject).subscribe(
      
      data=>{
       this.pictures= data.listaMaterias;          
      
      }
        
        );
      }
}
