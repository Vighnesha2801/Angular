import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  loginForm : any;
  hide = true;

  constructor(private router: Router) { 
    this.loginForm = new FormGroup(
      {
        // email: new FormControl('',[Validators.required, Validators.email,]),
        // password: new FormControl('',[Validators.required, Validators.minLength(8)])
        email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
          '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
        ),]),
        password: new FormControl('', [Validators.required,Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
        )])
      }
    );
  }




  ngOnInit(): void {
    if(localStorage.getItem('token')){
      localStorage.removeItem('token');
    }
  }


  onLogin(){
    
    const email = this.loginForm.controls['email'].value;
    const pwd = this.loginForm.controls['password'].value;
    if(email!= "vighnesha@gmail.com" || pwd!="Hello@28"){
      alert("Invalid Username and Password");
      return;
    }
    if(!this.loginForm.valid ){
      return;
    }
    
    localStorage.setItem('token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9");
    //this.loginForm.value.username=="vighnesha@gmail.com" ? localStorage.setItem('userType','employee'): localStorage.setItem('userType',this.loginForm.value);
    this.loginForm.reset();
    this.router.navigate(['/choice']);
    // this.router.navigate(['/home/employees']);
  }

}
// function ConfirmPasswordValidator(arg0: string, arg1: string) {
//   throw new Error('Function not implemented.');
// }

