import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { strings } from '@material/menu';
import { UserimagesService } from '../services/userimages.service';
import { UsermoviesService } from '../services/usermovies.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  right = faArrowRight;
  left = faArrowLeft;
  imagist: any;

  constructor(private router: Router, private Userimages: UserimagesService,
    private usermovies:UsermoviesService) { }


  ngOnInit(): void {
    this.getData()
  }

  getData() {
    return this.usermovies.getMovies().subscribe((res) => {
      this.imagist = res;
      console.log(res)
    })
  }

  change(id:string) {
   this.router.navigate([`showMovie/${id}`])
  }

  
}
