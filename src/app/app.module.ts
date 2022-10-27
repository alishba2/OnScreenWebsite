import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
// import { MoviesComponent } from './movies/movies.component';
import { VideosComponent } from './videos/videos.component';
import { SongsComponent } from './songs/songs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SliderComponent } from './slider/slider.component';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatCarouselModule } from 'ng-mat-carousel';
import { NextDirective } from './directive/next.directive';
import { PrevDirective } from './directive/prev.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MoviesComponent } from './movies/movies.component';
import { FooterComponent } from './footer/footer.component';
import { ShowVideoComponent } from './show-video/show-video.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    VideosComponent,
    SongsComponent,
    NavbarComponent,
    ListComponent,
    SliderComponent,
    PrevDirective,
    NextDirective,
    MoviesComponent,
    FooterComponent,
    ShowVideoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MDBBootstrapModule.forRoot(),
    MatCarouselModule.forRoot(),
    // FormsModule,


    NgbModule


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
