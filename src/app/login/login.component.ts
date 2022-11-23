import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    this.uDetails.loginUser(this.loginForm.value).subscribe((res : any)=>{
      if(res.message === "login successfully")this.router.navigateByUrl('/list');
      console.log(res);

      localStorage.setItem('id', res.userDetails._id);
      localStorage.setItem('token', res.userDetails.tokens[res.userDetails.tokens.length-1].token);

      
     },
     error=>{
      console.log(error);
     })
  }
}








// if(res.message === "login successfully")
//       {
//         this.router.navigateByUrl('/list');
//         // localStorage.setItem('id', res.uDetails._id);
//         // localStorage.setItem('token', res.uDetails.tokens[res.uDetails.tokens.length-1].token);
//       }
//       else
//       {
//         this.router.navigateByUrl('/list')
//       }
//      },
//     error=>{
//       console.log(error);
     
//     })