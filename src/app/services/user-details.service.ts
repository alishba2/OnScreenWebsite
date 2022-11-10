import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userDetails } from 'src/userModels/userdetails';
@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:8000/userdetail";

  getId() {
    return localStorage.getItem('id')
  }
  
  postData(data: userDetails) {
    return this.http.post(this.url +'/signUp',data);
  }

  loginUser(data: userDetails){
    return this.http.post(this.url+'/signIn',data);
  }

}
