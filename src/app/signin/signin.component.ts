import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginFormSignIn:FormGroup;

  constructor(private formBuilder:FormBuilder,private router: Router) {
    
    this.loginFormSignIn=this.formBuilder.group({
      passwordS:["",Validators.required],
      emailS:["", [
        Validators.required, 
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    })

   }

  ngOnInit(): void {
  
  }

  submitted:boolean=false;
  loginSignin(){
    console.log(this.loginFormSignIn.value)
    if(localStorage.getItem("LoginInfo"))
    {
      if(JSON.parse(<string>localStorage.getItem("LoginInfo")).email==this.loginFormSignIn.value.emailS && JSON.parse(<string>localStorage.getItem("LoginInfo")).password==this.loginFormSignIn.value.passwordS)
      {
        
        this.router.navigate(['./home']);
        console.log("Başarılı giriş yaptınız.")
        
      }
      else{
        console.log("Kullanıcı şifre hatalı")
        this.submitted=true;
      }
    }
  }
  
}
