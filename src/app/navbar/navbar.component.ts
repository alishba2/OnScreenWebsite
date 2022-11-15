import { Component, HostListener, OnInit, Input } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { AuthserviceService } from '../services/auth.services';
import { userDetails } from 'src/userModels/userdetails';
import { UserDetailsService } from '../services/user-details.service';

export interface User {
  name: string;
}

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  search = faSearch;
  bell = faBell;
  Caret = faCaretDown;
  userName: any;

  constructor(
    private auth: AuthserviceService,
    private uData: UserDetailsService
  ) {
    // if (this.uData.getId()) {
    //   this.uData.getData(this.uData.getId()).subscribe((res:any) => {
    //     this.userName = res.name;
    //   });
    // }
  }

  ngOnInit(): void {}

  @Input() name: string;

  header_change = false;
  @HostListener('document:scroll')
  scrollfunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.header_change = true;
    } else {
      this.header_change = false;
    }
  }

  logOut() {
    this.auth.logOut();
  }
}
