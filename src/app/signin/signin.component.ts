import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginFormSignIn:FormGroup;

  constructor(private formBuilder:FormBuilder) {
    
    this.loginFormSignIn=this.formBuilder.group({
      passwordS:["",Validators.required],
      emailS:["",Validators.required],
    })

   }

  ngOnInit(): void {
  
  }

  loginSignin(){
    console.log(this.loginFormSignIn.value)
    if(localStorage.getItem("LoginInfo"))
    {
      if(JSON.parse(<string>localStorage.getItem("LoginInfo")).email==this.loginFormSignIn.value.emailS)
      {
        console.log("farklı bir mail adresi kullanınız.")
      }
    }
  }
  
}
