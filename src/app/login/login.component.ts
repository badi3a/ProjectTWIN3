import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  constructor() { }
  ngOnInit(): void {
    this.myForm= new FormGroup({
      'email': new FormControl('',[Validators.required,
        Validators.minLength(3)]),
      'password': new FormControl('', Validators.required)
    })
  }

}
