import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './componets/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './componets/teacher/teacher.component';
import { SearchComponent } from './componets/search/search.component';
import { CommentariesComponent } from './componets/commentaries/commentaries.component';
import { AppRoutingModule, routingComponents } from './Router.config';
import { SliderComponent } from './componets/home/slider/slider.component';

import { NgxCarouselModule } from 'ngx-carousel';
import { PopularComponent } from './componets/home/popular/popular.component';
import { FooterComponent } from './componets/home/footer/footer.component';
import {GridTeachersComponent} from './componets/search/grid-teachers/grid-teachers.component';
import { ProfileTeacherComponent } from './componets/search/profile-teacher/profile-teacher.component'
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
    ProfileTeacherComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    NgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


