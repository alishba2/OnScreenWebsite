import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsermoviesService } from '../services/usermovies.service';
import { map } from 'rxjs';

@Component({
  selector: 'show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {
  mov:any
  constructor(private route: ActivatedRoute,
    private userMovies:UsermoviesService) { }

  ngOnInit(): void {
    this.route.params.pipe(map((url:any)=> url.id)).subscribe((id) => {
      this.getData(id);
    });
  }

  getData(id:string){
    return this.userMovies.getMoviesList(id).subscribe((res)=>{
      console.log(res);
      this.mov = res;
    })
  } 
}
