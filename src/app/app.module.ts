import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
 import { HttpModule } from '@angular/http';
import { HttpClientModule  } from '@angular/common/http';

import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './componets/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './componets/teacher/teacher.component';
import { SearchComponent } from './componets/search/search.component';
import { CommentariesComponent } from './componets/commentaries/commentaries.component';
import { AppRoutingModule, routingComponents } from './Router.config';
import { SliderComponent } from './componets/home/slider/slider.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCarouselModule } from 'ngx-carousel';
import { PopularComponent } from './componets/home/popular/popular.component';
import { FooterComponent } from './componets/home/footer/footer.component';
import {GridTeachersComponent} from './componets/search/grid-teachers/grid-teachers.component';
import { ProfileTeacherComponent } from './componets/search/profile-teacher/profile-teacher.component';
import { TeacherprofileComponent } from './componets/teacher/teacherprofile/teacherprofile.component';


import { SubjectsComponent } from './componets/subjects/subjects.component';

import { CreateSComponent } from './componets/Subjects/creates/creates.component';
import {CalendarModule} from "angular-calendar";
import { ServiceWorkerModule } from '@angular/service-worker';
import {environment} from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    routingComponents,
    TeacherComponent,
    SearchComponent,
    CommentariesComponent,
    SliderComponent,
    PopularComponent,
    FooterComponent,
    GridTeachersComponent,
    ProfileTeacherComponent,
    TeacherprofileComponent,
    SubjectsComponent,
    CreateSComponent
  ],
  imports: [
    
    BrowserModule,HttpClientModule,HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    NgxCarouselModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
  
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    CalendarModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


