import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";

@Component({
  selector: 'app-form-add-user',
  templateUrl: './form-add-user.component.html',
  styleUrls: ['./form-add-user.component.css']
})
export class FormAddUserComponent implements OnInit {
  user: User;
  constructor() { }

  ngOnInit(): void {
    this.user =  new User();
  }
  save(){
    //traitement
  }

}
