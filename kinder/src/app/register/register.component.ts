import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userForm = new FormGroup({
    'nom' : new FormControl('' , Validators.required),
    'prenom' : new FormControl('' , Validators.required),
    'email' : new FormControl('' , Validators.required),
    'password' : new FormControl('' , Validators.required),
    'verifPassword' : new FormControl('' , Validators.required),
    'gender' : new FormControl('' , Validators.required),
    'date' : new FormControl('' , Validators.required),
    'level' : new FormControl('' , Validators.required),
    'tel' : new FormControl('' , Validators.required),
    'addresse' : new FormControl('' , Validators.required),
    'code' : new FormControl('' , Validators.required)
})
submitUser(){
  if(this.userForm.valid){

  }
  else
  {
    alert('something went wrong')

  }
}

resetForm(){
  this.userForm.reset()
}

}
