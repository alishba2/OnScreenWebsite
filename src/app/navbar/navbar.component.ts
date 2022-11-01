import { Component, HostListener, OnInit,Input } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface User {
  name: string;
}

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 search = faSearch;
 bell = faBell;
 Caret = faCaretDown;
 
//  myControl = new FormControl<string | User>('');
//   options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
//   filteredOptions: Observable<User[]>;
 
  constructor() { }

  ngOnInit(): void {
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => {
    //     const name = typeof value === 'string' ? value : value?.name;
    //     return name ? this._filter(name as string) : this.options.slice();
    //   }),
    // );
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
  logOut(){}
  
  // displayFn(user: User): string {
  //   return user && user.name ? user.name : '';
  // }

  // private _filter(name: string): User[] {
  //   const filterValue = name.toLowerCase();

  //   return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  // }
}

