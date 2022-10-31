import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserimagesService {

  constructor(private http: HttpClient) { }
  
  url = environment.BASE_URL;
  get_data = "http://localhost:8000";

  getData() {
    return this.http.get(this.url);
  }
}
