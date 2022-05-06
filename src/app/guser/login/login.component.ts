import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SharedDataService} from "../../services/shared-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  msg: string;
  constructor(private data: SharedDataService, private router:Router, private f: FormBuilder) { }
  ngOnInit(): void {
    this.myForm= new FormGroup({
      'email': new FormControl('',[Validators.required,
        Validators.minLength(3)]),
      'password': new FormControl('', Validators.required),
      'address': new FormGroup({
        'street number': new FormControl()
      })
    })
  }


  checkUser(myForm: FormGroup){
    this.data.list.forEach(
      (user)=>
      {if(user.email===myForm.controls['email'].value &&
        user.password===myForm.controls['password'].value){
        this.router.navigate(['/'])
      }
      else {
        this.msg = 'please give a valid account'
      }
      }
    );
  }

}
