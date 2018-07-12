
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
  selector: 'app-create-s',
  templateUrl: './create-s.component.html',
  styleUrls: ['./create-s.component.css']
})
export class CreateSComponent implements OnInit {

  profesorBuscado
  id
  constructor(private route: ActivatedRoute,private http:HttpClient,private router: Router) { }
  Nombre:string;
  sub
  Departamento:string;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.profesorBuscado = params['name'];
    this.id= params['id']
   })
  }
  name(event: any) { 
    this.Nombre= event.target.value ;
  }
  department(event: any) { 
    this.Departamento = event.target.value ;
  }
  onKey(event: any) { 
   
  
    var obj= new Teacher();
    obj.nombre=this.Nombre;
    obj.departamento=this.Departamento;
    
    var  message= JSON.stringify(obj);
    console.log(message)
  console.log(this.id)
  console.log(this.profesorBuscado)  
    this.postData(message,this.id).subscribe(
      
      data=>{
        
        this.router.navigate(['/Subjects',this.id,this.profesorBuscado]);
    
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
    var ordeJson = this.http.post('http://10.9.102.146:2096/profeshor/'+id+"/materias",data,{ headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).map(

         
      (res: Response) => console.log(res)     
      
   
     )
      .catch(error => {
        return Observable.throw(error.json)
      });


    return ordeJson;
  }
}
