import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent implements OnInit {
  list: User[];
  constructor() { }

  ngOnInit(): void {
     this.list= [
       { idUser: 12,
         firstName: "Ahmed",
         lastName:"ben Foulen",
         accountCategory:"Admin",
         birthDate: "10-10-1988",
         email: "ahmed@gmail.com",
         password:"test",
       profession:"Teacher",
         picture:"https://bootdey.com/img/Content/avatar/avatar5.png\""},

       {idUser: 13,
         firstName: "Amina",
         lastName:"ben Foulen",
         accountCategory:"Customer",
         birthDate: "10-10-1988",
         email: "ahmed@gmail.com",
         password:"test",
         profession:"Teacher",
         picture:"https://bootdey.com/img/Content/avatar/avatar5.png\""}
     ]
  }

}
