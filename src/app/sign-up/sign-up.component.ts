import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userDetails } from 'src/userModels/userdetails';
import { UserDetailsService } from '../services/user-details.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private myformBuilder: FormBuilder,
    private uDetail: UserDetailsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  userdetails: FormGroup = this.myformBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  SaveData() {
    this.uDetail.postData(this.userdetails.value).subscribe(
      (res) => {
        this.router.navigateByUrl('/login');
        console.log('res', res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
