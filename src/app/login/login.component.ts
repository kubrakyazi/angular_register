import { ThrowStmt } from '@angular/compiler';

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
      email:["",Validators.required],
      password:["",Validators.required]
    })

   }

  ngOnInit(): void {
   
  }

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
    }
  }
  
}
