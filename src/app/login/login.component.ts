import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userDetails } from 'src/userModels/userdetails';
import { UserDetailsService } from '../services/user-details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myformbuilder:FormBuilder,
    private router:Router,
    private uDetails:UserDetailsService) { }

  ngOnInit(): void {
  }
 
  loginForm:FormGroup = this.myformbuilder.group({
    email:['',Validators.required],
    password:['',Validators.required]

  })

  onSubmit(){
    this.uDetails.loginUser(this.loginForm.value).subscribe((res:any)=>{
      if(res.message === "login successfully")
      {
        this.router.navigateByUrl('/list')
      }
      else
      {
        this.router.navigateByUrl('/list')
        // alert(res.message)
      }
     },
    error=>{
      console.log(error);
     
    })
  }
}
