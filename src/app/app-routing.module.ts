import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SongsComponent } from './songs/songs.component';
import { AuthGuard } from './auth/authguard';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [

  {path:'login' , component:LoginComponent},
  {path:'signup' , component:SignUpComponent},

  {path:'', canActivate:[AuthGuard], component:ListComponent , children:[
    {path:'navbar' , component:NavbarComponent},
    {path:'movies' , component:MoviesComponent},
    {path:'songs', component:SongsComponent},
    {path:'videos', component:SongsComponent},
    {path:'slider' , component:SliderComponent}

  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


