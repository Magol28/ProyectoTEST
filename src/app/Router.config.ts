
import { NgModule } from '@angular/core';
import { Routes, RouterModule,RouterOutlet} from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { TeacherComponent } from './componets/teacher/teacher.component';
import { SearchComponent } from './componets/search/search.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Teacher',   component: SearchComponent },
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

                                  