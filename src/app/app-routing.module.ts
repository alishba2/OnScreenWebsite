import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

import { NavbarComponent } from './navbar/navbar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SongsComponent } from './songs/songs.component';
import { AuthGuard } from './auth/authguard';
import { SliderComponent } from './slider/slider.component';
import { MoviesComponent } from './movies/movies.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [

  {path:'login' , component:LoginComponent},
  {path:'signup' , component:SignUpComponent},


  {path:'', component:ListComponent , children:[
    {path:'navbar' , component:NavbarComponent},
    {path:'songs', component:SongsComponent},
    {path:'videos', component:SongsComponent},
    {path:'slider' , component:SliderComponent},
    {path:'movies', component:MoviesComponent},
    {path:'footer', component:FooterComponent}



  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


