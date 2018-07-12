import { Component, OnInit } from '@angular/core';
import {Teacher} from '../../../Class/Teacher';

import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import {  Headers,  RequestOptions, RequestMethod } from '@angular/http';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn  } from '@angular/forms';
const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type':  'application/json'
 })
};
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

 

  i="";
  values = '';
  Nombre:string;
  Departamento:string;
  checks=[];
  selectedFile: File;
  /*orders = [
    { id: 1, name: 'Programacion I' },
    { id: 2, name: 'Programacion II' },
    { id: 3, name: 'Programacion Avanzada' },
    { id: 4, name: 'Proyecto Integrador I' },
    { id: 5, name: 'Cloud' },
    { id: 6, name: 'Redes I' },
    { id: 7, name: 'Redes II' },
    { id: 8, name: 'Redes III' },
    { id: 9, name: 'Base de datos I' },
    { id: 10, name: 'Base de datos II' },
    { id: 11, name: 'Fundamentos de programación' },
    { id: 12, name: 'Inteligencia Artificial I' }
  ];*/
  constructor(private route: ActivatedRoute,private http:HttpClient,private router: Router) { 
   /* const controls = this.orders.map(c => new FormControl(false));
    controls[0].setValue(true);
   
    this.form = this.formBuilder.group({
      orders: new FormArray(controls, minSelectedCheckboxes(1))
    });*/
  }

  ngOnInit() {
  
   /*let  count=this.orders.length;
   
    for(var i=0;i<count;i++){
      if(i==0){
        this.checks.push(true);
      }else{
        this.checks.push(false);
    }
   console.log('h');
  
 }*/
    
  }
  submit() {
   /*const selectedOrderIds = this.form.value.orders
      .map((v, i) => v ? this.orders[i].id : null)
      .filter(v => v !== null);

    console.log(selectedOrderIds);*/
  }
  name(event: any) { 
    this.Nombre = event.target.value ;
  }
  department(event: any) { 
    this.Departamento = event.target.value ;
  }
 /* subjects(event,i) { 

    this.checks[i]=!this.checks[i];
  }*/
  onKey(event: any) { 
   
  
    var obj= new Teacher();
    obj.nombre=this.Nombre;
    obj.departamento=this.Departamento;
    
    var  message= JSON.stringify(obj);
  //  console.log(message)
    
    this.postData(message).subscribe(
      
      data=>{
        
     //   var id= data.result.profesor._id;
    //   this.onUpload(id);          //this.muestraErr=false;
        
    this.router.navigate(['/Teacher']);
      },
      err=>{
        console.log(err);
        
      }
    );
    
  }
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
  onUpload(id) {
    const uploadData = new FormData();
    uploadData.append('profesor', this.selectedFile, this.selectedFile.name);
    uploadData.append('Content-Type', 'multipart/form-data;');
    this.http.post('my-backend.com/file-upload', uploadData, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
        console.log(event); // handle event here
      });
  }
  postData (data:string):Observable<any>
  {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  const options = new RequestOptions({ headers: headers });
    console.log(data);
    var ordeJson = this.http.post('http://10.9.102.146:2096/profeshor/',data,{ headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).map(

         
      (res: Response) => console.log(res)     
      
   
     )
      .catch(error => {
        return Observable.throw(error.json)
      });


    return ordeJson;
  }
}
/*function minSelectedCheckboxes(min = 1) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      .map(control => control.value)
      .reduce((prev, next) => next ? prev + next : prev, 0);

    return totalSelected >= min ? null : { required: true };
  };

  return validator;
}*/