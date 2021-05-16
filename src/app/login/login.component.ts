import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder, PatternValidator } from "@angular/forms";
//import{NgForm} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private router: Router) {
    
    this.loginForm=this.formBuilder.group({
      firstName:["",[
        Validators.required,
        Validators.pattern("[a-zA-Z ]*")]],
      lastName:["",[
        Validators.required,
        Validators.pattern("[a-zA-Z ]*")]],
      email:["", [
        Validators.required, 
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      city:["",Validators.required],
      password:["",Validators.required]
    })

   }

   /*
   submitForm(form:NgForm){
     console.log(form)
    this.formSubmitted=true;
   }
   formSubmitted:boolean=false;
   /*
   productForm= new FormGroup({
    firstName:new FormControl("",Validators.required),
    lastName:new FormControl("",Validators.required),
    email:new FormControl(["", [
      Validators.required, 
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]),
    city:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required)
   })
*/
  ngOnInit(): void {
   this.checkBeforeSignUp()
  }
  /*
 get name(){
   return this.productForm.get(firstName);
 }
 */
  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      localStorage.setItem("LoginInfo",JSON.stringify(this.loginForm.value))

      if(JSON.parse(<string>localStorage.getItem("LoginInfo")).email==this.loginForm.value.email){
        console.log("daha önce bu mail adresi ile giriş yaptınız. yaptınız");
      }
    //}
    this.router.navigate(['./home']);
  }
  }
  checkBeforeSignUp(){
    if(localStorage.getItem("LoginInfo"))
    {
      console.log("Daha önce giriş yaptınız");
    }
    else{
    console.log("Üye olmak için doldurunuz")
    }
    
  }

 
  
}