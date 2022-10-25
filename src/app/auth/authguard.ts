import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { AuthserviceService } from '../services/auth.services';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    constructor(public auth: AuthserviceService, public router: Router) {}
    canActivate() {

    if(this.auth.isAuthenticated()){
      return true
    }

    this.router.navigate(['login'])
    return false
    }

}
