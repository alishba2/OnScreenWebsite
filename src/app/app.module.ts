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
import { ShowMovieComponent } from './show-movie/show-movie.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatMenuModule} from '@angular/material/menu';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AuthserviceService } from './services/auth.services';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    ShowVideoComponent,
    ShowMovieComponent,
    ShowVideoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MDBBootstrapModule.forRoot(),
    MatCarouselModule.forRoot(),
    NgbModule,
    FontAwesomeModule,
    MatMenuModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
