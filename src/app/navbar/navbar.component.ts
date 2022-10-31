import { Component, HostListener, OnInit,Input } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 search = faSearch;
 bell = faBell;
 Caret = faCaretDown;

  constructor() { }

  ngOnInit(): void {

  }
  @Input() name: string;
  header_change=false;
  @HostListener("document:scroll")

  scrollfunction(){

   if(document.body.scrollTop>0 || document.documentElement.scrollTop>0){
    this.header_change=true;
   }else{
    this.header_change=false;
   }
  }
  logOut(){

  }
}
