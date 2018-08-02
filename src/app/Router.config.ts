
import { NgModule } from '@angular/core';
import { Routes, RouterModule,RouterOutlet} from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { TeacherComponent } from './componets/teacher/teacher.component';
import { SearchComponent } from './componets/search/search.component';
import { TeacherprofileComponent } from './componets/teacher/teacherprofile/teacherprofile.component';
import { CreateSComponent } from './componets/subjects/creates/creates.component';
import { ProfileTeacherComponent } from './componets/search/profile-teacher/profile-teacher.component';
import { CommentariesComponent } from './componets/commentaries/commentaries.component';
import { GridTeachersComponent } from './componets/search/grid-teachers/grid-teachers.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {
    path: 'Teacher',
    component: ProfileTeacherComponent,
  },
  {path:'Teacher/:profesor',component:GridTeachersComponent},
  {path:'Subjects/:id/:name/:department',component:TeacherprofileComponent},
  {path:'NewSubject/:id/:name/:department',component:CreateSComponent},
  { path: 'Comentaries/:id/:name/:department/:idma',   component: CommentariesComponent }, 
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:'**',redirectTo:"home"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,
                                  TeacherComponent]

                                  