import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userForm = new FormGroup({
    'email' : new FormControl('' , Validators.required),
    'password' : new FormControl('' , Validators.required),
    'verifPassword' : new FormControl('' , Validators.required)
  })

  change(){
    
  }

}
