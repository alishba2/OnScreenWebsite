import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UservideosService {

  constructor(private http: HttpClient) { }

  get_videos = "http://localhost:8000/getVideos";
  get_video = "http://localhost:8000/getVideo/";
  
  getVideos(){
    return this.http.get(this.get_videos);
  }

  getVideo(id:string){
    return this.http.get(this.get_video + id);
  }

  
}
