import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsermoviesService {

  constructor(private http: HttpClient) { }

  get_movies = "http://localhost:8000/movies";

  getMovies(){
    return this.http.get(this.get_movies);
  }
}
