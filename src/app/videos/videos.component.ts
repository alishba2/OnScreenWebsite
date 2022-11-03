import { Component, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { UservideosService } from '../services/uservideos.service';
import { ShowVideoComponent } from '../show-video/show-video.component';


@Component({
  selector: 'videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
 
  vidlist:any;
  constructor(private userVideo:UservideosService,
              private router: Router,) { }

  right = faArrowRight;
  left = faArrowLeft;


  

  ngOnInit(): void {
    this.getData();
   
  }

  getData(){
    return this.userVideo.getVideos().subscribe((res)=>{
    this.vidlist=res;
    console.log(res)
    })
  }

  change(id:string){
    this.router.navigate([`show-video/${id}`]);
  }

}
