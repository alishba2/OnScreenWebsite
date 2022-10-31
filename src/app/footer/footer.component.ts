import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  
  linkedinUrl: string = 'https://www.linkedin.com/feed/';
  facebookUrl:string = 'https://www.facebook.com/login/';
  googleUrl:string = 'https://www.google.com/';
  twitterUrl:string = 'https://twitter.com/i/flow/login';

  ngOnInit(): void {
  }

}
