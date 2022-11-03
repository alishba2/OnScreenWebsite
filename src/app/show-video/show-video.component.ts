import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { UservideosService } from '../services/uservideos.service';

@Component({
  selector: 'show-video',
  templateUrl: './show-video.component.html',
  styleUrls: ['./show-video.component.css']
})
export class ShowVideoComponent implements OnInit {
  constructor(private userVideo:UservideosService, private route: ActivatedRoute) {}
  vid:any
  
  ngOnInit(): void {
    
    this.route.params.pipe(map((url:any)=> url.id)).subscribe((id) => {
      this.getData(id);
    });
  }

  getData(id:string){
    return this.userVideo.getVideo(id).subscribe((res)=>{
      console.log(res);
      this.vid = res;
    })
  } 

}
