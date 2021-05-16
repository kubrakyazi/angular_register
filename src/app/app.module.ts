import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { HomePageComponent } from './home-page/home-page.component';
//import{NgForm} from "@angular/forms";

const appRoutes: Routes =[
{path: 'signin', component: SigninComponent},
{path: '', component:LoginComponent},
{path: 'home',component:HomePageComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    HomePageComponent,
   // NgForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
