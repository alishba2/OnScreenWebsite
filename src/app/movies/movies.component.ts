import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private router: Router) { }
  right = faArrowRight;
  left = faArrowLeft;
  ngOnInit(): void {
  }

  change(){
   this.router.navigateByUrl('/showVideo');
  }
}
