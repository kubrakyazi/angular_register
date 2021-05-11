import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder, PatternValidator } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder) {
    
    this.loginForm=this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["", [
        Validators.required, 
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      city:["",Validators.required],
      password:["",Validators.required]
    })

   }

  ngOnInit(): void {
   this.checkBeforeSignUp()
  }
  

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      localStorage.setItem("LoginInfo",JSON.stringify(this.loginForm.value))
    }
  
  }

  checkBeforeSignUp(){
    if(localStorage.getItem("LoginInfo"))
    {
      console.log("daha önce giriş yaptınız");
    }
    else{
    console.log("üye olmak için doldurunuz")
    }
    
  }
  
}