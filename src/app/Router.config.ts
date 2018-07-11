
import { NgModule } from '@angular/core';
import { Routes, RouterModule,RouterOutlet} from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { TeacherComponent } from './componets/teacher/teacher.component';
import { SearchComponent } from './componets/search/search.component';
import {CreateComponent} from './componets/teacher-crud/create/create.component';
import { AutenticationComponent } from './componets/autentication/autentication.component';
import { LoginComponent } from './componets/login/login.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Teacher/:profesor',   component: SearchComponent },
  { path: 'CreateT',   component: CreateComponent }  ,
  { path: 'Authentication',   component: AutenticationComponent },  
  { path: 'Login',   component: LoginComponent },
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:'**',redirectTo:"home"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,
                                  TeacherComponent]

                                  