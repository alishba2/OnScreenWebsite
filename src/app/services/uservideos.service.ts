import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UservideosService {

  constructor(private http: HttpClient) { }

  getVideos(){

    return this.http.get("http://localhost:8000/getVideos");

  }

}
