import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { UserimagesService } from '../services/userimages.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  right = faArrowRight;
  left = faArrowLeft;
  imagist: any;

  constructor(private router: Router, private Userimages: UserimagesService) { }


  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.Userimages.getData().subscribe((res) => {
      this.imagist = res;
      console.log(res)
    })
  }

  change() {
    this.router.navigateByUrl('/showVideo');
  }

  
}
