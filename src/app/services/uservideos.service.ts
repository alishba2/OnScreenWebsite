import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UservideosService {

  constructor(private http: HttpClient) { }

  get_videos = "http://localhost:8000/videos";
  
  getVideos(){

    return this.http.get(this.get_videos);

  }

}
