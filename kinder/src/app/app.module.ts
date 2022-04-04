import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { Router } from 'express';
import { ProgrammesComponent } from './programmes/programmes.component';
import { EmploisComponent } from './emplois/emplois.component';
import { LoisirComponent } from './loisir/loisir.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { registerLocaleData } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProgrammesComponent,
    EmploisComponent,
    LoisirComponent,
    EnseignantsComponent,
    RegisterComponent,
    LoginComponent,
    ForgetComponent 
  ],
  imports: [
    RouterModule.forRoot([
      {path:'' , component : HomeComponent},
      {path:'programmes' , component:ProgrammesComponent},
      {path : 'emplois' , component:EmploisComponent} , 
      {path : 'loisir' , component:LoisirComponent},
      {path : 'enseignants' , component:EnseignantsComponent},
      {path : 'register' , component:RegisterComponent},
      {path : 'login' , component:LoginComponent} , 
      {path : 'forget' , component:ForgetComponent} ,
      {path: '**' , redirectTo:'' , pathMatch: 'full'}


    ]),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
