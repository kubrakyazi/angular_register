import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from "@angular/forms";

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
      email:["",Validators.required],
      city:["",Validators.required],
      password:["",Validators.required]
    })

   }

  ngOnInit(): void {
   this.checkLoginInfo()
  }
  

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
    }
    localStorage.setItem("LoginInfo",JSON.stringify(this.loginForm.value))
    if(JSON.parse(<string>localStorage.getItem("LoginInfo")).email==this.loginForm.value.email)
    {
      console.log("başarılı oldu")
    }
    else{
      console.log("başarısız")
    }
   
    
  }

  checkLoginInfo(){
    if(localStorage.getItem("LoginInfo"))
    {
      //this.loginForm<FormGroup>=JSON.parse(localStorage.getItem("LoginInfo",this.loginForm.value))
      console.log(localStorage.getItem("LoginInfo"));
     
    }
    else{
     // alert("")
    }
    
  }
  
}